import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

import NavBar from './Navbar component/NavBar.tsx';

import AppContext from './AppContext.js'
import {useState,useContext} from "react"

export default function Itemstemplate() {

  const test=useContext(AppContext)

  const data=test.test
  console.log(data)

  return (
    <>
    <NavBar/>
    
    {data.map((e)=>{
      return (
        <CardGroup id="groupitems">
      <Card className="groupitemCard">
        <Card.Img variant="top" src={e.image}   />
        <Card.Body>
          <Card.Title>  {e.marque}   </Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
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
