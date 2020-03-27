import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if(location.state){
        return(
             <div className="detail__container">
                <h3 className="detail__title">{location.state.title}</h3>
                <h5 className="detail__year">{location.state.year}</h5>
                <div className="image__container">
                  <img src ={location.state.poster}/>
                </div>
                <div className="summary__container">
                  <p className="detail__summary">{location.state.summary.slice(0, 180)}...</p>
              
                </div>
              
            </div>
        )
    } else {
      return null;
    }
  }
}
export default Detail;