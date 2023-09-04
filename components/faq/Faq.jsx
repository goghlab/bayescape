const Faq = () => {
  const faqContent = [
    {
      id: 1,
      collapseTarget: "One",
      title: "1. Q: 24小時中港Call車接送是什麼？",
      content: `A: 24小時中港Call車接送是一家全天候營運的出租車接駁服務，可在香港和中國之間提供交通服務。`,
    },
    {
      id: 2,
      collapseTarget: "Two",
      title: "2. Q: 如何預訂這個服務？",
      content: `A: 您可以致電我們的熱線或使用我們的手機應用程序來預訂服務。`,
    },
    {
      id: 3,
      collapseTarget: "Three",
      title: "3. Q: 這些司機是否經驗豐富並持有合法牌照？",
      content: `A: 是的，我們的所有司機都經驗豐富且持有合法牌照，確保提供安全可靠的交通服務。`,
    },
    {
      id: 4,
      collapseTarget: "Four",
      title: "4. Q: 你們在香港和中國的哪些地區提供服務？",
      content: `A: 我們涵蓋了香港和中國的廣泛地區。您可以在我們的網站或應用程序上查看服務範圍。`,
    },
    {
      id: 5,
      collapseTarget: "Five",
      title: "5. Q: 你們提供單程和往返預訂嗎？",
      content: `A: 是的，我們提供單程和往返預訂，以滿足您的不同需求。`,
    },
    {
      id: 6,
      collapseTarget: "siz",
      title: "6. Q: 我可以提前預訂特定的時間和日期嗎？",
      content: `A: 是的，您可以提前預訂，確保您需要的車輛在您需要的時間準備就緒。`,
    },
  ];
  return (
    <>
      {faqContent.map((item) => (
        <div className="col-12" key={item.id}>
          <div className="accordion__item px-20 py-20 border-light rounded-4">
            <div
              className="accordion__button d-flex items-center"
              data-bs-toggle="collapse"
              data-bs-target={`#${item.collapseTarget}`}
            >
              <div className="accordion__icon size-40 flex-center bg-light-2 rounded-full mr-20">
                <i className="icon-plus" />
                <i className="icon-minus" />
              </div>
              <div className="button text-dark-1 text-start">{item.title}</div>
            </div>
            {/* End accordion button */}

            <div
              className="accordion-collapse collapse"
              id={item.collapseTarget}
              data-bs-parent="#Faq1"
            >
              <div className="pt-15 pl-60">
                <p className="text-15">{item.content}</p>
              </div>
            </div>
            {/* End accordion conent */}
          </div>
        </div>
      ))}
    </>
  );
};

export default Faq;
