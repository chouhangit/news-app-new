// const API_KEY = "c80e5d3445904f43b0269016d9374eb2"

export const getNews = async (topic) =>{
    const response = await fetch(`https://newsapi.org/v2/everything?q=${topic}&from=2023-13-09&sortBy=publishedAt&apiKey=c80e5d3445904f43b0269016d9374eb2`)
    const data= await response.json()
    return data.articles
}


