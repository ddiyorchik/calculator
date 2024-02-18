var result = document.getElementById('result');
result.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        calculate();
    }
});
function insert(value) {
    result.value += value;
}

function clearResult() {
    result.value = '';
}

function backspace() {
    result.value = result.value.slice(0, -1);
}

function calculate() {
    try {
        result.value = eval(result.value);
    } 
    catch(err) {
        result.value=("nimadir xato ketti")
    }
}