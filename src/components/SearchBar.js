import React from "react"

class SearchBar extends React.Component {
    
    // JSX in içine yazmak yerine böylede yazabiliyoruz.
    handleFormSubmit = (event) => {
        event.preventDefault()  //entera basılmamasını sağladık.
    }
    
    render() {
        return(
            <form onSubmit={this.handleFormSubmit} className="p-2" >
                <div className="form-row mb-5 row">
                    <div className="col-md-12">
                        <input 
                            onChange={this.props.searchMovieProp} 
                            type="text" className="form-control" 
                            placeholder="Search a movie"
                        />
                    </div>  
                </div>
            </form>
        )
    }
}

export default SearchBar