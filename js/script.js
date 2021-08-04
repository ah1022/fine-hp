// スクロールイベント
window.addEventListener( "scroll", function() {

  var headerElement = document.getElementById( "header" ) ; // `#header`セレクタを取得
  var rect = headerElement.getBoundingClientRect() ; // 
  var y = rect.top + window.pageYOffset ; // Y方向 (縦)にスクロール量を取得（pageYOffset：windowオブジェクト。現在表示位置のY座標を取得）
  if (y > 0) { // 変数yの値が0よりも
    headerElement.classList.add('header-fixed'); // 大きければhiddensセレクタを削除する
  } else {
    headerElement.classList.remove('header-fixed'); // そうでなければhiddensセレクタを追加する
  }
} ) ;

// ハンバーガーメニュー
(function () {

  //ハンバーガーボタンクリック時の関数
  //querySelector：CSSセレクタで要素を取得
  const $hamburger = document.querySelector('.hamburger');
  //addEventListener：イベント処理（click）
  $hamburger.addEventListener('click', function(){
    //ON時はis-activeクラス付与、OFF時はis-activeクラス削除
    $hamburger.classList.toggle('is-active')
  });

  //全体を囲む要素をid[#wrapper]で指定
  const $wrapper = document.getElementById('wrapper');
  //メニューオープン・クローズのボタン要素をid[nav-btn]で指定
  const $navBtn = document.getElementById('nav-btn');

  //クリックしたら navToggle関数実行
  $navBtn.addEventListener('click', navToggle);

  //navToggleの関数
  function navToggle() {
    //contains:文字列が引数に指定した文字列を含まれているかどうか[nav-open]
    if ($wrapper.classList.contains('nav-open')) {
      //メニュークローズ時
      navCloseFunc();
    } else {
      //メニューオープン時
      navOpenFunc();
    }
  }

  //メニューオープン時の関数
  function navOpenFunc() {
    //wrapperのclass[nav-open]付与
    $wrapper.classList.add('nav-open');
  }
  //メニュークローズ時の関数
  function navCloseFunc() {
    //wrapperのclass[nav-open]削除
    $wrapper.classList.remove('nav-open');
  }

})();


// スライダー
let mySwiper1 = new Swiper ('.slide1', {
  autoplay: {
    delay: 2000,
  },

  loop: true,
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

})

let mySwiper2 = new Swiper ('.slide2', {
  // autoplay: {
  //   delay: 2000,
  // },

  loop: true,
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

})