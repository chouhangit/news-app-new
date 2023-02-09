const NewsReducer = (state,action)=>{
    switch(action.type){
       case "GET_NEWS":{
        return{
            ...state,
            news : action.payload.news,
            isLoading : false,
            topic : action.payload.topic
        }
    }
        default :
        return state
    }
}



export default NewsReducer