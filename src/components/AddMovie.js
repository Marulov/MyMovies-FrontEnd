import React from "react";
import serialize from "form-serialize" // urlde film bilgileri gözükmemesi için import ettik.

class AddMovie extends React.Component {

    
    handleFormSubmit = (event) => {
        // varsayılan form davranışını engelledik.
        event.preventDefault()
        
        const newMovie = serialize(event.target, {hash: true})
        //console.log(newMovie)
        this.props.onAddMovie(newMovie)
    }


  render() {
    return (
      <div className="container">
        <form className="mt-5" onSubmit={this.handleFormSubmit}>
          <input
            className="form-control"
            id="disabledInput"
            type="text"
            placeholder="Fill The Form To Add A Movie.."
            disabled
          />
          <div className="form-row row mt-2">
            <div className="form-group col-md-10">
              <label htmlFor="inputName">Name</label>
              <input type="text" className="form-control" name="name" />
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputRating">Rating</label>
              <input type="text" className="form-control" name="rating" />
            </div>
          </div>
          <div className="form-row row mt-2">
            <div className="form-group col-md-12">
              <label htmlFor="inputImage">Image URL</label>
              <input type="text" className="form-control" name="imageURL" />
            </div>
          </div>
          <div className="form-row row mt-2">
            <div className="form-group col-md-12">
              <label htmlFor="overviewTextarea">Overview</label>
              <textarea
                className="form-control"
                name="overview"
                rows="5"
              ></textarea>
            </div>
            <input
              type="submit"
              className="btn btn-danger btn-block p-1 mt-2"
              value="Add Movies"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default AddMovie;
