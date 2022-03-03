let btmVisual = document.querySelector('.btm-visual');
let childPic = document.querySelector('.llax');

console.log(btmVisual);

window.addEventListener('scroll', () => {
  let scroll = window.scrollY;
  console.log(scroll);

  if (scroll > 3000) {
    scroll -= 3000;
    childPic.style.top = `${scroll * 0.2}px`;
  }

  if (navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
    //ここに書いた処理はスマホの時だけ有効
    if (scroll > 2000) {
      scroll -= 2000;
      childPic.style.top = `${scroll * 0.2}px`;
    }
  }

})

console.log(childPic);


