// import React, { Component } from "react";
// import Article from "../components/Article";
// import Modal from "../components/Modal";

// type Props = {};

// type State = {
//   articles: ArticleModel[];
//   isModalOpen: boolean;
//   selectedArticle: ArticleModel;
//   startIndex: number;
//   endIndex: number;
//   articlesDisplayed: number;
// };

// export type ArticleModel = {
//   id: number;
//   title: string;
//   tag: string;
//   author: string;
//   date: string;
//   imgUrl: string;
//   saying: string;
//   content: string;
// };

// class Home extends Component<Props, State> {
//   constructor(props: Props) {
//     super(props);
//     const noArticlesDisplayed = 3;
//     this.state = {
//       articles: [],
//       isModalOpen: false,
//       selectedArticle: {
//         title: "",
//         tag: "",
//         author: "",
//         date: "",
//         imgUrl: "",
//         saying: "",
//         content: "",
//         id: 0,
//       },
//       articlesDisplayed: noArticlesDisplayed,
//       startIndex: 0,
//       endIndex: noArticlesDisplayed - 1,
//     };

//     // [1,2,3,4,5,6,7]
//     // startIndex = 0
//     // no items 3
//     // endIndex = 2
//     this.closeModal = this.closeModal.bind(this);
//     this.openModal = this.openModal.bind(this);
//     this.handleTitleInputChange = this.handleTitleInputChange.bind(this);
//     this.handleImgInputChange = this.handleImgInputChange.bind(this);
//     this.addArticle = this.addArticle.bind(this);
//     this.fetchArticle = this.fetchArticle.bind(this);
//     this.editArticle = this.editArticle.bind(this);
//     this.deleteArticle = this.deleteArticle.bind(this);
//     this.updateArticle = this.updateArticle.bind(this);
//     this.goToPrev = this.goToPrev.bind(this);
//     this.goToNext = this.goToNext.bind(this);
//     this.updateDisplayIndex = this.updateDisplayIndex.bind(this);
//   }

//   async componentDidMount() {
//     this.fetchArticle();
//   }

//   async fetchArticle() {
//     const response = await fetch(`http://localhost:3000/articles`);
//     const json = await response.json();
//     this.setState({ articles: json }, () => {
//       this.updateDisplayIndex();
//     });
//   }

//   closeModal() {
//     this.setState({
//       isModalOpen: false,
//       selectedArticle: {
//         title: "",
//         tag: "",
//         author: "",
//         date: "",
//         imgUrl: "",
//         saying: "",
//         content: "",
//         id: 0
//       }
//     });
//   }

//   openModal() {
//     this.setState({ isModalOpen: true });
//   }


//   //index   0    1   2    3     4    5      6
//   //array ['d', 2, '3', 'ads', 2 , true, 'test']
//   // startIndex endIndex [0, 2]
//   // startIndex endIndex [3, 5]
//   // startIndex endIndex [6, 8]
//   updateDisplayIndex() {
//     const { articles: articles, startIndex, endIndex, articlesDisplayed: articlesDisplayed } = this.state;

//     if (startIndex === articles.length && articles.length > 0) {
//       this.setState({ startIndex: startIndex - articlesDisplayed, endIndex: endIndex - articlesDisplayed });
//     }

//   }

//   handleTitleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
//     const value = event.target.value;
//     this.setState({ selectedArticle: { ...this.state.selectedArticle, title: value } });
//   }

//   handleImgInputChange(event: React.ChangeEvent<HTMLInputElement>) {
//     const value = event.target.value;
//     this.setState({ selectedArticle: { ...this.state.selectedArticle, imgUrl: value } });
//   }

//   async addArticle() {
//     const { title, imgUrl } = this.state.selectedArticle;
//     const body = { title, imgUrl };
//     const response = await fetch(`http://localhost:3000/articles`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(body),
//     });
//     const json = await response.json();
//     console.log(json);
//     // reset form
//     this.setState({
//       isModalOpen: false,
//       selectedArticle: {
//         title: "",
//         tag: "",
//         author: "",
//         date: "",
//         imgUrl: "",
//         saying: "",
//         content: "",
//         id: 0
//       },
//     });

//     this.fetchArticle();
//   }

//   async updateArticle() {
//     const { title, imgUrl, id } = this.state.selectedArticle;
//     const body = { title, imgUrl, id };
//     const response = await fetch(`http://localhost:3000/articles/${id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(body),
//     });
//     const json = await response.json();

