import React, { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { useSelector } from "react-redux";
import useGeoLocation from "../Hooks/useGeoLocation";
import RoutingMachine from "./RoutingMachine";
import {userIcon, openPharmacyIcon, closePharmacyIcon} from "../assets/mapMarkerIcons";
import { createClusterPharmacyIcon } from "../Utilities/createClusterPharmacyIcon";
import { getMarkers } from "../Utilities/getMarkers";

const Map = () => {
  const mapRef = useRef(null);
  const pharmaciesData = useSelector((state) => state.pharmacies.pharmacies);
  const selectedPharmacy = useSelector((state) => state.selectedPharmacy);
  const mapLocation = useGeoLocation();

  useEffect(() => {
    if (selectedPharmacy && mapRef.current) {
      const coordinatesArr = [
        selectedPharmacy.attributes.Longitude,
        selectedPharmacy.attributes.Latitude,
      ];
      mapRef.current.flyTo(coordinatesArr, 15);
    }
  }, [selectedPharmacy]);
  
  const markers = getMarkers(pharmaciesData)

  if (!mapLocation.loaded) {
    return <p>Loading user location...</p>;
  }

  return (
    <MapContainer center={mapLocation.coordinates} zoom={7} ref={mapRef}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {mapLocation.supported ? (
        <Marker position={mapLocation.coordinates} icon={userIcon}>
          <Popup>Your Location</Popup>
        </Marker>
      ) : null}
      <MarkerClusterGroup
        chunkedLoading
        disableClusteringAtZoom={14}
        spiderfyOnMaxZoom={false}
        iconCreateFunction={createClusterPharmacyIcon}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.key}
            position={marker.geocode}
            icon={marker.isOpen ? openPharmacyIcon : closePharmacyIcon}
          >
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
      <RoutingMachine mapLocation={mapLocation} />
    </MapContainer>
  );
};

export default Map;
