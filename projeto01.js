console.clear();
const prompt = require('prompt-sync')();

console.log('Seja bem vindo ao jogo do Karlos');

console.log();

console.log('Para inciar pressione ENTER');

prompt();

let nome = prompt('Qual o seu nome? ');

console.log();

console.log(`Seja muito bem vindo ${nome}!`);

console.log();

console.log(`Você é um ex militar aposentado, 
sua namorada foi sequestrada e você 
precisa salva-la dos inimigos!`);

console.log();

console.log(`Para isso, responda as perguntas 
com SIM ou NAO`)

console.log();

let pergunta01 = prompt(`Você consegue rastrar o celular da sua namorada? `).toLowerCase();

while (pergunta01 != 'sim' && pergunta01 != 'nao'){
  console.log('Resposta inválida');
  console.log();
 pergunta01 = prompt(`Você consegue rastrar o celular da sua namorada? `).toLowerCase()
}

console.log();

let pergunta02 = prompt(`Você consegue ir até o local? `).toLowerCase();

while (pergunta02 != 'sim' && pergunta02 != 'nao'){
  console.log('Resposta inválida');
  console.log();
 pergunta02 = prompt(`Você consegue ir até o local? `).toLowerCase()
}

console.log();

let pergunta03 = prompt(`Você consegue localizar a chave? `).toLowerCase();

while (pergunta03 != 'sim' && pergunta03 != 'nao'){
  console.log('Resposta inválida');
  console.log();
 pergunta03 = prompt(`Você consegue localizar a chave? `).toLowerCase()
}

console.log();

let pergunta04 = prompt(`Você consegue entrar no local? `).toLowerCase();

while (pergunta04 != 'sim' && pergunta04 != 'nao'){
  console.log('Resposta inválida');
  console.log();
 pergunta04 = prompt(`Você consegue entrar no local? `).toLowerCase()
}

console.log();

let pergunta05 = prompt(`Você consegue encontrar sua namorada? `).toLowerCase();

while (pergunta05 != 'sim' && pergunta05 != 'nao'){
  console.log('Resposta inválida');
  console.log();
 pergunta05 = prompt(` Você consegue encontrar sua namorada? `).toLowerCase()
}

let resposta = 0;

console.log();

if (pergunta01 == 'sim'){
  resposta = resposta + 1
  } else if (pergunta01 == 'nao'){
  resposta = resposta + 0  
  }

if (pergunta02 == 'sim'){
  resposta = resposta + 1
  } else {
  resposta = resposta + 0 
}

if (pergunta03 == 'sim'){
  resposta = resposta + 1
  } else {
  resposta = resposta + 0
  }

if (pergunta04 == 'sim'){
  resposta = resposta + 1
  } else {
  resposta = resposta + 0
  }

if (pergunta05 == 'sim'){
  resposta = resposta + 1
  } else {
  resposta = resposta + 0
  }

console.log();

if (resposta == 0){
  console.log('Você falhou miseravelmente.')
}

if (resposta == 1){
  console.log(`Você falhou, mas ainda conseguiu fugir da situação.`)
}

if (resposta == 2){
  console.log('Você falhou, mas ainda conseguiu fugir da situação.')
}

if (resposta == 3){
  console.log(' Você chegou perto de conseguir alcançar seu objetivo, mas acabou falhando por pouco.')
}

if (resposta == 4){
  console.log('Depois de muito esforço você conquistou seu objetivo, embora não de maneira perfeita.')
}

if (resposta == 5){
  console.log('Você triunfou de maneira inquestionável e seus feitos serão lembrados por muitas gerações.')
}

console.log();
