import React, { useContext, useEffect, useReducer ,useState} from "react";
import reducer from "@/pages/reducer";

const API = 'https://newsapi.org/v2/everything?';
const APIKey = process.env.API_KEY;
console.log(APIKey)
const AppContext = React.createContext();
const initialState = {
  isLoading: true,
  query: '',
  totalResults: 0,
  articles : [],
  page : 1
}

const AppProvider = ({children}) => {
   
    const [state, dispatch] = useReducer(reducer, initialState)

  

    const fetchApiData = async (url) =>{
        dispatch({
          type: "GET_LOADING"
        })

       const res = await fetch(url);
       const data = await res.json();
       
       dispatch({
       type: 'GET_NEWS',
       payload: {
        articles: data.articles,
        totalResults: data.totalResults
      },
       })
    }

    const searchNews = (searchUpdate) =>{
      dispatch({
        type: 'SEARCH_NEWS',
        search: searchUpdate
      })
    }
 


    useEffect(() => {
      const timeOut = setTimeout(() => {
        let myQuery = state.query || initialState.query;
        if (myQuery === '') {
          myQuery = 'tesla';
        }
        fetchApiData(`${API}q=${myQuery}&apiKey=${APIKey}`);
      }, 1000);
    return ()=> clearTimeout(timeOut);
    }, [state.query,state.page])
    


  return (
    <>
    <AppContext.Provider value= {{...state, searchNews }}>

        {children}
    </AppContext.Provider>
    </>
  )
};

const useGlobalContext = () => {
  return useContext(AppContext);
}
export { AppProvider, useGlobalContext };
