import { getClosedPharmacies } from "../Redux/Actions/getClosedPharmacies";
import { getOpenPharmacies } from "../Redux/Actions/getOpenPharmacies";
import { getAll } from "../Redux/Actions/getAll";
export   const handleSearch = (setSearchPerformed , selectedStatus ,selectedCity ,dispatch) => {
    switch (selectedStatus) {
      case "close":
        dispatch(getClosedPharmacies(selectedCity));
        setSearchPerformed(true)
        break;
      case "open":
        dispatch(getOpenPharmacies(selectedCity));
        setSearchPerformed(true)
        break;
      case "all":
        dispatch(getAll(selectedCity));
        setSearchPerformed(true)
        break;
      default:
        break;
    }
  };