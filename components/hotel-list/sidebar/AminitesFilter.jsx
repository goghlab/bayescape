const AmenitiesFilter = () => {
  const amenities = [
    { name: "包括早餐", count: 92 },
    { name: "浪漫", count: 45 },
    { name: "機場接送", count: 21 },
    { name: "包含WiFi", count: 78 },
    { name: "五星级", count: 679 },
  ];

  return (
    <>
      {amenities.map((amenity, index) => (
        <div className="row y-gap-10 items-center justify-between" key={index}>
          <div className="col-auto">
            <div className="form-checkbox d-flex items-center">
              <input type="checkbox" />
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
              <div className="text-15 ml-10">{amenity.name}</div>
            </div>
          </div>
          <div className="col-auto">
            <div className="text-15 text-light-1">{amenity.count}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AmenitiesFilter;
