import { Component } from "react";

export default class Carousel extends Component {
  state = {
    active: 0,
  };
  static defaultProps = {
    images: ["https://pets-images.dev-apis.com/pets/none.jpg"],
  };
  render() {
    const { images } = this.props;
    const { active } = this.state;
    return (
      <div className="carousel">
        <img src={images[active]} alt={this.props.title} />
        <h2>{this.props.title}</h2>
        <div className="carousel-smaller">
          {images.map((images, index) => (
            <img
              key={index}
              src={images}
              alt={this.props.title}
              onClick={() => this.setState({ active: index })}
              className={index === active ? "active" : ""}
            />
          ))}
        </div>
      </div>
    );
  }
}
