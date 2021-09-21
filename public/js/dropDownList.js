export const dropDownList = function (){
  const header_list = document.querySelector('.header-nav-list')
  const filter_list = document.querySelector('.filter')
  const list_item = document.querySelectorAll('[attr="list"]')

  header_list.addEventListener('click',toggleListHeader)
  if (filter_list) filter_list.addEventListener('click',toggleListFilter)

  function toggleListHeader(event){
    for (var i = 0; i<list_item.length; i++){
      if (event.target == list_item[i]){
        list_item[i].children[0].classList.contains('hide') ? 
        list_item[i].children[0].classList.remove('hide'): 
        list_item[i].children[0].classList.add('hide')

        if(list_item[i].classList.contains('drop-list_closed')){ 
          list_item[i].classList.remove('drop-list_closed') 
          list_item[i].classList.add('drop-list_opened')
        } else { 
          list_item[i].classList.remove('drop-list_opened') 
          list_item[i].classList.add('drop-list_closed')
        }
      }
    }
  }
  function toggleListFilter(event){
    for (var i = 0; i<list_item.length; i++){
      if (event.target.parentElement === list_item[i]){
        list_item[i].lastElementChild.classList.contains('hide') ? 
        list_item[i].lastElementChild.classList.remove('hide'): 
        list_item[i].lastElementChild.classList.add('hide')

        if(list_item[i].classList.contains('drop-list_closed')){ 
          list_item[i].classList.remove('drop-list_closed') 
          list_item[i].classList.add('drop-list_opened')
        } else { 
          list_item[i].classList.remove('drop-list_opened') 
          list_item[i].classList.add('drop-list_closed')
        }
      }
    }
  }
}