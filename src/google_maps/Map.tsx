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
  { lat: 56.972318, lng: 24.169161 },
  { lat: 56.973635, lng: 24.16781 },
  { lat: 56.966251, lng: 24.144763 },
  { lat: 56.962274, lng: 24.135035 },
  { lat: 56.958852, lng: 24.12576 },
  { lat: 56.951946, lng: 24.113688 },
  { lat: 56.950936, lng: 24.115026 },
];

const center = {
  lat: 56.9641074,
  lng: 24.1401608,
};

const sliderScale = 143;

const Slider = ({ value, onChange }) => {
  return (
    <div style={{ position: "fixed", zIndex: 10000, left: 0, right: 0, bottom: 0 }}>
      <div className="slidecontainer">
        <input
          type="range"
          min="0"
          max="1000"
          value={value}
          className="slider"
          id="slider"
          onChange={onChange}
        />
      </div>
    </div>
  );
};

type MapComponentProps = {
  isDark: boolean;
};

const MapComponent = ({ isDark }: MapComponentProps) => {
  const [_, setMap] = useState({});
  const [position, setPosition] = useState(busPath[0]);
  const [travelledPath, setTravelledPath] = useState<LatLng[]>([busPath[0]]);
  const step = useRef(0);

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

  const interpolatePosition = (path: LatLng[], step: number) => {
    const index = Math.floor(step);
    const t = step - index;
    const from = path[index];
    const to = path[index + 1];
    return {
      lat: from.lat + (to.lat - from.lat) * t,
      lng: from.lng + (to.lng - from.lng) * t,
    };
  };

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
    if (busPath.length > 1) {
      const interval = setInterval(() => {
        step.current += 0.01;
        if (step.current >= busPath.length - 1) {
          step.current = 0;
          setTravelledPath([busPath[0]]); // loop back to the start
        }
        const nextPosition = interpolatePosition(busPath, step.current);
        setPosition(nextPosition);
        setTravelledPath((prevPath) => [...prevPath, nextPosition]);
      }, 50);

      return () => clearInterval(interval);
    }
  }, []);

  if (!isLoaded) return <></>;

  return (
    <>
      <Slider
        value={step.current * sliderScale}
        onChange={(e) => {
          step.current = e.target.value / sliderScale;
        }}
      />

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
