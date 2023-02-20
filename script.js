// your code here
let lin = document.querySelector("#url");
let input_name = document.querySelector("#name");
let input_year = document.querySelector("#year");
let btn = document.querySelector("#button");

btn.addEventListener('click' , changeURL);


function changeURL(e) {
//    
e.preventDefault()
let name_val = input_name.value ;
let year_val = input_year.value ;

   if (name_val != "" && year_val != ""){
    lin.innerHTML =` https://localhost:8080/?name=${name_val}&year=${year_val} `
    // name_val ="" ;
    // year_val ="" ;
   }
   if (name_val == "" && year_val != ""){
    lin.innerHTML = ` https://localhost:8080/?year=${year_val} `
   } 
   if (name_val != "" && year_val == ""){
    lin.innerHTML = ` https://localhost:8080/?name=${name_val} `
   }
   else {
    lin.innerHTML = "https://localhost:8080/"
    
   }


}
