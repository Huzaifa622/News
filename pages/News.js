import React from 'react'
import ActionAreaCard from '@/components/Card';
import { useGlobalContext } from '@/components/news';

import Variants from '@/components/loading';


const News = () => {
    const {articles , isLoading, totalResults} = useGlobalContext();
    // if(isLoading){
    //     return <h1 className='loading'><CircularProgress variant="soft" /></h1>
    // }
    return(
      <>
     <div className='totalNews'><h3>Total News:{totalResults}</h3></div>
      <div>{isLoading&&<h1 className='loading'><Variants/></h1>}</div>

     <div className='article-container'> 
     {articles && articles.map((article , index)=>{
      return (
       
          <div className='article-card' key={index}>
         <ActionAreaCard   image={article.urlToImage} name={article.source.name} title={article.title} url={article.url}/>
       </div>
      )
    })}
    </div>
      </>
    )
}

export default News;