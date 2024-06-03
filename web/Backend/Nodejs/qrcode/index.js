import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
    .prompt([
        {
            "message": "Type your url here:",
            "name": "res"
        }
    ])
    .then((answers) => {
        // console.log(answers);
        var url=answers.res
        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream('qr_image.png'));

        fs.writeFile("message.txt",url,(err)=>{
            if (err) throw err;
            console.log("Success");
        })
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });