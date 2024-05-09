const HomeSteps = () => {
  const steps = [
    {
      title: "Выбор услуги",
    },
    {
      title: "Первичная консультация",
    },
    {
      title: "Расчет стратегии для продвижения",
    },
    {
      title: "Оплата",
    },
    {
      title: "Получение готового материала для вашего бизнеса",
    },
  ];
  return (
    <section className="steps" id="steps">
      <div className="container">
        <div className="heading">
          <h2 className="heading__title">Этапы работы</h2>
        </div>
        <div className="steps__body">
          {steps.map((step, i) => (
            <div className="steps__item item-steps" key={i}>
              <span className="item-steps__dot"></span>
              <div className="item-steps__content">
                <div className="item-steps__text">{step.title}</div>
              </div>
            </div>
          ))}
          <div className="steps__progress"></div>
        </div>
      </div>
    </section>
  );
};

export default HomeSteps;
