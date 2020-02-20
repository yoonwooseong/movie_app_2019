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
                    <h2 className="movieDetails__year">{location.state.year}</h2>
                    <p className="movieDetails__summary">{location.state.summary}</p>
                    <span>{location.state.genres}</span>
                </div>
                /*
                genres 부분 map해서 위치 수정
                추가적인 영화 내용
                */
            );
        } else {
            return null;
        }
    }
}

export default Detail;