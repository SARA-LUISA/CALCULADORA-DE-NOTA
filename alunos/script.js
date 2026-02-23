



 document.getElementById("calcularMedia").addEventListener("click", function () {

    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);

    if (isNaN(nota1) || isNaN(nota2)) // Verificar se as entradas são números válidos
        
        {
        alert("Digite valores válidos!");
        return;
    }

    let media = (nota1 + nota2) / 2;

    document.getElementById("media").innerHTML =
        "Sua média é: " + media.toFixed(2);

    if (media >= 7) {
        document.getElementById("media").innerHTML += " - Aprovado!";
    } else if (media >= 5 && media < 7) {    
        document.getElementById("media").innerHTML += " - Recuperação!";
    } else if (media < 5) {
        document.getElementById("media").innerHTML += " - Reprovado!";
    }
});