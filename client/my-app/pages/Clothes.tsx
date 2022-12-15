import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

import NavBar from './Navbar component/NavBar';
import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
export default function Clothes() {
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    filtrClothes();
  }, []);
  const filtrClothes = () => {
    axios
      .get(`http://localhost:8080/product/`)
      .then((data) => {
        setClothes(data.data.filter((e:any)=>e.category === 'clothes'));
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <NavBar />

      {clothes.map((e: any) => {
        return (
          <CardGroup id="groupitems" key={e._id}>
            <Card className="groupitemCard">
              <Card.Img variant="top" src={e.image} />
              <Card.Body>
                <Card.Title> {e.name} </Card.Title>
                <Card.Text>
                 {e.description}
                </Card.Text>
              </Card.Body>
              <h2>{e.price} dt</h2>

              <Button variant="outline-dark"> Buy me yarojla </Button>

              <Card.Footer>
                <small className="text-muted">{e.date_added}</small>
              </Card.Footer>
            </Card>
          </CardGroup>
        );
      })}
    </>
  );
}
