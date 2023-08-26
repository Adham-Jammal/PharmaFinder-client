import { isOpen } from "./isOpen";

export const getMarkers = (pharmaciesData)=>{
 const markers = pharmaciesData.map((pharmacy) => {
    return {
      key: pharmacy.id,
      geocode: [pharmacy.attributes.Longitude, pharmacy.attributes.Latitude],
      popUp: pharmacy.attributes.name,
      isOpen: isOpen(pharmacy),
    };
  });
  return markers;
}
