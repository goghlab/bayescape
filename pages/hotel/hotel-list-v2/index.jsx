import React, { useState } from "react";
import CallToActions from "../../../components/common/CallToActions";
import Seo from "../../../components/common/Seo";
import Header11 from "../../../components/header/header-11";
import DefaultFooter from "../../../components/footer/default";
import MainFilterSearchBox from "../../../components/hotel-list/hotel-list-v1/MainFilterSearchBox";
import TopHeaderFilter from "../../../components/hotel-list/hotel-list-v1/TopHeaderFilter";
import HotelProperties from "../../../components/hotel-list/hotel-list-v1/HotelProperties";
import Pagination from "../../../components/hotel-list/common/Pagination";
import Sidebar from "../../../components/hotel-list/hotel-list-v1/Sidebar";
import { hotelsData } from "../../../data/hotels";

const itemsPerPage = 8;

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalItems = hotelsData.length;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const itemsToDisplay = hotelsData.slice(startIndex, endIndex);

  return (
    <>
      <Seo pageTitle="Hotel List v2" />

      <Header11 />

      <section className="pt-40 pb-40 bg-blue-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <br></br>
                <br></br>
                <br></br>
                <h1 className="text-30 fw-600">Find Your Dream Luxury Hotel</h1>
              </div>
              {/* End text-center */}
              <MainFilterSearchBox />
            </div>
            {/* End col-12 */}
          </div>
        </div>
      </section>
      {/* Top SearchBanner */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-30">
            <div className="col-xl-3">
              <aside className="sidebar y-gap-40 xl:d-none">
                <Sidebar />
              </aside>

              <div
                className="offcanvas offcanvas-start"
                tabIndex="-1"
                id="listingSidebar"
              >
                {/* Offcanvas content */}
              </div>
            </div>

            <div className="col-xl-9">
              <TopHeaderFilter />
              <div className="mt-30"></div>

              <div className="row y-gap-30">
                <HotelProperties items={itemsToDisplay} />
              </div>

              <Pagination
                currentPage={currentPage}
                onPageChange={onPageChange}
                totalItems={totalItems}
                itemsPerPage={itemsPerPage}
              />
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
