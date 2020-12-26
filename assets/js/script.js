function showpreview(){
    var htmlcode = document.getElementById('html').value
    var csscode = "<style>" + document.getElementById('css').value + "</style>"
    var jscode = "<script>" + document.getElementById('js').value + "</script>"

    var frame = document.getElementById('previewwindow').contentWindow.document;
    frame.open();
    frame.write(htmlcode+csscode+jscode);
    frame.close();

}

var textareatoggler = document.querySelectorAll('.textareatoggler')
var textareawrapper = document.querySelectorAll('.textareawrapper')
var textareatogglers = Array.from(textareatoggler)
var textareawrappers = Array.from(textareawrapper)

var closedtabs = document.getElementsByClassName('textareawrapper min')


textareatogglers[0].addEventListener('click', function(){
    textareawrappers[0].classList.toggle('min')
    textareatogglers[0].classList.toggle('min')
    if(closedtabs.length > 2 ){
    textareawrappers[0].classList.remove('min')
    textareatogglers[0].classList.remove('min')
}
})
textareatogglers[1].addEventListener('click', function(){
    textareawrappers[1].classList.toggle('min')
    textareatogglers[1].classList.toggle('min')
    if(closedtabs.length > 2 ){
    textareawrappers[1].classList.remove('min')
    textareatogglers[1].classList.remove('min')
}
})
textareatogglers[2].addEventListener('click', function(){
    textareawrappers[2].classList.toggle('min')
    textareatogglers[2].classList.toggle('min')
    if(closedtabs.length > 2 ){
    textareawrappers[2].classList.remove('min')
    textareatogglers[2].classList.remove('min')
}
})


