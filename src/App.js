import "./App.css";
import { useState } from "react";

function App() {
  const [text, setText] = useState([
    "남자 코트 추천",
    "강남 우동맛집",
    "파이썬 독학",
  ]);
  const [thumb, setThumb] = useState([0, 0, 0]);
  // const like = (i) => {
  //   let copy = [...thumb];
  //   copy[i] = copy[i] + 1;
  //   setThumb(copy);
  // };
  const change = () => {
    // 1. make copy
    const copy = text.slice();
    // 2. copy[0] = value;
    copy[0] = "여자 코트 추천";
    // 3. text -> copy replace
    // state direct
    setText(copy);
  };
  const sort = () => {
    const copy = [...text];
    copy.sort();
    setText(copy);
  };

  const [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div>
        <h4 className="black-nav">블로그</h4>
      </div>
      <button onClick={sort}>가나다순 정렬</button>
      <button onClick={change}>글 바꿈</button>
      {/* <div className="list">
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
        <h4 onClick={() => setModal(!modal)}>{text[2]}</h4>
        <p>5월 16일 발행</p>
      </div> */}
      {text.map(function (subject, index) {
        return (
          <div className="list">
            <h4 onClick={() => setModal(!modal)}>
              {text[index]}{" "}
              <span
                onClick={() => {
                  let copy = [...thumb];
                  copy[index] = copy[index] + 1;
                  setThumb(copy);
                }}
              >
                👍
              </span>{" "}
              {thumb[index]}
            </h4>
            <p>5월 16일 발행</p>
          </div>
        );
      })}
      {modal ? <Modal /> : null}
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
