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
import { hotelsData } from "../../../data/hotels"; // Adjust the path based on your file structure

const itemsPerPage = 8;

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate the total number of items based on your data
  const totalItems = hotelsData.length;

  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  // Get the items to display on the current page
  const itemsToDisplay = hotelsData.slice(startIndex, endIndex);

  return (
    <>
      <Seo pageTitle="Hotel List v1" />

      <Header11 />

      <section className="pt-40 pb-40 bg-light-2">
        {/* ... Your component code */}
      </section>

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-30">
            <div className="col-xl-3">
              {/* ... Your component code */}
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
