import { useEffect, useState } from "react";
import "./App.css";
import styled , {css} from "styled-components";
import backgroudDesktop from "./assets/images/bg-main-desktop.png";
import bgCardFront from "./assets/images/bg-card-front.png";
import bgCardBack from "./assets/images/bg-card-back.png";
function App() {
  const [showForm, setShowForm] = useState(true);
  const [initialized,setInitialized] = useState(true);

  const [formDetails,setFormDetails] = useState(
    {
      "cardName":"",
      "cardNumber":"",
      "cvc":"",
      "month":"",
      "year":""
    }
  );

  const [error,setError] = useState(
    {
      "cardNameError":"",
      "cardNumberError":"",
      "cvcError":"",
      "monthError":"",
      "yearError":"",
    }
  );

    useEffect(()=>{
      if(!initialized){
        setError({
          ...error,
          "cardNameError":
          formDetails.cardName == ''?"card name can't be empty":
          !formDetails.cardName.match(/^[a-zA-Z]+$/i)?"card name can have only have letters":"",
          "cardNumberError":  
          formDetails.cardNumber == ''?"card number can't be empty":
          !formDetails.cardNumber.match(/^[0-9 ]+$/i)?"card number can have only have numbers":"",
          "monthError":
          formDetails.month == ''?"month can't be empty":
          ( formDetails.month == '0' || 
            formDetails.month == '1' || 
            formDetails.month == '2' ||
            formDetails.month == '3' ||
            formDetails.month == '4' ||
            formDetails.month == '5' ||
            formDetails.month == '6' ||
            formDetails.month == '7' ||
            formDetails.month == '8' ||
            formDetails.month == '9' ||
            formDetails.month == '10' ||
            formDetails.month == '11' ||
            formDetails.month == '12') ?"":"month must be valid integer between 1 and 12",
            "yearError":
            formDetails.year == ''?"year can't be empty":
            !formDetails.year.match(/^[0-9]+$/i)?"year can't contain letters":
            ( parseInt(formDetails.year) >= 1950 && parseInt(formDetails.year) <= 2050)?
            "":"year must be between 1950 and 2050",
            "cvcError":
            formDetails.cvc == ''?"Cvc can't be empty":
            !formDetails.cvc.match(/^[0-9]+$/i)?"Cvc must be integer":""     
        })
      }
        setInitialized(false);
    },[formDetails])

  
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
      height:250px;
      width:250px;
      top:-65%;
      left: 30%;
      transform:translateX(-30%)
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
      left: 50%;
    }
    @media (max-width: ${breakpoints.medium}) {
      height:250px;
      width:250px;
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

  const ThankYouCard = styled.form`
    width:400px;
    margin:auto;
    text-align:center;
    @media (max-width: ${breakpoints.xlarge}) {
      width:300px;
    }
    @media (max-width: ${breakpoints.medium}) {
      margin-top:100px;
    }
  `

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
    cursor:pointer;
  `;

  const DateField = styled.input`
    width: ${(props) => (props.width ? props.width : "200px")};
    display: inline-block;
    margin-right: 8px;
  `;

  const TextField = styled.input`
    width: ${(props) => (props.width ? props.width : "200px")};
    display: ${(props) => (props.display ? props.display : "block")};
    margin-top:10px;
    ${props => props.id == 'cvc'&&  css`
      @media (max-width: ${breakpoints.xlarge}) {
        width: 50%;
      }
      @media (max-width: 992px) {
        width: 46.5%;
      }
      @media (max-width: ${breakpoints.medium}) {
        width: 52.5%;
      }
      @media (max-width: 616px) {
        width: 52%;
      }
      @media (max-width: 579px) {
        width: 51%;
      }
      @media (max-width: 524px) {
        width: 50.5%;
      }
      @media (max-width: 503px) {
        width: 50%;
      }
      @media (max-width: 478px) {
        width: 49%;
      }
      @media (max-width: 444px) {
        width: 48%;
      }
      @media (max-width: 419px) {
        width: 47%;
      }
      @media (max-width: 388px) {
        width: 46%;
      }
      @media (max-width: 368px) {
        width: 45%;
      }
      @media (max-width: 346px) {
        width: 44%;
      }
      @media (max-width: 332px) {
        width: 43%;
      }
      @media (max-width: 332px) {
        width: 42%;
      }
      @media (max-width: 300px) {
        width: 38%;
      }
      `}`;

  const Error = styled.div`
    width: ${(props) => ((props.width) ? props.width : "200px")};
    color:red;
    display:inline-block;
    vertical-align:top;
    ${props => props.id == 'date'&&  css`
      @media (max-width: 1200px) {
        width: 47.5%;
      }
      @media (max-width: 992px) {
        width: 51%;
      }
      @media (max-width: 768px) {
        width: 44.7%;
      }
      @media (max-width: 720px) {
        width: 45%;
      }
      @media (max-width: 698px) {
        width: 45.5%;
      }
      @media (max-width: 640px) {
        width: 45.8%;
      }
      @media (max-width: 618px) {
        width: 46%;
      }
      @media (max-width: 604px) {
        width: 46.2%;
      }
      @media (max-width: 576px) {
        width: 46.6%;
      }
      @media (max-width: 546px) {
        width: 47%;
      }
      @media (max-width: 522px) {
        width: 47.7%;
      }
      @media (max-width: 480px) {
        width: 48.5%;
      }
      @media (max-width: 468px) {
        width: 48.9%;
      }
      @media (max-width: 436px) {
        width: 49.9%;
      }
      @media (max-width: 404px) {
        width: 51%;
      }
      @media (max-width: 370px) {
        width: 52.3%;
      }
      @media (max-width: 344px) {
        width: 53.3%;
      }
      @media (max-width: 330px) {
        width: 53.6%;
      }
      @media (max-width: 306px) {
        width: auto;
      }
      `
    }
    `



  const onSubmitHandler = (e) => {
    e.preventDefault();
      if(error.cardNameError == "" && error.cardNumberError == "" &&  error.cvcError == "" && error.monthError == "" && error.yearError  == ""){
        setShowForm(false) 
      }
  }

  
  return ( 
    <Main>
      <SideBar>
        <CardBack></CardBack>
        <CardFront></CardFront>
      </SideBar>
      {showForm ?
      <Form onSubmit={(e) => onSubmitHandler(e)}>
        <FormField>
          <label htmlFor="name">CARDHOLDER NAME</label>
          <TextField
            type="text"
            id="name"
            placeholder="eg. Jane Applessed"
            width="98%"
            display="block"
            value={formDetails.cardName}
            onChange={(e)=>{
              setFormDetails({...formDetails,"cardName":e.target.value})
            }}
          ></TextField>
          <Error width="100%">{error.cardNameError}</Error>
        </FormField>
        <FormField>
          <label htmlFor="number">CARDHOLDER NUMBER</label>
          <TextField
            type="text"
            id="number"
            placeholder="1211 0000 1111 0000"
            width="98%"
            display="block"
            value={formDetails.cardNumber}
            onChange={(e)=>{
              setFormDetails({...formDetails,"cardNumber":e.target.value})
            }}
          ></TextField>
          <Error width="100%">{error.cardNumberError}</Error>
        </FormField>
        <FormField>
          <DateField
            type="text"
            id="mm"
            className="date"
            placeholder="MM"
            width="20%"
            value={formDetails.month}
            onChange={(e)=>{
              setFormDetails({...formDetails,"month":e.target.value})
            }}
          />
          <DateField
            type="text"
            id="year"
            className="date"
            placeholder="YY"
            width="20%"
            value={formDetails.year}
            onChange={(e)=>{
              setFormDetails({...formDetails,"year":e.target.value})
            }}
          />
          <TextField
            type="text"
            id="cvc"
            placeholder="Eg. 1234"
            width="52%"
            display="inline-block"
            value={formDetails.cvc}
            onChange={(e)=>{
              setFormDetails({...formDetails,"cvc":e.target.value})
            }}
          ></TextField>
          <Error width="46.4%" id ="date">{error.monthError} {error.yearError}</Error>
          <Error width="46.2%">{error.cvcError}</Error>
        </FormField>
        <FormField>
          <Button>Confirm</Button>
        </FormField>
      </Form>
      :(<ThankYouCard>
          <h1>Thank You!</h1>
          <p>We've added your card details</p>
          <Button onClick={()=>setShowForm(true)}>Continue</Button>
        </ThankYouCard>
      )
      }
    </Main>
    
  );
}

export default App;
