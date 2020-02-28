/*Dado o dicionário {4: 'a', 3: 'e', 1: 'i', 5: 's'} 
substitua os números na frase 'T35t3 d3 35t4g1o' conforme o dicionário.
*/

var frase = 'T35t3 d3 35t4g1o'

var dic = {
    4: 'a', 
    3: 'e',
    1: 'i',
    5: 's'
}

console.log(frase.replace(/[1-5]/g, digit => dic[digit]))
