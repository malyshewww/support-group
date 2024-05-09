const HomeScreen = () => {
  return (
    <div className="main-screen">
      <div className="container">
        <div className="main-screen__body">
          <h1 className="main-screen__title">
            Создадим твой бизнес с нуля и
            <span className="main-screen__progress">
              продвинем на рынок без
              <span className="main-screen__line"></span>
            </span>{" "}
            очереди
          </h1>
          <button type="button" className="main-screen__button">
            запишись на консультацию
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
