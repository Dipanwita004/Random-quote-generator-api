const btn=document.getElementById("btn");
const res=document.getElementById("joke");

btn.addEventListener("click",()=>{
    jokeGenerator();
})

async function jokeGenerator(){
    let url="https://v2.jokeapi.dev/joke/Miscellaneous,Pun,Spooky,Christmas?type=single"
try{


    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    res.style.display="block";
    res.innerHTML=data.joke;
}
catch(error){
    res.style.display="block";
    res.innerHTML="Failed to load joke!!";
}
    
};