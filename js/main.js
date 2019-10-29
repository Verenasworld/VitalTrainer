
// Formel: bmi = körpermasse / (körperhöhe in meter) ^

    let heightObj = document.getElementById("height");
    let weightObj = document.getElementById("weight");

    let calculateBmi = function() {
        let height = parseFloat(heightObj.value.replace(",", "."));
        let weight = parseFloat(weightObj.value);
        console.log(height);
        let bmi = (weight / (height * height));

        let result = Math.round(bmi * 10) / 10;

        let resultObj = document.getElementById("result");
        resultObj.innerText = ("" + result).replace(".", ",");

        document.getElementById("below").style.display = "none";
        document.getElementById("normal").style.display = "none";
        document.getElementById("above").style.display = "none";

        if (bmi < 18.5){
            document.getElementById("below").style.display =" block" ;
        } else if (bmi > 18.5 && bmi < 25){
            document.getElementById("normal").style.display = " block";
        } else if (!isNaN(bmi)){
            document.getElementById("above").style.display = " block";
        }


    };


    // let button = document.getElementById("calculate");
    // button.addEventListener("click", calculateBmi);


    heightObj.addEventListener("change", calculateBmi);
    weightObj.addEventListener("change", calculateBmi);
    heightObj.addEventListener("keyup", calculateBmi);
    weightObj.addEventListener("keyup", calculateBmi);



