import React from 'react';

import './card.css';

function Card({ item: {clazz, title, type, nameRu, nameEn, number}, lang }) {
  const name = lang === 'ru' ? nameRu : lang === 'en' ? nameEn : 'errLang';
  const classes = ['card'];
 	classes.push(type);
 	clazz && classes.push(clazz);

  return (
    <div className={classes.join(' ')}>
    	<span className='number'>{number}</span>
    	<h2>{title}</h2>
    	<span className='name'>{name}</span>
    </div>
  );
}

export default Card;