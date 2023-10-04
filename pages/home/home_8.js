import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import Footer7 from "../../components/footer/footer-7";
import Header8 from "../../components/header/header-8";
import Hero8 from "../../components/hero/hero-8";
import BlockGuide from "../../components/home/home-8/BlockGuide";
import Faq from "../../components/faq/Faq";
import AppBanner from "../../components/home/home-8/AppBanner";

const home_8 = () => {
  return (
    <>
      <Seo pageTitle="Home-8" />
      {/* End Page Title */}

      <Header8 />
      {/* End Header 8 */}

      <Hero8 />
      {/* End Hero 8 */}

      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">為什麼選擇我們叫車接送</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                    我們擁有一支龐大的專業司機團隊，立即接受您的訂單
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-40 justify-between pt-40 sm:pt-20">
            <BlockGuide />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Why Coose Us */}

      <section className="layout-pt-lg layout-pb-lg">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  常見問題
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                以下是有關24小時中港Call車接送服務的一些常見問題，我們希望這些答案能為您提供所需的資訊和便利。
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-30 justify-center pt-40 sm:pt-20">
            <div className="col-xl-8 col-lg-10">
              <div
                className="accordion -simple row y-gap-20 js-accordion"
                id="Faq1"
              >
                <Faq />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End faq section block */}

      <AppBanner />
      {/* End AppBanner section */}

      <Footer7 />
      {/* End Footer Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(home_8), { ssr: false });
