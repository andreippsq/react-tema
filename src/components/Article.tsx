import React from "react";
import { Link } from "react-router-dom";
import { ArticleModel } from "../pages/Home";

type Props = {
  title: string;
  tag: string;
  author: string;
  date: string;
  imgUrl: string;
  saying: string;
  content: string;
  id: number;
  editArticle: (dog: ArticleModel) => void;
  deleteArticle: (id: number) => void;
};

export default function Article({
  title,
  tag,
  author,
  date,
  imgUrl,
  saying,
  content,
  id,
  editArticle: editArticle,
  deleteArticle: deleteArticle,
}: Props) {
  return (
    <li>
      {title}
      <img src={imgUrl} alt={title} />
      <button onClick={() => editArticle({ title, imgUrl, id })} type="button">
        Edit
      </button>
      <button onClick={() => deleteArticle(id)} type="button">
        Delete
      </button>
      <Link to={`/details/${id}`}>See more...</Link>
    </li>
    
  );
}
