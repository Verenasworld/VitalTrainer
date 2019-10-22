
// Formel: bmi = körpermasse / (körperhöhe in meter) ^

    let heightObj = document.getElementById("height");
    let weightObj = document.getElementById("weight");//todo

    let calculateBmi = function() {
        let height = parseFloat(heightObj.value.replace(",", "."));
        let weight = parseFloat(weightObj.value);
        console.log(height);
        let bmi = (weight / (height * height));

        let result = Math.round(bmi * 10) / 10;

        let resultObj = document.getElementById("result");
        resultObj.innerText = ("" + result).replace(".", ",");
    };

    // let button = document.getElementById("calculate");
    // button.addEventListener("click", calculateBmi);


    heightObj.addEventListener("change", calculateBmi);//todo kaqki
    weightObj.addEventListener("change", calculateBmi);
    heightObj.addEventListener("keyup", calculateBmi);
    weightObj.addEventListener("keyup", calculateBmi);


