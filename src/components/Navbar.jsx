import React, { useContext, useState } from 'react'
import {getNews} from "../context/NewsActions"
import NewsContext from "../context/NewsContext"
function Navbar() {

  const [searchText , setSearchText] = useState("")
  
  const {dispatch} = useContext(NewsContext)

  const handleSubmit = async(e) => {
    e.preventDefault()
    
    const data = await getNews(searchText)
    
    const newsAndTopic = {
      news : data,
      topic : searchText
    }

    dispatch({
      type : "GET_NEWS",
      payload : newsAndTopic
    })

    setSearchText("")
  }

  return (
    <nav className="navbar navbar-expand-lg bg-primary">
    <div className="container-fluid">
    <img className='news' src="https://cdn-icons-png.flaticon.com/512/21/21601.png" alt="logo"/>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">About</a>
          </li>
        </ul>
        <form className="d-flex" role="search" onSubmit={(e)=>handleSubmit(e)} >
          <input className="form-control me-2" type="search" placeholder="Search News" aria-label="Search" onChange={(e)=>setSearchText(e.target.value)}/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
   



  )
}

export default Navbar
