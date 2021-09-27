var tombOsztaly=[];
var hossz = 6;

$(function(){
    beolvasOsztaly();
});

function beolvasAllatok() {
    $.ajax(
        {url: "adatok.json",
        success: function(result){
            //console.log(result);
            result.allatlista.forEach((value)=>{
                //console.log(value);
                    $("#tartalom").append("<p>"+value+"</p>"); 
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
    let indexek = document.getElementById("kategoria").selectedIndex;

    if(indexek == 1) {
        $("#tartalom").append("<table>");
        $("#tartalom").append("<tr>");
        for (let index = 0; index < tombOsztaly[0].length; index++) {
            $("#tartalom").append("<td>"+tombOsztaly[0][index]+"</td>");
            console.log(indexek);
            
        }
    } else if(indexek == 2) {
        $("#tartalom").append("<table>");
        $("#tartalom").append("<tr>");
        for (let index = 0; index < tombOsztaly[1].length; index++) {
            $("#tartalom").append("<td>"+tombOsztaly[1][index]+"</td>");
            
        }

    }else if (indexek == 3) {
        $("#tartalom").append("<table>");
        $("#tartalom").append("<tr>");
        for (let index = 0; index < tombOsztaly[2].length; index++) {
            $("#tartalom").append("<td>"+tombOsztaly[2][index]+"</td>");
            
        }

    }else if (indexek == 4) {
        $("#tartalom").append("<table>");
        $("#tartalom").append("<tr>");
        for (let index = 0; index < tombOsztaly[3].length; index++) {
            $("#tartalom").append("<td>"+tombOsztaly[3][index]+"</td>");
            
        }

    }else if (indexek == 5) {
        $("#tartalom").append("<table>");
        $("#tartalom").append("<tr>");
        for (let index = 0; index < tombOsztaly[4].length; index++) {
            $("#tartalom").append("<td>"+tombOsztaly[4][index]+"</td>");
            
        }

    }else if (indexek == 6) {
        $("#tartalom").append("<table>");
        $("#tartalom").append("<tr>");
        for (let index = 0; index < tombOsztaly[5].length; index++) {
            $("#tartalom").append("<td>"+tombOsztaly[5][index]+"</td>");
            
        }

    }
    
    $("#tartalom").append("</tr>");
    $("#tartalom").append("</table>");
    
}

function keveres(){
    beolvasAllatok();

}