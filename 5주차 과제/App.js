import React, { useRef, useState } from "react";
import MemoForm from "./components/MemoForm";
import MemoList from "./components/MemoList";
import styled from "@emotion/styled";

const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fffefc;
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1.5rem;
`;

function App() {
  const [memos, setMemos] = useState([]);
  const nextId = useRef(1);

  const AddMemo = (title, content) => {
    const newMemo = {
      id: nextId.current,
      title,
      content,
    };
    setMemos((prev) => [...prev, newMemo]);
    nextId.current += 1;
  };

  const DeleteMemo = (id) => {
    setMemos((prev) => prev.filter((memo) => memo.id !== id));
  };

  return (
    <Container>
      <Title>메모장</Title>
      <MemoForm onAddMemo={AddMemo} />
      <MemoList memos={memos} onDeleteMemo={DeleteMemo} />
    </Container>
  );
}

export default App;
