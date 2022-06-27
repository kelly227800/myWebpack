// 引入banner.js和tabs.js
import './banner.js'
import './tabs.js'

// 引入jquery
import $ from 'jquery';
$('#swiper').css('background-color', 'red')

import './styles/index.css';
import './styles/index.less';
import imgUrl from './assets/1.gif';

let img = document.createElement('img');
img.src = imgUrl;
document.body.appendChild(img);

import './assets/fonts/iconfont.css'
class App {
    static a = 123
  }
  
  console.log(App.a)