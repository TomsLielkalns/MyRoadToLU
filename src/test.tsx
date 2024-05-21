import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { memo, useCallback, useState } from "react";
import bus from "./assets/bus.svg";

const containerStyle = {
  width: "100vw",
  height: "100vh",
};

const busPosition = {
  lat: 56.9707547,
  lng: 24.1778137,
};

const luMarker = {
  lat: 56.9507886,
  lng: 24.1162251,
};

const dormMarker = {
  lat: 56.974907,
  lng: 24.1826295,
};

const center = {
  lat: 56.9641074,
  lng: 24.1401608,
};

const options = {
  zoomControl: false, // Disable zoom control
  gestureHandling: "none", // Disable all user gestures for the map
  fullscreenControl: false, // Disable fullscreen control
  mapTypeControl: false, // Disable map type control
  streetViewControl: false, // Disable Street View control
  disableDefaultUI: true, // Disable all default UI
};

const MyComponent = () => {
  const [map, setMap] = useState({});
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCF6vwCM9RH6H3y_2QSPXxP4WG4mtz60Pc",
  });
  console.log(map);
  const onLoad = useCallback(function callback(map: object) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback() {
    setMap({});
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
      <Marker position={dormMarker} />
      <Marker position={busPosition} icon={bus} />
      <Marker position={luMarker} />
    </GoogleMap>
  );
};

export default memo(MyComponent);
