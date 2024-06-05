import { Marker } from "@react-google-maps/api";
import {
  LUPos,
  VEFpalacePos,
  gaisaTiltsPos,
  evolutionBuildingPos,
  newGertrudesChurchPos,
  dailesTheaterPos,
  cornerHousePos,
  oldGertrudesChurchPos,
  ANChurchPos,
  radisonsPos,
  orthodoxCathedralPos,
  freedomMonumentPos,
  vermaneGardenPos,
} from "./markerPositions";
import {
  LUmarker,
  VEFpalace,
  GaisaTilts,
  EvolutionBuilding,
  NewGertrudesChurch,
  DailesTheater,
  CornerHouse,
  OldGertrudesChurch,
  ANChurch,
  Radisons,
  OrthodoxCathedral,
  FreedomMonument,
  VermaneGarden,
  LUmarkerDark,
  VEFpalaceDark,
  GaisaTiltsDark,
  EvolutionBuildingDark,
  NewGertrudesChurchDark,
  DailesTheaterDark,
  CornerHouseDark,
  OldGertrudesChurchDark,
  ANChurchDark,
  RadisonsDark,
  OrthodoxCathedralDark,
  FreedomMonumentDark,
  VermaneGardenDark,
} from "./markerImages";
import { LatLng } from "./Map";

interface ImageMarkersProps {
  isLoaded: boolean;
  isDarkTheme: boolean;
  path: LatLng[];
}

export const ImageMarkers = ({ isLoaded, isDarkTheme, path }: ImageMarkersProps) => {
  if (!isLoaded || !google.maps.geometry) {
    // need to wait for map to load to access google object
    return null;
  }

  const markersData = [
    {
      position: LUPos,
      icon: { url: isDarkTheme ? LUmarkerDark : LUmarker, scaledSize: new google.maps.Size(75, 105) },
      key: "lu",
    },
    {
      position: VEFpalacePos,
      icon: { url: isDarkTheme ? VEFpalaceDark : VEFpalace, scaledSize: new google.maps.Size(50, 70) },
      key: "vefPalace",
    },
    {
      position: gaisaTiltsPos,
      icon: { url: isDarkTheme ? GaisaTiltsDark : GaisaTilts, scaledSize: new google.maps.Size(50, 70) },
      key: "gaisaTilts",
    },
    {
      position: evolutionBuildingPos,
      icon: {
        url: isDarkTheme ? EvolutionBuildingDark : EvolutionBuilding,
        scaledSize: new google.maps.Size(50, 70),
      },
      key: "evolutionBuilding",
    },
    {
      position: newGertrudesChurchPos,
      icon: {
        url: isDarkTheme ? NewGertrudesChurchDark : NewGertrudesChurch,
        scaledSize: new google.maps.Size(50, 70),
      },
      key: "newGertrudesChurch",
    },
    {
      position: dailesTheaterPos,
      icon: {
        url: isDarkTheme ? DailesTheaterDark : DailesTheater,
        scaledSize: new google.maps.Size(50, 70),
      },
      key: "dailesTheater",
    },
    {
      position: cornerHousePos,
      icon: { url: isDarkTheme ? CornerHouseDark : CornerHouse, scaledSize: new google.maps.Size(50, 70) },
      key: "cornerHouse",
    },
    {
      position: oldGertrudesChurchPos,
      icon: {
        url: isDarkTheme ? OldGertrudesChurchDark : OldGertrudesChurch,
        scaledSize: new google.maps.Size(50, 70),
      },
      key: "oldGertrudesChurch",
    },
    {
      position: ANChurchPos,
      icon: { url: isDarkTheme ? ANChurchDark : ANChurch, scaledSize: new google.maps.Size(50, 70) },
      key: "anChurch",
    },
    {
      position: radisonsPos,
      icon: { url: isDarkTheme ? RadisonsDark : Radisons, scaledSize: new google.maps.Size(50, 70) },
      key: "radisons",
    },
    {
      position: orthodoxCathedralPos,
      icon: {
        url: isDarkTheme ? OrthodoxCathedralDark : OrthodoxCathedral,
        scaledSize: new google.maps.Size(50, 70),
      },
      key: "orthodoxCathedral",
    },
    {
      position: freedomMonumentPos,
      icon: {
        url: isDarkTheme ? FreedomMonumentDark : FreedomMonument,
        scaledSize: new google.maps.Size(50, 70),
      },
      key: "freedomMonument",
    },
    {
      position: vermaneGardenPos,
      icon: {
        url: isDarkTheme ? VermaneGardenDark : VermaneGarden,
        scaledSize: new google.maps.Size(50, 70),
      },
      key: "vermaneGarden",
    },
  ].filter((marker) => {
    if (marker.key === "lu") return true;
    const pathDist = path.reduce((acc: number, coord: LatLng) => {
      const distFromPathPoint = google.maps.geometry.spherical.computeDistanceBetween(
        new google.maps.LatLng(marker.position.lat, marker.position.lng),
        new google.maps.LatLng(coord.lat, coord.lng)
      );
      return Math.min(distFromPathPoint, acc);
    }, Infinity);
    return pathDist < 300;
  });

  return (
    <>
      {markersData.map((marker) => (
        <Marker key={marker.key} position={marker.position} icon={marker.icon} />
      ))}
    </>
  );
};
