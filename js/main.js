
function javaload() {
    var elem = $("#java");
    var width = 20;
    var id = setInterval(fframe, 35);
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
        if (width >= 85) {
            clearInterval(id);
        } else {
            width++;
            console.log(width);
            document.getElementById('java').style.width = width + "%";
        }
    }
}
function cload() {
    var elem = $("#c");
    var width = 20;
    var id = setInterval(fframe, 35);
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
    var id = setInterval(fframe, 35);
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
        if (width >= 52) {
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
    var id = setInterval(fframe, 35);
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
        if (width >= 73) {
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
    var id = setInterval(fframe, 35);
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
        if (width >= 64) {
            clearInterval(id);
        } else {
            width++;
            console.log(width);
            //elem.style.width = "" + width + "%";
            document.getElementById('htmlcss').style.width = width + "%";
        }
    }
}
function androidload() {
    var elem = $("#androidprog");
    var width = 20;
    var id = setInterval(fframe, 35);
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
        if (width >= 62) {
            clearInterval(id);
        } else {
            width++;
          //  console.log(width);
            //elem.style.width = "" + width + "%";
            document.getElementById('androidprog').style.width = width + "%";
        }
    }
}
function frontendload() {
    var elem = $("#FrontEnd");
    var width = 20;
    var id = setInterval(fframe, 35);
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
        if (width >= 70) {
            clearInterval(id);
        } else {
            width++;
            //elem.style.width = "" + width + "%";
            document.getElementById('FrontEnd').style.width = width + "%";
        }
    }
}

function displaySkill() {
    javaload();
    cload();
    pythonload();
    mysqlload();
    htmlcssload();
    androidload();
    frontendload();
    backendload();
}
function hideadd() {
    $("#education").fadeOut(500);
    $("#skills").fadeOut(500);
    $("#certif").fadeOut(500);
    $("#projects").fadeOut(500);
    $("#achiev").fadeOut(500);
}


function main() {
    $("#education").on('click', function () {
        $("#educ").slideToggle("slow");
        $("#educparent").toggleClass("nac");

    });
    $("#skills").on('click', function () {
        $("#edu").slideToggle("slow");
        $("#skillsparent").toggleClass("nac");
        displaySkill();
    });
    $("#certif").on("click", function () {
        $("#cert").slideToggle("slow");
        $("#certifparent").toggleClass("nac");
    });
    $("#projects").on("click", function () {
        $("#proj").slideToggle("slow");
        $("#projparent").toggleClass("nac");
    });
    $('.flip').hover(function () {
        $(this).find('.card').toggleClass('flipped');

    });
   
}
$(document).ready(main);
