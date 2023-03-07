/*4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.
 
5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse


Explicação:

Para calcular o percentual de representação de cada estado,
precisamos primeiro calcular o valor total mensal da distribuidora,
somando os valores de faturamento de cada estado. 
Em seguida, podemos calcular o percentual de representação de 
cada estado dividindo o valor de faturamento do estado pelo valor total mensal
e multiplicando por 100. Veja o código em JavaScript:.*/


const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
  };
  
  // calcula o valor total mensal
  const total = Object.values(faturamento).reduce((acc, cur) => acc + cur, 0);
  
  // calcula o percentual de representação de cada estado
  const percentuais = {};
  for (const estado in faturamento) {
    percentuais[estado] = (faturamento[estado] / total) * 100;
  }
  
  console.log(percentuais);

/* A saída será um objeto com os percentuais
de representação de cada estado:

*/ 
/*Para inverter os caracteres de um string, 
podemos percorrer a string da última posição
até a primeira posição e ir concatenando cada 
caractere em uma nova string. Veja o código em JavaScript:*/ 

const str = 'exemplo';

let inverted = '';
for (let i = str.length - 1; i >= 0; i--) {
  inverted += str[i];
}

console.log(inverted);
``

  