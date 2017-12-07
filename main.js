
function javaload() {
    var elem = $("#java");
    var width = 20;
    var id = setInterval(fframe,20);
    var child = elem.children();
    function fframe() {
        if (width < 40) {
            child.css({ "background-color": "#B22222" });
        }
        else
            if (width < 70) {
                child.css({ "background-color": "#DAA520" });
            }
            else
                if (width >= 70) {
                    child.css({ "background-color": "#3CB371" });

                }
        if( width>=85){
            clearInterval(id);
        } else {
            width++;
            console.log(width);
            document.getElementById('java').style.width = width+ "%";
        }
    }
}
function cload() {
    var elem = $("#c");
    var width = 20;
    var id = setInterval(fframe, 20);
    var child = elem.children();
    function fframe() {
        if (width < 40) {
            child.css({ "background-color": "#B22222" });
        }
        else
        if (width < 70 && width>=40) {
            child.css({ "background-color": "#DAA520" });
            }
        else
        if (width >= 70) {
            child.css({ "background-color": "#3CB371" });
        }
        if (width >= 72) {
            clearInterval(id);
        } else {
            width++;
            console.log(width);
            //elem.style.width = "" + width + "%";
            document.getElementById('c').style.width = width + "%";
        }
    }
}
function pythonload() {
    var elem = $("#python");
    var width = 20;
    var id = setInterval(fframe,20);
    var child = elem.children();
    function fframe() {
        if (width < 40) {
            child.css({ "background-color": "#B22222" });
        }
        else
            if (width < 70 && width >= 40) {
                child.css({ "background-color": "#DAA520" });
            }
            else
                if (width >= 70) {
                    child.css({ "background-color": "#3CB371" });
                }
        if(width>=52){
            clearInterval(id);
        } else {
            width++;
            console.log(width);
            //elem.style.width = "" + width + "%";
            document.getElementById('python').style.width = width + "%";
        }
    }
}
function mysqlload() {
    var elem = $("#mysql");
    var width = 20;
    var id = setInterval(fframe, 20);
    var child = elem.children();
    function fframe() {
        if (width < 40) {
            child.css({ "background-color": "#B22222" });
        }
        else
            if (width < 70) {
                child.css({ "background-color": "#DAA520" });
            }
            else
                if (width >= 70) {
                    child.css({ "background-color": "#3CB371" });
                }
        if(width>=73){
            clearInterval(id);
        } else {
            width++;
            console.log(width);
            //elem.style.width = "" + width + "%";
            document.getElementById('mysql').style.width = width + "%";
        }
    }
}
function htmlcssload() {
    var elem = $("#htmlcss");
    var width = 20;
    var id = setInterval(fframe, 20);
    var child = elem.children();
    function fframe() {
        if (width < 40) {
            child.css({ "background-color": "#B22222" });
        }
        else
            if (width < 70) {
                child.css({ "background-color": "#DAA520" });
            }
            else
                if (width >= 70) {
                    child.css({ "background-color": "#3CB371" });
                }
        if(width>=64){
            clearInterval(id);
        } else {
            width++;
            console.log(width);
            //elem.style.width = "" + width + "%";
            document.getElementById('htmlcss').style.width = width + "%";
        }
    }
}
function displayskill() {
    javaload();
    cload();
    pythonload();
    mysqlload();
    htmlcssload();
}
function hideadd() {
    $("#education").fadeOut(1000);
    $("#skills").fadeOut(1000);
    $("#certif").fadeOut(1000);
    $("#projects").fadeOut(1000);
    $("#achiev").fadeOut(1000);
}
function main() {
    $("#education").on('click', function () {
        $("#educ").toggle(500);
        $("#educparent").toggleClass("nac");

    });
    $("#skills").on('click', function () {
        $("#edu").toggle(500);
        $("#skillsparent").toggleClass("nac");
        displayskill();
    });

}
$(document).ready(main);
