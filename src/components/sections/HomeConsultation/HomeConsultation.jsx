const HomeConsultation = () => {
  return (
    <div className="consultation" id="consultation">
      <div className="consultation__wrapper">
        <div className="container">
          <div className="consultation__body">
            <form action="#" className="consultation-form">
              <div className="consultation-form__title">
                Запишись на консультацию
              </div>
              <div className="consultation-form__sub-title">
                Закажи бесплатную консультацию у наших профессионалов и получите
                полное понимание о выведение вашего бизнеса на рынок
              </div>
              <div className="consultation-form__items">
                <div className="consultation-form__item">
                  <input
                    type="text"
                    name="name"
                    placeholder="ФИО"
                    className="consultation-form__input"
                  />
                </div>
                <div className="consultation-form__item">
                  <input
                    type="email"
                    name="email"
                    placeholder="Почтовый адрес"
                    className="consultation-form__input"
                  />
                </div>
                <div className="consultation-form__item">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Номер телефона"
                    className="consultation-form__input"
                  />
                </div>
              </div>
              <button type="submit" className="consultation-form__button btn">
                контакты
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeConsultation;
