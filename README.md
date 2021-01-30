# Testes Automátizados

## Porque escrevemos testes?

Para garantir o bom funcionamento do sistema. Podemos concluir com o gráfico abaixo que o tempo gasto para escrever um teste sai mais barato do que ter um bug em produção

<img src="https://i.imgur.com/mWXoq5k.png" width="100%">

## Principais tipos de testes

### Testes Funcionais

Testam o comportamento do sistema, os requisitos funcionais (o comportamento do software).

<img src="https://i.imgur.com/kN3HpuV.png" width="50%">

### Testes Unitários (Testes de unidade)

Testam a menor unidade do sistema, testa cada função de forma única e independente

Vantagens:

- São baratos
- São fáceis (fazemos dentro da aplicação, utilizando a mesma linguagem)
- São precisos (qualquer erro ele vai te dizer exatamente onde ocorreu o erro)
- Te ajuda a escrever códigos mais desacoplados (os testes exigem isso)
- Garante que cada pequena peça do sistema está funcionando

Desvantagens:

- Foge um pouco da realidade (caso de uso) do usuário (o usuário espera que tudo funcione de forma integrada)
- Não entrega tanto valor quanto os outros testes

Ferramentas (Para JavasScript):

- Jest (JS)
- React Testing Library

### Testes de Integração

Testa uma integração: Testam unidades de forma integrada.
Teste de um endpoint , você realiza uma ação e espera uma resposta.

<img src="https://i.imgur.com/ND2emLG.gif" width="60%">

Características:

- São um pouco mais difíceis que os testes unitários
- São menos precisos que os testes unitários
- Entregam mais valor (se aproximam mais de um caso de uso)

Ferramentas:

- Jest (JS)

### Testes End To End (E2E) (Testes de Aceitação) (Teste de Ponta a Ponta) (UI teste)

Testam todo o fluxo do usuário. Simula a utilização do usuário na página.

Características

- São muito caros (trabalhoso de replicar, manter a estrutura do teste pois usa toda a aplicação, servidor, banco de dados)
- São mais demorados (tanto na criação quanto na execução)
- São mais complexos
- São extremamente frágeis (Flaky), fáceis de quebrar
- Maior chance de ocorrer falso positivo (quando falha tem que rodar toda a suite de testes inteira)
- São extremamente váliosos para a aplicação pois se assemelham muito ao caso de uso do usuário
- Testa o fluxo ideal do usuário (podemos tentar testar todas as possibilidades possíveis mas é quase impossível e extremamente custoso)
- Geralmente é feito por QA Testers

Ferramentas (Para JavasScript):

- Selenium
- Cypress

## Anti Pattern

Ice Cream Cone Anti Pattern

<img src="https://i.imgur.com/iBsZDFL.png" width="80%">

O anti padrão fala sobre colocar os testes mais caros possíveis em maior quantidade. Geralmente isso ocorre em empresas com sistemas mais antigos colocando a desculpa de que o projeto está muito integrado, o que dificulta testes unitários, assim, realizar testes E2E se torna relativamente mais viável pois ferramentas como o Selenium consegue gravar você utilizando a aplicação e simulando o uso e depois reproduzi-lo em forma de teste.

O ideal é tentar evitar esse tipo de anti padrão e seguir a pirâmide padrão.

Exemplo de outra abordagem:

"Escreva testes. Não muitos. Mas mais de integração." Guillermo Rauch - CEO da Vercel

Curiosidade:

- 80% dos testes no Google são unitários

### Ok, mas o que eu preciso testar?

- Smoke Test (Teste de fumaça): Testam as funcionalidades principais do nosso software. ex: em um e-commerce, teste o login, carrinho e o checkout (endereço, cartão e boleto).

- Testes de regressão visual: Testam se uma nova funcionalidade não altera um comportamento antigo.
  Basicamente esse teste a cada nova versão tira um screenshot da versão antiga e da nova e as compara.

### Testes não funcionais

Testam a disponibilidade da nossa aplicação (testes dos requisitos não funcionais). Existem muitos mas vamos ver os dois principais.

Desempenho (geralmente o time de DevOPS ou infra que testa)

- Teste de carga: Testar o comportamento em um cenário com muitos usuários (se aguenta determinada carga). O postman oferece tal funcionalidade

- Teste de stress: É bem parecido com o teste de carga, porém, enquanto o teste de carga testa a api em vários cenários o teste de stress testa até o limite da api (até quanta carga ele aguenta)

Existem vários testes não funcionais como de segurança, etc.

## Conclusão

Se você é um iniciante foque 99% dos seus esforços em testes unitários e de integração e uns 80%~90% só nos testes unitários pois será seu principal trabalho como dev.

## Termos do dia a dia

Test doubles (Dublês de Teste): Uma falsa implementação para utilizar no ambiente de teste.

- Fakes: São Dublês de teste com implementações. É uma implementação real, porém diferentes da de produção.
- Stubs: São Dublês de teste com retornos já pré determinados (uma função que retorna um valor estático, como um mock para algo).
- Mocks: São Dublês de teste com retornos já pré determinados, que validam a chamada da função (se você chamou a função corretamente, se os parâmetros estão com tipos corretos, etc). Mocks aren't stubs.
- Spies: Age como um espião sob uma função verdadeira. Você utiliza a implementação real com um listener em cima da função que quando ela for chamada você a manipula.
- Dummies: São valores fictícios (valores vazios) que são passados mas não utilizados, ex uma string vazia.

Os dublês de teste são basicamente formas diferentes de fazer a mesma coisa.
