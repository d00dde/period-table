import React, {useContext} from 'react';
import Card from '../card/card';
import {LanguageContext} from '../../context/language-context';
import {data} from '../../data';
import './table.css';

function Table() {
	const lang = useContext(LanguageContext).lang;
  const cards = data.map((item) => {
  	return <Card key={item.title || Math.random()} item={item} lang={lang} />
  })
  return (
    <div className="table">
      {cards}
    </div>
  );
}

export default Table;