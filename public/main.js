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
        }
    else {startdate.addClass('show_datepicker');
        datepicker.show();
        $("#butt2").css("background-image" , "url('upd.05f0ce32.svg')")
        }
})
$('data-action="today"').click(function(){
    alert("asd")
})

/*$(document).click(function(event){
    if (startdate.hasClass('show')){
    startdate.removeClass('show')}
})*/
})
/*
startdate.click(function (){
    datepicker.hide();
})*/