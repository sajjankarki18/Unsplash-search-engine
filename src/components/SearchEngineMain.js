import React, { Component } from 'react'

export class SearchEngineMain extends Component {
  capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  render() {
    const {imageUrl, desc, author, date, link} = this.props
    return (
        <>
          <div className="card">
             <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Image Info</h5>
              <p className="card-text">{this.capitalizeFirstLetter(desc)}</p>
            </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">By {this.capitalizeFirstLetter(author)}</li>
                <li className="list-group-item">Updated on {new Date(date).toGMTString()}</li>
              </ul>
              <div className="card-body">
                <a href={link} target='_black' className="card-link">View Image Source</a>
              </div>
          </div>  
        </>
        
    )
  }
}

export default SearchEngineMain
