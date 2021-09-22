export const initLikeButtons = function  () {
  const likeCont = document.querySelectorAll('.like-container')
  likeCont.forEach(element => {
    element.addEventListener('click', function(){
      element.children[0].classList.contains('like-clicked') ?
      element.children[0].classList.remove('like-clicked') :
      element.children[0].classList.add('like-clicked')
    })
  });
}