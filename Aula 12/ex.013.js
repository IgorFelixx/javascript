var agora = new Date()
var diaSem = agora.getDay()


/*
    Domingo
    Sabado
    Segundo
    Terça
    Quarta
    Quinta
    Sexta
*/

//console.log(diaSem)

switch(diaSem) {
    case 0:
        console.log(`Domingo`)
        break
    case 1:
        console.log(`Segundo`)
        break
    case 2:
        console.log(`Terça`)
        break
    case 3:
        console.log(`Quarta`)
        break
    case 4:
        console.log(`Quinta`)
        break
    case 5:
        console.log(`Sexta`)
        break
    case 6:
        console.log(`Sabado`)
    default:
        console.log(`[ERRO] Dia Inválido`)
        break
}