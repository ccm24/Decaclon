import './Article.css';
import { VtmnTag } from '@vtmn/react';

function Article({price, imgArticles, title, description}) {
  return (
    <article className="tarjeta">
      <VtmnTag>{price}</VtmnTag>
      <img src={imgArticles} className="imgArticles" alt="Articulo" />
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export default Article;
