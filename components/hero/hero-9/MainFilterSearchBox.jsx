import Router from "next/router";
import GuestSearch from "./GuestSearch";
import LocationSearch from "./LocationSearch";
import DateSearch from "../DateSearch";


const MainFilterSearchBox = () => {
  return (
    <>
      <div className="mainSearch bg-white px-20 py-20 lg:px-20 lg:pt-5 lg:pb-20">
        <div className="button-grid items-center">
          <LocationSearch />
          {/* End Location */}

          <div className="searchMenu-date px-30 lg:py-20 lg:px-0 js-form-dd js-calendar">
              <div>
                <h4 className="text-15 fw-500 ls-2 lh-16">
                  入住 - 退房
                </h4>
                <DateSearch />
              </div>
            </div>
            {/* End check-in-out */}

          <GuestSearch />
          {/* End guest */}

          <div className="button-item">
            <button
              className="mainSearch__submit button -blue-1 py-15 px-35 h-60 col-12 rounded-4"
              style={{ backgroundColor: "#2EC102", color: "white" }}
              onClick={() => Router.push("/cruise/cruise-list-v1")}
            >
              <i className="icon-search text-20 mr-10" />
              搜尋
            </button>
          </div>
          {/* End search button_item */}
        </div>
      </div>
    </>
  );
};

export default MainFilterSearchBox;



