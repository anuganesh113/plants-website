import React, { useState } from 'react'

const Questions = () => {
  const [visibleContent, setVisibleContent] = useState([]);


  const toggleContent = (index) => {
    const updatedVisibility = [...visibleContent];
    updatedVisibility[index] = !updatedVisibility[index];
    setVisibleContent(updatedVisibility);
  };
  return (
    <section className="questions section" id="faqs">
    <h2 className="section__title-center questions__title container">
      Some common questions <br /> were often asked
    </h2>
    <div className="questions__container container grid">
      <div className="questions__group">
        <div className="questions__item">
          <header className="questions__header" onClick={() => toggleContent(0)}>
            <i className="ri-add-line questions__icon" />
            <h3 className="questions__item-title">
              My flowers are falling off or dying?
            </h3>
          </header>
          {visibleContent[0] && (
  <div className={`questions__content ${visibleContent[0] ? 'visible' : 'hidden'}`}>
  <p className="questions__description">
    Plants are easy way to add color energy and transform your space
    but which planet is for you. Choosing the right plant.
  </p>
</div>
          )
          }
        
        </div>
        <div className="questions__item">
          <header className="questions__header" onClick={() => toggleContent(1)}>
            <i className="ri-add-line questions__icon" />
            <h3 className="questions__item-title">
              What causes leaves to become pale?
            </h3>
          </header>
          {visibleContent[0] && (
          <div className={`questions__content ${visibleContent[1] ? 'visible' : 'hidden'}`}>
            <p className="questions__description">
              Plants are easy way to add color energy and transform your space
              but which planet is for you. Choosing the right plant.
            </p>
          </div>
          )}
        </div>
        <div className="questions__item">
          <header className="questions__header" onClick={() => toggleContent(2)}>
            <i className="ri-add-line questions__icon" />
            <h3 className="questions__item-title">
              What causes brown crispy leaves?
            </h3>
          </header>
          {visibleContent[0] && (
          <div className={`questions__content ${visibleContent[2] ? 'visible' : 'hidden'}`}>
            <p className="questions__description">
            Plants are easy way to add color energy and transform your space
              but which planet is for you. Choosing the right plant.
            </p>
          </div>
          )}
        </div>
      </div>
      <div className="questions__group">
        <div className="questions__item">
          <header className="questions__header" onClick={() => toggleContent(3)}>
            <i className="ri-add-line questions__icon" />
            <h3 className="questions__item-title">How do i choose a plant?</h3>
          </header>
          {visibleContent[0] && (
          <div className={`questions__content ${visibleContent[3] ? 'visible' : 'hidden'}`}>
            <p className="questions__description">
            Plants are easy way to add color energy and transform your space
              but which planet is for you. Choosing the right plant.
            </p>
          </div>
          )}
        </div>
        <div className="questions__item">
          <header className="questions__header" onClick={() => toggleContent(4)}>
            <i className="ri-add-line questions__icon" />
            <h3 className="questions__item-title">How do I change the pots?</h3>
          </header>
          {visibleContent[0] && (
          <div className={`questions__content ${visibleContent[4] ? 'visible' : 'hidden'}`}>
            <p className="questions__description">
            Plants are easy way to add color energy and transform your space
              but which planet is for you. Choosing the right plant.
            </p>
          </div>
          )}
        </div>
        <div className="questions__item">
          <header className="questions__header" onClick={() => toggleContent(5)}>
            <i className="ri-add-line questions__icon" />
            <h3 className="questions__item-title">
              Why are gnats flying around my plant?
            </h3>
          </header>
          {visibleContent[0] && (
          <div className={`questions__content ${visibleContent[5] ? 'visible' : 'hidden'}`}>
            <p className="questions__description">
            Plants are easy way to add color energy and transform your space
              but which planet is for you. Choosing the right plant.
            </p>
          </div>
          )}
        </div>
      </div>
    </div>
  </section>
  )
}

export default Questions