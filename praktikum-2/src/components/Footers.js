import React from "react";

export default function Footer() {
  const footerStyle = {
    backgroundColor: "#007BFF",
    color: "#FFF",
    padding: "10px",
    textAlign: "center",
  };

  return (
    <div className="footer" style={footerStyle}>
      <div className="">
        <div className="">
          <span className="">2024 &copy;</span>
          <span className="">IBI Kesatuan Bogor</span>
        </div>
      </div>
    </div>
  );
}
