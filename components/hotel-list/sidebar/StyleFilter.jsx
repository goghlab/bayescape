const StyleFilter = () => {
  const checkboxes = [
    { label: "經濟", count: 92 },
    { label: "中價", count: 45 },
    { label: "豪華", count: 21 },
    { label: "適合家庭", count: 78 },
    { label: "商務", count: 679 },
  ];

  return (
    <>
      {checkboxes.map((checkbox, index) => (
        <div className="row y-gap-10 items-center justify-between" key={index}>
          <div className="col-auto">
            <div className="form-checkbox d-flex items-center">
              <input type="checkbox" name="name" />
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
              <div className="text-15 ml-10">{checkbox.label}</div>
            </div>
          </div>
          {/* End col-auto */}
          <div className="col-auto">
            <div className="text-15 text-light-1">{checkbox.count}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default StyleFilter;
