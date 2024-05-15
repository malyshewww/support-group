import React, { useEffect, useState } from "react";
import { formatPrice } from "../../helpers/helper";
import { useNavigate } from "react-router-dom";
import backImg from "../../img/icons/navigation/back.png";

const CartPage = ({
  summaryData,
  addDataToFirebase,
  removeItemFromData,
  removeObjectFromData,
}) => {
  const [resData, setResData] = useState(summaryData);
  const [numberOfServices, setNumberOfServices] = useState(0);
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setResData(summaryData);
    const count = countProperties(resData);
    setNumberOfServices((prev) => (prev = count));
    const fullPrice = countPrice(resData);
    setPrice((prev) => (prev = fullPrice));
  }, [summaryData, resData]);

  const countProperties = (obj) => {
    let count = 0;
    for (let el in obj) {
      for (let key in obj[el]) {
        if (key !== "summary") {
          count++;
        }
      }
    }
    return count;
  };

  const countPrice = (obj) => {
    return Object.keys(obj).reduce((acc, el) => {
      return (acc += obj[el]["summary"]);
    }, 0);
  };

  return (
    <div className="cartpage">
      <div className="container">
        <div className="cartpage__body">
          <div className="back" onClick={() => navigate(-1)}>
            <img src={backImg} alt="Вернуться" />
          </div>
          <div className="cartpage-block">
            {Object.keys(resData).map((el) => (
              <div className="cartpage__item">
                <div className="cartpage__additional">
                  <button onClick={() => removeObjectFromData(resData[el])}>
                    Удалить из корзины
                  </button>
                </div>
                <ul>
                  {Object.keys(resData[el]).map((key, index) => {
                    if (key === "summary") {
                      return "";
                    }
                    return (
                      <li key={key + index}>
                        <h2 className="cartpage__item-title">
                          <span>{key}</span>
                          {key !== "Тип бизнеса" ? (
                            <span
                              className="cartpage__item-delete"
                              onClick={() =>
                                removeItemFromData(resData[el], key)
                              }
                            >
                              Удалить
                            </span>
                          ) : (
                            ""
                          )}
                        </h2>
                        <p>
                          <span>{resData[el][key]?.name}</span>
                          <span>{formatPrice(resData[el][key]?.price)}</span>
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
          <div className="cartpage__summary">
            <h2>Итого:</h2>
            <p>
              <span>{numberOfServices} услуг</span>

              <span>{formatPrice(price)}</span>
            </p>
            <button
              onClick={() => {
                addDataToFirebase(summaryData);
                navigate("/success");
              }}
            >
              Оплатить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
