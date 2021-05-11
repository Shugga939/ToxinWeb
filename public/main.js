import './main.scss';
var datepicker = $('#startdate').datepicker().data('datepicker');
var startdate = $('#startdate');

$(document).ready(function(){

$('#startdate').datepicker({
    range: true,
    todayButton: true,
    clearButton: true,
    minDate: new Date(),
    toggleSelected: true,
    
    
    onSelect: function(fd){
        $('#startdate').val(fd.split(",")[0]);
        $('#enddate').val(fd.split(",")[1]);
    }

})
$("#butt").click( function (){
    if(startdate.hasClass('show_datepicker')) {
        startdate.removeClass('show_datepicker');
        datepicker.hide();
        $("#butt").css("background-image" , "url('dropd.a68cdfe8.svg')")
        $("#butt2").css("background-image" , "url('dropd.a68cdfe8.svg')")
        }
    else {startdate.addClass('show_datepicker');
        datepicker.show();
        $("#butt").css("background-image" , "url('upd.05f0ce32.svg')")
        }
})
$("#butt2").click( function (){
    if(startdate.hasClass('show_datepicker')) {
        startdate.removeClass('show_datepicker');
        datepicker.hide();
        $("#butt2").css("background-image" , "url('dropd.a68cdfe8.svg')")
        $("#butt").css("background-image" , "url('dropd.a68cdfe8.svg')")
        }
    else {startdate.addClass('show_datepicker');
        datepicker.show();
        $("#butt2").css("background-image" , "url('upd.05f0ce32.svg')")
        }
})
$(('.datepicker--button[data-action="today"]')).click(function(){
    $("#butt").css("background-image" , "url('dropd.a68cdfe8.svg')")
    $("#butt2").css("background-image" , "url('dropd.a68cdfe8.svg')")
    datepicker.hide();
    startdate.removeClass('show_datepicker');
})

$(document).click(function(event){       //не работает DOIT 
    let datepickerBody = $("#butt");
    if ((datepickerBody.is(event.target)) && startdate.hasClass('show_datepicker')){
    }
})
$("#butt3").click(function(){
    $(".find-guestsChoice").slideToggle("showGuests")
})
$("#adult-").click(function(){
    let count = $("#counterAdult").text();
    $("#counterAdult").text(Number.parseInt(count)+1); 

    
})
})
/*
startdate.click(function (){
    datepicker.hide();
})*/