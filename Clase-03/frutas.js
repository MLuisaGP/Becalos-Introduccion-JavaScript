const acidas = ["kiwi","limon","pomelo","naranja","manzana","uva","arandanos","piña"];
const semiacidas = ["fresa","membrillo","nispero","ciruela","melocoton","mango","mandarina","fambruesa"];
const neutras = ["coco","aguacate","aceituna","almendra","avellana","cacahuate","nuez"];
const dulces = ["platanos","cereza","higo","melon","sandia","pera","granada","chirimonga"];

let frutas = [
  "kiwi", "limon", "naranja", "uva", "arandanos",
  "fresa", "mango", "mandarina", "ciruela", "nispero",
  "coco", "aguacate", "almendra", "nuez", "cacahuate",
  "platanos", "cereza", "higo", "sandia", "granada","piña",
  "pitaya"];

let almacenfrutas={
    'acidas':0,
    'semiacidas':0,
    'neutras':0,
    'dulces':0,
    'otro':0
}
for ( let fruta of frutas) {
    if(acidas.includes(fruta)){
        almacenfrutas.acidas++;
    }else if(semiacidas.includes(fruta)){
        almacenfrutas.semiacidas++;
    }else if(neutras.includes(fruta)){
        almacenfrutas.neutras++;
    }else if(dulces.includes(fruta)){
        almacenfrutas.dulces++;
    }else {
        almacenfrutas.otro++;
    }
}

console.log(almacenfrutas);
