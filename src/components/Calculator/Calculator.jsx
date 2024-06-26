import List from "../List/List";

const Calculator = ({ data, setInData, calcObj, imgDataForList }) => {
  return (
    <div className="calculator">
      {Object.keys(data).map((el) => (
        <div className="calculator__item" key={el}>
          <div className="calculator__item-icon">
            <img src={imgDataForList[el]?.src} alt="img" />
          </div>
          <div className="calculator__item-content">
            <h2>
              <p>{el}</p>
            </h2>
            <List
              data={data[el]}
              name={el}
              setInData={setInData}
              calcObj={calcObj}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Calculator;
