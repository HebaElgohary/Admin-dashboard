import React from 'react'
 import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from '../../styles/footer.module.css'
export  function Footer() {

  return (
   
    <Card style={{marginTop:'auto',width:'100%'}}  >
      {/* <Card.Header as="h5">Featured</Card.Header> */}
      <Card.Body className='bg-dark text-warning'>
        <Card.Title>Designed by Heba Elgohary</Card.Title>
        <Card.Text className='text-light'>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="danger m-3">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

  
