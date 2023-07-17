import React, { useContext, useEffect, useReducer } from "react";
import reducer from "@/pages/reducer";

const API = 'https://newsapi.org/v2/everything?';
const APIKey = '7859f4a3896a4e4aa7ad4b2f4eb9beba';
const AppContext = React.createContext();
const initialState = {
  isLoading: true,
  query: '',
  totalResults: 0,
  articles : []
}

const AppProvider = ({children}) => {
   


    const [state, dispatch] = useReducer(reducer, initialState)

  

    const fetchApiData = async (url) =>{
        dispatch({
          type: "GET_LOADING"
        })

       const res = await fetch(url);
       const data = await res.json();
       console.log(data);  
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
      console.log(timeOut);

    return ()=> clearTimeout(timeOut);
    }, [state.query])
    


  return (
    <>
    <AppContext.Provider value= {{...state, searchNews}}>

        {children}
    </AppContext.Provider>
    </>
  )
};

const useGlobalContext = () => {
  return useContext(AppContext);
}
export { AppProvider, useGlobalContext };
