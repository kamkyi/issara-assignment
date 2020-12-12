import { Card } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
import './ServiceProvider.css'
import { FaUserAlt } from "react-icons/fa"

const ServiceProvider = (props) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img height="280px" variant="top" src={props.logo} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    Email : {props.email??'N/A'}
                    </Card.Text>
                    <Card.Text>
                    Website : {props.website?? 'N/A'}
                    </Card.Text>
                    <Card.Text>
                    <h2>{Math.round(props.rating_score*10)/10}</h2> 
                    <ReactStars
                        count={5}
                        value={props.rating_score}
                        activeColor="#ffd700"
                    />
                    </Card.Text>
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