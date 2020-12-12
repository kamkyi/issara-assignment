import { Card } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
import './ServiceProvider.css'
import { FaUserAlt,FaGlobe,FaRegEnvelope } from "react-icons/fa"

const ServiceProvider = (props) => {
    return (
        <div>
            <Card>
            <Card.Img height="230px" variant="top" src={props.logo} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        <FaRegEnvelope /> Email : <br />
                        {props.email ?
                            <a href={"mailto:" + props.email}>{props.email}</a>:'N/A'
                        }
                    </Card.Text>
                    <Card.Text>
                    <FaGlobe/> Website : <br/> <a href={props.website?? '#'}>{props.website?? 'N/A'}</a>
                    </Card.Text>
                    <h2>{Math.round(props.rating_score*10)/10}</h2> 
                    <ReactStars
                        count={5}
                        value={props.rating_score}
                        activeColor="#ffd700"
                    />
                    <Card.Text>
                    <FaUserAlt/> &nbsp;
                    {props.rating_count} total
                    </Card.Text>
            </Card.Body>
            </Card>
        </div>
    );
}

export default ServiceProvider;