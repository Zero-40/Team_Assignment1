import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import './Mainbody.css';
class Mainbody extends React.Component {
  render() {
    return (
        <div className="Mainbody" id ="Mainid"> 
        <CardGroup>
        <Card style={{
    padding : '30px 30px 30px',
    border :'0px'
  }}>
  <Card style={{
    padding : '30px 30px 30px',
  }}><Card.Body>
      <Card.Title >3 INDUSTRIAL ROAD</Card.Title>
      <Card.Text>
        CHEBROLU,E.G
      </Card.Text>
    </Card.Body>
    <Card.Img variant="top" src="https://bit.ly/2YXEh4m"  />
    <Card.Body>
      <Card.Title>3 BHK</Card.Title>
      <Card.Text>
      This three bedroom house fully embraces a natural aesthetic. Not only does it use neutral browns and grays throughout, it features four separate outdoor patio areas.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">----------$125000----------</small>
    </Card.Footer>
  </Card></Card>
  
  <Card style={{
    padding : '30px 30px 30px',
    border :'0px'
  }}>
  <Card style={{
    padding : '30px 30px 30px',
    
  }}><Card.Body>
      <Card.Title>PRK BUILDING</Card.Title>
      <Card.Text>
      LAKKAVARAM,ONG
      </Card.Text>
    </Card.Body>
    <Card.Img variant="top" src="https://bit.ly/3lJGclJ" />
    <Card.Body>
      <Card.Title>3 BHK</Card.Title>
      <Card.Text>
      In a spacious design that would be perfect for roommates, this three bedroom house includes private baths for each room and a separate guest bath in the front hall.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">----------$525000----------</small>
    </Card.Footer>
  </Card></Card>
  <Card style={{
    padding : '30px 30px 30px',
    border :'0px'
  }}>
  <Card style={{
    padding : '30px 30px 30px', 
  }}><Card.Body>
      <Card.Title>NOVOTEL</Card.Title>
      <Card.Text>
       BENZ CIRCLE,VZA
      </Card.Text>
    </Card.Body>
    <Card.Img variant="top" src="https://bit.ly/3vi9MSd" />
    <Card.Body>
      <Card.Title>2 BHK</Card.Title>
      <Card.Text>
      This two bedroom house fully embraces a natural aesthetic. Not only does it use neutral browns and grays throughout, it features four separate outdoor patio areas.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">----------$405000----------</small>
    </Card.Footer>
  </Card></Card>
</CardGroup>
<CardGroup>
        <Card style={{
    padding : '30px 30px 30px',
    border :'0px'
  }}>
  <Card style={{
    padding : '30px 30px 30px',
  }}><Card.Body>
      <Card.Title>KARTHIK'S EXECUTIVE</Card.Title>
      <Card.Text>
        MUMBAI,IND
      </Card.Text>
    </Card.Body>
    <Card.Img variant="top" src="https://bit.ly/3FQRXi7" />
    <Card.Body>
      <Card.Title>3 BHK</Card.Title>
      <Card.Text>
      Another three bedroom layout from Astin Studios turns the largest bedroom into the lap of luxury with white marble floors, a conversation nook and a walk-in closet.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">----------$205000----------</small>
    </Card.Footer>
  </Card></Card>
  
  <Card style={{
    padding : '30px 30px 30px',
    border :'0px'
  }}>
  <Card style={{
    padding : '30px 30px 30px',
  }}><Card.Body>
      <Card.Title>ANTILIA</Card.Title>
      <Card.Text>
        BANGALORE,IND
      </Card.Text>
    </Card.Body>
    <Card.Img variant="top" src="https://bit.ly/3p6JKjO" />
    <Card.Body>
      <Card.Title>3 BHK</Card.Title>
      <Card.Text>
      Working with a small space than some of the other designs in this round up, this three bedroom apartment still has all the trappings of a comfortable, modern home. 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">----------$555000----------</small>
    </Card.Footer>
  </Card></Card>
  <Card style={{
    padding : '30px 30px 30px',
    border :'0px'
  }}>
  <Card style={{
    padding : '30px 30px 30px', 
  }}><Card.Body>
      <Card.Title>SRI BALAJI</Card.Title>
      <Card.Text>
        HYDERABAD,IND
      </Card.Text>
    </Card.Body>
    <Card.Img variant="top" src="https://bit.ly/3veGc0b" />
    <Card.Body>
      <Card.Title>3 BHK</Card.Title>
      <Card.Text>
      This small, three bedroom still leaves space for a larger family, fitting siblings in one back room. An outdoor dining area with deck chairs is perfect for warmer weather.
      </Card.Text>
    </Card.Body>
    <Card.Footer className="cardfooter">
      <small className="text-muted">----------$555555----------</small>
    </Card.Footer>
  </Card></Card>
</CardGroup>

     </div>
    );
  }
}
export default Mainbody;
