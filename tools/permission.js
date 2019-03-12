function permi() {
        var dElement = document.getElementById("D");
var element = document.getElementById("myPermission");
var gElement = document.getElementById("groupPermission");
var oElement = document.getElementById("otherPermission");

if(dElement.d.checked){
var searchD = "d";
}else{
var searchD = "";
}

var mP = String(element.option.value);
var gP = String(gElement.option.value);
var oP = String(oElement.option.value);

if(mP === "7"){
var mPs = 'rwx';
}else if(mP === "6"){
var mPs = 'rw-';
}else if(mP === "5"){
var mPs = 'r-x';
}else if(mP === "4"){
var mPs = 'r--';
}else if(mP === "3"){
var mPs = '-wx';
}else if(mP === "2"){
var mPs = '-w-';
}else if(mP === "1"){
var mPs = '--x';
}else if(mP === "0"){
var mPs = '---';
}

if(gP === "7"){
var gPs = 'rwx';
}else if(gP === "6"){
var gPs = 'rw-';
}else if(gP === "5"){
var gPs = 'r-x';
}else if(gP === "4"){
var gPs = 'r--';
}else if(gP === "3"){
var gPs = '-wx';
}else if(gP === "2"){
var gPs = '-w-';
}else if(gP === "1"){
var gPs = '--x';
}else if(gP === "0"){
var gPs = '---';
}

if(oP === "7"){
var oPs = "rwx";
}else if(oP === "6"){
var oPs = "rw-";
}else if(oP === "5"){
var oPs = "r-x";
}else if(oP === "4"){
var oPs = "r--";
}else if(oP === "3"){
var oPs = "-wx";
}else if(oP === "2"){
var oPs = "-w-";
}else if(oP === "1"){
var oPs = "--x";
}else if(oP === "0"){
var oPs = "---";
}

var num = mP + gP + oP;
var str = searchD  + mPs + gPs + oPs;

document.getElementById("perNum").value = num;
document.getElementById("perStr").value = str;
}