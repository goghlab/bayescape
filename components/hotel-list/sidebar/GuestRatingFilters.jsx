const GuestRatingFilters = () => {
  const options = [
    { label: "任何", value: "", count: 92 },
    { label: "最好 4.5+", value: "4.5", count: 45 },
    { label: "非常好 4+", value: "4", count: 21 },
    { label: "幾好+", value: "3.5", count: 78 },
  ];

  return (
    <>
      {options.map((option, index) => (
        <div className="row y-gap-10 items-center justify-between" key={index}>
          <div className="col-auto">
            <div className="form-radio">
              <div className="radio d-flex items-center">
                <input type="radio" name="rating" value={option.value} />
                <div className="radio__mark">
                  <div className="radio__icon" />
                </div>
                <div className="ml-10">{option.label}</div>
              </div>
            </div>
          </div>
          {/* End .col */}

          <div className="col-auto">
            <div className="text-15 text-light-1">{option.count}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default GuestRatingFilters;
