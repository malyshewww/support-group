import AdvantageOne from "../../../img/homepage/advantage-1.jpg";
import AdvantageTwo from "../../../img/homepage/advantage-2.jpg";
import AdvantageThree from "../../../img/homepage/advantage-3.jpg";

const HomeAdvantages = () => {
  return (
    <section className="advantages" id="advantages">
      <div className="container">
        <div className="heading">
          <h2 className="heading__title">ПОЧЕМУ НАС ВЫБИРАЮТ</h2>
        </div>
        <div className="advantages__body">
          <div className="advantages__item item-advantages">
            <div className="item-advantages__num">01</div>
            <div className="item-advantages__title">Опыт и профессионализм</div>
            <div className="item-advantages__descr">
              Мы обладаем богатым опытом в создании бизнесов “под ключ” и
              гарантируем высокое качество услуг.
            </div>
          </div>
          <div className="advantages__item item-advantages">
            <div className="item-advantages__num">02</div>
            <div className="item-advantages__title">Индивидуальный подход</div>
            <div className="item-advantages__descr">
              Мы тщательно изучаем потребности каждого клиента и разрабатываем
              уникальное решение, соответствующее его целям и задачам.
            </div>
          </div>
          <div className="advantages__item item-advantages">
            <div className="item-advantages__image">
              <img src={AdvantageOne} alt="фото" />
            </div>
          </div>
          <div className="advantages__item item-advantages">
            <div className="item-advantages__image">
              <img src={AdvantageTwo} alt="фото" />
            </div>
          </div>
          <div className="advantages__item item-advantages">
            <div className="item-advantages__num">03</div>
            <div className="item-advantages__title">
              Поддержка и сопровождение
            </div>
            <div className="item-advantages__descr">
              Мы не оставляем клиента наедине с проблемами — предоставляем
              надежную поддержку и сопровождение на всех этапах развития его
              бизнеса.
            </div>
          </div>
          <div className="advantages__item item-advantages">
            <div className="item-advantages__num">04</div>
            <div className="item-advantages__title">Комплексный подход</div>
            <div className="item-advantages__descr">
              Мы предлагаем полный спектр услуг — от разработки сайта до
              настройки SEO и выхода на маркетплейсы, обеспечивая клиенту все
              необходимое для успешного старта бизнеса.
            </div>
          </div>
          <div className="advantages__item item-advantages">
            <div className="item-advantages__image">
              <img src={AdvantageThree} alt="фото" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeAdvantages;
