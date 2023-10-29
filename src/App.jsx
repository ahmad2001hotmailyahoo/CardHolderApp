import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import backgroudDesktop from "./assets/images/bg-main-desktop.png";
import bgCardFront from "./assets/images/bg-card-front.png";
import bgCardBack from "./assets/images/bg-card-back.png";

function App() {
  const [count, setCount] = useState(0);
  const SideBar = styled.div`
    background: url(${backgroudDesktop}) no-repeat;
    height: 100%;
    width: 400px;
  `;

  const CardFront = styled.div`
    background: url(${bgCardFront}) no-repeat;
    background-size: contain;
    height: 200px;
    width: 250px;
    position: relative;
    top: 140px;
    left: 250px;
  `;
  const CardBack = styled.div`
    background: url(${bgCardBack}) no-repeat;
    background-size: contain;
    position: relative;
    height: 200px;
    width: 250px;
    top: 113px;
    left: 280px;
  `;
  const Form = styled.div`
    margin:auto;
  `;
  const FormField = styled.div`
    margin-top: 15px;
    width:500px;
  `;
  const Button = styled.div`
    background: hsl(278, 68%, 11%);
    padding-top: 10px;
    padding-bottom:10px;
    text-align:center;
    color:white;
    width:100%;
  `

  const DateInput = styled.input`
    width:${props => (props.width? props.width : '200px')};
    display:inline-block;
    margin-right:8px;
  `
  return (
    <main className="main">
      <SideBar>
        <CardFront></CardFront>
        <CardBack></CardBack>
      </SideBar>
      <Form>
          <FormField>
            <label for="name">CARDHOLDER NAME</label>
            <input
              type="text"
              placeholder="eg. Jane Applessed"
              id="text"
            ></input>
          </FormField>
          <FormField>
            <label for="number">CARDHOLDER NUMBER</label>
            <input
              type="text"
              placeholder="1211 0000 1111 0000"
              id="number"
            ></input>
          </FormField>
          <FormField>
            <DateInput type = "text" id = "mm" className="date" placeholder="MM" width="20%"/>
            <DateInput type = "text" id = "year" className="date" placeholder="YY" width="20%"/>
            <TextField ></TextField>
          </FormField>
          <FormField>
            <Button>
              Confirm
            </Button>
          </FormField>
      </Form>
    </main>
  );
}

export default App;
