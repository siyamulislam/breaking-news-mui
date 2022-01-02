import axios from 'axios';
import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {

    const todayDate = new Date().toISOString().slice(0, 10);
    const url = 'https://newsapi.org/v2/everything?q=tesla&from=' + todayDate + '&sortBy=publishedAt&apiKey=c371b5c7269e4db5b3773909f0635dce'
    const url3 = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c371b5c7269e4db5b3773909f0635dce'
    const url4 = 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=c371b5c7269e4db5b3773909f0635dce'
    const [articles, setArticles] = useState([]);
    const [articles2, setArticles2] = useState([]);
    useEffect(() => {
        fetch(url4)
            .then(res => res.json())
            .then(data => setArticles(data.articles))
    }, [])

    useEffect(() => {
        const url2 = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c371b5c7269e4db5b3773909f0635dce'
        axios.get(url2)
            .then(data => setArticles2(data.data.articles) )

    }, [])
    return (
        <div>
            <h2 className='text-center text-success p-2' >Top Heading: {articles.length}</h2>
            {
               // articles.map(article => <News key={article.title}  article={article}></News>)
                articles2.map(article => <News key={article.title} article={article}></News>)
            }
        </div>
    );
};

export default TopHeadline;