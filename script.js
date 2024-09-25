function imc() {
    let name = document.getElementById("name").value;
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value); 
//the variables to receive the values ​​entered by the user

    if (!weight || !height || !name) {
        document.getElementById("result").innerText = "Please fill in all fields correctly.";
        return;
    }
//if the data was not entered correctly, a message will appear to warn the user

    let imcCalc = (weight/(height**2));
    let message = name + " your BMI is " +   (imcCalc.toFixed(2)) + "."
    //the calculation that will generate the BMI value

        if ((imcCalc >= 18.5 && imcCalc <25)) {
            message += " Your weight is within the appropriate BMI."
        }
            else {
                message += " Your weight is not whitin appropriate BMI."
            }
            document.getElementById("result").innerText = message;
            //the conditional that will generate the message to say whether or not the person is within the appropriate BMI
    }
