import React from "react";
import styled from "@emotion/styled";

const MemoBox = styled.div`
  border: 1px solid #ddd;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  background-color: #fafafa;
`;

const MemoTitle = styled.h3`
  margin: 0 0 0.5rem 0;
`;

const MemoContent = styled.p`
  margin: 0 0 0.75rem 0;
`;

const DeleteButton = styled.button`
  background-color: #ff4d4f;
  color: white;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  cursor: pointer;
`;

function MemoItem({ memo, onDelete }) {
  return (
    <MemoBox>
      <MemoTitle>{memo.title}</MemoTitle>
      <MemoContent>{memo.content}</MemoContent>
      <DeleteButton onClick={() => onDelete(memo.id)}>삭제</DeleteButton>
    </MemoBox>
  );
}

export default MemoItem;
