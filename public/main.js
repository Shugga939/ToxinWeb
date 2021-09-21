'use strict'
window.$ = require('jquery')
window.jQuery = require('jquery')
import '/plugins/slick/slick'
import '/plugins/chartJs/dist/chart'
import '/styles/jquery-ui/jquery-ui'
import '/plugins/datepicker/datepicker'
import {initDatePicker} from '/js/datepickerLogic'

$(document).ready(function(){
  
  initDatePicker();
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

{
  const ratingCanavas = document.getElementById('rating');
  if (ratingCanavas) {
  const gradientOrange = ratingCanavas.getContext('2d').createLinearGradient(0, 0, 0, 100);
  const gradientPurple = ratingCanavas.getContext('2d').createLinearGradient(0, 0, 0, 100);
  const gradientGreen = ratingCanavas.getContext('2d').createLinearGradient(0, 0, 0, 100);

  gradientOrange.addColorStop(0, '#FFE39C');
  gradientOrange.addColorStop(1, '#FFBA9C ');

  gradientPurple.addColorStop(0, '#BC9CFF');
  gradientPurple.addColorStop(1, '#8BA4F9');

  gradientGreen.addColorStop(0, ' #6FCF99');
  gradientGreen.addColorStop(1, '#6BD0BE');
  
  const ratingData = {
    labels: [
      ' Великолепно',
      ' Хорошо',
      ' Удовлетворительно',
      ' Разочарован'
    ],
    datasets: [
      {
        data: [130, 65, 65, 0],
        backgroundColor : [gradientOrange, gradientPurple, gradientGreen],
        borderWidth: 2
      }
    ]
  }
  const ratingOption = {
    rotation: 180,
    cutout: 55,
    
    plugins: {
      legend: {
        display: false,
      }
    },
    maintainAspectRatio: false,
    cutoutPercentage: 90,
  }
   new Chart (ratingCanavas, {
    type: 'doughnut',
    data: ratingData,
    options: ratingOption
  })
}
}
  
  $('.range-slider').slider({
    range: true,
    min: 500,
    max: 15500,
    values: ['5000','10000'],
    slide: function(event,ui){
        let val1 = ui.values[0]+'';
        let val2 = +ui.values[1]+'';
        if (val1>10000) val1 = val1.substring(0,2) + ' ' + val1.substring(2)
        if (val1>1000) val1 = val1.substring(0,1) + ' ' + val1.substring(1);
        if (val2>10000) val2 = val2.substring(0,2) + ' ' + val2.substring(2)
        if (val2>1000) val2 = val2.substring(0,1) + ' ' + val2.substring(1);
        $('.slider-value').val(val1 + 'P - ' + val2 + 'P');
    }
})
$('.guests').on('click',function(){alert('00')})
})


