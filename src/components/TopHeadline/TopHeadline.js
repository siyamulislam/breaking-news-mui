import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {
    const url= 'https://newsapi.org/v2/everything?q=tesla&from=2021-12-01&sortBy=publishedAt&apiKey=c371b5c7269e4db5b3773909f0635dce'
    const [articles, setArticles]= useState([]);
    useEffect(()=>{
        fetch(url)
        .then( res=> res.json())
        .then(data=>setArticles(data.articles))
    },[])
    return (
        <div>
             <h2 className='text-center text-success p-2' >Top Heading: {articles.length}</h2>
            {
                articles.map(article=><News article ={article}></News>)
            }
        </div>
    );
};

export default TopHeadline;