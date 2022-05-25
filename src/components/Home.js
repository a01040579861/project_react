import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const Home = (props) => {
    const history = useHistory();
    const [ circle ] = useState([0, 1, 2, 3, 4]);
    const [ list ] = useState(['월', '화', '수', '목', '금', '토', '일']);
    const num = new Array(7).fill(0).map(() => Math.floor(Math.random() * 5));
    const avgNum = num.reduce((acc, cur) => acc + cur + 1, 0) / 7;
    const [avg, setAvg] = React.useState(avgNum.toFixed(1));
    const reset = () => setAvg("0.0");

      return (
        <>
        <Title>내 일주일은?</Title>
        {list.map((list, index) => {
            const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);
            const num = getRandom(0, 5);
            
            return (
              <Line key={index}>
                <h3>{list}</h3>
                { circle.map((i) => {
                  return <Circle
                  key={i}
                  style={{backgroundColor: i <= num ? 'blue' : '#ddd'}}
                  />
                })}
                <Move onClick={() => {
                  history.push("/score/" + list + "요일");
                }}/>
              </Line>
            )
        })}

        <HomeBox>
            <GPAText>평균 평점</GPAText>
            <Score>{avg}</Score>
            <StyledButton onClick={reset}>Reset</StyledButton>
        </HomeBox>
        </>
      );
    };

const Line = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 25px;
  h3 {
    padding: 5px;
    padding-right: 8px;
    background-color: #90CAF9;
    border-radius: 30px;
  }
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  background-color: #ddd;
  border-radius: 30px;
  margin: 5px;
`;

const Move = styled.div`
  width: 0px;
  height: 0px;
  border-bottom: 10px solid transparent;
  border-top: 10px solid transparent;
  border-left: 20px solid #311B92;
  border-right: 20px solid transparent;
  margin-left: 5px;
`;

const HomeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const GPAText = styled.p`
  font-size: 20px;
  font-weight: bolder;
  color: blue;
  margin-top: 0;
`;

const Score = styled.p`
  font-size: 20px;
  font-weight: bolder;
  color: #311B92;
  margin-top: 0;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 20px
`;

const StyledButton = styled.button`
    margin: 0;
    border: none;
    cursor: pointer;
    font-family: "Noto Sans KR", sans-serif;
    font-size: var(--button-font-size, 1rem);
    padding: var(--button-padding, 12px 16px);
    border-radius: var(--button-radius, 8px);
    background: var(--button-bg-color, #0d6efd);
    color: var(--button-color, #ffffff);
    margin-bottom: 5px;

    &:active,
    &:hover,
    &:focus {
    background: var(--button-hover-bg-color, #025ce2);
    }

    &:disabled {
    cursor: default;
    opacity: 0.5;
    background: var(--button-bg-color, #025ce2);
    }
`;

export default Home;