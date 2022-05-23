import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArticleModel } from "./Home";
import AddButton from '../components/AddButton';
import Navigation from '../components/Navigation';

export default function Details() {
  let { articleId: articleId } = useParams();

  const [article, setArticle] = useState<ArticleModel | null>(null);

  useEffect(() => {
    async function fetchArticles() {
      const response = await fetch(`http://localhost:3000/articles/${articleId}`);
      const json = await response.json();
      console.log(json);
      setArticle(json);
    }

    fetchArticles();
  }, [articleId]);

  function splitText(text: string) {
    let middle = Math.floor(text.length / 2);
    let before = text.lastIndexOf(' ', middle);
    let after = text.indexOf(' ', middle + 1);

    if (middle - before < after - middle) {
      middle = before;
    } else {
      middle = after;
    }

    let text1 = text.substring(0, middle);
    let text2 = text.substring(middle + 1);

    return { text1: text1, text2: text2 }
  }

  const { text1, text2 } = article !== null ? splitText(article.content) : { text1: "", text2: "" };

  return (
    <div className='container'>
      <Navigation />
      {article !== null && (
        <article className='article'>
          <h1 className='title'>{article.title}</h1>
          <ul className='info__container'>
            <li className='info__item'>{article.tag}</li>
            <li className='info__item'>Added by <span className='info__mark'>{article.author}</span></li>
            <li className='info__item'>{article.date}</li>
          </ul>
          <img className='image' src={article.imgUrl} alt="" />
          <p className='text'>{text1}</p>
          <h3 className='saying'>{article.saying}</h3>
          <p className='text'>{text2}</p>
        </article>
      )}
    </div>
  )

  
  // return (
  //   <div>
  //     Details:
  //     {article !== null && (
  //       <div>
  //         <span>{article.title}</span> <img src={article.imgUrl} alt={article.title} />
  //       </div>
  //     )}
  //     <Link to={"/"}>Back</Link>
  //   </div>
  // );
}
