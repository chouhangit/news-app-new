import { useContext, useEffect } from "react";
import NewsCard from "../components/NewsCard";
import Spinner from "../components/Spinner";
import { getNews } from "../context/NewsActions";
import NewsContext from "../context/NewsContext";

function Home() {
  
  const {topic ,  isLoading, news , dispatch} = useContext(NewsContext)

useEffect(()=>{
 
  const getData = async(topic)=>{
    
    const data = await getNews(topic) 

        
    const newsAndTopic = {
      news : data,
      topic : topic
    }
   
    dispatch({
      type : "GET_NEWS",
      payload : newsAndTopic
    })
  }

  getData(topic)

},[])


if(isLoading){
  return <Spinner/>
}
  
  return (
    <div className="container p-2">
      
     <div className="row">
        <h1 className="text-center mb-5">Top News For {topic}</h1>
        {
          news.map((singleNews , index) => 
          <NewsCard key={index}  singleNews={singleNews}/>
          )
        }
      </div>
    </div>
  );
}

export default Home;