//     // reset form and close modal
//     this.setState({
//       isModalOpen: false,
//       selectedArticle: {
//         title: "",
//         tag: "",
//         author: "",
//         date: "",
//         imgUrl: "",
//         saying: "",
//         content: "",
//         id: 0
//       },
//     });

//     this.fetchArticle();
//   }

//   async deleteArticle(id: number) {
//     const response = await fetch(`http://localhost:3000/articles/${id}`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     await response.json();

//     this.fetchArticle();
//   }

//   editArticle(article: ArticleModel) {
//     this.setState({ selectedArticle: article, isModalOpen: true });
//   }

//   goToPrev() {
//     const { startIndex, endIndex, articlesDisplayed: articlesDisplayed } = this.state;

//     this.setState({
//       startIndex: startIndex - articlesDisplayed,
//       endIndex: endIndex - articlesDisplayed,
//     });
//   }

//   goToNext() {
//     const { startIndex, endIndex, articlesDisplayed: articlesDisplayed } = this.state;
//     this.setState({
//       startIndex: startIndex + articlesDisplayed,
//       endIndex: endIndex + articlesDisplayed,
//     });
//   }

//   render() {
//     const { isModalOpen, articles: articles, selectedArticle: selectedArticle, startIndex, endIndex } = this.state;

//     const articleList = articles
//       .filter((article, index) => index >= startIndex && index <= endIndex)
//       .map((article: ArticleModel) => (
//         <Article
//           key={article.id}
//           title={article.title}
//           imgUrl={article.imgUrl}
//           id={article.id}
//           editArticle={this.editArticle}
//           deleteArticle={this.deleteArticle} tag={""} author={""} date={""} saying={""} content={""}        />
//       ));

//     return (
//       <div>
//         <button onClick={this.openModal}>Add article</button>
//         {articleList}
//         <div className="buttons">
//           <button onClick={this.goToPrev} disabled={startIndex <= 0}>
//             prev
//           </button>
//           <button
//             onClick={this.goToNext}
//             disabled={endIndex >= articles.length - 1}
//           >
//             next
//           </button>
//         </div>
//         <Modal
//           isModalOpen={isModalOpen}
//           closeModal={this.closeModal}
//           article={selectedArticle}
//           handleNameInputChange={this.handleTitleInputChange}
//           handleImgInputChange={this.handleImgInputChange}
//           addArticle={this.addArticle}
//           updateArticle={this.updateArticle}
//         />
//       </div>
//     );
//   }
// }

// export default Home;
import React, { Component } from 'react'
import Article from '../components/Article';
import Modal from '../components/Modal';
import AddButton from '../components/AddButton';
import Navigation from '../components/Navigation';

type Props = {}

type State = {
  articles: ArticleModel[];
  isModalOpen: boolean;
  selectedArticle: ArticleModel;
  startIndex: number;
  endIndex: number;
}

export type ArticleModel = {
  title: string;
  tag: string;
  author: string;
  date: string;
  imgUrl: string;
  saying: string;
  content: string;
  id: number;
}

