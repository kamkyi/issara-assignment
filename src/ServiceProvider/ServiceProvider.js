const ServiceProvider = (props) => {
    return (
        <div>
            <h2>
                {props.name}
            </h2>
            <p>
               {props.email}
            </p>
            <p>
                {props.website}
            </p>
            <p>
                Rating: {props.rating_score}
            </p>
            <p>
                Rating Count: {props.rating_count}
            </p>
        </div>
    );
}

export default ServiceProvider;