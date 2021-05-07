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

})
$("#butt").click( function (){
    if(startdate.hasClass('shower')) {
        startdate.removeClass('shower');
        datepicker.hide()}
    else {startdate.addClass('shower');
        datepicker.show()
        $(this).css({"background-image": "url('../src/img/upd.svg')"})
        }
})

$("#butt2").click( function (){
    if(startdate.hasClass('shower')) {
        startdate.removeClass('shower');
        datepicker.hide()}
    else {startdate.addClass('shower');
        datepicker.show()}
})


$(document).click(function(event){
    if (startdate.hasClass('shower')){
    startdate.removeClass('shower')}
})
/*
startdate.click(function (){
    datepicker.hide();
})*/