class Home extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      articles: [],
      isModalOpen: false,
      selectedArticle: {
        title: "",
        tag: "",
        author: "",
        date: "",
        imgUrl: "",
        saying: "",
        content: "",
        id: 0
      },
      startIndex: 0,
      endIndex: 2,
    };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.deleteArticle = this.deleteArticle.bind(this);
    this.editArticle = this.editArticle.bind(this);
    this.handleTitleInputChange = this.handleTitleInputChange.bind(this);
    this.handleTagInputChange = this.handleTagInputChange.bind(this);
    this.handleAuthorInputChange = this.handleAuthorInputChange.bind(this);
    this.handleDateInputChange = this.handleDateInputChange.bind(this);
    this.handleUrlInputChange = this.handleUrlInputChange.bind(this);
    this.handleSayingInputChange = this.handleSayingInputChange.bind(this);
    this.handleContentInputChange = this.handleContentInputChange.bind(this);
    this.addArticle = this.addArticle.bind(this);
    this.updateArticle = this.updateArticle.bind(this);
    this.goToPrev = this.goToPrev.bind(this);
    this.goToNext = this.goToNext.bind(this);
    this.updateDisplayIndex = this.updateDisplayIndex.bind(this);
  }

  async componentDidMount() {
    this.fetchArticles();
  }

  async fetchArticles() {
    const response = await fetch(`http://localhost:3000/articles`);
    const json = await response.json();
    console.log(json);
    this.setState({ articles: json });
  }

  closeModal() {
    this.setState({
      isModalOpen: false,
      selectedArticle: {
        title: "",
        tag: "",
        author: "",
        date: "",
        imgUrl: "",
        saying: "",
        content: "",
        id: 0
      }
    });
  }

  openModal() {
    this.setState({ isModalOpen: true });
  }

  editArticle(article: ArticleModel) {
    console.log(article);

    this.setState({ selectedArticle: article, isModalOpen: true });
  }

  async deleteArticle(id: number) {
    const response = await fetch(`http://localhost:3000/articles/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    this.fetchArticles();
  }

  handleTitleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    this.setState({ selectedArticle: { ...this.state.selectedArticle, title: value } });
  }

  handleTagInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    this.setState({ selectedArticle: { ...this.state.selectedArticle, tag: value } });
  }

  handleAuthorInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    this.setState({ selectedArticle: { ...this.state.selectedArticle, author: value } });
  }

  handleDateInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    this.setState({ selectedArticle: { ...this.state.selectedArticle, date: value } });
  }

  handleUrlInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    this.setState({ selectedArticle: { ...this.state.selectedArticle, imgUrl: value } });
  }

  handleSayingInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    this.setState({ selectedArticle: { ...this.state.selectedArticle, saying: value } });
  }

  handleContentInputChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const value = event.target.value;
    this.setState({ selectedArticle: { ...this.state.selectedArticle, content: value } });
  }

  async addArticle() {
    const { title, tag, author, date, imgUrl, saying, content } = this.state.selectedArticle;
    const body = { title, tag, author, date, imgUrl, saying, content };
    const response = await fetch(`http://localhost:3000/articles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const json = await response.json();
    console.log(json);
    this.closeModal();
    this.fetchArticles();
  }

  async updateArticle() {
    const { title, tag, author, date, imgUrl, saying, content, id } = this.state.selectedArticle;
    const body = { title, tag, author, date, imgUrl, saying, content, id };
    const response = await fetch(`http://localhost:3000/articles/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const json = await response.json();
    console.log(json);
    this.closeModal();
    this.fetchArticles();
  }

  updateDisplayIndex() {
    const { articles, startIndex, endIndex } = this.state;

    if (startIndex === articles.length && articles.length > 0) {
      this.setState({ startIndex: startIndex - 3, endIndex: endIndex - 3 });
    }

  }

  goToPrev() {
    const { startIndex, endIndex } = this.state;

    this.setState({
      startIndex: startIndex - 3,
      endIndex: endIndex - 3,
    });
  }

  goToNext() {
    const { startIndex, endIndex } = this.state;
    this.setState({
      startIndex: startIndex + 3,
      endIndex: endIndex + 3,
    });
  }

  static getNoArticles() {
    return
  }

  render() {
    const { isModalOpen, articles, selectedArticle, startIndex, endIndex } = this.state;
    const articleList = articles
      .filter((article, index) => index >= startIndex && index <= endIndex)
      .map((article: ArticleModel) => (
        <Article
          key={article.id}
          title={article.title}
          tag={article.tag}
          author={article.author}
          date={article.date}
          imgUrl={article.imgUrl}
          saying={article.saying}
          content={article.content}
          id={article.id}
          deleteArticle={this.deleteArticle}
          editArticle={this.editArticle}
        />
      ));

    return (
      <div className='container'>
        <Navigation />
        <AddButton triggeredFunction={this.openModal} textContent={"+ ADD ARTICLE"} />
        {articleList}
        <Modal
          isModalOpen={isModalOpen}
          article={selectedArticle}
          closeModal={this.closeModal}
          handleTitleInputChange={this.handleTitleInputChange}
          handleTagInputChange={this.handleTagInputChange}
          handleAuthorInputChange={this.handleAuthorInputChange}
          handleDateInputChange={this.handleDateInputChange}
          handleUrlInputChange={this.handleUrlInputChange}
          handleSayingInputChange={this.handleSayingInputChange}
          handleContentInputChange={this.handleContentInputChange}
          addArticle={this.addArticle}
          updateArticle={this.updateArticle} ></Modal>
        <div className='footer'>
          <button onClick={this.goToPrev} disabled={startIndex <= 0} className='footer__link' >
            previous
          </button>
          <button onClick={this.goToNext} disabled={endIndex >= articles.length - 1} className='footer__link footer__link--next' >
            next
          </button>
        </div>
      </div>
    )
  }
}

export default Home;
