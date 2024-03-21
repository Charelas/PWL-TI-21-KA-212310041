import React, { Component } from "react";

export default class ChapterOne extends Component {
  render() {
    const style = {
      background: "linear-gradient(to bottom right, #007BFF, #32CD32)", // Gradasi warna biru dan hijau
      padding: "20px",
      borderRadius: "5px",
      color: "#FFF", // Warna teks putih agar cocok dengan latar belakang
    };

    return (
      <div style={style}>
        <h3>IBI Kesatuan</h3>
        <h4>Home - PWL</h4>
        <h1 className="text-center">Chapter One: The Beginning</h1>
      </div>
    );
  }
}
