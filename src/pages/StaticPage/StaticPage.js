import React, { Component } from 'react';
//import { StaticPage } from '.';
import './StaticPage.css';
import {
    Link
} from 'react-router-dom';
//import { ReactComponent as Logo} from '../../logo.svg';
import { WNavBar } from '../../components/WNavBar'
//import Twit from 'twit';
//import dotenv from dotenv;
import { Card, Button, ListGroup, ListGroupItem, Container, Row, Col, rounded } from 'react-bootstrap';


/*var client = new Twit({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  }); */

const StaticPage = props => {
   // T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function(err, data, response) {
     //   console.log(data)
     // })

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
                                <Card.Img variant="top" src="/images/renewable.jpg" rounded />
                                <Card.Text>
                                    Wind Energy, Hydro Energy, these are renewable energies
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>You save CO2e </ListGroupItem>

                            </ListGroup>
                            <Card.Body>

                                <Card.Link href="https://www.epa.gov/statelocalenergy/local-renewable-energy-benefits-and-resources#:~:text=Environmental%20and%20economic%20benefits%20of,reducing%20dependence%20on%20imported%20fuels">Read More</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='myCard'>
                            <Card.Body>
                                <Card.Title>Solar Energy</Card.Title>
                                <Card.Img variant="top" src="/images/solar.jpg" rounded />
                                <Card.Text>
                                    Use Solar energy, its free and readily available. Install solar panels.
                                 </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Use solar Energy</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="https://www.seia.org/initiatives/about-solar-energy#:~:text=Solar%20power%20is%20energy%20from,solar%20resources%20in%20the%20world.">Read More</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='myCard'>
                            <Card.Body>
                                <Card.Title>Go Vegan</Card.Title>
                                <Card.Img variant="top" src="/images/vegan.jpg" rounded />
                                <Card.Text>
                                    Go vegan! Reduce meat comsumption !
                                 </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>You save CO2e 13499 Kg/ Year</ListGroupItem>

                            </ListGroup>
                            <Card.Body>

                                <Card.Link href="https://www.vegansociety.com/go-vegan/definition-veganism">Read More</Card.Link>
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
                                <Card.Title>Recycle</Card.Title>
                                <Card.Img variant="top" src="/images/recycle.jpg" rounded />
                                <Card.Text>
                                    1
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>You save CO2e 13499 Kg/ Year</ListGroupItem>

                            </ListGroup>
                            <Card.Body>

                                <Card.Link href="https://www.epa.gov/recycle/recycling-basics">Read More</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='myCard'>
                            <Card.Body>
                                <Card.Title>Reuse</Card.Title>
                                <Card.Img variant="top" src="/images/reuse.jpg" rounded />
                                <Card.Text>
                                    2
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>You Save :</ListGroupItem>

                            </ListGroup>
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
                                <Card.Img variant="top" src="/images/waste.jpg" rounded />
                                <Card.Text>
                                    Food waste produces most of the green house gases, please avoid food waste
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>You save CO2e:    / Year</ListGroupItem>

                            </ListGroup>
                            <Card.Body>

                                <Card.Link href="https://www.worldwildlife.org/stories/fight-climate-change-by-preventing-food-waste#:~:text=But%20wasted%20food%20isn't,more%20potent%20than%20carbon%20dioxide.">Read More</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        <br/>  
        <div> 
       
        </div> 
<br/>
<div>
<script src="https://apps.elfsight.com/p/platform.js" defer></script>
<div class="elfsight-app-0d1cd714-8c4e-493e-9ff4-cf2e9f022f3e"></div>
</div>
    </div>
    );
};




export default StaticPage;
