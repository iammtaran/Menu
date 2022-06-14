import React from 'react';
import "./i18next";
import { useTranslation } from "react-i18next";

function App() {

  
  const { t, i18n } = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }
 
  return (
  <main className='nav nav-pills nav-stacked'>
    <nav
        style={{
          width: "100%",
          padding: "4rem 0",
          display:"inline",
          textAlign: "center",
          backgroundColor:"transparent"
        }}
      >
        <button
        
          type="button"
          onClick={() => handleClick("en")}
          className="btn1"
        >
          English
        </button>
      
    
        
        <button
        
          type="button"
          onClick={() => handleClick("de")}
          className="btn1"
        >
          deutsch
        </button>
        <button
        
          type="button"
          onClick={() => handleClick("rs")}
          className="btn1"
        >
          русский
        </button>
        <button
          type="button"gi
          onClick={() => handleClick("ar")}
          className="btn1"
        >
          عربى
        </button>
        <button
          type="button"
          onClick={() => handleClick("es")}
          className="btn1"
        >
          español
        </button>
        <button
          
          type="button"
          onClick={() => handleClick("fr")}
          className="btn1 "
        >
          français
        </button>
      </nav>
    <section className='menu section'>
      <div className="title">
        <h2>{t("title1.title")}</h2>
        <br></br>
        <h3>{t("title1.subtitle")} </h3>
        <div className='underline'></div>
      </div>
      <div className='spacing'>

      </div>
    <div className='section-center'>
    
      <article
       key={t("menu1.id")} className='menu-item'>
        <img src={t("menu1.img")} alt={t("menu1.title")} className='photo' />
        <div className="item-info">
          <header>
            <h4>{t("menu1.title")}</h4>
            <h4 className='price'>{t("menu1.price")}</h4>
          </header>
          <p className='item-text'>{t("menu1.desc")}</p>
        </div>
      </article>
      <article key={t("menu2.id")} className='menu-item'>
        <img src={t("menu2.img")} alt={t("menu2.title")} className='photo' />
        <div className="item-info">
          <header>
            <h4>{t("menu2.title")}</h4>
            <h4 className='price'>{t("menu2.price")}</h4>
          </header>
          <p className='item-text'>{t("menu2.desc")}</p>
        </div>
      </article>
      <article key={t("menu3.id")} className='menu-item'>
        <img src={t("menu3.img")} alt={t("menu3.title")} className='photo' />
        <div className="item-info">
          <header>
            <h4>{t("menu3.title")}</h4>
            <h4 className='price'>{t("menu3.price")}</h4>
          </header>
          <p className='item-text'>{t("menu3.desc")}</p>
        </div>
      </article>
      <article key={t("menu4.id")} className='menu-item'>
        <img src={t("menu4.img")} alt={t("menu4.title")} className='photo' />
        <div className="item-info">
          <header>
            <h4>{t("menu4.title")}</h4>
            <h4 className='price'>{t("menu4.price")}</h4>
          </header>
          <p className='item-text'>{t("menu4.desc")}</p>
        </div>
      </article>
      <article key={t("menu5.id")} className='menu-item'>
        <img src={t("menu5.img")} alt={t("menu5.title")} className='photo' />
        <div className="item-info">
          <header>
            <h4>{t("menu5.title")}</h4>
            <h4 className='price'>{t("menu5.price")}</h4>
          </header>
          <p className='item-text'>{t("menu5.desc")}</p>
        </div>
      </article>
      <article key={t("menu6.id")} className='menu-item'>
        <img src={t("menu6.img")} alt={t("menu6.title")} className='photo' />
        <div className="item-info">
          <header>
            <h4>{t("menu6.title")}</h4>
            <h4 className='price'>{t("menu6.price")}</h4>
          </header>
          <p className='item-text'>{t("menu6.desc")}</p>
        </div>
      </article>
      <article key={t("menu7.id")} className='menu-item'>
        <img src={t("menu7.img")} alt={t("menu7.title")} className='photo' />
        <div className="item-info">
          <header>
            <h4>{t("menu7.title")}</h4>
            <h4 className='price'>{t("menu7.price")}</h4>
          </header>
          <p className='item-text'>{t("menu7.desc")}</p>
        </div>
      </article>
      <article key={t("menu8.id")} className='menu-item'>
        <img src={t("menu8.img")} alt={t("menu8.title")} className='photo' />
        <div className="item-info">
          <header>
            <h4>{t("menu8.title")}</h4>
            <h4 className='price'>{t("menu8.price")}</h4>
          </header>
          <p className='item-text'>{t("menu8.desc")}</p>
        </div>
      </article>
      <article key={t("menu9.id")} className='menu-item'>
        <img src={t("menu9.img")} alt={t("menu9.title")} className='photo' />
        <div className="item-info">
          <header>
            <h4>{t("menu9.title")}</h4>
            <h4 className='price'>{t("menu9.price")}</h4>
          </header>
          <p className='item-text'>{t("menu9.desc")}</p>
        </div>
      </article>
      
    </div>
    </section>
  </main>
  );
}

export default App;
