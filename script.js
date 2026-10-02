const display = document.getElementById("display");

function adicionar(valor) {
    display.value = display.value + valor;
}

function limpar() {
    display.value = "";
}

function apagar() {
    display.value = display.value.slice(0, -1);
}

function calcular() {
    try {
        if (display.value === "") {
            return;
        }

        display.value = eval(display.value);
    } catch (erro) {
        display.value = "Erro";
    }
}