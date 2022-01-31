var obj = {
    first_name : "Akash",
    last_name : "Patil",
    students :[
        {
            name : "Rahul",
            markes: 15
        },
        {
            name : "Sai",
            markes: 14
        },
        {
            name : "Om",
            markes: 12
        },
        {
            name : "Aniket",
            markes: 18
        },
        {
            name : "Akshay",
            markes: 19
        },
        {
            name : "Pratik",
            markes: 16
        }
    ]
}

var score = prompt("Enter a Marks");
score = parseInt(score);


for(var i = 0; i<obj.students.length;i++){
    // console.log("YEs");
    
    if(obj.students[i].markes >= score){
        console.log(obj.students[i].name+" - "+obj.students[i].markes);
 
    }

}