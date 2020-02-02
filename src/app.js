import React, {useState} from 'react';
import Controls from './components/controls/controls';
import Table from './components/table/table';
import {LanguageContext} from './context/language-context';
import './app.css';

function App() {
	const [lang, setLang] = useState('ru');
  const changeLanguage = () => {
  	if(lang === 'ru')
  		setLang('en');
  	if(lang === 'en')
  		setLang('ru');
  }
  return (
  	<LanguageContext.Provider value={{lang, changeLanguage}}>
	    <div className="app">
        <Controls />
	      <Table />
	    </div>
    </LanguageContext.Provider>
  );
}
export default App;
