
import React from "react";
import {Container, Row,Col} from 'react-bootstrap'
import http from './helper/helper'

function App() {

  const [character,setChara] = React.useState({})

  const getChara = async () =>{
    const {data} = await http().get('./character')
    setChara(data)
  }

  React.useEffect(()=>{
    getChara()
  },[])

  return (
    <Container>
      <Row className="g-2">
        {character.results.map((characters)=>{
          return(
            <Col>
              <img className='img-fluid' src={characters.image} alt={characters.name} />
            </Col>
          )
        })}
      </Row>
    </Container>
  );
}




export default App;
