import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const VisitingTheMet = ({ handleSubmit, handleChange, searchString }) => {
    return (
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group>
              <Form.Control
                size="sm"
                placeholder="Object ID"
                type="text"
                name="searchString"
                required
                onChange={handleChange}
                value={searchString}
              />
            </Form.Group>
            <Form.Text className="text-muted">
            Type the Id Number in front of the object 
            </Form.Text>
          </Col>
          <Col md="auto">
            <Button type="submit" variant="dark" className="btn-sm">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    );
  };





export default VisitingTheMet;