import { Link } from "react-router-dom";
import { backgrounds } from "../../utils/backgroundLinksImg.js";
import Header from "../Header";
import HomeScreen from "../sections/HomeScreen/HomeScreen.jsx";
import HomeAdvantages from "../sections/HomeAdvantages/HomeAdvantages.jsx";
import HomeServices from "../sections/HomeServices/HomeServices.jsx";
import HomeSteps from "../sections/HomeSteps/HomeSteps.jsx";
import HomeConsultation from "../sections/HomeConsultation/HomeConsultation.jsx";
import Footer from "../Footer/index.jsx";

const Homepage = () => {
  const links = [
    {
      title: "Сайт визитка",
      to: "/landing",
      background: backgrounds.backgroundForLanding,
    },
    {
      title: "Маркет плейс",
      to: "/market",
      background: backgrounds.backgroundForMarket,
    },
    {
      title: "Интернет магазин",
      to: "/shop",
      background: backgrounds.backgroundForShop,
    },
  ];

  return (
    <div className="homepage">
      <Header />
      <main className="main">
        <HomeScreen />
        <HomeAdvantages />
        <HomeServices />
        <section className="direction" id="direction">
          <div className="container">
            <div className="heading">
              <h2 className="heading__title">выбери направления</h2>
            </div>
            <div className="direction__body">
              {links.map((link) => (
                <Link
                  to={link.to}
                  style={{
                    background: `url(${link.background}) cover no-repeat`,
                  }}
                  key={link.title}
                  className="direction__link"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
        <HomeSteps />
        <HomeConsultation />
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
