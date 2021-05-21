import axios from "axios";
import React from "react";

class EditMovie extends React.Component {
  state = {
    name: "",
    rating: "",
    overview: "",
    imageURL: "",
  };

  async componentDidMount() {
    const id = this.props.match.params.id;

    const response = await axios.get(`http://localhost:3002/movies/${id}`);

    this.setState({
      name: response.data.name,
      rating: response.data.rating,
      overview: response.data.overview,
      imageURL: response.data.imageURL,
    });
  }

  onInputChange = (event) => {
      this.setState({
          [event.target.name]: event.target.value
      })
  }

  handleFormSubmit = (event) => {
    // varsayılan form davranışını engelledik.
    event.preventDefault();

    // güncelleme işlemleri için
    const {name, rating, overview, imageURL} = this.state
    const id = this.props.match.params.id
    const updatedMovie = {
        name,
        rating,
        overview,
        imageURL
    }
    this.props.onEditMovie(id, updatedMovie)
    this.props.history.push("/")
  };

  render() {
    return (
      <div className="container">
        <form className="mt-5" onSubmit={this.handleFormSubmit}>
          <input
            className="form-control"
            id="disabledInput"
            type="text"
            placeholder="Fill The Form To Edit A Movie.."
            disabled
          />
          <div className="form-row row mt-2">
            <div className="form-group col-md-10">
              <label htmlFor="inputName">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.name}
                onChange={this.onInputChange}
              />
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputRating">Rating</label>
              <input
                type="text"
                className="form-control"
                name="rating"
                value={this.state.rating}
                onChange={this.onInputChange}
              />
            </div>
          </div>
          <div className="form-row row mt-2">
            <div className="form-group col-md-12">
              <label htmlFor="inputImage">Image URL</label>
              <input
                type="text"
                className="form-control"
                name="imageURL"
                value={this.state.imageURL}
                onChange={this.onInputChange}
              />
            </div>
          </div>
          <div className="form-row row mt-2">
            <div className="form-group col-md-12">
              <label htmlFor="overviewTextarea">Overview</label>
              <textarea
                className="form-control"
                name="overview"
                rows="5"
                value={this.state.overview}
                onChange={this.onInputChange}
              ></textarea>
            </div>
            <input
              type="submit"
              className="btn btn-danger btn-block p-1 mt-2"
              value="Edit Movies"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default EditMovie;
