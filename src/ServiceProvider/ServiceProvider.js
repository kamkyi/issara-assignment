import {Card} from 'react-bootstrap'
const ServiceProvider = (props) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.logo} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.email}
                    </Card.Text>
                    <Card.Text>
                    {props.website}
                    </Card.Text>
                    <Card.Text>
                    {props.rating}
                    </Card.Text>
                    <Card.Text>
                    {props.rating_count}
                    </Card.Text>
            </Card.Body>
            </Card>
        </div>
    );
}

export default ServiceProvider;