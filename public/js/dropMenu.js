export function initDropMenu () {

  let guestsInput = $('input[name="guests"]');
  let facilitiesInput = $('input[name="facilities"]');

  addToggleOnInput(guestsInput,'guests');
  addToggleOnInput(facilitiesInput,'facilities');

  function addToggleOnInput (input,attr) {
    let inputs_button = input.next('[type="button"]'); 
    let dropMenu = input.parent().children('.dropMenu')
    let minus_button = dropMenu.find('.minus')
    let plus_button = dropMenu.find('.plus')
    let span_value = dropMenu.find('span');
    let clear_button = dropMenu.find('[data-button="clear"]');
    let confirm_button = dropMenu.find('[data-button="confirm"]');
    let arrOfItemsValue = [...span_value.map(function(){ return +$(this).attr('data-startValue') })];
    input.on('click',function(){
      inputs_button.click();
    });

    (function () {
      let i = 0;
      if (arrOfItemsValue) {
        span_value.each(function(){
          if (+arrOfItemsValue[i] > 0) {$(this).siblings(minus_button).removeClass('minus-unactive')}
           $(this).text(arrOfItemsValue[i++])
        });
      }
    })() //init start value
    
    let counter = (function (){
      let first = arrOfItemsValue[0];
      let second = arrOfItemsValue[1];
      let third = arrOfItemsValue[2]

     return {
      plus : function (menu_item) {
        switch (menu_item) {
          case '1':
            +(++arrOfItemsValue[0]); 
            return ++first
          case '2' :
              +(++arrOfItemsValue[1])
              return ++second
          case '3' :
            +(++arrOfItemsValue[2])
            return ++third
          default:
            break;
        }
      },
      minus : function (menu_item) {
        switch (menu_item) {
          case '1':
            if(first-1<0) return;
            +--arrOfItemsValue[0]; 
            return --first
          case '2' :
            if(second-1<0) return;
            +--arrOfItemsValue[1];
              return --second
          case '3' :
            if(third-1<0) return;
            +--arrOfItemsValue[2];
              return --third
          default:
            break;
        }
      },
      check : function (menu_item) {
        if (menu_item == '1'){ 
        return first}
        if (menu_item == '2')
        return second
        if (menu_item == '3')
        return third
      },
      reset : function () {
        first = 0;
        second = 0;
        third = 0;
      },
      toString_guests: function() {
        let sum = +first + +second
        let modificator1 = ' гостей'
        let modificator2 = ' младенцев'
          if(sum%10==1 && sum !=11) modificator1 = ' гость'
          if(sum==2 || sum==3 || sum==4) modificator1 = ' гостя'
          if(third%10==1 && third !=11) modificator2 = ' младенец'
          if(third==2 || third==3 || third==4) modificator2 = ' младенца'
          if(third == 0 && sum == 0) return 'Сколько гостей'
          if(third == 0) return sum+modificator1
                             return sum+modificator1 + ', ' + third+modificator2
      },
      toString_facilities: function() {
        let modificator1 = ' Спальня'
        let modificator2 = ' Кровать'
          if(first>1 && first<5) modificator1 = ' спальни'
          if(first>4) modificator1 = ' спален'
          if(second>1 && second<5) modificator2 = ' кровати'
          if(second>4) modificator2 = ' кроватей'
          if(first == 0 && second == 0) return 'Выберите удобства'
          if(first != 0 && second == 0) return first + modificator1
          if(second != 0 && first == 0) return second + modificator2
             return first+modificator1 + ', ' + second+modificator2 + '...'
      }
    }
    })()

    function updateInputplacheholder (){
      if(attr == 'guests') {
        input.attr('placeholder', counter.toString_guests())
      }
      if(attr == 'facilities') {
        input.attr('placeholder', counter.toString_facilities())
      }
      if ([...arrOfItemsValue].every(i => +i==0)) clear_button.css('visibility', 'hidden')
      if ([...arrOfItemsValue].some(i => +i !==0)) clear_button.css('visibility', '')
      
    }
    updateInputplacheholder ();
    
    inputs_button.on('click',function(){
      dropMenu.hasClass('dropMenu_show') ? dropMenu.hide() : dropMenu.show();
      dropMenu.toggleClass('dropMenu_show')
        if(dropMenu.hasClass('dropMenu_show')){
          $(this).removeClass('dropbutton_close')
          $(this).addClass('dropbutton_open')
        } else {
          $(this).addClass('dropbutton_close')
          $(this).removeClass('dropbutton_open')
        }
      dropMenu.hasClass('dropMenu_show') ? input.css('border-color','rgba(31, 32, 65, 0.50)') : input.css('border-color','')
    })

    plus_button.on('click', function(){
      let span = $(this).siblings('span');
      let menu_item = $(this).parent('div').attr('data-listNumber')
      span.html(counter.plus(menu_item))
        if(counter.check(menu_item)!=0) {
          $(this).siblings(minus_button).removeClass('minus-unactive')
        }
        updateInputplacheholder()
    })
  
    minus_button.on('click', function(){
      let span = $(this).siblings('span');
      let menu_item = $(this).parent('div').attr('data-listNumber')
      span.html(counter.minus(menu_item))
        if(counter.check(menu_item)==0) {
        $(this).addClass('minus-unactive')
      }
      updateInputplacheholder()
    })
  
    clear_button.on('click',function () {
      counter.reset()
      dropMenu.children('div').children('span').text('0')
      dropMenu.children('div').children('.minus').addClass('minus-unactive');
      arrOfItemsValue.forEach((el,index) => {
        arrOfItemsValue[index]=0
      });
      updateInputplacheholder()
    })
  
    confirm_button.on('click',function(){
      inputs_button.click()
      updateInputplacheholder()
    })
  }
}