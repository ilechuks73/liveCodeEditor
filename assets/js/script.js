function showpreview(){
    var htmlcode = document.getElementById('html').value
    var csscode = "<style>" + document.getElementById('css').value + "</style>"
    var jscode = "<script>" + document.getElementById('js').value + "</script>"

    var frame = document.getElementById('previewwindow').contentWindow.document;
    frame.open();
    frame.write(htmlcode+csscode+jscode);
    frame.close();

}

var textareatoggler = document.getElementsByClassName('textareatoggler')

function textareatoggle(){
  
}



for(var x=0; x < textareatoggler.length; x++){
    textareatoggler[x].addEventListener('click', textareatoggle)
}