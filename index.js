const express= require("express");
const app= express();
const hbs= require("hbs");
const path= require("path");

//date ka kaam
const datewa= new Date();
const weekdays= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const daywa= weekdays[datewa.getDay()];
const aajkidate= datewa.getDate();
const monthlist= ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const currmonth= monthlist[datewa.getMonth()];
const aajkipuridate= aajkidate+" "+currmonth;
const PORT = process.env.PORT || 8000;
//api ka kaam




app.use(express.static(path.join(__dirname,"/views")));
app.set("view engine","hbs");
hbs.registerPartials(path.join(__dirname,"/partials"));

app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/about",(req,res)=>{
    res.render("about");
});

app.get("/weather",(req,res)=>{
    res.render("weather",{
        day: daywa,
        date: aajkipuridate
    });
});
app.get("*",(req,res)=>{
    res.render("errorpage");
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));

