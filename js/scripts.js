$(document).ready(function() {
    $("#formy").submit(function(event) {
        event.preventDefault();
        $('#formy').hide();
        
        // var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
        // var vowels = [];
        var sentence = $('#sentence').val();

        
        var puzzle = sentence.replace(/a|e|i|o|u/gi, "-");
        // return puzzle;
        $('.output').append('<p>'+puzzle+'</p>')
    });
});