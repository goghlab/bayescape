const BlockGuide = () => {
  const blockContent = [
    {
      id: 1,
      icon: "/img/featureIcons/2/1.png",
      title: "最低價格保證",
      text: `"我們承諾提供市場上最優惠的價格，讓您享受最佳的價格保證，全心全意為您提供卓越的價值和滿意的體驗。`,
      delayAnim: "100",
    },
    {
      id: 2,
      icon: "/img/featureIcons/2/2.png",
      title: "簡便快速預訂",
      text: `透過我們的服務，您可以輕鬆迅速地完成預訂，省時省力，讓您輕鬆安排您的計劃和行程。`,
      delayAnim: "300",
    },
    {
      id: 3,
      icon: "/img/featureIcons/2/3.png",
      title: "24/7客戶關懷",
      text: `我們隨時為您提供24/7客戶關懷，無論何時何地，都能提供卓越的支援和服務，以滿足您的需求和疑問。`,
      delayAnim: "500",
    },
  ];

  return (
    <>
      {blockContent.map((item) => (
        <div
          className="col-lg-4 col-sm-6"
          data-aos="fade"
          data-aos-delay={item.delayAnim}
          key={item.id}
        >
          <div className="featureIcon -type-1 -hover-shadow px-50 py-50 lg:px-24 lg:py-15">
            <div className="d-flex justify-center">
              <img src={item.icon} alt="image" className="js-lazy" />
            </div>
            <div className="text-center mt-30">
              <h4 className="text-18 fw-500">{item.title}</h4>
              <p className="text-15 mt-10">{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlockGuide;
