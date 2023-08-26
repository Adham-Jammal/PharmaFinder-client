import React, { useState, useEffect } from "react";
import SearchResult from "./SearchResult";
import { useDispatch, useSelector } from "react-redux";
import { getAllCities } from "../Redux/Actions/getAllCities";
import { handleSearch } from "../Utilities/handleSearch";

const SelectionForm = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.cities.cities); 
  useEffect(() => {
    dispatch(getAllCities());
  }, [dispatch]);
 const [searchPerformed , setSearchPerformed]= useState(false)
  return (
    <div className="selection-form-area">
      <header>
        <h2>البحث عن صيدلية</h2>
      </header>
      <form>
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option disabled value="">اختر محافظة </option>
          <option value="all">جميع المحافظات</option>
          {cities.map((city) => (
            <option key={city.id} value={city.attributes.CityName}>
              {city.attributes.ArabicName}
            </option>
          ))}
        </select>
        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
        >
          <option disabled value="">حالة الصيدلية</option>
          <option value="open">تعمل</option>
          <option value="close">مغلقة</option>
          <option value="all">الكل</option>
        </select>
        <button id="search" type="button" onClick={()=>{handleSearch(setSearchPerformed ,selectedStatus ,selectedCity , dispatch)}}>
          بحث
        </button>
      </form>
      <SearchResult searchPerformed={searchPerformed} />
    </div>
  );
};

export default SelectionForm;
