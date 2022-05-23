// import React, { ChangeEvent } from "react";
// import { ArticleModel } from "../pages/Home";
// import Article from "./Article";

// import "./Modal.css";
// type Props = {
//   isModalOpen: boolean;
//   closeModal: () => void;
//   addArticle: () => void;
//   updateArticle: () => void;
//   handleNameInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
//   handleImgInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
//   article: ArticleModel;
// };

// export default function Modal({
//   isModalOpen,
//   closeModal,
//   article: article,
//   handleNameInputChange,
//   handleImgInputChange,
//   addArticle: addArticle,
//   updateArticle: updateArticle,
// }: Props) {
//   return (
//     <div id="myModal" className={isModalOpen ? "modal is-modal-open" : "modal"}>
//       <div className="modal-content">
//         <span className="close" onClick={closeModal}>
//           &times;
//         </span>
//         <label>
//           Name:
//           <input
//             type="text"
//             value={article.title}
//             onChange={handleNameInputChange}
//             name="title"
//           />
//         </label>
//         <label>
//           Img:
//           <input
//             type="text"
//             value={article.imgUrl}
//             onChange={handleImgInputChange}
//             name="img"
//           />
//         </label>
//         <div>
//           {article.id === 0 && (
//             <button onClick={addArticle} type="button">
//               Add
//             </button>
//           )}
//           {article.id !== 0 && (
//             <button onClick={updateArticle} type="button">
//               Update
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { ChangeEvent } from 'react'
import { ArticleModel } from '../pages/Home';
import "./style.css"

type Props = {
  isModalOpen: boolean;
  closeModal: () => void;
  article: ArticleModel;
  handleTitleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleTagInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleAuthorInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleDateInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleUrlInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSayingInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleContentInputChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  addArticle: () => void;
  updateArticle: () => void;
}

export default function Modal({
  isModalOpen,
  closeModal,
  article,
  handleTitleInputChange,
  handleTagInputChange,
  handleAuthorInputChange,
  handleDateInputChange,
  handleUrlInputChange,
  handleSayingInputChange,
  handleContentInputChange,
  addArticle,
  updateArticle
}: Props) {
  return (
    <div className="modal__overlay">
      <div className="modal">
      <div className="modal__content">
        <h1 className="title">Add/Edit article</h1>
        <div className="input__container">
          <input className="input" type="text" placeholder="Please enter title" value={article.title} onChange={handleTitleInputChange} />
          <input className="input" type="text" placeholder="Please enter tag" value={article.tag} onChange={handleTagInputChange} />
          <input className="input" type="text" placeholder="Please enter author" value={article.author} onChange={handleAuthorInputChange} />
          <input className="input" type="text" placeholder="Please enter date" value={article.date} onChange={handleDateInputChange} />
          <input className="input" type="text" placeholder="Please enter image url" value={article.imgUrl} onChange={handleUrlInputChange} />
          <input className="input" type="text" placeholder="Please enter saying" value={article.saying} onChange={handleSayingInputChange} />
          <textarea className="textarea" placeholder="Please enter content" value={article.content} onChange={handleContentInputChange}></textarea>
        </div>
        <div className="modal__buttons">
          <button className="button" id="closeModalBtn" onClick={closeModal}>CANCEL</button>
          {article.id === 0 && (
            <button className="button" onClick={addArticle}>ADD</button>
          )}
          {article.id !== 0 && (
            <button className="button" onClick={updateArticle}>UPDATE</button>
          )}
        </div>
      </div>
     </div>
    </div>
  )
}
