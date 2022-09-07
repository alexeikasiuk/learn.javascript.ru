/*  Напишите функцию camelize(str), 
    которая преобразует строки вида 
    «my-short-string» в «myShortString».*/
function camelize(str) {
    return str.split("-")
            .map((a, i) => i == 0 ? e : e[0].toUpperCase() + e.slice(1))
            .join("");
}