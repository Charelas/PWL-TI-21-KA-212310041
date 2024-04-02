import Footers from "./Footers";
import Headers from "./Headers";
import React from "react";

const LayoutInit = ({ children }) => {
  return (
    <div style={{ backgroundColor: "#10a5de", padding: "20px" }}>
      <div className="">
        <div className="">
          <Headers />

          <section className="">
            <div className="">{children}</div>
          </section>

          <Footers />
        </div>
      </div>
    </div>
  );
};

export default LayoutInit;
