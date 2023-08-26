import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import { useSelector } from "react-redux";
import { createRoutingMachineLayer } from "../Utilities/createRoutingMachineLayer";

const RoutingMachine = createControlComponent(createRoutingMachineLayer);

export default function ConnectedRoutingMachine(props) {
  const selectedPharmacy = useSelector((state) => state.selectedPharmacy);
  const [waypoints, setWaypoints] = useState(null);
  const routingControlRef = useRef(null);

  const { coordinates, supported } = props.mapLocation; 

  useEffect(() => {
    if (selectedPharmacy && supported) {
      const coordinatesArr = [
        selectedPharmacy.attributes.Longitude,
        selectedPharmacy.attributes.Latitude,
      ];

      setWaypoints([
        L.latLng(coordinates.lat, coordinates.lng),
        L.latLng(coordinatesArr[0], coordinatesArr[1]),
      ]);

    }
  }, [selectedPharmacy, coordinates, supported]);

  useEffect(() => {
    if (routingControlRef.current) {
      routingControlRef.current.getPlan().setWaypoints(waypoints);
      routingControlRef.current.getPlan()._routeFound = false; 
    }
  }, [waypoints]);


  return <RoutingMachine ref={routingControlRef} waypoints={waypoints} {...props} />;
}
