import React, { Component } from 'react';
//import { StaticPage } from '.';
import './StaticPage.css';
import {
    Link
} from 'react-router-dom';
//import { ReactComponent as Logo} from '../../logo.svg';
import { WNavBar } from '../../components/WNavBar'
import { Card, Button, ListGroup, ListGroupItem, Container, Row, Col, rounded } from 'react-bootstrap';

const StaticPage = props => {

    return (
        <div>
            <WNavBar />
            <h3 className='caption'>Little Steps towards better world !</h3>
            <Link to="/static">StaticPage</Link>
            <div className="class1"></div>
            <br />
            <Container>
                <Row>
                    <Col>
                        <Card className='myCard'>
                            <Card.Body>
                                <Card.Title>Renweable Energy</Card.Title>
                                <Card.Img variant="top" src="https://raw.githubusercontent.com/poojakota17/Carbonemission_Calculator/7af2a512075e1d2f6f7030cbc83f65a5f60c705e/logo.png" rounded />
                                <Card.Text>
                                    1
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>You save CO2e 13499 Kg/ Year</ListGroupItem>

                            </ListGroup>
                            <Card.Body>

                                <Card.Link href="https://www.epa.gov/statelocalenergy/local-renewable-energy-benefits-and-resources#:~:text=Environmental%20and%20economic%20benefits%20of,reducing%20dependence%20on%20imported%20fuels">Read More</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='myCard'>
                            <Card.Body>
                                <Card.Title>Recycle</Card.Title>
                                <Card.Img variant="top" src="holder.js/100px180" rounded />
                                <Card.Text>
                                    2
                                 </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>You save CO2e 13499 Kg/ Year</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="https://www.epa.gov/statelocalenergy/local-renewable-energy-benefits-and-resources#:~:text=Environmental%20and%20economic%20benefits%20of,reducing%20dependence%20on%20imported%20fuels">Read More</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='myCard'>
                            <Card.Body>
                                <Card.Title>Solar Electricity</Card.Title>
                                <Card.Img variant="top" src="holder.js/100px180" rounded />
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                 </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>You save CO2e 13499 Kg/ Year</ListGroupItem>

                            </ListGroup>
                            <Card.Body>

                                <Card.Link href="https://www.epa.gov/statelocalenergy/local-renewable-energy-benefits-and-resources#:~:text=Environmental%20and%20economic%20benefits%20of,reducing%20dependence%20on%20imported%20fuels">Read More</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <br/>
            <br/>
            <Container>
                <Row>
                    <Col>
                        <Card className='myCard'>
                            <Card.Body>
                                <Card.Title>Renweable Energy</Card.Title>
                                <Card.Img variant="top" src="https://raw.githubusercontent.com/poojakota17/Carbonemission_Calculator/7af2a512075e1d2f6f7030cbc83f65a5f60c705e/logo.png" rounded />
                                <Card.Text>
                                    1
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>You save CO2e 13499 Kg/ Year</ListGroupItem>

                            </ListGroup>
                            <Card.Body>

                                <Card.Link href="https://www.epa.gov/statelocalenergy/local-renewable-energy-benefits-and-resources#:~:text=Environmental%20and%20economic%20benefits%20of,reducing%20dependence%20on%20imported%20fuels">Read More</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='myCard'>
                            <Card.Body>
                                <Card.Title>Recycle</Card.Title>
                                <Card.Img variant="top" src="holder.js/100px180" rounded />
                                <Card.Text>
                                    2
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>You save CO2e 13499 Kg/ Year</ListGroupItem>

                            </ListGroup>
                            <Card.Body>

                                <Card.Link href="https://www.epa.gov/statelocalenergy/local-renewable-energy-benefits-and-resources#:~:text=Environmental%20and%20economic%20benefits%20of,reducing%20dependence%20on%20imported%20fuels">Read More</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='myCard'>
                            <Card.Body>
                                <Card.Title>Solar Electricity</Card.Title>
                                <Card.Img variant="top" src="holder.js/100px180" rounded />
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>You save CO2e 13499 Kg/ Year</ListGroupItem>

                            </ListGroup>
                            <Card.Body>

                                <Card.Link href="https://www.epa.gov/statelocalenergy/local-renewable-energy-benefits-and-resources#:~:text=Environmental%20and%20economic%20benefits%20of,reducing%20dependence%20on%20imported%20fuels">Read More</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        <br/>    
    </div>
    );
};




export default StaticPage;
