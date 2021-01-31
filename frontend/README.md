# Testes no frontend React

A lib mais utilizada para testes no frontend é o JEST, para o react é muito utilizado o "react testing library" que ja vem instalado por padrão e utiliza o JEST por debaixo dos panos e adiciona funções que facilitam o desenvolvimento dos testes

Antes do react testing library era muito utilizado o ENZYME, que tinha o mesmo propósito e foi desenvolvido pelo pessoal do Airbnb, seu maior problema era que os testes eram escritos de uma maneira muito verbosa.

A ideia da testing library é escrever testes que não conhecem detalhes de implementação.
"não teste implementação, teste comportamento"

Teste de implementação são extremamente frágeis, testar o comportamento é mais resiliente.

## Estrutura de Pastas

Existem duas abordagens mais usadas, adicionar junto de cada arquivo de código seu respectivo teste ou criar uma pasta \_\_tests\_\_ com a mesma estrutura do src contendo os testes da aplicação.

## Testes de regressão visual

No React é chamado de teste de snapshot. Para ter as cores no arquivo basta instalar a extensão "Jest Snapshot Language Support"

O JEST irá criar o snapshot, caso o componente sofra alterações propositais basta rodar o comando "yarn test -u" que ele atualiza os snapshots

## getByRole ou getByText

O "screen.getByRole" é um dos mais recomendados de se utilizar pois você passa o nome do elemento e algo que está escrito nele, simulando bem a questão do usuário encontrar o botão e clicar.

Outra vantagem é que se o elemento estiver com uma ou outra palavra em torno de uma tag "b" o getByText já não seria capaz de pegar o texto pois ele le o raw texto, já o getByRole conseguiria.

A propriedade "data-testid" não é recomendada pois um usuário não busca um botão pelo id. Algumas vezes procurar um botão pelo seu texto pode ser complicado (como ter um emoji no meio, etc), nesse caso é válido utilizar o "data-testid".

## User Event e Fire Event

O userEvent representa ações de um usuário, já o fireEvent faz a mesma tarefa mas em um nível mais de api, mais baixo nível. O recomendado é sempre utilizar o userEvent.

## Teste Coverage

É consenso que o ideal dos testes é manter o coverage em 100%, porém é um acordo comum que o mínimo seja chegar nos 80% pois na maioria das vezes chegar nos 100% é muito difícil e em alguns casos desnecessário.

```sh
yarn test --coverage --watchAll=false
```

