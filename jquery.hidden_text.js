
// el - DOM element, target text container
// len - number of chars to hide
function hidden_text(el, len) {
    var shortText = el.text().substring(0, len);
    var hiddenText = el.text().substring(len, el.text().length);
    el.text(shortText);
    el.append('<a href="#" class="show-hidden-text" style="text-decoration: underline;">...</a>');
    $('.show-hidden-text').on('click', function(e){
        e.preventDefault();
        $(this).hide();
        el.append(hiddenText).hide().fadeIn(400);
    });
}

// EXAMPLE 
// 
// hidden_text( $('.more'), 15 );
// 