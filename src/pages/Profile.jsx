import { Card, Row, Col, Form } from "react-bootstrap";
import me from "../assets/me.jpg"; // your photo

export default function Profile() {
  return (
    <>
      <Card className="card-lite card-peach p-3">
        <Row className="g-4">
          <Col md={3} className="text-center">
            <img
              src={me}
              alt="profile"
              style={{
                width: 160,
                height: 160,
                borderRadius: 999,
                objectFit: "cover",
                border: "1px solid #e5e7eb",
              }}
            />
          </Col>
          <Col md={9}>
            <h5 className="mb-3">Account Information</h5>
            <Row className="g-3">
              <Col md={6}>
                <Form.Label>Full Name</Form.Label>
                <Form.Control value="Rubai Raihan" readOnly />
              </Col>
              <Col md={6}>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  value="rushnal.cse.20230104143@aust.edu"
                  readOnly
                />
              </Col>
              <Col md={6}>
                <Form.Label>Date of Joining</Form.Label>
                <Form.Control value="Aug 15, 2025" readOnly />
              </Col>
              <Col md={6}>
                <Form.Label>Role</Form.Label>
                <Form.Control value="Web Developer" readOnly />
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </>
  );
}
