var agor = new Date()
var hora = agor.getHours()
console.log(`Agora são exatamente ${hora}`)
if (hora < 12) {
    console.log(`Bom Dia`)
} else if (hora <= 18) {
    console.log(`Boa Tarde`)
} else {
    console.log(`Boa Noite`)
}