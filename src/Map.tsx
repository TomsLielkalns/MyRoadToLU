import { GoogleMap, Marker, Polyline, useJsApiLoader } from "@react-google-maps/api";
import { useCallback, useEffect, useRef, useState } from "react";
import bus from "./assets/bus.svg";

const containerStyle = {
  width: "100vw",
  height: "100vh",
};

type LatLng = {
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
];

const luMarker = {
  lat: 56.9507886,
  lng: 24.1162251,
  title: "LU",
};

const dormMarker = {
  lat: 56.974907,
  lng: 24.1826295,
  title: "Dienesta viesnīca",
};

const center = {
  lat: 56.9641074,
  lng: 24.1401608,
};

const options = {
  // zoomControl: false, // Disable zoom control
  // gestureHandling: "none", // Disable all user gestures for the map
  fullscreenControl: false, // Disable fullscreen control
  mapTypeControl: false, // Disable map type control
  streetViewControl: false, // Disable Street View control
  disableDefaultUI: true, // Disable all default UI
};

const MapComponent = () => {
  const [_, setMap] = useState({});
  const [position, setPosition] = useState(busPath[0]);
  const [travelledPath, setTravelledPath] = useState<LatLng[]>([busPath[0]]);
  const step = useRef(0);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyB8NmfbNxLfNWDLmlcWaeSsDM1nGJVrhD8",
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
        options={{ strokeColor: "#FF0000", strokeOpacity: 1.0, strokeWeight: 2 }}
      />
      <Marker position={dormMarker} label={dormMarker.title} />
      <Marker position={position} icon={bus} />
      <Marker position={luMarker} label={luMarker.title} />
    </GoogleMap>
  );
};

export default MapComponent;
