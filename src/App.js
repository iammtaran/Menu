import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import "./i18next";
import { useTranslation } from "react-i18next";

const allCategories =['all',...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories,setCategories] = useState(allCategories);

  const { t, i18n } = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }
  console.log(t)

  const filterItems= (category) => {
    if(category=== 'all'){
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category 
    === category);
    setMenuItems(newItems);
};
  return (
  <main>
    <section className='menu section'>
      <div className="title">
        <h2>Vibing Miami </h2>
        <br></br>
        <h3>Sip good in the hood </h3>
        <div className='underline'></div>
      </div>
      <Categories categories ={categories} filterItems={filterItems} />
      <Menu items={menuItems} />
      <nav
        style={{
          width: "100%",
          padding: "4rem 0",
          display:"inline",
          textAlign: "center",
        }}
      >
        <img 
        style={{
          width:"7%",
          padding:"3rem 0",
          paddingright:"5rem 0"
          
        }}
        />
        <button
          type="button"
          onClick={() => handleClick("en")}
          className="btn btn-primary m-4"
        >
          English
        </button>
        <button
          type="button"
          onClick={() => handleClick("de")}
          className="btn btn-danger m-4"
        >
          German
        </button>
       
      </nav>
    </section>
  </main>
  );
}

export default App;
