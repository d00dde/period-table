import React, {useContext} from 'react';
import {LanguageContext} from '../../context/language-context';

import './controls.css';

function Controls () {
	const changeLanguage = useContext(LanguageContext).changeLanguage;

  return (
    <div className='controls'>

    	<h2>Controls</h2>
    	<button onClick={changeLanguage}>lang</button>

    </div>
  );
}

export default Controls;