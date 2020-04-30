import React, { useState } from "react";

const InputElement = () => {
  const [inputText, setInputText] = useState("");
  const [historyList, setHistoryList] = useState([]);
  return (
    <div>
      <input
        name="email"
        onChange={(e) => {
          setInputText(e.target.value);
          setHistoryList([...historyList, e.target.value]);
        }}
        placeholder="hi"
      />{" "}
      <br />
      {inputText}
      <hr />
      <br />
      <ul>
        {historyList.map((rec) => (
          <div key={rec}>{rec}</div>
        ))}
      </ul>
    </div>
  );
};

export default InputElement;
