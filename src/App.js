import "./styles.css";
import React, { useState } from "react";

var emojiDictionary = {
  "😊": "smiling",
  "😍": "enthusiastic feelings of love",
  "🤪": "Generally used to express silliness",
  "🤩":
    "May express that someone or something is amazing, fascinating, impressive, or exciting",
  "😇": "convey angelic behavior, e.g., doing good deeds.",
  "🎃": "Hallowen",
  "😈":
    "Commonly used to convey mischief, naughtiness, and excitement or excellence",
  "🤣": " Rolling on the Floor Laughing Face",
  "😋": "Face Savouring Delicious Food, Yum Yum",
  "🤑":
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
