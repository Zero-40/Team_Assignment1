import React from "react";
import NameChild from "./NameChild";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap';
class Nameparent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          categories: [
            {
              name: "Dairy",
              id: 1,
              linkUrl: "/dairy",
              rate:"$500",
              quantity: 1000,
              imageurl : "dairy.jpeg" ,
            },
            {
              name: "Veggies",
              id: 2,
              linkUrl: "/veggies",
              rate:"$1500",
              quantity: 10000,
              imageurl: "veggies.jpeg",
            },
            {
              name: "Fruits",
              id: 3,
              linkUrl: "/fruits",
              rate:"$200",
              quantity: 800,
              imageurl : "fruits.jpeg",
            },
            {
              name: "Soaps",
              id: 4,
              linkUrl: "/soaps",
              rate:"$200",
              quantity: 800,
              imageurl : "soap.jpeg",
            },
            {
              name: "Shampoo",
              id: 5,
              linkUrl: "/shampoo",
              rate:"$200",
              quantity: 800,
              imageurl : "shampoo.jpeg",
            },{
              name: "Plastic",
              id: 6,
              linkUrl: "/plastic",
              rate:"$200",
              quantity: 800,
              imageurl : "plastic.jpeg",
            }
          ],
        };
    }

    render() {
        return( <div className="directory-component">
             <Container>
                <Row>
            {
                this.state.categories.map(({name,rate,imageurl}) =>(
                   <>
                    <Col md="4" className="columns">
                   <NameChild nameofcategory={name} nameid={rate} productimageurl={imageurl}/>
                  </Col>
                   </>
                    
                ))
            }</Row></Container>
        </div>)
    }

}


export default Nameparent;