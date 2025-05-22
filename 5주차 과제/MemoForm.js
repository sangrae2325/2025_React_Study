import React, { useState } from "react";
import styled from "@emotion/styled";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  padding: 0.5rem;
  font-size: 1rem;
  min-height: 80px;
`;

const Button = styled.button`
  align-self: flex-end;
  background-color: #007bff;
  color: white;
  padding: 0.5rem 1.25rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

function MemoForm({ onAddMemo }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const Submit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    onAddMemo(title, content);
    setTitle("");
    setContent("");
  };

  return (
    <Form onSubmit={Submit}>
      <Input
        type="text"
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Textarea
        name="content"
        placeholder="내용"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button type="submit">추가</Button>
    </Form>
  );
}
export default MemoForm;
