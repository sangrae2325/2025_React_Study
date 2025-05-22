import React from "react";
import MemoItem from "./MemoItem";

function MemoList({ memos, onDeleteMemo }) {
  return (
    <div>
      {memos.map((memo) => (
        <MemoItem key={memo.id} memo={memo} onDelete={onDeleteMemo} />
      ))}
    </div>
  );
}

export default MemoList;
