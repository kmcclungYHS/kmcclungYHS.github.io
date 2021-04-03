
var section_1_input = 0;
var section_2_1_input = 0;
var section_2_2_input = 0;
var section_2_3_input = 0;
var section_1_out = 0;
var section_2_1_out = 0;
var section_2_2_out = 0;
var section_2_3_out = 0;
var sum = 0;
var weighted_1 = 0;
var weighted_2 = 0;
var composite = 0;
var score = 1;
	
function update(){
    section_1_input = parseInt(document.getElementById("section 1 in").value);
    section_2_1_input = parseInt(document.getElementById("section 2.1 in").value);
    section_2_2_input = parseInt(document.getElementById("section 2.2 in").value);
    section_2_3_input = parseInt(document.getElementById("section 2.3 in").value);
    if (isNaN(section_1_input)){
        section_1_out = 0;
    }
    else {
        section_1_out = section_1_input;
    }
    if (isNaN(section_2_1_input)){
        section_2_1_out = 0;
    }
    else {
        section_2_1_out = section_2_1_input * 3.0555;
    }
    if (isNaN(section_2_2_input)){
        section_2_2_out = 0;
    }
    else {
        section_2_2_out = section_2_2_input * 3.0555;
    }
    if (isNaN(section_2_3_input)) {
        section_2_3_out = 0;
    }
    else {
        section_2_3_out = section_2_3_input * 3.0555;
    }
    sum = section_2_1_out+section_2_2_out+section_2_3_out;
    weighted_1 = section_1_out;
    weighted_2 = sum;
    composite = Math.round(weighted_1+weighted_2);
    if (composite < 36){
        score = 1;
    }
    else if (composite < 52){
        score = 2;
    }
    else if (composite < 63){
        score = 3;
    }
    else if (composite < 73){
        score = 4;
    }
    else {
        score = 5;
    }
    document.getElementById("section 1 out").value = "" + section_1_out;
    document.getElementById("section 2.1 out").value = "" + section_2_1_out;
    document.getElementById("section 2.2 out").value = "" + section_2_2_out;
    document.getElementById("section 2.3 out").value = "" + section_2_3_out;
    document.getElementById("sum").value = "" + sum;
    document.getElementById("weight 1").value = "" + weighted_1;
    document.getElementById("weight 2").value = "" + weighted_2;
    document.getElementById("composite score").value = "" + composite;
    document.getElementById("1").style.border = "none";
    document.getElementById("2").style.border = "none";
    document.getElementById("3").style.border = "none";
    document.getElementById("4").style.border = "none";
    document.getElementById("5").style.border = "none";
    document.getElementById(""+score).style.border = "4px solid #0F0";
}