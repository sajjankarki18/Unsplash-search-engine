import React, { Component } from 'react'
import SearchEngineMain from './SearchEngineMain'
import Spinner from './Spinner'

export class Searchcomponents extends Component {  
  capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
    constructor(props){
        super(props)
        this.state = {
            results: [ ],
            imageName: '',
            page: 1,
            loading: false
        }
    }
    async componentDidMount(){
        this.handleClick()
    }
    handleChange = (event) => {
        this.setState({
            imageName: event.target.value
        })
    }
    handleClick = async() => {
        const apiKEY = 'PffUGopWT0EKRSSXhD0DncdXfCZm0Firpv9VYaNK3fs'
        const apiURL = `https://api.unsplash.com/search/photos?page=1&per_page=${this.props.pageSize}&query=${this.state.imageName}&client_id=${apiKEY}`
        const data = await fetch(apiURL)
        const parsedData = await data.json()
        
        this.setState({
            results: parsedData.results,
            imageName: this.state.imageName
        })
        document.title = `${this.capitalizeFirstLetter(this.state.imageName)}  Unsplash Images`
    }
     handlePrevClick = async() => {
      const apiKEY = 'PffUGopWT0EKRSSXhD0DncdXfCZm0Firpv9VYaNK3fs'
      const apiURL = `https://api.unsplash.com/search/photos?page=${this.state.page - 1}&per_page=${this.props.pageSize}&query=${this.state.imageName}&client_id=${apiKEY}`
      this.setState({loading: true})
      const data = await fetch(apiURL)
      const parsedData = await data.json()
      
      this.setState({
          results: parsedData.results,
          imageName: this.state.imageName,
          page: this.state.page - 1,
          loading: false
      })
    }
    handleNextClick = async() => {
      const apiKEY = 'PffUGopWT0EKRSSXhD0DncdXfCZm0Firpv9VYaNK3fs'
      const apiURL = `https://api.unsplash.com/search/photos?page=${this.state.page + 1}&per_page=${this.props.pageSize}&query=${this.state.imageName}&client_id=${apiKEY}`
      this.setState({loading: true})
      const data = await fetch(apiURL)
      const parsedData = await data.json()
      
      this.setState({
          results: parsedData.results,
          imageName: this.state.imageName,
          page: this.state.page + 1,
          loading: false
      })
    }
  render() {
    return (
      <div className='container'>
      <h2 className='text-center' style={{marginTop:'10px'}}>Unsplash
      The internet’s source for visuals.</h2>
      <div className="input-group mb-3" style={{marginTop: '30px', marginBottom: '30px'}}>
        <input onChange={this.handleChange} type="text" className="form-control" placeholder="Search Images" aria-label="Recipient's username" aria-describedby="button-addon2"/>
        <button onClick={this.handleClick} className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
     </div>
     {this.state.loading && <Spinner/>}
        <div className="row">
        {this.state.results.map((element) => {
           return <div className="col-md-4 col-my-4" key={element.id}>
              <SearchEngineMain imageUrl = {element.urls.small} desc={element.alt_description} author={element.user.username} date={element.created_at} link={element.links.html}/>
          </div>
        })}
        </div>  
        <div className='d-flex justify-content-between' style={{marginTop: '50px'}}>
         <button disabled={this.state.page<=1} onClick={this.handlePrevClick} type="button" className="btn btn-dark">&larr; Previous</button>
         <button onClick={this.handleNextClick} type="button" className="btn btn-dark">Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default Searchcomponents
