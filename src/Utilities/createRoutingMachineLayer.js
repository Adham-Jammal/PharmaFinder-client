import L from "leaflet";
import { customEndIcon, customIntermediateIcon, customStartIcon } from "../assets/mapMarkerIcons";

export const createRoutingMachineLayer = (props) => {
    const instance = L.Routing.control({
      waypoints: props.waypoints || [],
      lineOptions: { styles: [{ color: "#3388ff", opacity: 1, weight: 5 }] },
      addWaypoints: true,
      createMarker: (i, wp, n) => {
        if (i === 0) {
          return L.marker(wp.latLng, {
            icon: customStartIcon,
          });
        } else if (i === n - 1) {
          return L.marker(wp.latLng, {
            icon: customEndIcon, 
          });
        }
        
        return L.marker(wp.latLng, {
          icon: customIntermediateIcon, 
        });
      },
    });
  
    return instance;
  };
  