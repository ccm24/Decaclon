import './Article.css';
import { VtmnPrice, VtmnRating, VtmnTag } from '@vtmn/react';

function Article({price, imgArticles, title, description,num}) {
  return (
    <article className="tarjeta">
      <div  className='cajaPrecio'>
        <VtmnTag className='precio'>
          <VtmnPrice>{price}</VtmnPrice> 
        </VtmnTag>
      </div>
      <div className='caja'>
        <img src={imgArticles} className="imgArticles" alt="Articulo" />
      </div> 
      <div className='cajaTexto'>
        <h3>{title}</h3>
        <p className='descripcion'>{description}</p> 
        <VtmnRating size="small" value={num}></VtmnRating>
      </div>
    </article>
  );
}

export default Article;
