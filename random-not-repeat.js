/**
 * Autor: Daniel Attias
 * 
 * indexOf => busca
 * push => insere tipo pilha
 */

let totalNumeros = 10;
let nSorteados = new Array(); //array de números sorteados
let tam = 0; //para saber quantos elementos já foram sorteados
let nSorteado;

while (tam < totalNumeros)
{
	nSorteado = Math.floor(Math.random() * totalNumeros + 1);

	if (nSorteados.indexOf(nSorteado) == -1)
	{
		nSorteados.push(nSorteado);
		tam++;
	}
}

for (let i = 0; i < totalNumeros; i++)
	console.log("i: " + i + " => " + nSorteados[i] + ", ");