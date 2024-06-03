const fs=require("fs");

// fs.writeFile("hello.txt","Hello ESCN!!!",e=>{
//     if(e){
//         console.log(e);
//     }
//     console.log("File saved successfully..");
// })

fs.readFile("G:\\fullstack\\web\\Backend\\Nodejs\\hello.txt",(err,data)=>{
    if (err) throw err;
    console.log(String(data));
})

// fs.readFile("G:\\fullstack\\web\\Backend\\Nodejs\\hello.txt","utf-8",(err,data)=>{
//     if (err) throw err;
//     console.log(data);
// })



