import "./App.css";
import { useState } from "react";

function App() {
  const [text, setText] = useState([
    "남자 코트 추천",
    "강남 우동맛집",
    "파이썬 독학",
  ]);
  const [thumb, setThumb] = useState(0);
  const like = () => setThumb(thumb + 1);
  const change = () => {
    // 1. make copy
    const copy = text.slice();
    // 2. copy[0] = value;
    copy[0] = "여자 코트 추천";
    // 3. text -> copy replace
    // state direct
    setText(copy);
  };
  console.log(text);

  return (
    <div className="App">
      <div>
        <h4 className="black-nav">블로그</h4>
      </div>
      <button onClick={change}>글 바꿈</button>
      <div className="list">
        <h4>
          {text[0]} <span onClick={like}>👍</span> {thumb}
        </h4>
        <p>5월 16일 발행</p>
      </div>
      <div className="list">
        <h4>{text[1]}</h4>
        <p>5월 16일 발행</p>
      </div>
      <div className="list">
        <h4>{text[2]}</h4>
        <p>5월 16일 발행</p>
      </div>
    </div>
  );
}

export default App;
