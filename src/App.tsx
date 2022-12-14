import React from "react";

import "./App.css";
import { useAppSelector } from "./hooks/reduxHooks";
import { Invoice } from "./components/Invoice";

function App() {
  const invoiceList = useAppSelector((state) => state.invoices.value);
  //for future inplementation \/
  /*const dispatch = useAppDispatch();*/
  return (
    <div className="container-fluid">
      {/* <div className="row bg-success">Navbar</div> */}
      <div className="row">
        <aside className="col-2 bg-primary">
          <p className="month">text</p>
          <p className="month">text</p>
          <p className="month">text</p>
          <p className="month">text</p>
          <p className="month">text</p>
          <p className="month">text</p>
        </aside>
        <div className="col-10 bg-danger text-center">
          <Invoice text="Text" />
        </div>
      </div>
    </div>
  );
}

export default App;
