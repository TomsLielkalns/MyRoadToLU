import { GoogleMap, Marker, Polyline, useJsApiLoader } from "@react-google-maps/api";
import { useCallback, useEffect, useRef, useState } from "react";
import { dormPos } from "./markerPositions";
import { bus } from "./markerImages";
import { ImageMarkers } from "./ImageMarkers";
import customStyle from "./customStyle.json";

const containerStyle = {
  width: "100vw",
  height: "100vh",
};

export type LatLng = {
  lat: number;
  lng: number;
};

const busPath: LatLng[] = [
  { lat: 56.9707547, lng: 24.1778137 },
  { lat: 56.97192509472152, lng: 24.170408128497492 },
  { lat: 56.972318, lng: 24.169161 },
  { lat: 56.973635, lng: 24.16781 },
  {
    lat: 56.969475972745556,
    lng: 24.154430428468388,
  },
  { lat: 56.966251, lng: 24.144763 },
  { lat: 56.962274, lng: 24.135035 },

  { lat: 56.96106105039939, lng: 24.132669084875268 },
  { lat: 56.96011635637041, lng: 24.130097097507655 },
  { lat: 56.958852, lng: 24.12576 },
  { lat: 56.954422, lng: 24.117707 },
  { lat: 56.951946, lng: 24.113688 },
  { lat: 56.950936, lng: 24.115026 },
];

const center = {
  lat: 56.9641074,
  lng: 24.1401608,
};

type SliderProps = {
  value: number;
  onChange: (e: any) => void;
};

const Slider = ({ value, onChange }: SliderProps) => {
  return (
    <div style={{ position: "fixed", zIndex: 1, left: 0, right: 0, bottom: 0 }}>
      <div className="slidecontainer">
        <input
          type="range"
          min="1"
          max="999"
          value={value}
          className="slider"
          id="myRange"
          onChange={onChange}
        />
      </div>
    </div>
  );
};

type MapComponentProps = {
  isDark: boolean;
};
const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(value, max));

const calculateSegmentProportions = (points: any) => {
  const distances = [];
  let totalDistance = 0;

  // Calculate distances between consecutive points
  for (let i = 0; i < points.length - 1; i++) {
    const dx = points[i + 1][0] - points[i][0];
    const dy = points[i + 1][1] - points[i][1];
    const distance = Math.sqrt(dx * dx + dy * dy);
    distances.push(distance);
    totalDistance += distance;
  }

  return distances.map((distance) => distance / totalDistance);
};
const points = busPath.map((p) => [p.lat, p.lng]);
const segments = calculateSegmentProportions(points);
const getCoordinatesAndPath = (t: number): [LatLng[], { lat: number; lng: number }] => {
  const traveledPath: LatLng[] = [];
  const clampedT = clamp(t, 0, 1);

  let total = 0;
  let segmentId = 0;
  for (let i = 0; i < segments.length; i++) {
    total += segments[i];
    traveledPath.push(busPath[i]);
    if (clampedT <= total) {
      segmentId = i;
      break;
    }
  }
  const localT = (clampedT - (total - segments[segmentId])) / segments[segmentId];

  const start = points[segmentId];
  const end = points[segmentId + 1];
  const lat = start[0] + localT * (end[0] - start[0]);
  const lng = start[1] + localT * (end[1] - start[1]);
  console.log(lat, lng);
  traveledPath.push({ lat, lng });
  return [traveledPath, { lat, lng }];
};

const MapComponent = ({ isDark }: MapComponentProps) => {
  const [_, setMap] = useState({});
  const [position, setPosition] = useState(busPath[0]);
  const [travelledPath, setTravelledPath] = useState<LatLng[]>([busPath[0]]);
  const [t, setT] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const timeOffset = useRef(0);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCF6vwCM9RH6H3y_2QSPXxP4WG4mtz60Pc",
  });

  const onLoad = useCallback(function callback(map: object) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback() {
    setMap({});
  }, []);

  const frameRef = useRef<number>(0);
  const frame = useCallback((time: number) => {
    if (!timeOffset.current) timeOffset.current = time;
    setT(((0.05 * (time - timeOffset.current)) / 1000) % 1);
    frameRef.current = requestAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (isPlaying) requestAnimationFrame(frame);
    else timeOffset.current = 0;
    return () => cancelAnimationFrame(frameRef.current);
  }, [frame, isPlaying]);

  const options = {
    // zoomControl: false, // Disable zoom control
    // gestureHandling: "none", // Disable all user gestures for the map
    fullscreenControl: false, // Disable fullscreen control
    mapTypeControl: false, // Disable map type control
    streetViewControl: false, // Disable Street View control
    disableDefaultUI: true, // Disable all default UI
    styles: isDark ? customStyle : undefined,
  };

  useEffect(() => {
    console.log(t);
    const [travPath, { lat, lng }] = getCoordinatesAndPath(t);
    setTravelledPath(travPath);
    setPosition({ lat, lng });
  }, [t]);

  if (!isLoaded) return <></>;
  const sliderScale = 1000;
  console.log("pos", position);
  return (
    <>
      <Slider value={t * sliderScale} onChange={(e) => setT(e.target.value / sliderScale)} />
      <div style={{ position: "absolute", zIndex: 1, left: "50%", bottom: 100 }}>
        <button
          className="secondary-button"
          style={{ position: "relative", left: "-50%", width: "100px", height: "50px" }}
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? "Stop" : "Play"}
        </button>
      </div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={options}
      >
        <Polyline
          path={travelledPath}
          options={{ strokeColor: "#FF0000", strokeOpacity: 1, strokeWeight: 2 }}
        />
        <Marker position={dormPos} />
        <Marker position={position} icon={bus} />
        <ImageMarkers isLoaded={isLoaded} isDarkTheme={isDark} path={travelledPath} />
      </GoogleMap>
    </>
  );
};

export default MapComponent;
