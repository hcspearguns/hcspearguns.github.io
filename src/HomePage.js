import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row>
            <Col md={12} className="text-center">
              <h1>Welcome to Hammer Spearguns</h1>
              <p>Your Source for High-Quality Spearguns</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Product Section */}
      <section className="product-section">
        <Container>
          <Row>
            <Col md={6}>
              <h2>Hali Hammer Midhandle Speargun</h2>
              <ul>
                <li>Length: 33"</li>
                <li>Wood: African Mahogany</li>
                <li>Finish: Multi-Coat Epoxy</li>
                <li>Shaft: 7mm Diameter Single Flopper</li>
                <li>Bands: 14mm Small ID x 2</li>
              </ul>
            </Col>
            <Col md={6}>
              <Image src="path_to_product_image" alt="Hali Hammer Speargun" fluid />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <Container>
          <Row>
            <Col md={6}>
              <h3>Carbon Fiber Remote Trigger</h3>
              <p>Experience precise control with our advanced carbon fiber remote trigger.</p>
            </Col>
            <Col md={6}>
              <Image src="path_to_trigger_image" alt="Carbon Fiber Remote Trigger" fluid />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <h3>Neptonics Reef Mech</h3>
              <p>Equipped with the Neptonics Reef Mech for reliable and smooth firing underwater.</p>
            </Col>
            <Col md={6}>
              <Image src="path_to_reef_mech_image" alt="Neptonics Reef Mech" fluid />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <h3>Billet Anodized Aluminum AR Handle Frame</h3>
              <p>Our speargun features a durable and ergonomic AR handle frame for comfortable grip.</p>
            </Col>
            <Col md={6}>
              <Image src="path_to_handle_frame_image" alt="AR Handle Frame" fluid />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <h3>Perfect Ballast without Lead</h3>
              <p>Experience optimal balance and buoyancy without the need for lead ballast.</p>
            </Col>
            <Col md={6}>
              <Image src="path_to_ballast_image" alt="Perfect Ballast" fluid />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;
