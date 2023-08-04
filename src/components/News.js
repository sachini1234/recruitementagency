import { CardGroup, Card } from "react-bootstrap";
import img1 from "../assets/img10.jpg";
import img2 from "../assets/img11.jpg";
import "./styles/style.css";

export const News = () => {
  return (
    <div className="latesetnews mt-5">
        <div className="news container">
            <div className="d-flex justify-content-between">
                <div>
                    <h2 className="mb-5 pb-3">Latest News</h2>
                </div>
                <div>
                    <a href="#" className="text-decoration-none">Read more</a>
                </div>
            </div>
            <div className="cardgroup">
                <CardGroup className="d-md-flex">
                    <Card className="card">
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                            <Card.Title>What is hybrid working?</Card.Title>
                            <Card.Text>
                                <p className="time">Last updated 3 mins ago</p>
                                <p>This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.</p>
                            </Card.Text>
                            <a href="#" className="text-decoration-none">Read more</a>
                        </Card.Body>
                    </Card>
                    <Card className="card mx-md-3">
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                            <Card.Title>Finance Recruitment Market Update</Card.Title>
                            <Card.Text>
                                <p className="time">Last updated 20 mins ago</p>
                                <p>This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.</p>
                            </Card.Text>
                            <a href="#" className="text-decoration-none">Read more</a>
                        </Card.Body>
                    </Card>
                    <Card className="card">
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                            <Card.Title>Procurement & Supply Chain Recruitment</Card.Title>
                            <Card.Text>
                                <p className="time">Last updated 46 mins ago</p>
                                <p>This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.</p>
                            </Card.Text>
                            <a href="#" className="text-decoration-none">View All</a>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
        </div>
    </div>
  )
}
