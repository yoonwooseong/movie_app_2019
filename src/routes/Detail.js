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
                <div>
                    <span>{location.state.title}</span>
                    <span>{location.state.year}</span>
                    <span>{location.state.rating}</span>
                    <span>{location.state.title}</span>
                </div>
            
            );
        } else {
            return null;
        }
    }
}

export default Detail;