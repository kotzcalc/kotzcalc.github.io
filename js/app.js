$(document).ready( function(){


$(".resultados").hide();
$("#calc").submit(function(e){
    e.preventDefault();
    $("#btnconfirma").prop( "disabled", true);
    $("#skill1").prop( "disabled", true);
    $("#skill2").prop( "disabled", true);
    $("#skill3").prop( "disabled", true);
    $("#skill4").prop( "disabled", true);
    $('#bonecoss').prop( "disabled", false);
    var s1 = $("#skill1").val();
    var s2 = $("#skill2").val();
    var s3 = $("#skill3").val();
    var s4 = $("#skill4").val();
    var ss = $('#bonecoss').prop('checked');

    if(ss){
      var result = 0;
      for(var i=1;i<s1;i++){
        result += (s1-i);
      }
      for(var i=1;i<s2;i++){
        result += (s2-i);
      }
      for(var i=1;i<s3;i++){
        result = result + (s3-i);
      }
      for(var i=1;i<s4;i++){
        result = result + (s4-i);
      }
      $(".result_green").html("x"+result+" livros");
      $(".result_blue").html("x"+result*2+" livros (Combinar)");
    } else {
      var result = 0;
      for(var i=1;i<s1;i++){
        result = result + (s1-i);
      }
      for(var i=1;i<s2;i++){
        result = result + (s2-i);
      }
      for(var i=1;i<s3;i++){
        result = result + (s3-i);
      }
      for(var i=1;i<s4;i++){
        result = result + (s4-i);
      }
      $(".result_blue").html("x"+result+" livros");
      $(".result_green").html("Não utiliza");
    }


    $(".resultados").toggle(500);

});

$(".limpar").click(function(){

$("#btnconfirma").prop( "disabled", false);
$("#skill1").prop( "disabled", false);
$("#skill2").prop( "disabled", false);
$("#skill3").prop( "disabled", false);
$("#skill4").prop( "disabled", false);
$('#bonecoss').prop( "disabled", false);

$("#skill1").val(1);
$("#skill2").val(1);
$("#skill3").val(1);
$("#skill4").val(1);
$(".resultados").toggle(500);
});

});
