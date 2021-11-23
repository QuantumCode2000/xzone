import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
const Contact = () => {
  return (
    <div>
      <Form>
        <Row>
          <Col>
            <Form.Control placeholder="First name" />
          </Col>
          <Col>
            <Form.Control placeholder="Last name" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Control placeholder="Email" />
          </Col>
          <Col>
            <Form.Control placeholder="City" />
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Mesagge</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button type="submit" className="mb-2">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
