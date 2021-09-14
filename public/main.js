'use strict'
window.$ = require('jquery')
window.jQuery = require('jquery')
import '/plugins/datepicker/datepicker'
import '/plugins/slick/slick'

$(document).ready(function(){
  //------datepicker's logic------//
{
  var datepicker = $('#arrival').datepicker().data('datepicker');
  //inputs
  var firstdate = $('#arrival');
  var lastdate = $('#leaving');
  //buttons for inputs
  var firstdate_button = $("#button_arrival");
  var lastdate_button = $("#button_leaving");

  firstdate.datepicker({
    range: true,
    todayButton: true,
    clearButton: true,
    minDate: new Date(),
    toggleSelected: true,
    
    onSelect: function(fd){
      firstdate.val(fd.split(",")[0]);
      lastdate.val(fd.split(",")[1]);
    }

  })

  firstdate.on('click', function(){
    firstdate_button.trigger('click');
    
  })
  lastdate.on('click', function(){
    lastdate_button.trigger('click');
  })

  firstdate_button.on('click', function (){
    if(firstdate.hasClass('show_datepicker')) {
      datepicker.hide();
      lastdate_button.attr('disabled',false)
      lastdate.attr('disabled',false)
      firstdate.toggleClass('show_datepicker');
      $(this).removeClass('dropbutton_open')
      $(this).addClass('dropbutton_close')
    } else {
      datepicker.show();
      lastdate_button.attr('disabled',true)
      lastdate.attr('disabled',true)
      firstdate.toggleClass('show_datepicker');
      $(this).addClass('dropbutton_open')
      $(this).removeClass('dropbutton_close')
    }
  })

  lastdate_button.on('click', function (){
    if(lastdate.hasClass('show_datepicker')) {
      datepicker.hide();
      firstdate_button.attr('disabled',false)
      firstdate.attr('disabled',false)
      lastdate.toggleClass('show_datepicker');
      $(this).removeClass('dropbutton_open')
      $(this).addClass('dropbutton_close')
    } else {
      datepicker.show();
      firstdate_button.attr('disabled',true)
      firstdate.attr('disabled',true)
      lastdate.toggleClass('show_datepicker');
      $(this).addClass('dropbutton_open')
      $(this).removeClass('dropbutton_close')
    }
  })
  //button 'apply'
  $('span[data-action="today"]').on('click',function(){
    if(firstdate_button.hasClass('dropbutton_open')) {
      firstdate_button.removeClass('dropbutton_open')
      firstdate_button.addClass('dropbutton_close')
      firstdate.removeClass('show_datepicker');
      lastdate_button.attr('disabled',false)
      lastdate.attr('disabled',false)
    }
    if(lastdate_button.hasClass('dropbutton_open')) {
      lastdate_button.removeClass('dropbutton_open')
      lastdate_button.addClass('dropbutton_close')
      lastdate.removeClass('show_datepicker');
      firstdate_button.attr('disabled',false)
      firstdate.attr('disabled',false)
    }
  })
}
//----drop menu's logic---//
{
  var guests = $('#guests');
  var guests_button = $('#guests_button');
  var dropMenu = $('#dropMenu1')

  guests.on('click',function(){
    guests_button.trigger('click');
  })
  guests_button.on('click',function(){
    dropMenu.hasClass('dropMenu_show') ? dropMenu.hide() : dropMenu.show();
    dropMenu.toggleClass('dropMenu_show')
      if(dropMenu.hasClass('dropMenu_show')){
        $(this).removeClass('dropbutton_close')
        $(this).addClass('dropbutton_open')
      } else {
        $(this).addClass('dropbutton_close')
        $(this).removeClass('dropbutton_open')
      }
    dropMenu.hasClass('dropMenu_show') ? guests.css('border-color','rgba(31, 32, 65, 0.50)') : guests.css('border-color','')
  })
}
//----guest's counter---//
{
  var minus_button = $('.minus')
  var plus_button = $('.plus')
  var clear_button = $('[data-guests-button="clear"]')
  var confirm_button = $('[data-guests-button="confirm"]')
  var guests_count = {
    adult : 0,
    children : 0,
    baby : 0,

    plus : function (guest_type) {
      switch (guest_type) {
        case 'adult':
          return ++this.adult
        case 'children' :
            return ++this.children
        case 'baby' :
          return ++this.baby
        default:
          break;
      }
    },
    minus : function (guest_type) {
      switch (guest_type) {
        case 'adult':
          if(this.adult-1<0) return;
            return --this.adult
        case 'children' :
          if(this.children-1<0) return;
            return --this.children
        case 'baby' :
          if(this.baby-1<0) return;
            return --this.baby
        default:
          break;
      }
    },
    check : function (guest_type) {
      if (guest_type == 'adult'){ 
      return this.adult}
      if (guest_type == 'children')
      return this.children
      if (guest_type == 'baby')
      return this.baby
    },
    reset : function () {
      this.adult = 0;
      this.children = 0;
      this.baby = 0;
    },
    toString: function() {
      var sum = this.adult + this.children
      var modificator1 = ' Гостей'
      var modificator2 = ' Младенцев'
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
    let guest_type = $(this).parent('div').attr('data-guests-type')
    span.html(guests_count.plus(guest_type))
      if(guests_count.check(guest_type)!=0) {
        $(this).siblings(minus_button).removeClass('minus-unactive')
      }
  })

  minus_button.on('click', function(){
    let span = $(this).siblings('span');
    let guest_type = $(this).parent('div').attr('data-guests-type')
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
}


  $('.room-cart-slick').slick({
    dots: true,
    accessibility: true,
  });

})


