const HomeServices = () => {
  const services = [
    {
      title: "Разработка сайтов",
      descr:
        "Наша компания специализируется на создании качественных и уникальных сайтов для бизнеса. Мы разрабатываем современные веб-ресурсы, которые помогут привлечь целевую аудиторию и увеличить онлайн-присутствие вашего бренда",
    },
    {
      title: "Выход на маркетплейсы",
      descr:
        "Мы предлагаем услуги по интеграции вашего бизнеса на популярные маркетплейсы. Наша команда поможет вашим товарам или услугам достичь новой аудитории, увеличивая продажи и расширяя ваш бизнес за счет онлайн-продаж",
    },
    {
      title: "Разработка интернет-магазинов",
      descr:
        "Мы специализируемся на создании эффективных интернет-магазинов для различных видов бизнеса. Наш опытный коллектив разработчиков поможет вам создать удобный и функциональный онлайн-магазин, который поможет увеличить продажи и привлечь новых клиентов.",
    },
  ];
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="heading">
          <h2 className="heading__title">наш сервис</h2>
        </div>
        <div className="services__body">
          {services.map((service, i) => (
            <div className="services__item item-services" key={i}>
              <div className="item-services__title">{service.title}</div>
              <div className="item-services__descr">{service.descr}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
