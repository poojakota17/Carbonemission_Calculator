import React, { Component } from 'react';
import './StaticPage.css';
import {
    Link
} from 'react-router-dom';
import { TwitterTimelineEmbed, TwitterHashtagButton, TwitterTweetEmbed } from 'react-twitter-embed';
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
                                <Card.Title>Renewable Energy</Card.Title>
                                <Card.Img variant="top" src="/images/renewable1.jpg" size="10"  />
                                <Card.Text>
                                    Using Renewable energies such as wind, hydro power helps reducing carbon footprint as it produce "No Greenhouse Gases".
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Card.Link href="https://www.epa.gov/statelocalenergy/local-renewable-energy-benefits-and-resources#:~:text=Environmental%20and%20economic%20benefits%20of,reducing%20dependence%20on%20imported%20fuels">Read More</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='myCard'>
                            <Card.Body>
                                <Card.Title>Solar Electricity </Card.Title>
                                <Card.Img variant="top" src="/images/solar1.jpg" rounded />
                                <Card.Text>
                                    Use Solar energy, its free and readily available. Install solar panels, cook food on Solar cooker!
                         </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Card.Link href="https://www.seia.org/initiatives/about-solar-energy#:~:text=Solar%20power%20is%20energy%20from,solar%20resources%20in%20the%20world.">Read More</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='myCard'>
                            <Card.Body>
                                <Card.Title>Go Vegan !</Card.Title>
                                <Card.Img variant="top" src="/images/vegan1.jpg" rounded />
                                <Card.Text>
                                    Eat more vegies, good for health and for environment. We can save Earth by avoifing eating meat, as it has big Carbon Footprint!
                                 </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Card.Link href="https://www.vegansociety.com/go-vegan/definition-veganism">Read More</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <br />
            <br />
            <Container>
                <Row>
                    <Col>
                        <Card className='myCard'>
                            <Card.Body>
                                <Card.Title>Recycle</Card.Title>
                                <Card.Img variant="top" src="/images/recycle1.jpg" rounded />
                                <Card.Text>
                                    We produce a lot of waste each year, we can reduce carbon emission by recycling things such as plastic, paper, cans, etc.
                                </Card.Text>
                                <Card.Link href="https://www.epa.gov/recycle/recycling-basics">Read More</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='myCard'>
                            <Card.Body>
                                <Card.Title>Reuse !!</Card.Title>
                                <Card.Img variant="top" src="/images/reuse1.jpg" rounded />
                                <Card.Text>
                                    Reuse bags, boxes, things which you think of throwing. Stop. Think. Be creative, reuse them to save Earth.
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Card.Link href="https://plastic.education/how-do-reusable-bags-help-the-environment/">Read More</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='myCard'>
                            <Card.Body>
                                <Card.Title>Reduce food waste
                                </Card.Title>
                                <Card.Img variant="top" src="/images/waste1.jfif" className="img" />
                                <Card.Text>
                                    Food waste, decayed food produces lots of Methane, and other harmful Greenhouse gases. So try to avoid food wastage. Make compost! Give back to mother nature.
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Card.Link href="https://www.worldwildlife.org/stories/fight-climate-change-by-preventing-food-waste#:~:text=But%20wasted%20food%20isn't,more%20potent%20than%20carbon%20dioxide.">Read More</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <br />
            <div>
            </div>
            <br />
            <br />
            <Container className="tweet">
                <Row>
                    <TwitterTimelineEmbed className="tweet"
                        sourceType="profile"
                        screenName="SavePlanetEart4"
                        options={{ height: 500, width: 1000 }}
                    />
                </Row>
                <Row>
                    <TwitterTimelineEmbed className="tweet"
                        sourceType="profile"
                        screenName="CarbonAcademy"
                        options={{ height: 500, width: 1000 }}
                    />
                </Row>
            </Container>
        </div>
    );
};




export default StaticPage;
