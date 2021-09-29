const tombOsztaly=[];
let hossz = 6;
const allatok = [];

$(function(){
    beolvasOsztaly();
    beolvasAllatok();  
    nyomtat();
});

function beolvasAllatok() {
    $.ajax(
        {url: "adatok.json",
        success: function(result){
            //console.log(result);
            result.allatlista.forEach((value)=>{                 
                allatok.push(value); 
    });                
        }
    })
}

function beolvasOsztaly() {
    $.ajax(
        {url: "osztalyok.json",
        success: function(result){
        //console.log(result);
        result.osztalylista.forEach((value)=>{
            //console.log(value);
            for (const osztaly in value){
                $("#kategoria").append("<option value='osztalyok' onclick='osztalyKivalasztas()' id='" + osztaly + "'>" + osztaly + "</option>");
                tombOsztaly.push(value[osztaly]);
                
            }
            });
      }
    }
      );
}

function osztalyKivalasztas() {
    $("#tartalom").empty();
    const indexek = document.getElementById("kategoria").selectedIndex;

    $("#tartalom").append("<table>");
    $("#tartalom").append("<tr>");

    for (let index = 0; index < tombOsztaly[indexek - 1].length; index++) {
        $("#tartalom").append("<td>"+tombOsztaly[indexek - 1][index]+"</td>");
        keveres();           
    }
    /* if(indexek == 1) {
        for (let index = 0; index < tombOsztaly[0].length; index++) {
            $("#tartalom").append("<td>"+tombOsztaly[0][index]+"</td>");
            keveres();           
        }
    } else if(indexek == 2) {
        for (let index = 0; index < tombOsztaly[1].length; index++) {
            $("#tartalom").append("<td>"+tombOsztaly[1][index]+"</td>");
            keveres();
        }

    }else if (indexek == 3) {
        for (let index = 0; index < tombOsztaly[2].length; index++) {
            $("#tartalom").append("<td>"+tombOsztaly[2][index]+"</td>");
            keveres();
        }

    }else if (indexek == 4) {
        for (let index = 0; index < tombOsztaly[3].length; index++) {
            $("#tartalom").append("<td>"+tombOsztaly[3][index]+"</td>");
            keveres();
        }

    }else if (indexek == 5) {
        for (let index = 0; index < tombOsztaly[4].length; index++) {
            $("#tartalom").append("<td>"+tombOsztaly[4][index]+"</td>");
            keveres();
        }

    }else if (indexek == 6) {
        for (let index = 0; index < tombOsztaly[5].length; index++) {
            $("#tartalom").append("<td>"+tombOsztaly[5][index]+"</td>");
            keveres();
        }

    } */
    
    $("#tartalom").append("</tr>");
    $("#tartalom").append("</table>");
    
}
function nyomtat() {
    $('#nyomtat').on('click', function () {
    $('footer, form, header, #felvetel').css('display', 'none'); 
    window.print(); 
    });
}

function keveres(){
    allatok.sort(function (a, b) {        
        return Math.random() - 0.5;
        });
        for (let index = 0; index < 1; index++) {
                for (let i = 0; i < 3; i++) {
                $("#tartalom").append("<td>" + allatok[i] + "</td>");
            }        
        }
        $("#tartalom").append("<br>");
}