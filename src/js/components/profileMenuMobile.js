// import axios from 'axios';
import { data } from '../data/data';
import { createMarkupFavoritesGoodsList } from '../components/favorites-myGoodsList/favorites-myGoodsList';

const refs = {
  menuMobil: '',
  menuFavorites: '',
  menuMyAdv: '',
  getJsMenu: document.querySelector('.js_menu'),
  main: document.querySelector('.main'),
};

export const profileMenuMobile = () => {
  console.log(data);
  refs.menuMobil = document.querySelector('.profile-menuMobil');
  refs.menuFavorites = document.getElementById('profile-menuMobil-favorite');
  refs.menuMyAdv = document.getElementById('profile-menuMobil-MyAdv')
  refs.menuFavorites.addEventListener('click',buttonClick);
  refs.menuMyAdv.addEventListener('click',buttonClick);
  // console.log(refs.menuMobil);
  // console.log( refs.menuFavorites);
  // console.log(refs.menuMyAdv);

  refs.menuMobil.classList.toggle('mobil-hidden');
};

const buttonClick =(e) => {
  if (e.target === refs.menuFavorites) {
    console.log("case1");
    createMarkupFavoritesGoodsList('Избранное', data.user.favorites);
    refs.menuFavorites.removeEventListener('click',buttonClick);
    refs.getJsMenu.classList.toggle("activ");
    refs.menuFavorites.classList.toggle('is-mobil-hidden');
    refs.menuMobil.classList.toggle('mobil-hidden');
    
    console.log('Избранное в data:', data.user.favorites);
  } if (e.target === refs.menuMyAdv) {
    console.log("case2");
    createMarkupFavoritesGoodsList('Мои объявления', data.user.ownCalls);
    refs.menuMyAdv.removeEventListener('click',buttonClick);
    refs.getJsMenu.classList.toggle("activ");
    refs.menuMyAdv.classList.toggle('is-mobil-hidden');
    refs.menuMobil.classList.toggle('mobil-hidden');

    console.log('Мои объявления в data:', data.user.ownCalls);

  }
return;
}