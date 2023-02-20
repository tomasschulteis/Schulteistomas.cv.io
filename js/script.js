let visiblemenu = false;

//function that hides and shows the menu

function showhidemenuu(){
    if(visiblemenu){
        document.getElementById('nav').classList =""
        visiblemenu =false;
    }else{
        document.getElementById('nav').classList ="responsive"
        visiblemenu =true;
    }
}

function select(){
    //hide the menu when you select an option
    document.getElementById("nav").classList =""
    visiblemenu = false
}