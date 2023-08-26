import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPharmacy } from "../Redux/Reducers/selectedPharmacyReducer";
import { isOpen } from "../Utilities/isOpen";



const SearchResult = (searchPerformed) => {
  const loading = useSelector((state) => state.pharmacies.loading);
  const pharmaciesData = useSelector((state) => state.pharmacies.pharmacies);
  const dispatch = useDispatch();
  const handlePharmacyClick = (pharmacy) => {
    dispatch(selectPharmacy(pharmacy));
  };
  return (
    <div className="results">
      {loading ? (
        <p>جار التحميل ..</p>
      ) : (
        searchPerformed.searchPerformed && pharmaciesData.length === 0 ? "لا يوجد صيدليات لعرضها" :
        pharmaciesData.map((pharmacy) => (
          <div
            key={pharmacy.id}
            onClick={() => handlePharmacyClick(pharmacy)} 
            className="pharmacy-card"
          >
            <span className={isOpen(pharmacy) ? 'is-open open' : 'is-open close'}> {isOpen(pharmacy) ? '• تعمل الان' : '• مغلقة'}</span>
            <h2><img src="/images/pharmacy-icon.svg" alt="pharmacy" />  {pharmacy.attributes.name}</h2>
            <ul>
              <li><img src="/images/city-icon.svg" alt="city-icon" />  {pharmacy.attributes.city.data.attributes.ArabicName}</li>
              <li><img src="/images/location-marker.svg" alt="location-marker" />  {pharmacy.attributes.Address}</li>
              <li><a href={"tel:" + pharmacy.attributes.PhoneNumber}><img src="/images/phone.svg" alt="phone" /> {pharmacy.attributes.PhoneNumber}</a></li>
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default SearchResult;
