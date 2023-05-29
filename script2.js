var qtd = parseInt(document.getElementsByClassName('qtd'));

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
    document.getElementsByClassName('Tprice').innerHTML = Vtotal;
    document.getElementsByClassName('qtd').value=qtd; 
    console.log(Vtotal,qtd);
}
