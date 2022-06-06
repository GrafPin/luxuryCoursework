var snowsrc = "./images/flake_mini.png";
var winter = document.getElementById("winter_checkbox");
var lightrope = document.getElementsByClassName("lightrope");

function save() {
  var checkbox = document.getElementById("winter_checkbox");
  localStorage.setItem("winter_checkbox", checkbox.checked);
  location.reload();
}

var checked = JSON.parse(localStorage.getItem("winter_checkbox"));
document.getElementById("winter_checkbox").checked = checked;

// Количество снежинок
var no = 10;
// Время исчезновения снега
var hidesnowtime = 0;

function iecompattest() {
  // ссылка на корневой элемент (html)
  return document.documentElement;
}

var dx, xp, yp; // переменные, координаты
var am, stx, sty; // амплитуда и переходы
var i, doc_width, doc_height; //переменная i и переменные высоты

doc_width = iecompattest().clientWidth; // ширина окна браузера
doc_height = iecompattest().clientHeight; // высота окна браузера

dx = new Array();
xp = new Array();
yp = new Array();
am = new Array();
stx = new Array();
sty = new Array();

if(winter.checked) {
  for (i = 0; i < no; ++i) {
    dx[i] = Math.random() * 10; // переменные координат
    xp[i] = Math.random() * (doc_width - 50); // переменные позиции
    yp[i] = Math.random() * doc_height;
    am[i] = Math.random() * 20; // амплитудные переменные
    stx[i] = 0.02 + Math.random() / 10; // переменные шага
    sty[i] = 0.5 + Math.random(); // переменные шага
  
    if (i != 0) {
      document.write('<div id="dot' + i + '" class="dot" style="POSITION: absolute; Z-INDEX: ' + i + "; VISIBILITY: visible; TOP: 15px; LEFT: 15px;\"><img src='" + snowsrc + '\' border="0"></div>');
    } else {
      document.write('<div id="dot' + i + '" class="dot" style="POSITION: absolute; Z-INDEX: ' + i + "; VISIBILITY: visible; TOP: 15px; LEFT: 15px;\"><img src='" + snowsrc + '\' border="0"></div>');
    }
  }
}

function snow() {
  // Основная функция анимации
  // doc_height = iecompattest().scrollHeight //снежинки падают до конца страницы
  for (i = 0; i < no; ++i) {
    yp[i] += sty[i];
    if (yp[i] > doc_height - 50) {
      xp[i] = Math.random() * (doc_width - am[i] - 30);
      yp[i] = 0;
      stx[i] = 0.02 + Math.random() / 10;
      sty[i] = 0.5 + Math.random();
    }
    dx[i] += stx[i];
    document.getElementById("dot" + i).style.top = yp[i] + "px";
    document.getElementById("dot" + i).style.left =
      xp[i] + am[i] * Math.sin(dx[i]) + "px";
  }
  snowtimer = setTimeout("snow()", 10); // скорость падения
}

function hidesnow() {
  if (window.snowtimer) clearTimeout(snowtimer);
  for (i = 0; i < no; i++)
    document.getElementById("dot" + i).style.visibility = "hidden";
}

if (winter.checked) { snow(); }
else { lightrope[0].style.display = "none";}

if (hidesnowtime > 0) setTimeout("hidesnow()", hidesnowtime * 1000);