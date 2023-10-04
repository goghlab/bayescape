import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import Footer7 from "../../components/footer/footer-7";
import Header9 from "../../components/header/header-9";
import Hero9 from "../../components/hero/hero-9";
import TopHeader from "../../components/header/header-9/top-header";
import WhyChoose from "../../components/home/home-9/WhyChoose";
import AddBanner from "../../components/add-banner/AddBanner";
import PopularDestinations from "../../components/destinations/PopularDestinations";
import SelectFilter from "../../components/hotels/filter-tabs/SelectFilter";
import Hotels from "../../components/hotels/Hotels";
import SearchBoxContent from "../../components/hero/hero-9/SearchBoxContent";

const home_9 = () => {
  return (
    <>
      <Seo pageTitle="Home-9" />
      {/* End Page Title */}

      <TopHeader />
      {/* End Header top Banner */}

      <div
        className="offcanvas offcanvas-top vh-100"
        tabIndex={-1}
        id="offcanvasTop2"
        aria-labelledby="offcanvasTopLabel"
        style={{ zIndex: 1200 }}
      >
        <div className="offcanvas-header position-absolute top-0 end-0">
          <button
            type="button"
            className="btn-close text-reset "
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        {/* End header */}
        <SearchBoxContent />
      </div>
      {/* End searchBar Offcanvas Popup */}

      <Header9 />
      {/* End Header 9 */}

      <Hero9 />
      {/* End Hero 9 */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-10 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">酒店推薦</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                 精心挑選的熱門酒店
                </p>
              </div>
            </div>
            <div className="col-sm-auto">
              <SelectFilter />
            </div>
          </div>
          {/* End .row */}

          <div className="relative overflow-hidden pt-40 sm:pt-20 js-section-slider item_gap-x30">
            <Hotels />
          </div>
          {/* End relative */}
        </div>
      </section>
      {/* Recommended Properties */}

      <section className="layout-pt-lg layout-pb-md" data-aos="fade-up">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">熱門目的地</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                   這些熱門旅遊地點提供了眾多選擇
                </p>
              </div>
            </div>
            {/* End col-auto */}

            <div className="col-auto md:d-none">
              <a
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                目的地
                <div className="icon-arrow-top-right ml-15" />
              </a>
            </div>
            {/* End col-auto */}
          </div>
          {/* End .row */}

          <div className="relative pt-40 sm:pt-20">
            <PopularDestinations />
          </div>
        </div>
        {/* End .container */}
      </section>
      {/* End Popular Destinations */}

      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row y-gap-30">
            <div className="col-xl-4 col-lg-5">
              <h2 className="text-30 fw-600">為什麼選擇我們</h2>
              <p className="mt-5">
              "我們提供最佳價格保證，輕鬆快捷的訂房流程，優越的地理位置以及全天候的客戶關懷服務。
              </p>
              <p className="text-dark-1 mt-40 sm:mt-20">
              為什麼選擇我們？因為我們致力於為您提供最優惠的價格，無論您前往何處，您都可以放心預訂，並享受無憂的旅程。選擇我們，您將體驗到無與倫比的便利和舒適，讓每一次旅行都成為美好而難忘的回憶。"
              </p>
              <div className="d-inline-block mt-40 sm:mt-20">
                <a
                  href="#"
                  className="button -md -blue-1 bg-blue-1 text-white"
                >
                  Learn More <div className="icon-arrow-top-right ml-15" />
                </a>
              </div>
            </div>
            {/* End .col */}

            <div className="col-xl-6 offset-xl-1 col-lg-7">
              <div className="row y-gap-120">
                <WhyChoose />
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* Why Choose  Sections */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20">
            <AddBanner />
          </div>
        </div>
        {/* End .container */}
      </section>
      {/* End AddBanner */}

      <Footer7 />
      {/* End Footer Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(home_9), { ssr: false });
