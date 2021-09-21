export const initDatePicker = function (){
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