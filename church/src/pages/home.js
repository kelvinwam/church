import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import '../../src/index.css';
import Form from 'react-bootstrap/Form';


const Home = () => {
    return (
        <div>
            {/* Banner Section */}
            <div className="banner">
                <div className="banner-text">
                    <h1>GALATIANS 6:9</h1>
                    <p>Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.</p>
                    <h3>
                        Subscribe to our Newsletter
                    </h3>
                    <Form inline>
                        <Row>
                            <Col xs='center'>
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className=" mr-sm-2 " required/>
                            </Col>
                            <br /><br />
                            <Col xs='center'>
                                <Button type="submit">Subscribe</Button></Col>
                        </Row>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Home;
