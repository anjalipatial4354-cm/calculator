const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach((button) => {
    button.addEventListener("click", () => {

        let value = button.value;
        if (value === "AC") {
            expression = "";
            display.value = "";
        }
        else if (value === "DEL") {
            expression = expression.slice(0, -1);
            display.value = expression;
        }
        else if (value === "=") {

            let numbers = [];
            let operators = [];
            let current = "";
            for (let i = 0; i < expression.length; i++) {

                let ch = expression[i];

                if (ch === "+" || ch === "-" || ch === "*" || ch === "/") {

                    numbers.push(Number(current));
                    operators.push(ch);
                    current = "";
                }

                else {
                    current += ch;
                }
            }

            numbers.push(Number(current));
            for (let i = 0; i < operators.length; i++) {

                if (operators[i] === "*") {

                    numbers[i] = numbers[i] * numbers[i + 1];

                    numbers.splice(i + 1, 1);
                    operators.splice(i, 1);

                    i--;
                }

                else if (operators[i] === "/") {

                    numbers[i] = numbers[i] / numbers[i + 1];

                    numbers.splice(i + 1, 1);
                    operators.splice(i, 1);

                    i--;
                }
            }
            let result = numbers[0];

            for (let i = 0; i < operators.length; i++) {

                if (operators[i] === "+") {
                    result += numbers[i + 1];
                }

                else if (operators[i] === "-") {
                    result -= numbers[i + 1];
                }
            }

            expression = result.toString();
            display.value = expression;
        }

        else if (value === "%") {
            expression += "/100";
            display.value = expression;
        }
        else {
            expression += value;
            display.value = expression;
        }

    });
});


