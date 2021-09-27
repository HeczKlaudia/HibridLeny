var tombOsztaly=[];
var hossz = 6;

$(function(){
    beolvasOsztaly();
//    tablazat();
    console.log(tombOsztaly);
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

//function tablazat() {
//    $("article").append("<table>");
//    for (let indexx = 0; indexx < tombOsztaly.length; indexx++) {
//        $("article").append("<tr>");
//        $("article").append("<th id='elso'>");
//        $("#elso").append(tombOsztaly[indexx]);
//        for (let index = 1; index < 4; index++) {
//            $("article").append("<th>");
//            $("th").append(tombOsztaly[index]);
//            $("article").append("</th>");
//        }
//        $("article").append("</th>");
//        $("article").append("</tr>");
//        
//   }
//   $("article").append("</table>");
//
//}

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
//    let indexek = $("kategoria").click(function(){
//        console.log($(this).index());        
//   });

    let indexek = $("#kategoria").index();

    if(indexek == 1) {
        //alert("szfa");
        //document.getElementById("tartalom").innerHTML = "nyeh";
        $("#tartalom").append("<table>");
        $("#tartalom").append("<tr>");
        for (let index = 0; index < tombOsztaly[0].length; index++) {
            $("#tartalom").append("<td>"+tombOsztaly[0][index]+"</td>");
            console.log(indexek);
            
        }
        
        
        
        //keveres();

    } else if(indexek == 2) {
        //alert("szfb");
        $("#tartalom").append("<table>");
        $("#tartalom").append("<tr>");
        for (let index = 0; index < tombOsztaly[1].length; index++) {
            $("#tartalom").append("<td>"+tombOsztaly[1][index]+"</td>");
            
        }

    }else if (indexek == 3) {
        //alert("szfc");
        $("#tartalom").append("<table>");
        $("#tartalom").append("<tr>");
        for (let index = 0; index < tombOsztaly[2].length; index++) {
            $("#tartalom").append("<td>"+tombOsztaly[2][index]+"</td>");
            
        }

    }else if (indexek == 4) {
        //alert("fka");
        $("#tartalom").append("<table>");
        $("#tartalom").append("<tr>");
        for (let index = 0; index < tombOsztaly[3].length; index++) {
            $("#tartalom").append("<td>"+tombOsztaly[3][index]+"</td>");
            
        }

    }else if (indexek == 5) {
        //alert("kfb");
        $("#tartalom").append("<table>");
        $("#tartalom").append("<tr>");
        for (let index = 0; index < tombOsztaly[4].length; index++) {
            $("#tartalom").append("<td>"+tombOsztaly[4][index]+"</td>");
            
        }

    }else if (indexek == 6) {
        //alert("kfc");
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