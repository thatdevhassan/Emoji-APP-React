import React, { useState } from "react";
import "./styles.css";

// creating an object

var emojiDictionary = {
  "😎": "Awesome",
  "😂": "Funny",
  "😲": "Wow",
  "😪": "Sad",
  "😋": "Yummy",
  "🤪": "Crazy"
};

// converting a dictionary into array using Object.keys() function.
var cvtObject = Object.keys(emojiDictionary);

export default function App() {
  // using use state
  const [textArea, setTextArea] = useState("");
  const [eClick, setEClick] = useState("");

  // first function start
  function textAreaHandler(event) {
    const mainValue = event.target.value;
    setTextArea(mainValue);

    // writing logic
    if (mainValue in emojiDictionary) {
      // console.log(emojiDictionary[mainValue]);
      setTextArea(emojiDictionary[mainValue]);
    }
    // ending if
    else {
      setTextArea("Not in our DataBase");
    }
    // ending else
  }
  // ----------------------------------------
  // ----------------------------------------
  // ----------------------------------------

  // new function(click emoji)

  function emojiClick(item) {
    setEClick(emojiDictionary[item]);
  }

  return (
    <div className="App">
      <h1>Emoji-App😎</h1>

      {/* text area start */}
      <input
        id="TextArea"
        onChange={textAreaHandler}
        placeholder="enter the emoji"
      ></input>
      <h1>{textArea}</h1>
      {/* emoji */}
      {/* <h1>{cvtObject}</h1> */}

      <h1>{eClick}</h1>
      <ul class="ul-li">
        {cvtObject.map(function (item, index) {
          return (
            <li class="list-inline" onClick={() => emojiClick(item)}>
              {" "}
              {item}{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
