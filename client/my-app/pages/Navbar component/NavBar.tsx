
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function NavBar() {
  
  const[searchView,setSearcView]=useState(false)

  const [smShow, setSmShow] = useState(false);



  return (
    <>
   <nav id="bigNav">
    <a id="ourLogo"><img src="/One Click Pick png.png"/></a>

    <nav id="secondaryNav">
      <ul>
        <li><a href="/ShoppingCart"><img src="cart.png" alt=""  className="favoriteImage"/></a></li>
        <li><a href="#"><img src="heart-png-16.png" alt="" className="favoriteImage" /></a></li>
      </ul>
    </nav>

    <nav className="searchNav">
      <ul>
        {searchView?<li><input type="text" className="inputSearch"/></li>:null}
        <li><a href="#"><img src="search-icon-png.png" alt=""onClick={()=>{setSearcView(true)}} /></a></li>
      </ul>
    </nav>

    <nav className="navbar">
      <ul>
        <li><a href="#"> Home </a></li>
        <li><a href="#"  onClick={() => setSmShow(true)}> Categories </a></li>
        <li><a href="#">About us</a></li>
        <li><a href="#"> Login </a></li>
      </ul>
    </nav>
   </nav>



<>
<Modal  className='toggleColor'
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            
            <h1 className='bold'>Categories</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='categorieHover'>
          <a href=""><h3>Clothes</h3></a>
          <a href=""><h3>Shoes</h3></a>
          <a href=""><h3>Accessories</h3></a>
          <h3 id="all">All</h3>
        </Modal.Body>
      </Modal>
</>
</>
  )
}
