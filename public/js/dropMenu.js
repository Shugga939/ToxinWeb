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
    
      let counter = {
      first : arrOfItemsValue[0],
      second : arrOfItemsValue[1],
      third : arrOfItemsValue[2],
  
      plus : function (menu_item) {
        switch (menu_item) {
          case '1':
            +(++arrOfItemsValue[0]); 
            return ++this.first
          case '2' :
              +(++arrOfItemsValue[1])
              return ++this.second
          case '3' :
            +(++arrOfItemsValue[2])
            return ++this.third
          default:
            break;
        }
      },
      minus : function (menu_item) {
        switch (menu_item) {
          case '1':
            if(this.first-1<0) return;
            +--arrOfItemsValue[0]; 
            return --this.first
          case '2' :
            if(this.second-1<0) return;
            +--arrOfItemsValue[1];
              return --this.second
          case '3' :
            if(this.third-1<0) return;
            +--arrOfItemsValue[2];
              return --this.third
          default:
            break;
        }
      },
      check : function (menu_item) {
        if (menu_item == '1'){ 
        return this.first}
        if (menu_item == '2')
        return this.second
        if (menu_item == '3')
        return this.third
      },
      reset : function () {
        this.first = 0;
        this.second = 0;
        this.third = 0;
      },
      toString_guests: function() {
        let sum = +this.first + +this.second
        let modificator1 = ' гостей'
        let modificator2 = ' младенцев'
          if(sum%10==1 && sum !=11) modificator1 = ' гость'
          if(sum==2 || sum==3 || sum==4) modificator1 = ' гостя'
          if(this.third%10==1 && this.third !=11) modificator2 = ' младенец'
          if(this.third==2 || this.third==3 || this.third==4) modificator2 = ' младенца'
          if(this.third == 0 && sum == 0) return 'Сколько гостей'
          if(this.third == 0) return sum+modificator1
                             return sum+modificator1 + ', ' + this.third+modificator2
      },
      toString_facilities: function() {
        let modificator1 = ' Спальня'
        let modificator2 = ' Кровать'
          if(this.first>1 && this.first<5) modificator1 = ' спальни'
          if(this.first>4) modificator1 = ' спален'
          if(this.second>1 && this.second<5) modificator2 = ' кровати'
          if(this.second>4) modificator2 = ' кроватей'
          if(this.first == 0 && this.second == 0) return 'Выберите удобства'
          if(this.first != 0 && this.second == 0) return this.first + modificator1
          if(this.second != 0 && this.first == 0) return this.second + modificator2
             return this.first+modificator1 + ', ' + this.second+modificator2 + '...'
      }
    }

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