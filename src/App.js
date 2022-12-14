import "./styles.css";
import React, { useState } from "react";

var emojiDictionary = {
  "ð": "smiling",
  "ð": "enthusiastic feelings of love",
  "ðĪŠ": "Generally used to express silliness",
  "ðĪĐ":
    "May express that someone or something is amazing, fascinating, impressive, or exciting",
  "ð": "convey angelic behavior, e.g., doing good deeds.",
  "ð": "Hallowen",
  "ð":
    "Commonly used to convey mischief, naughtiness, and excitement or excellence",
  "ðĪĢ": " Rolling on the Floor Laughing Face",
  "ð": "Face Savouring Delicious Food, Yum Yum",
  "ðĪ":
    "dealing with money, including: making money, loving wealth, being or feeling rich, and concepts of success and excellence"
};

var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  function readText(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "This is not found in our data base!";
    }
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ color: "blue" }}>Inside Out</h1>
      <input onChange={readText} />
      <div> {meaning}</div>
      <h3> Emoji's we know </h3>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            placeholder="Enter emoji to know meaning"
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
