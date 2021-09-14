window.$ = require('jquery')
window.jQuery = require('jquery')
$(document).ready(function(){

    $('#slider').slider({
        min: 0,
        max: 100,
        value: 0,
        slide: function(event,ui){
            $('#val').val(ui.value);
        }
        
    })
    
})