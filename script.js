function myfunction(){
    let a =(document.getElementById("q1").value);
let x = (parseInt(document.getElementById("q2").value) / 2);
let b = (document.getElementById("q2").value);
let y= (document.getElementById("q3").value);
let z=(document.getElementById("q4").value);
let num="num";
let ssn="ssn";
let mum="mum";
    let name="name";


document.getElementById("num").innerHTML = "In "+b +" years ";
      document.getElementById("name").innerHTML = a + " would have left you for";
    document.getElementById("num2").innerHTML = x +" other friends.";
    
   

}

$("#submit").click(function(){
    $(".fortune").show();
        $(".qs").hide();

});
$(".reset").click(function(){
    $(".fortune").hide();
    $(".qs").show();
});





    