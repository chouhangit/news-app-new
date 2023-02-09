import React, { useContext } from 'react'
import NewsContext from '../context/NewsContext'

function Headline() {
  
    const {news} = useContext(NewsContext)
  
    return (
    <marquee className = "mt-2 h3">
       {
        news.map((item) => 
        
        <a href={item.url}>
            {item.title} &nbsp; | &nbsp;
        </a>

        )
       }
    </marquee>
  )
}

export default Headline