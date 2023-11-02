import { useState } from "react";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const locationSearchContent = [
    {
      id: 1,
      name: "香港",
      address: "Hong Kong, China",
    },
    {
      id: 2,
      name: "深圳",
      address: "Shenzhen, China",
    },
    {
      id: 3,
      name: "廣州",
      address: "Guangzhou, China",
    },
    {
      id: 4,
      name: "澳門",
      address: "Macau, China",
    },
    {
      id: 5,
      name: "珠海",
      address: "Zhuhai, China",
    },
    {
      id: 6,
      name: "東莞",
      address: "Dongguan, China",
    },
    {
      id: 7,
      name: "惠州",
      address: "Huizhou, China",
    },
    {
      id: 8,
      name: "中山",
      address: "Zhongshan, China",
    },
    {
      id: 9,
      name: "江門",
      address: "Jiangmen, China",
    },
    {
      id: 10,
      name: "佛山",
      address: "Foshan, China",
    },
    {
      id: 11,
      name: "肇慶",
      address: "Zhaoqing, China",
    },
  ];

  const handleOptionClick = (item) => {
    setSearchValue(item.name);
    setSelectedItem(item);
  };

  return (
    <>
      <div className="searchMenu-loc px-30 lg:py-20 lg:px-0 js-form-dd js-liverSearch">
        <div
          data-bs-toggle="dropdown"
          data-bs-auto-close="true"
          data-bs-offset="0,22"
        >
          <h4 className="text-15 fw-500 ls-2 lh-16">地點</h4>
          <div className="text-15 text-light-1 ls-2 lh-16">
            <input
              autoComplete="off"
              type="search"
              placeholder="你要去哪裡？?"
              className="js-search js-dd-focus"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
        </div>
        {/* End location Field */}

        <div className="shadow-2 dropdown-menu min-width-400">
          <div className="bg-white px-20 py-20 sm:px-0 sm:py-15 rounded-4">
            <ul className="y-gap-5 js-results">
              {locationSearchContent.map((item) => (
                <li
                  className={`-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option mb-1 ${
                    selectedItem && selectedItem.id === item.id ? "active" : ""
                  }`}
                  key={item.id}
                  role="button"
                  onClick={() => handleOptionClick(item)}
                >
                  <div className="d-flex">
                    <div className="icon-location-2 text-light-1 text-20 pt-4" />
                    <div className="ml-10">
                      <div className="text-15 lh-12 fw-500 js-search-option-target">
                        {item.name}
                      </div>
                      <div className="text-14 lh-12 text-light-1 mt-5">
                        {item.address}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
