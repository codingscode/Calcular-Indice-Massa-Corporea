$(function() {
   var formulario = $("#formulario");

   formulario.on("submit", function(evento) {

      evento.preventDefault();
      var pResultado = $("#imc");

      function calcularIMC() {
        var massa = $('#massa').val()
        var altura = $('#altura').val()
  
        var imc = (massa)/((altura)**2)
        return imc.toFixed(2);
      }

      pResultado.html(calcularIMC());
   });

});







/*

$(document).ready(
    //function calcular() {
        var massa = $('#massa').val();
        var altura = $('#altura').val();
        
        var imc = (massa)/((altura)**2)
   //}
   $("#calcular").click(function() {
    $("#imc").text(imc)
  });

); */

/*
$(function() {
  var massa = $('#massa')
  var altura = $('#altura')


}); */
/*
$(document).ready(function(){
  $("button").click(function(){
    //$("#test").hide();
    
   
    
      var massa = $('#massa').val()
      var altura = $('#altura').val()

      var imc = (massa)/((altura)*(altura))
      $("#imc").text(imc)
      //$("p").html(imc)
    

      
  });
});*/







