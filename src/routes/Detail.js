import React from "react";
import "./Detail.css";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if(location.state === undefined) {
            history.push("/");
        }
    }

    render() {
        const { location } = this.props;
        if (location.state) {
            console.log(location)
            return (
                <div className = "movieDetails">
                    <img src={location.state.poster} />
                    <h1 className="movieDetails__title">{location.state.title}</h1>
                    <h2>{location.state.year}</h2>
                    <p>{location.state.summary}</p>
                    <span>{location.state.genres}</span>
                </div>
            
            );
        } else {
            return null;
        }
    }
}

export default Detail;