var categoria = prompt("Digite qual esporte você deseja participar? ");
var idade = parseInt(prompt("Digite sua idade? "));

//Categorias Futebol
//Sub-20: para atletas abaixo de 20 anos;  (nessa categoria a impressão da resposta deve ser "Sub-20 - Futebol")
//Adulto: para atletas de 20 anos a 39 anos;
//Veteranos: para atletas com 40 anos em diante;
if (categoria == "Futebol"){
    if(idade<20){
        alert("Sub-20 - "+categoria);
    } else {
        if(idade<=39){
            alert("Adulto - "+ categoria);
        } else {
            alert("Veteranos - "+ categoria);
        }
    }
}
//Categorias Natação
//Junior: Abaixo de 13 anos;
//Infanto-Juvenil: 13 a 16 anos;  (nessa exemplo a impressão deve ser exatamente "Infanto-Juvenil - Natação", com acento, cedilha, os espaços e os traços)
//Junior-Senior: 17 a 30 anos;
//Senior: 31 em diante;
if(categoria == "Natação"){
    if(idade<13){
        alert("Junior - " +categoria);
    } else {
        if(idade<=16){
            alert("Infanto-Juvenil - " +categoria);
        } else {
            if(idade<=30){
                alert("Junior-Senior - " +categoria);
            } else {
                alert("Senior - " +categoria);
            }
        }
    }
}
//Categorias Surf​
//Mirim: até 15 anos;
//Junior: 16 a 18 anos;
//Open: 19 a 39 anos;
/*Grand Master: 40 anos em diante (nessa categoria a impressão da resposta deve ser "Grand Master - Surf", 
sem traço entre "Grand" e "Master")​*/
if(categoria == "Surf"){
    if(idade<=15){
        alert("Mirim - " +categoria);
    } else {
        if(idade<=18){
            alert("Junior - " +categoria);
        } else {
            if(idade<=39){
                alert("Open - " +categoria);
            } else {
                alert("Grand Master - " +categoria);
            }
        }
    }
}
//Categorias LOL​
//Bronze: Abaixo de 13 anos;
//Prata: 13 a 16 anos;
//Ouro: 17 anos em diante;
if(categoria == "LOL"){
    if(idade<13){
        alert("Bonze - " +categoria);
    } else {
        if(idade<=16){
            alert("Prata - " +categoria);
        } else {
            alert("Ouro - " +categoria);
        }
    }
}