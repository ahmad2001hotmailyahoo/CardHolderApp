import { useState } from "react";
import "./App.css";
import styled , {css} from "styled-components";
import backgroudDesktop from "./assets/images/bg-main-desktop.png";
import bgCardFront from "./assets/images/bg-card-front.png";
import bgCardBack from "./assets/images/bg-card-back.png";
function App() {
  const [count, setCount] = useState(0);
  const breakpoints = {
    small: '480px',
    medium: '768px',
    large: '992px',
    xlarge: '1200px',
  };

  const Main = styled.div`
    height: 100%;
    display: flex;
    ${props => css`
    @media (max-width: ${breakpoints.medium}) {
      display:block;
      height:200px;
      width:100%;
    }
    `}
  `;
  const SideBar = styled.div`
    background: url(${backgroudDesktop}) no-repeat;
    height: 100%;
    width: 400px;
    ${props => css`
    @media (max-width: ${breakpoints.xlarge}) {
      width: 300px;
      left: 0;
    }
    @media (max-width: ${breakpoints.large}) {
      width: 200px;
      left: 0;
    }
    @media (max-width: ${breakpoints.medium}) {
      display:block;
      height:100%;
      width:100%;
      background-size:cover;
    }
    `}
  `;

  const CardFront = styled.div`
    background: url(${bgCardFront}) no-repeat;
    background-size: contain;
    height: 200px;
    width: 250px;
    position: relative;
    top: 140px;
    left: 250px;
    ${props => css`
    @media (max-width: ${breakpoints.xlarge}) {
      left: 150px;
    }
    @media (max-width: ${breakpoints.large}) {
      left: 50px;
    }
    @media (max-width: ${breakpoints.medium}) {
      height: 120px;
      top:0%;
      left: 50%;
      transform:translateX(-70%)
    }
    `}
  `;
  const CardBack = styled.div`
    background: url(${bgCardBack}) no-repeat;
    background-size: contain;
    position: relative;
    height: 200px;
    width: 250px;
    top: 113px;
    left: 280px;
    ${props => css`
    @media (max-width: ${breakpoints.xlarge}) {
      left: 180px;
    }
    @media (max-width: ${breakpoints.large}) {
      left: 80px;
    }
    @media (max-width: ${breakpoints.medium}) {
      height: 120px;
      top:25%;
      left: 50%;
      transform:translateX(-50%)
    }
    `}
  `;
  const Form = styled.form`
    margin: auto;
    ${props => css`
    @media (max-width: ${breakpoints.medium}) {
      margin-top: 100px;
    }
    `}
  `;
  const FormField = styled.div`
    margin-top: 15px;
    width: 500px;
    display: ${(props) => (props.display ? props.display : "block")};
    ${props => css`
    @media (max-width: ${breakpoints.xlarge}) {
      width: 400px;
    }
    @media (max-width: ${breakpoints.large}) {
      width: 300px;
    }
    @media (max-width: ${breakpoints.medium}) {
      width:auto;
      margin: 40px;
    }
    `
    
  }
    `;
  const Button = styled.button`
    background: hsl(278, 68%, 11%);
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
    color: white;
    width: 100%;
    border-color:transparent;
  `;

  const DateField = styled.input`
    width: ${(props) => (props.width ? props.width : "200px")};
    display: inline-block;
    margin-right: 8px;
  `;

  const TextField = styled.input`
    width: ${(props) => (props.width ? props.width : "200px")};
    // width:auto;
    display: ${(props) => (props.display ? props.display : "block")};
    margin-top:10px;
    ${props => props.id == 'cvc'&&  css`
      @media (max-width: ${breakpoints.xlarge}) {
        width: 50%;
      }
      @media (max-width: ${breakpoints.large}) {
        width: 47.4749965667724%;
      }
      @media (max-width: ${breakpoints.medium}) {
        width: auto;
      }
      `}`;

  const Error = styled.div`
    width: ${(props) => (props.width ? props.width : "200px")};
    color:red;
    display:inline-block;
  `
  return (
    <Main>
      <SideBar>
        <CardBack></CardBack>
        <CardFront></CardFront>
      </SideBar>
      <Form>
        <FormField>
          <label htmlFor="name">CARDHOLDER NAME</label>
          <TextField
            type="text"
            id="name"
            placeholder="eg. Jane Applessed"
            width="98%"
            display="block"
          ></TextField>
          <Error width="100%">hello</Error>
        </FormField>
        <FormField>
          <label htmlFor="number">CARDHOLDER NUMBER</label>
          <TextField
            type="text"
            id="number"
            placeholder="1211 0000 1111 0000"
            width="98%"
            display="block"
          ></TextField>
          <Error width="100%">hello</Error>
        </FormField>
        <FormField
       
        >
          <DateField
            type="text"
            id="mm"
            className="date"
            placeholder="MM"
            width="20%"
          />
          <DateField
            type="text"
            id="year"
            className="date"
            placeholder="YY"
            width="20%"
          />
          <TextField
            type="text"
            id="cvc"
            placeholder="Eg. 1234"
            width="52%"
            display="inline-block"
          ></TextField>
          <Error width="46.2%">hello</Error>
          <Error width="46.2%">hello</Error>
        </FormField>
        <FormField>
          <Button>Confirm</Button>
        </FormField>
      </Form>
    </Main>
  );
}

export default App;
