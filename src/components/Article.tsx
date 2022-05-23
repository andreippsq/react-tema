// import React from "react";
// import { Link } from "react-router-dom";
// import { ArticleModel } from "../pages/Home";

// type Props = {
//   title: string;
//   tag: string;
//   author: string;
//   date: string;
//   imgUrl: string;
//   saying: string;
//   content: string;
//   id: number;
//   editArticle: (dog: ArticleModel) => void;
//   deleteArticle: (id: number) => void;
// };

// export default function Article({
//   title,
//   tag,
//   author,
//   date,
//   imgUrl,
//   saying,
//   content,
//   id,
//   editArticle: editArticle,
//   deleteArticle: deleteArticle,
// }: Props) {
//   return (
//     <li>
//       {title}
//       <img src={imgUrl} alt={title} />
//       <button onClick={() => editArticle({ title, imgUrl, id })} type="button">
//         Edit
//       </button>
//       <button onClick={() => deleteArticle(id)} type="button">
//         Delete
//       </button>
//       <Link to={`/details/${id}`}>See more...</Link>
//     </li>
    
//   );
// }

import React from 'react'
import { Link } from 'react-router-dom';
import { ArticleModel } from '../pages/Home';
import AddBtn from './AddButton';
import "./style.css"

type Props = {
  title: string;
  tag: string;
  author: string;
  date: string;
  imgUrl: string;
  saying: string;
  content: string;
  id: number;
  editArticle: (article: ArticleModel) => void;
  deleteArticle: (id: number) => void;
}

export default function Article({ title, tag, author, date, imgUrl, saying, content, id, editArticle, deleteArticle }: Props) {
  return (
    <article className='article'>
      <h2 className='title'>{title}</h2>
      <ul className='info__container'>
        <li className='info__item'>{tag}</li>
        <li className='info__item'>Added by <span className='info__mark'>{author}</span></li>
        <li className='info__item'>{date}</li>
      </ul>
      <div className='actions__container'>
        <button className='actions__btn' onClick={() => editArticle({ title, tag, author, date, imgUrl, saying, content, id })}>Edit</button>
        <button className='actions__btn' onClick={() => deleteArticle(id)}>Delete</button>
      </div>
      <img className='image' src={imgUrl} alt="" />
      <p className='text'>{content.slice(0, 1000)}</p>
      <Link to={`/details/${id}`} className="button">
        <AddBtn textContent={'READ MORE'} />
      </Link>
    </article>
  )
}
