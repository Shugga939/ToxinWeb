export const initDatePicker = function (){
  let firstdate = $('input[name="dateArrival"]');
  let lastdate = $('input[name="dateLeaving"]');
  let firstdate_button = firstdate.siblings("button");
  let lastdate_button = lastdate.siblings("button");
  let datepicker = firstdate.datepicker().data('datepicker');


  if (lastdate.length && firstdate.length){
    firstdate.datepicker({
    range: true,
    todayButton: true,
    clearButton: true,
    minDate: new Date(),
    toggleSelected: true,
    
    onSelect: function(date){
      firstdate.val(date.split(",")[0]);
      lastdate.val(date.split(",")[1]);
    }})
  } else {
    firstdate.datepicker({
      range: true,
      todayButton: true,
      clearButton: true,
      minDate: new Date(),
      toggleSelected: true,
      
    //do It
  })}
  
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

  firstdate.on('click', function(){
    firstdate_button.trigger('click');
    
  })
  lastdate.on('click', function(){
    lastdate_button.trigger('click');
  })
  //button 'apply'
  $('.datepicker').find('span[data-action="today"]').on('click',function(){
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
  function initSoloInput(){
    firstdate.datepicker({
      range: true,
      todayButton: true,
      clearButton: true,
      minDate: new Date(),
      toggleSelected: true,
      
    })
  
}