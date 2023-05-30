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
    document.getElementsByClassName('Tprice').value = Vtotal;
    document.getElementById('qtd').value=qtd; 
    console.log(Vtotal,qtd);
}
