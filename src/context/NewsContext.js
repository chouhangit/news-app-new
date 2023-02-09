import { createContext, useReducer } from "react"
import NewsReducer from "./NewsReducer"

const NewsContext = createContext()

export const NewsProvider = ({children}) =>{
    
    const initialstate ={
        news:[], 
        isloading: true,
        topic: "India"
    }
    const [state,dispatch] = useReducer(NewsReducer,initialstate)

     return(
        <NewsContext.Provider value={{
             ...state,
             dispatch
        }}>
        {children}
        </NewsContext.Provider>
     )
}

export default NewsContext