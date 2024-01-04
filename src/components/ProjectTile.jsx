import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ProjectTile({ img, title, description, view, code }) {
  return (
    <Col>
      <Card className='d-flex flex-column justify-content-between shadow rounded-5 p-3 mb-5 card-hover ' style={{ width: '18rem', height: '500px'}}>
        <Card.Img variant="top" src={img} className='img-fluid' />
        <Card.Body className='d-flex flex-column mt-2'>
          <Card.Title className='text-center'>{title}</Card.Title>
          <Card.Text style={{ textAlign: 'justify', flex: 1 ,marginTop:"3px"}}>
            {description}
          </Card.Text>
           <div className='mt-auto'>
            <Link to={view} target="_blank" style={{marginLeft:"40px"}}><Button variant="warning ">View</Button></Link>
            &nbsp; &nbsp;
            <Link to={code} target='_blank'><Button variant="info">Code</Button></Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProjectTile;
