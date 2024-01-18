import React from 'react';
import product1 from './img/product1.png'
import product2 from './img/product2.png'
import product3 from './img/product3.png'
import product4 from './img/product4.png'
import product5 from './img/product5.png'
import product6 from './img/product6.png'

const Products = () => {
  return (
    <section className="product section container" id="products">
    <h2 className="section__title-center">
      Check out our <br /> products
    </h2>
    <p className="product__description">
      Here are some selected plants from our showroom, all are in excellent
      shape and has a long life span. Buy and enjoy best quality.
    </p>
    <div className="product__container grid">
      <article className="product__card">
        <div className="product__circle" />
        <img src={product1} alt="" className="product__img" />
        <h3 className="product__title">Cacti Plant</h3>
        <span className="product_price">$19.99</span>
        <button className="button--flex product__button">
          <i className="ri-shopping-bag-line" />
        </button>
      </article>
      <article className="product__card">
        <div className="product__circle" />
        <img src={product2} alt="" className="product__img" />
        <h3 className="product__title">Cactus Plant</h3>
        <span className="product_price">$11.99</span>
        <button className="button--flex product__button">
          <i className="ri-shopping-bag-line" />
        </button>
      </article>
      <article className="product__card">
        <div className="product__circle" />
        <img src={product3} alt="" className="product__img" />
        <h3 className="product__title">Aloe Vera Plant</h3>
        <span className="product_price">$7.99</span>
        <button className="button--flex product__button">
          <i className="ri-shopping-bag-line" />
        </button>
      </article>
      <article className="product__card">
        <div className="product__circle" />
        <img src={product4} alt="" className="product__img" />
        <h3 className="product__title">Succulent Plant</h3>
        <span className="product_price">$5.99</span>
        <button className="button--flex product__button">
          <i className="ri-shopping-bag-line" />
        </button>
      </article>
      <article className="product__card">
        <div className="product__circle" />
        <img src={product5} alt="" className="product__img" />
        <h3 className="product__title">Succulent Plant</h3>
        <span className="product_price">$10.99</span>
        <button className="button--flex product__button">
          <i className="ri-shopping-bag-line" />
        </button>
      </article>
      <article className="product__card">
        <div className="product__circle" />
        <img src={product6} alt="" className="product__img" />
        <h3 className="product__title">Green Plant</h3>
        <span className="product_price">$8.99</span>
        <button className="button--flex product__button">
          <i className="ri-shopping-bag-line" />
        </button>
      </article>
    </div>
  </section>
  )
}

export default Products