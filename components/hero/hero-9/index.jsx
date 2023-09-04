import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import MainFilterSearchBox from "./MainFilterSearchBox";
import { Parallax } from "react-parallax";

const index = () => {
  return (
    <>
      <section className="masthead -type-9">
        <div className="masthead-slider js-masthead-slider-9">
          <Swiper
            modules={[Navigation]}
            loop={true}
            navigation={{
              nextEl: ".hero9-next-active",
              prevEl: ".hero9-prev-active",
            }}
          >
            <SwiperSlide>
              <div className="masthead__bg bg-dark-3">
                <Parallax
                  strength={300}
                  bgImage="/img/masthead/9/bg.png"
                  bgImageAlt="amazing place"
                  bgClassName="object-fit-cover"
                  className="h-100"
                ></Parallax>
              </div>
              {/* End .masthead__bg */}

              <div className="container">
                <div className="row justify-center">
                  <div className="col-xl-9">
                    <div className="text-center">
                      <div
                        className="text-white fw-500 uppercase mb-10"
                        data-aos="fade-up"
                        data-aos-delay="100"
                      >
                        "盡情享受城市的最佳優惠，與Bayescape一同體驗"
                      </div>
                      <h1
                        className="text-60 lg:text-60 sm:text-40 text-white"
                        data-aos="fade-up"
                        data-aos-delay="300"
                      >
                       ENJOY CITIES BEST DEALS
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              {/* End .container */}
            </SwiperSlide>
          </Swiper>

          <div className="masthead-slider__nav -prev">
            <button className="button py-10 hero9-prev-active">
              <span className="h-1 w-48 bg-white"></span>
            </button>
          </div>

          <div className="masthead-slider__nav -next">
            <button className="button py-10 hero9-next-active">
              <span className="h-1 w-48 bg-white"></span>
            </button>
          </div>
        </div>
        {/* End slider */}

        <a href="#secondSection" className="masthead__scroll">
          <div className="d-flex items-center">
            <div className="text-white lh-15 text-right mr-10">
              <div className="fw-500">向下滾動</div>
              <div className="text-15">探索更多</div>
            </div>
            <div className="-icon">
              <div />
              <div />
            </div>
          </div>
        </a>
        {/* End scroll target section */}

        <div className="container">
          <div className="mainSearch-wrap bg-white shadow-1">
            <MainFilterSearchBox />
            {/* End tab-filter */}
          </div>
        </div>
      </section>
      {/* End section */}
    </>
  );
};

export default index;
