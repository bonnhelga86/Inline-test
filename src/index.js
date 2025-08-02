import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './index.css';

const swiper = new Swiper(".swiper", {
  modules: [Navigation, Pagination],
  enabled: true,
  slideClass: 'cards__item',
  slidesPerView: 'auto',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    800: {
      enabled: false,
    }
  }
});

const navList = document.querySelectorAll('.nav__link');

navList.forEach(item => {
  item.addEventListener('click', (e) => {
    navList.forEach((el) => {
      if(el.getAttribute('data-filter') == e.target.getAttribute('data-filter')){
        el.classList.add('nav__link_active');
      }else{
        el.classList.remove('nav__link_active');
      }
    })
    
    document.querySelectorAll('.cards__item').forEach((el) => {
      const filter = e.target.getAttribute('data-filter');
      if(el.getAttribute('data-target') == filter || filter == 'all') {
        el.classList.remove('cards__item_hidden');
      } else {
        el.classList.add('cards__item_hidden');
      }
    }) 
  })
})
