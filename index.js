//NUMBER 3

// Science Subjects are Physics, Chemistry, Biology, Technical Drawing
// Social Science Subjects are Accounting, Commerce, Marketing, Geography
// Arts Subjects are Government, Economics, Literature, History
// General Subjects are English, Mathematics"

let studentgroup = "Arts Subjects";

if (studentgroup === "Science Subjects") {
    console.log("Physics, Chemistry, Biology, Technical Drawing");
}
else if(studentgroup === "Social Science Subjects"){
    console.log("Accounting, Commerce, Marketing, Geography");  
}
else if(studentgroup === "Arts Subjects"){
    console.log("Government, Economics, Literature, History");  
}
else{
    console.log("English, Mathematics");
}


//NUMBER 5
let num = 100;

if (num < 1)
 0;

let pwr = 1;

// Try all powers starting from 2 raised to the power of 1
for (let i=0; i<8; i++)
{
let curr = 1 << i;

// If current power is more than n, break
if (curr > num)
   break;

pwr = curr;
}
console.log("The number " + pwr + " is the power of 2 nearest to " + num)