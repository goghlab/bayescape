import Image from "next/image";

const WhyChoose = () => {
  const whyChooseContent = [
    {
      id: 1,
      icon: "/img/featureIcons/3/1.png",
      title: "最佳價格保證",
      text: `Bayescape透過持續監控價格、提供獨家優惠和即時預訂確認，助您輕鬆達到最佳價格保證。`,
      delayAnimaion: "100",
    },
    {
      id: 2,
      icon: "/img/featureIcons/3/2.png",
      title: "簡單快速的預訂",
      text: `Bayescape通過直觀的介面、快速的搜索功能和即時預訂確認，協助客戶實現簡單快速的預訂。
      `,
      delayAnimaion: "200",
    },
    {
      id: 3,
      icon: "/img/featureIcons/3/3.png",
      title: "絕佳完美位置",
      text: `無論您的旅行目的地，我們的酒店都位於絕佳的地理位置，讓您方便地探索當地的美景和文化。`,
      delayAnimaion: "300",
    },
    {
      id: 4,
      icon: "/img/featureIcons/3/4.png",
      title: "全天候客戶關懷",
      text: `我們的客戶支援團隊為您提供全天候的服務，隨時回答您的問題和需求，確保您的旅程順利無憂。`,
      delayAnimaion: "400",
    },
  ];

  return (
    <>
      {whyChooseContent.map((item) => (
        <div
          className="col-sm-6"
          data-aos="fade-up"
          data-aos-delay={item.delayAnimaion}
          key={item.id}
        >
          <Image
            width={60}
            height="60"
            src={item.icon}
            alt="image"
            className="size-60"
          />
          <h5 className="text-18 fw-500 mt-10">{item.title}</h5>
          <p className="mt-10">{item.text}</p>
        </div>
      ))}
    </>
  );
};

export default WhyChoose;
