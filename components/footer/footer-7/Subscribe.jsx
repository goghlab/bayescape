const Subscribe = () => {
  return (
    <div className="row y-gap-30 justify-between items-center layout-pb-md">
      <div className="col-auto">
        <div className="d-flex y-gap-20 flex-wrap items-center">
          <div className="icon-newsletter text-60 sm:text-40 text-white" />
          <div className="ml-30">
            <h4 className="text-26 text-white fw-600">
             發現城市驚喜! 您的灣程之旅從這裡開始
            </h4>
            <div className="text-white">
            註冊，我們將向您發送最佳優惠。
            </div>
          </div>
        </div>
      </div>
      {/* End .col */}

      <div className="col-auto">
        <form className="single-field -w-410 d-flex x-gap-10 y-gap-20">
          <div>
            <input
              className="bg-white h-60"
              type="text"
              placeholder="您的電子郵件地址"
              required
            />
          </div>
          {/* End input */}

          <div>
            <button
              type="submit"
              className="button -md h-60 bg-yellow-1 text-dark-1"
            >
              訂閱
            </button>
          </div>
        </form>
      </div>
      {/* End .col */}
    </div>
  );
};

export default Subscribe;
