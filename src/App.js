import "./App.css";
import { useState } from "react";

function App() {
  const [text, setText] = useState([
    "남자 코트 추천",
    "강남 우동맛집",
    "파이썬 독학",
  ]);
  const [thumb, setThumb] = useState([0, 0, 0]);

  const like = (i) => {
    let copy = [...thumb];
    copy[i] = copy[i] + 1;
    setThumb(copy);
  };

  // const onClick = (event) => {
  //   event.stopPropagation();
  //   let copy = [...thumb];
  //   copy[index] = copy[index] + 1;
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

  const [title, setTitle] = useState(1);
  const [modal, setModal] = useState(false);
  const [inputValue, setInputValue] = useState("");

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
          <div className="list" key={index}>
            <h4
              onClick={() => {
                setModal(!modal);
                setTitle(index);
              }}
            >
              {text[index]}{" "}
              <span
                onClick={() => {
                  like(index);
                }}
              >
                👍
              </span>{" "}
              {thumb[index]}
            </h4>
            <p>5월 16일 발행</p>
            <button
              onClick={() => {
                let copy = [...text];
                copy.splice(index, 1);
                setText(copy);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
      <input
        type={"text"}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />
      <button
        onClick={() => {
          let copy = [...text];
          copy.unshift(inputValue);
          setText(copy);
        }}
      >
        발행
      </button>

      {modal ? <Modal subject={text} title={title} onChange={change} /> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.subject[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.onChange}>글수정</button>
    </div>
  );
}

export default App;
