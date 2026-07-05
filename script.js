let display = document.getElementById("display");

function append(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

// Keyboard Support
document.addEventListener("keydown", function (event) {
    let key = event.key;

    if ("0123456789+-*/.%".includes(key)) {
        display.value += key;
    } 
    else if (key === "Enter") {
        event.preventDefault();
        calculate();
    } 
    else if (key === "Backspace") {
        backspace();
    } 
    else if (key === "Escape") {
        clearDisplay();
    }
});

