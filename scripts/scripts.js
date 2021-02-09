
/*menu*/
var estudos = document.getElementById('estudos').innerHTML;
var docs = document.getElementById('docs').innerHTML;
var templates = document.getElementById('templates').innerHTML;
var magick = document.getElementById('magick').innerHTML;
var atalhos = document.getElementById('atalhos').innerHTML;
var outros = document.getElementById('outros').innerHTML;
function selecionar(qualBotao) {
    switch (qualBotao) {
        case '1':
            document.getElementById("botaoSelecionado").innerHTML = estudos;
            break;
        case '2':
            document.getElementById("botaoSelecionado").innerHTML = docs;
            break;
        case '3':
            document.getElementById("botaoSelecionado").innerHTML = templates;
            break;
        case '4':
            document.getElementById("botaoSelecionado").innerHTML = magick;
            break;
        case '5':
            document.getElementById("botaoSelecionado").innerHTML = atalhos;
            break;
        case '6':
            document.getElementById("botaoSelecionado").innerHTML = outros;
            break;
        default:
            document.getElementById("botaoSelecionado").innerHTML = "erro";
    }
}

function openDocs(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }