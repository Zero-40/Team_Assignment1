import React from "react";
import DealsChild from "./DealsChild";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap';
class Deals extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          categories: [
            {
              name: "dairy",
              id: 1,
              linkUrl: "/dairy",
              rate:500,
              quantity: 1000,
              imageurl : "dairy.jpeg" ,
              discount: "50%Off"
            },
            {
              name: "veggies",
              id: 2,
              linkUrl: "/veggies",
              rate:1500,
              quantity: 10000,
              imageurl: "veggies.jpeg",
              discount: "50%Off"
            },
            {
              name: "fruits",
              id: 3,
              linkUrl: "/fruits",
              rate:200,
              quantity: 800,
              imageurl : "fruits.jpeg",
              discount: "50%Off"
            },
            {
              name: "soaps",
              id: 4,
              linkUrl: "/soaps",
              rate:200,
              quantity: 800,
              imageurl : "soap.jpeg",
              discount: "50%Off"
            },
            {
              name: "shampoo",
              id: 5,
              linkUrl: "/shampoo",
              rate:200,
              quantity: 800,
              imageurl : "shampoo.jpeg",
              discount: "50%Off",
            },{
              name: "plastic",
              id: 6,
              linkUrl: "/plastic",
              rate:200,
              quantity: 800,
              imageurl : "plastic.jpeg",
              discount: "50%Off ",
            }
          ],
        };
    }

    render() {
        return( <div className="Deals-component">
            <h1 align="center"><span class="colorchange">Deals of the Day</span></h1>
             <Container>
                <Row>
            {
                this.state.categories.map(({name,id,imageurl,discount}) =>(
                   <>
                    <Col md="2" className="columns">
                   <DealsChild nameofcategory={name} nameid={id} productimageurl={imageurl} discountDISPLAY={discount}/>
                  </Col>
                   </>
                    
                ))
            }</Row></Container>
        </div>)
    }

}


export default Deals;