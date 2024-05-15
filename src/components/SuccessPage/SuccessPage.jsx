import React from "react";
import { Link } from "react-router-dom";

const SuccesPage = () => {
  return (
    <div className="successpage">
      <div className="container">
        <div className="successpage__body">
          <h1>Всё прошло успешно!</h1>
          <Link to={"/"}>На главную</Link>
        </div>
      </div>
    </div>
  );
};

export default SuccesPage;
