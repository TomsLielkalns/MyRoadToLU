import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { SetStateAction, memo, useCallback, useState } from "react";

const containerStyle = {
  width: "100vw",
  height: "100vh",
};

const busPosition = {
  lat: 56.9707547,
  lng: 24.1778137,
};

const LUMarker = {
  lat: 56.9507886,
  lng: 24.1162251,
};

const center = {
  lat: 56.9641074,
  lng: 24.1401608,
};

const MyComponent = () => {
  const [map, setMap] = useState({});
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCF6vwCM9RH6H3y_2QSPXxP4WG4mtz60Pc",
  });

  const onLoad = useCallback(function callback(map: object) {
    console.log(map);
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
    >
      <Marker position={busPosition} />
      <Marker position={LUMarker} />
    </GoogleMap>
  );
};

export default memo(MyComponent);
