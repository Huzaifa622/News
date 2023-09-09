import React, { useContext, useEffect, useReducer ,useState} from "react";
import reducer from "@/pages/reducer";

const API = 'https://newsapi.org/v2/everything?';
const APIKey = process.env.NEXT_PUBLIC_API_KEY;
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

  

    const fetchApiData = async (url) => {
      dispatch({
        type: "GET_LOADING"
      });
    
      try {
        const res = await fetch(url);
    
        if (!res.ok) {
          // Handle specific HTTP error status codes here
          if (res.status === 401) {
            throw new Error('Unauthorized - Check your API key');
          } else if (res.status === 404) {
            throw new Error('Not found - The requested resource does not exist');
          } else {
            throw new Error('Server Error - Something went wrong');
          }
        }
    
        const data = await res.json();
    
        dispatch({
          type: 'GET_NEWS',
          payload: {
            articles: data.articles,
            totalResults: data.totalResults
          },
        });
      } catch (error) {
        console.error('Error:', error.message);
        // Optionally, you can dispatch an error action or show an error message to the user
      }
    };

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
      console.log(APIKey)
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
