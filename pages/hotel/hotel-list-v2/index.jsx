import React, { useState, useEffect } from "react";
import { searchHotels } from "../../../service/amadeusService";
import CallToActions from "../../../components/common/CallToActions";
import Seo from "../../../components/common/Seo";
import Header11 from "../../../components/header/header-11";
import DefaultFooter from "../../../components/footer/default";
import MainFilterSearchBox from "../../../components/hotel-list/hotel-list-v1/MainFilterSearchBox";
import TopHeaderFilter from "../../../components/hotel-list/hotel-list-v1/TopHeaderFilter";
import HotelProperties from "../../../components/hotel-list/hotel-list-v1/HotelProperties";
import Pagination from "../../../components/hotel-list/common/Pagination";
import Sidebar from "../../../components/hotel-list/hotel-list-v1/Sidebar";

const itemsPerPage = 8;

const Index = () => {
  const retryDelay = 5000; // 5 seconds

  async function makeAmadeusRequest() {
    try {
      const response = await searchHotels("SZX");
      // Handle the response here
    } catch (error) {
      if (error.response && error.response.statusCode === 503) {
        console.error("Service temporarily unavailable. Retrying in 5 seconds...");
        await new Promise((resolve) => setTimeout(resolve, retryDelay));
        return makeAmadeusRequest(); // Retry the request
      } else {
        // Handle other types of errors
        console.error("An error occurred:", error.message);
      }
    }
  }

  useEffect(() => {
    // Make the initial request
    makeAmadeusRequest();
  }, []); // Ensure it only runs once on component mount

  const [currentPage, setCurrentPage] = useState(1);
  const [hotelData, setHotelData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch hotel data when the component mounts
    searchHotels("SZX") 
      .then((data) => {
        setHotelData(data);
        setLoading(false); // Data loading complete
      })
      .catch((error) => {
        setError(error);
        setLoading(false); // Data loading failed
      });
  }, []);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalItems = hotelData.length;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const itemsToDisplay = hotelData.slice(startIndex, endIndex);

  return (
    <>
      <Seo pageTitle="``深圳酒店住宿``" />
      <Header11 />

      <section className="pt-40 pb-40 bg-blue-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <br></br>
                <br></br>
                <br></br>
                <h1 className="text-30 fw-600">深圳酒店住宿🏨</h1>
              </div>
              <MainFilterSearchBox />
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-30">
            <div className="col-xl-3">
              <aside className="sidebar y-gap-40 xl:d-none">
                <Sidebar />
              </aside>
              <div className="offcanvas offcanvas-start" tabIndex="-1" id="listingSidebar">
                {/* Offcanvas content */}
              </div>
            </div>

            <div className="col-xl-9">
              <TopHeaderFilter />
              <div className="mt-30"></div>

              {loading ? (
                <p>Loading...</p>
              ) : error ? (
                <p>Error: {error.message}</p>
              ) : (
                <>
                  <div className="row y-gap-30">
                    <HotelProperties items={itemsToDisplay} /> {/* Pass the sliced items */}
                  </div>

                  <Pagination
                    currentPage={currentPage}
                    onPageChange={onPageChange}
                    totalItems={totalItems}
                    itemsPerPage={itemsPerPage}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <CallToActions />
      <DefaultFooter />
    </>
  );
};

export default Index;
