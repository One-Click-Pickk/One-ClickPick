import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

import NavBar from './Navbar component/NavBar.tsx';

import AppContext from './AppContext.js'
import {useState,useContext} from "react"
import productData from "./productDumyData.js"

export default function Itemstemplate() {

  const test=useContext(AppContext)

  const data=test.test
  console.log(data)

  return (
    <>
    <NavBar/>
    
    {productData.map((e)=>{
      return (
        <CardGroup id="groupitems">
      <Card className="groupitemCard">
        <Card.Img variant="top" src={e.image}   />
        <Card.Body>
          <Card.Title>  {e.name}   </Card.Title>
          <Card.Text>
            {e.description}
          </Card.Text>
          <h3 className="price">{e.price}</h3>
        </Card.Body>

        <Button variant="outline-dark"> Buy me yarojla </Button>
        
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      </CardGroup>
      )
      })}
    
    </>
  );
}
