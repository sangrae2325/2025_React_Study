import React from "react";

import Introduce from "./Introduce";

function App() {
  const style = {
    border: '1px solid #ddd',
    padding: '20px',
    borderRadius: '10px',
    width: '150px',
    height: '250px'
  }

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    flexDirection: 'column'
  };
  return(
    <div style={containerStyle}>
      <h1>자기소개 카드</h1>
      <div style={style}>
        <Introduce name="이상래" age="23" hobby="독서" />
      </div>
      
    </div>
  )
}

export default App;
