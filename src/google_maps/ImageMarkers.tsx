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
} from "./markerImages";

interface ImageMarkersProps {
  isLoaded: boolean;
}

export const ImageMarkers = ({ isLoaded }: ImageMarkersProps) => {
  if (!isLoaded) {
    // need to wait for map to load to access google object
    return null;
  }

  const markersData = [
    { position: LUPos, icon: { url: LUmarker, scaledSize: new google.maps.Size(75, 105) }, key: "lu" },
    {
      position: VEFpalacePos,
      icon: { url: VEFpalace, scaledSize: new google.maps.Size(50, 70) },
      key: "vefPalace",
    },
    {
      position: gaisaTiltsPos,
      icon: { url: GaisaTilts, scaledSize: new google.maps.Size(50, 70) },
      key: "gaisaTilts",
    },
    {
      position: evolutionBuildingPos,
      icon: { url: EvolutionBuilding, scaledSize: new google.maps.Size(50, 70) },
      key: "evolutionBuilding",
    },
    {
      position: newGertrudesChurchPos,
      icon: { url: NewGertrudesChurch, scaledSize: new google.maps.Size(50, 70) },
      key: "newGertrudesChurch",
    },
    {
      position: dailesTheaterPos,
      icon: { url: DailesTheater, scaledSize: new google.maps.Size(50, 70) },
      key: "dailesTheater",
    },
    {
      position: cornerHousePos,
      icon: { url: CornerHouse, scaledSize: new google.maps.Size(50, 70) },
      key: "cornerHouse",
    },
    {
      position: oldGertrudesChurchPos,
      icon: { url: OldGertrudesChurch, scaledSize: new google.maps.Size(50, 70) },
      key: "oldGertrudesChurch",
    },
    {
      position: ANChurchPos,
      icon: { url: ANChurch, scaledSize: new google.maps.Size(50, 70) },
      key: "anChurch",
    },
    {
      position: radisonsPos,
      icon: { url: Radisons, scaledSize: new google.maps.Size(50, 70) },
      key: "radisons",
    },
    {
      position: orthodoxCathedralPos,
      icon: { url: OrthodoxCathedral, scaledSize: new google.maps.Size(50, 70) },
      key: "orthodoxCathedral",
    },
    {
      position: freedomMonumentPos,
      icon: { url: FreedomMonument, scaledSize: new google.maps.Size(50, 70) },
      key: "freedomMonument",
    },
    {
      position: vermaneGardenPos,
      icon: { url: VermaneGarden, scaledSize: new google.maps.Size(50, 70) },
      key: "vermaneGarden",
    },
  ];

  return (
    <>
      {markersData.map((marker) => (
        <Marker key={marker.key} position={marker.position} icon={marker.icon} />
      ))}
    </>
  );
};
