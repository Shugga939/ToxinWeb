window.$ = require('jquery')
window.jQuery = require('jquery')
$(document).ready(function(){

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
    
})