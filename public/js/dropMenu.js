export function initDropMenu () {

  let guestsInput = $('[name="guests"]');
  let facilitiesInput = $('[name="facilities"]');

  function addToggleOnInput (input) {
    let inputs_button = input.next('[type="button"]'); 
    let dropMenu = input.parent().children('.dropMenu')

    input.on('click',function(){
      inputs_button.click();
    })
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
      dropMenu.hasClass('dropMenu_show') ? input.css('border-color','rgba(31, 32, 65, 0.50)') : guests.css('border-color','')
    })
  }
  addToggleOnInput(guestsInput);
  addToggleOnInput(facilitiesInput);


//----guest's counter---//

  let minus_button = $('.minus')
  let plus_button = $('.plus')
  let clear_button = $('[data-guests-button="clear"]')
  let confirm_button = $('[data-guests-button="confirm"]')
  let guests_count = {
    adult : 0,
    children : 0,
    baby : 0,

    plus : function (guest_type) {
      switch (guest_type) {
        case '1':
          return ++this.adult
        case '2' :
            return ++this.children
        case '3' :
          return ++this.baby
        default:
          break;
      }
    },
    minus : function (guest_type) {
      switch (guest_type) {
        case '1':
          if(this.adult-1<0) return;
            return --this.adult
        case '2' :
          if(this.children-1<0) return;
            return --this.children
        case '3' :
          if(this.baby-1<0) return;
            return --this.baby
        default:
          break;
      }
    },
    check : function (guest_type) {
      if (guest_type == '1'){ 
      return this.adult}
      if (guest_type == '2')
      return this.children
      if (guest_type == '3')
      return this.baby
    },
    reset : function () {
      this.adult = 0;
      this.children = 0;
      this.baby = 0;
    },
    toString: function() {
      let sum = this.adult + this.children
      let modificator1 = ' Гостей'
      let modificator2 = ' Младенцев'
        if(sum%10==1 && sum !=11) modificator1 = ' Гость'
        if(sum==2 || sum==3 || sum==4) modificator1 = ' Гостя'
        if(this.baby%10==1 && this.baby !=11) modificator2 = ' Младенец'
        if(this.baby==2 || this.baby==3 || this.baby==4) modificator2 = ' Младенца'
        if(this.baby == 0 && sum == 0) return 'Сколько гостей'
        if(this.baby == 0) return sum+modificator1
                           return sum+modificator1 + ', ' + this.baby+modificator2
    }
  }

  plus_button.on('click', function(){
    let span = $(this).siblings('span');
    let guest_type = $(this).parent('div').attr('data-listNumber')
    span.html(guests_count.plus(guest_type))
      if(guests_count.check(guest_type)!=0) {
        $(this).siblings(minus_button).removeClass('minus-unactive')
      }
  })

  minus_button.on('click', function(){
    let span = $(this).siblings('span');
    let guest_type = $(this).parent('div').attr('data-listNumber')
    span.html(guests_count.minus(guest_type))
      if(guests_count.check(guest_type)==0) {
      $(this).addClass('minus-unactive')
    }
  })

  clear_button.on('click',function () {
    guests_count.reset();
    $(this).parent().siblings('div').children('span').text('0')
    $(this).parent().siblings('div').children('.minus').addClass('minus-unactive')
    $(this).parent().parent().siblings('input').attr('placeholder', guests_count.toString())
  })

  confirm_button.on('click',function(){
    guests_button.click();
    $(this).parent().parent().siblings('input').attr('placeholder', guests_count.toString())
  })






  // let minus_button = $('.minus')
  // let plus_button = $('.plus')
  // let clear_button = $('[data-guests-button="clear"]')
  // let confirm_button = $('[data-guests-button="confirm"]')
  // let guests_count = {
  //   adult : 0,
  //   children : 0,
  //   baby : 0,

  //   plus : function (guest_type) {
  //     switch (guest_type) {
  //       case 'adult':
  //         return ++this.adult
  //       case 'children' :
  //           return ++this.children
  //       case 'baby' :
  //         return ++this.baby
  //       default:
  //         break;
  //     }
  //   },
  //   minus : function (guest_type) {
  //     switch (guest_type) {
  //       case 'adult':
  //         if(this.adult-1<0) return;
  //           return --this.adult
  //       case 'children' :
  //         if(this.children-1<0) return;
  //           return --this.children
  //       case 'baby' :
  //         if(this.baby-1<0) return;
  //           return --this.baby
  //       default:
  //         break;
  //     }
  //   },
  //   check : function (guest_type) {
  //     if (guest_type == 'adult'){ 
  //     return this.adult}
  //     if (guest_type == 'children')
  //     return this.children
  //     if (guest_type == 'baby')
  //     return this.baby
  //   },
  //   reset : function () {
  //     this.adult = 0;
  //     this.children = 0;
  //     this.baby = 0;
  //   },
  //   toString: function() {
  //     let sum = this.adult + this.children
  //     let modificator1 = ' Гостей'
  //     let modificator2 = ' Младенцев'
  //       if(sum%10==1 && sum !=11) modificator1 = ' Гость'
  //       if(sum==2 || sum==3 || sum==4) modificator1 = ' Гостя'
  //       if(this.baby%10==1 && this.baby !=11) modificator2 = ' Младенец'
  //       if(this.baby==2 || this.baby==3 || this.baby==4) modificator2 = ' Младенца'
  //       if(this.baby == 0 && sum == 0) return 'Сколько гостей'
  //       if(this.baby == 0) return sum+modificator1
  //                          return sum+modificator1 + ', ' + this.baby+modificator2
  //   }
  // }

  // plus_button.on('click', function(){
  //   let span = $(this).siblings('span');
  //   let guest_type = $(this).parent('div').attr('data-guests-type')
  //   span.html(guests_count.plus(guest_type))
  //     if(guests_count.check(guest_type)!=0) {
  //       $(this).siblings(minus_button).removeClass('minus-unactive')
  //     }
  // })

  // minus_button.on('click', function(){
  //   let span = $(this).siblings('span');
  //   let guest_type = $(this).parent('div').attr('data-guests-type')
  //   span.html(guests_count.minus(guest_type))
  //     if(guests_count.check(guest_type)==0) {
  //     $(this).addClass('minus-unactive')
  //   }
  // })

  // clear_button.on('click',function () {
  //   guests_count.reset();
  //   $(this).parent().siblings('div').children('span').text('0')
  //   $(this).parent().siblings('div').children('.minus').addClass('minus-unactive')
  //   $(this).parent().parent().siblings('input').attr('placeholder', guests_count.toString())
  // })

  // confirm_button.on('click',function(){
  //   guests_button.click();
  //   $(this).parent().parent().siblings('input').attr('placeholder', guests_count.toString())
  // })

}