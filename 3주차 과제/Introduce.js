import React, { useState } from 'react';

function Introduce({name, age, hobby}){
    const favoriteFood = ['치킨','햄버거', '라면', '피자', '고기'];
    const [food, setFood] = useState(0);


    const foodChange = () => {
        setFood(nextFood => (nextFood + 1) % favoriteFood.length);
        
    }

    return (
        <div>
            <h2>이름: {name}</h2>
            <p>나이: {age}</p>
            <p>취미: {hobby}</p>
            <p>좋아하는 음식: {favoriteFood[food]}</p>
            <button onClick={foodChange}>음식 바꾸기</button>
        </div>
    )
}

export default Introduce;
