var qtd = parseInt(document.getElementById('qtd').value);

function plus(){
    qtd = qtd + 1;
    console.log(qtd);
    atualiza();
}
function minus(){
    qtd = qtd -1;
    console.log(qtd);
    atualiza();
}


function atualiza(){
    var Vtotal = 16099 * qtd;
    document.getElementById('qtd').value=qtd; 
    document.getElementById('price').innerHTML=(Vtotal);
    document.getElementById('TPrice').innerHTML=(Vtotal);
    console.log(Vtotal,qtd);
}
