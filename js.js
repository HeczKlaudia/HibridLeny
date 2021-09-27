
$(document).ready(function () {
    beolvasOsztaly();
});

function beolvasOsztaly() {
    $.ajax(
        {url: "osztalyok.json",
        success: function(result){
        //console.log(result);
        result.osztalylista.forEach((value)=>{
            //console.log(value);
            for (const osztaly in value){
                document.getElementById("kategoria").innerHTML += "<option value='osztalyok' onclick='osztalyKivalasztas()' id='" + osztaly + "'>" + osztaly + "</option>";
            }
            });
      }
    }
      );
}

function osztalyKivalasztas() {
    //console.log(document.getElementById("kategoria").selectedIndex);

    let indexek = document.getElementById("kategoria").selectedIndex;
    if(indexek == 1) {
        //alert("szfa");
        document.getElementById("tartalom").innerHTML = "nyeh";
    } else if(indexek == 2) {
        //alert("szfb");
    }
}
