import Router from "next/router";
import DateSearch from "../DateSearch";
import PickUpLocation from "./PickUpLocation";
import DropOffLocation from "./DropOffLocation";

const MainFilterSearchBox = () => {
  return (
    <>
      <div className="mainSearch -col-5 -w-1070 mx-auto bg-white pr-20 py-20 lg:px-20 lg:pt-5 lg:pb-20 rounded-4 shadow-1">
        <div className="button-grid items-center">
          <PickUpLocation />
          {/* End Pickup Location */}

          <DropOffLocation />
          {/* End Drop off location  */}

          <div className="searchMenu-date px-20 lg:py-20 lg:px-0 js-form-dd js-calendar">
            <div>
              <h4 className="text-15 fw-500 ls-2 lh-16">接送</h4>
              <DateSearch />
            </div>
          </div>
          {/* End Pick Up Date */}

          <div className="button-item">
          <button
            className="mainSearch__submit button py-15 px-35 h-60 col-12 rounded-4"
            style={{ backgroundColor: "#2EC102", color: "white" }}
            onClick={() => Router.push("/car/car-list-v2")}
           >
            <i className="icon-search text-20 mr-10" />
               立即叫車
          </button>

          </div>
          {/* End search button_item */}
        </div>
      </div>
    </>
  );
};

export default MainFilterSearchBox;
