import { Typewriter } from 'react-simple-typewriter';
import { Card, Button } from "react-bootstrap";
import banner from "../assets/img9.jpg";

export const Banner = () => {
  return (
    <div className="banner">
        <Card className="text-white card">
            <Card.Img src={banner} alt="Card image"  />
            <Card.ImgOverlay className="col-xl-6 col-sm-8 col-12 text-start d-flex flex-column justify-content-center">
                <div className="align-items-center">
                    <Card.Title>
                        {' '}
                        <span>
                        <Typewriter
                            words={['Partnering Your Talent Growth', 'Open Minds, Open Doors', 'Local Recruitment', 'Foreign Recruitment']}
                            loop={5}
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                        </span>
                    </Card.Title>
                    <Card.Text className="my-4 text-start">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    </Card.Text>
                    <Button>Go somewhere</Button>
                </div>
            </Card.ImgOverlay>
        </Card>
    </div>
  )
}
