import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from 'react';

const Score = (props) => {
    const { day } = useParams();
    
    // 라우팅
    const history = useHistory();
  
    const [circle] = useState([0, 1, 2, 3, 4]);
    const [idx, setIdx] = useState();   
  
    return (
      <Container>
        <h1><Day>{day}</Day> 평점 남기기</h1>
          <Line>  
            { circle.map((e, i) => {
              return <Circle 
                key={i}
                onClick={() => {
                  setIdx(i)
                }}
                style={{backgroundColor: i <= idx ? 'blue' : '#ddd'}}
              />
              })
            }
          </Line>
        <button onClick={() => 
          history.push("/")
        }> 평점 남기기 </button>
      </Container>
    )
  }
  
  const Day = styled.span`
    background-color : #90CAF9;
    border: 1px solid #90CAF9;
    border-radius: 10px;
    color: white;
  `;
  
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    
    button {
      width: 150px;
      height: 60px;
      margin-top: 40px;
      border: 1px solid #90CAF9;
      border-radius: 5px;
      font-size: 20px;
      background-color: #90CAF9;
    }
  `;
  
  const Line = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `;
  
  const Circle = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 30px;
    margin: 5px;
    margin-top: 40px;
    }
  `;
  
  export default Score;