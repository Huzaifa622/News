import React from 'react'
import ActionAreaCard from '@/components/Card';
import { useGlobalContext } from '@/components/news';

const News = () => {
    const {articles , isLoading, totalResults} = useGlobalContext();

    
   
    if(isLoading){
        return <h1>Loading.....</h1>
    }
    return(
      <>

     <div className='totalNews'><h3>Total News:{totalResults}</h3></div>
     <div className='article-container'> 
     {articles && articles.map((article)=>{
      return (
       
          <div className='article-card' >
         <ActionAreaCard  onclick={()=>newsPage} image={article.urlToImage} name={article.source.name} title={article.title} url={article.url}/>
       </div>
      )
    })}
    </div>
      </>
    )
}

export default News;