import { divIcon, point } from "leaflet";

export const createClusterPharmacyIcon = function (cluster) {
    return new divIcon({
      html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
      className: "custom-marker-cluster",
      iconSize: point(10, 10, true),
    });
  };