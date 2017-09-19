var city;
var fuel;
var cities;
var invocation = new XMLHttpRequest();
var url = 'http://bar.other/resources/public-data/';
   
function callOtherDomain() {
  if(invocation) {    
    invocation.open('GET', url, true);
    invocation.onreadystatechange = handler;
    invocation.send(); 
  }
}
$(document).ready(function(){

    $('select').material_select();



axios.get("http://fuelpriceindia.herokuapp.com/cities")
.then(function(response){

console.log(response);
cities=response.data.cities;
var output='';
for(var i=0;i<cities.length;i++)
{
}


})
.catch(function(err){

console.log(err);

})


$('#searchForm').on("submit",function(e)
{

var x=$('#city').val();
console.log(x);
city=x;
var l=document.getElementById("pet").checked;
console.log(l);
var m=document.getElementById("die").checked;
console.log(m);
if(l==true)
{
  fuel="petrol";
  console.log(fuel);
}
searchForm.reset();
if(m==true)
{
  fuel="diesel";
  console.log(fuel);
}

axios.get("http://fuelpriceindia.herokuapp.com/price?city="+city+"&fuel_type="+fuel)
.then(function(response){

  console.log(response);
  var output='';
if(fuel=="petrol"){
  output=`
<h5>City: ${city}</h5>


  `;

  var output2=`<h5>Petrol: INR ${response.data.petrol}</h5> `;
$('#type').html(output);
$('#test4').html(output2);

}

else {
  output=`
<h5>City: ${city}</h5>


  `;

  var output2=`<h5>Diesel: INR ${response.data.diesel}</h5> `;

  $('#type').html(output);
  $('#test4').html(output2);
}


})

.catch(function(err){

  console.log(err);
})



e.preventDefault();

});



});
