//via jquery library using a special div tag
if(jQuery("democall").height() == 0{
// do something
}

// or call it when document is ready

JQuery(document).ready(function(){
if(jQuery("democall").height() == 0{

//do something
} 

///////////////////////////////

//via javascript using dynamic ad info from google

if(document.getElementsByTagName("iframe").item(0)== null){
// do something
}

//or ad script... my change name 
//..............whatever it is called
if(typeof(window.google_jobrunner)=="undefined"){
    // do something
} 


//via fake ad
//must create a special file called 
//advertisement.js">

//on html add this
//<script type="text/javascript" src="../advertisement.js"></script>

//inside of advertisment.js add this
document.write('<div id="adcheck">an advertisement</div>');

// then add

if (document.getElementById("adcheck") != undefined){

//do something
} else{

// do something else

}

