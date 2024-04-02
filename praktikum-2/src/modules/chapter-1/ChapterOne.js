import React, { Component } from "react";
import MessagersUI from "../widgets/messagers/MessagersUI";

export default class ChapterOne extends Component {
  render() {
    return (
      <div>
        <h1 className="text-white mb-5">Chapter One: The messengers
        </h1>
        <MessagersUI />
      </div>
    );
  }
}
