
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
	
function update(){
    section_1_input = parseInt(document.getElementById("section 1 in").value);
    console.log(document.getElementById("section 1 in").value);
    section_2_1_input = parseInt(document.getElementById("section 2.1 in").value);
    section_2_2_input = parseInt(document.getElementById("section 2.2 in").value);
    section_2_3_input = parseInt(document.getElementById("section 2.3 in").value);
    console.log("section 1 is" + section_1_input);
    console.log("section 2 is" + section_2_1_input);
    if (isNaN(section_1_input) || isNaN(section_2_1_input) || isNaN(section_2_2_input) || isNaN(section_2_2_input)) {
        section_1_out = 0;
        section_2_1_out = 0;
        section_2_2_out = 0;
        section_2_3_out = 0;
        sum = 0;
        weighted_1 = 0;
        weighted_2 = 0;
        composite = 0;
    }
    else{
        section_1_out = section_1_input;
        section_2_1_out = section_2_1_input * 3.0555;
        section_2_2_out = section_2_2_input * 3.0555;
        section_2_3_out = section_2_3_input * 3.0555;
        sum = section_2_1_out+section_2_2_out+section_2_3_out;
        weighted_1 = section_1_out;
        weighted_2 = sum;
        composite = Math.round(weighted_1+weighted_2);
    }
    console.log(composite);
    document.getElementById("section 1 out").value = "" + section_1_out;
    document.getElementById("section 2.1 out").value = "" + section_2_1_out;
    document.getElementById("section 2.2 out").value = "" + section_2_2_out;
    document.getElementById("section 2.3 out").value = "" + section_2_3_out;
    document.getElementById("sum").value = "" + sum;
    document.getElementById("weight 1").value = "" + weighted_1;
    document.getElementById("weight 2").value = "" + weighted_2;
    document.getElementById("composite score").value = "" + composite;
}