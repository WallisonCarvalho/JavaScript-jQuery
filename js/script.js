// Exemplo com JavaScript

let btn_somarJs = document.getElementById("btn_somarJs").addEventListener("click", () => {
    let v1 = parseInt(document.getElementById("v1").value)
    let v2 = parseInt(document.getElementById("v2").value)
    let soma = v1 + v2
    let res = document.getElementById("res").value = soma
})

// Exemplo com jQuery

$("#btn_somarJQ").click(() => {
    let v1 = parseInt($("#v1").val())
    let v2 = parseInt($("#v2").val())
    let soma = v1 + v2
    $("#res").val(soma)

})

// Usando a fução ON
$('#bloco').on({
    click:() => {$('#testo').text("Clicou")},
    mouseenter:() => {$('#testo').text("Ativou")},
    dblclick:() => {$('#testo').text("Duplo Click")},
    mouseleave:() => {$('#testo').text("")}
})

// Usando o evento Keydown ou keyup
$('#nome').keyup(() => { 
    $('#testoP').text($('#nome').val())
    
});