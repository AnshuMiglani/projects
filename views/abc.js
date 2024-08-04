const srchbutton= document.getElementById("searchbar_button");
const textbox= document.getElementById("weather_search");
const display= document.getElementById("temp_display");
const icon= document.getElementById("iconweather");
const temp= document.getElementById("tempcode");
const getinfo= async ()=>{
    // eventt.preventdefault();
    
    if(textbox.value== ""){
        display.innerText= "Please enter a valid city";
        tempcode.innerHTML="";
        textbox.value="";
    }
    else{
        try{
            let url= `https://api.openweathermap.org/data/2.5/weather?q=${textbox.value}&units=metric&appid=3b2b037588966e0b415fc9450b2b9022`;
            const ab= await fetch(url);
            const orgdata=  await ab.json();
            const arrdata= [orgdata];
            if(arrdata[0].weather[0].main=="Clouds"){
                tempcode.innerHTML= `<span id="temp" style="font-size: 2.4em; margin-left:30px;  margin-right:35px; color: white;">${((arrdata[0].main.temp)).toFixed(1)}°C</span><i class="fa-solid fa-cloud" id="iconweather" style="font-size: 2.4em;  color: rgb(147, 145, 145);"></i>`;
                display.innerText= `${arrdata[0].name}, IN`;
                textbox.value="";
            }
            else if(arrdata[0].weather[0].main=="Sunny"){
                tempcode.innerHTML= `<span id="temp" style="font-size: 2.4em; margin-left:30px;  margin-right:35px; color: white;">${((arrdata[0].main.temp)).toFixed(1)}°C</span><i class="fa-solid fa-sun" id="iconweather" style="font-size: 2.4em;  color: rgb(226, 184, 31);"></i>`;
                display.innerText= `${arrdata[0].name}, IN`;
                textbox.value="";
            }
            else{
                tempcode.innerHTML= `<span id="temp" style="font-size: 2.4em; margin-left:30px;  margin-right:35px; color: white;">${((arrdata[0].main.temp)).toFixed(1)}°C</span><i class="fa-solid fa-smog" id="iconweather" style="font-size: 2.4em;  color: DodgerBlue;"></i>`;
                display.innerText= `${arrdata[0].name}, IN`;
                textbox.value="";
            }
            
        }
        catch{
            display.innerText= "Please enter a valid city";
            tempcode.innerHTML="";
            textbox.value="";
        }
    }
};
srchbutton.addEventListener("click",getinfo);