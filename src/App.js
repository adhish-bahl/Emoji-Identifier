import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "⚠️": "Warning",
  "🚸": "Children Crossing",
  "⛔": "No Entry",
  "🚫": "Prohibited",
  "🚳": "No Bicycles",
  "🚭": "No Smoking",
  "🚯": "No Littering",
  "🚱": "Non-Potable Water",
  "🚷": "No Pedestrians",
  "📵": "No Mobile Phones",
  "🔞": "No One Under Eighteen",
  "☢️": "Radioactive",
  "☣️": "Biohazard"
};

var emojiList = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, displayMeaning] = useState("");

  function getInput(event) {
    var userInput = event.target.value;
    if (userInput in emojiDictionary) var meaning = emojiDictionary[userInput];
    else meaning = "The emoji entered, is not found in our database.";
    displayMeaning(meaning);
  }

  function clickHandler(item) {
    var meaningUser = emojiDictionary[item];
    displayMeaning(meaningUser);
  }

  function printList(item) {
    return (
      <span
        class="list"
        style={{ cursor: "pointer" }}
        onClick={() => clickHandler(item)}
      >
        {item}
      </span>
    );
  }

  return (
    <div className="App">
      <div class="heading">
        <h1>Emoji Identification Web-App</h1>
      </div>
      <div class="input">
        <h3>Type any emoji given below</h3>
        <input onChange={getInput} />
      </div>
      <div class="list1">
        <h3>You can also click on any emoji</h3>
        <p>{emojiList.map(printList)}</p>
      </div>
      <div class="output">
        <h2>Meaning:</h2>
        <p>{meaning}</p>
      </div>
    </div>
  );
}
