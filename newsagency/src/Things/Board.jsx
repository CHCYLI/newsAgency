import { useEffect } from "react";
import { useState } from "react";
import Items from './Items'; 

const Board = ({category}) => {
    const [articles,setArticles] = useState([]);
    useEffect(()=> {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url).then(response=> response.json()).then(data=>{
            console.log(data); // Debugging log
            if (data.articles) {
                setArticles(data.articles);
            }
        })
        .catch(error => console.error('Fetch error:', error));

    },[category])

    return (
        <div>
            <h1 className="text-center">Latest <span className="badge text-bg-danger">News</span></h1>
        
            {articles.map((news,index)=>{
                return <Items key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
            })}
        </div>
    );
}

export default Board