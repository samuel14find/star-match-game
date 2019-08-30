This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### Minhas Notas - Samuel B
Esse joquinho é para a gente aprender uns poucos conceitos sobre React function componentes, React Hooks, e optimizing state
e o outro lado sobre React Component Tree. O instrutor disponibilizou um template para a gente no seguinte endereço:
[aqui](jsdrops.com/rgs3.1). Neste template, temos um conteúdo estático, onde vamos fazer algumas alterações. Observar que 
no componente StarMatch temos alguns objetos que vamos utilizar. Temos um objeto para lidar com as cores das estrelas, e 
um objeto que foi chamado de utils que possui toda a ciências por trás de como o jogo functiona. Inicialmente no projeto
temos duas divs. Uma div que tem o id de body, e duas divs aninhadas, uma com o id left que representa as estrelas, e a outra 
div com uma id de right que representa os números. Lembrando que todo o HTML que está lá no return é JSX. 
O objeto utils tem somente JavaSctipt o que o instrutor se referiu como **Vanilla JavaScript**. Mas pode-se usar 
uma biblioteca de apoio chamada Lodash. Essa é um pacote que já possui métodos prontos para trabalhar com um monte de coisas. 
Uma melhoria inicial que foi feito foi se **livrar das listas estáticas.** Temos uma lista de estrelas e uma lista de números. 
As listas estão assim:
```
<div className="left">
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
</div>
```
E assim:
```
 <div className="right">
                <button className="number">1</button>
                <button className="number">2</button>
                <button className="number">3</button>
                <button className="number">4</button>
                <button className="number">5</button>
                <button className="number">6</button>
                <button className="number">7</button>
                <button className="number">8</button>
                <button className="number">9</button>
</div>
```
As estrelas serão renderizadas a partir de um certo número, variando de 1 a 9. E esse valor nem sempre será 9, como está mostrando a lista estática. 
O que faremos é tirar essa lista é fazer um loop a partir de um valor inicial. Dica do instrutor:
-   usar map/filter/reduce
-   evitar usar for/while
Assim, colocamos uma loop, criando uma array a partir do objeto utils usando o método range, passando o inicio e o final da array.
Depois usamos um map para iterar em cada um dos elementos da array que foi criado, e para cada elemento eu encaixo uma 
div. Desse modo eu fiz para as estrelas e o número. O código ficou assim:
```
            <div className="left">
                {utils.range(1,stars).map(starId => // utils.range(1,range) vai nos da uma array assim [1,2,3,4,5]
                    <div key={starId} className="star"/> // Filhos dinâmicos por isso useu key={starId}.
                )}
            </div>
            <div className="right">
                {utils.range(1,9).map(number =>
                    <button key={number} className="number">{number}</button>
                )}
            </div>
```
Notei que inicialmente o instrutor colocou o número de estrelas para ser aleatório. Mas depois ele disse que isso não era
ideal, que deveriamos pensar da seguinte maneira: _**Como o React tem que refletir as mudanças na interface enquanto o jogador 
joga, deveriamos fazer o star count um STATE ELEMENT ou elemento de estado.**_Para fazer isso podemos chamar o método 
useState() e passa umm valor incial. Lembrar que esse método retorna uma array de dois elementos. Podemos fazer assim:
```
const [stars, setStars] = useState(utils.random(1,9));
```
Fazendo assim, as estrelas agora são um State Element, estamos lendo elas a partir de um State element, assim vamos mudar 
este state element e o React irá renderizar novamente o número de estrelas. O instrutor deu a seguinte dica:
 
>Sempre que você identificar um elemento que é usado na Interface e ele vai ser alterado, deveriamos colocar ele como 
>um STATE ELEMENT

Agora vamos pensar no seguinte. Necessitamos extrair alguma parte do componente StarMatch e transformer em componente. 
De acordo com o instrutor devemos fazer o seguinte:
> ... thinking about splitting responsibilities

Devemos analisar cada situação. Porque se não, corremos o risco de ter componentes em excesso ou componentes faltando. De 
acordo com o instrutor devemos seguir o seguinte:
> Every time in the UI you have many items that share similar data or behavior, that's a candidate for and item component

Vamos pegar o painel que mostra os números. A cada momento que o jogador clicar no número, por trás dos panos, irá ser 
chamado uma lógica que vai determinar se esse número é bom ou ruim. Essa pode ser uma pista de que esses números são 
candidados a ser um Componente. O Instrutor escolheu eles para ser um componente. E qual será o nome desse componente? 
O instrutor deixou claro que devemos tomar cuidado na nomeação de componentes. Por exemplo, ele resolver nomear esse component
como Number. E esse componente irá receber um conjunto de props (propriedades). Lembrando que essa props tem que ser passado
na hora que a gente chamar o componente. Pode até ter outro nome, mas nesse exemplo o instrutor colocou number mesmo. 
Nota interessante do atributo Key que tinha no loop. Diz o instrutor que ele é necessário dentro do loop, então ele não vai 
lá no componente, ele fica dentro do loop, portanto ele fica dentro do loop mas agora na chamada do componente. Abaixo
temos um trecho do código, de como ficou lá na StarMatch.js na parte que chamava os números:
```
   <div className="right">
                {utils.range(1,9).map(number =>
                    <Number key={number} number={number}/>
                )}
            </div>
```
Tá vendo que estamos chamando o componente Number e passsando a key agora ? Mas então o instrutor chamou a atenção novamente
do nome do componte que é Number. Não é verdade que possuímos um objeto JavaScript que se chama Number ? E isso vai ser 
um problema para gente. Esse objeto JavaScript é usado, entre outras coisas, para converter strings em números. Então o 
instrutor fez uma simulação onde ele passou, ao invez de um número, uma string lá no UseState, veja o trecho do código 
abaixo.  
`const [stars, setStars] = useState(utils.random("1",9)); // para ser usado para fazer um lopp e mostrar as estrelas aleatoriamente`

Agora quando eu for lá no navegador, a renderização vai ficar estranha, vai aparecer mais que 9 estrelas em um certo momento. 
Mas caso isso acontece temos uma solução. Basta chamar o constructor do Number do JavaScript fazendo desse jeito:
`const [stars, setStars] = useState(utils.random(Number("1"),9)); `

Mas ai, minha aplicação já não vai functionar. Notar que as estrelas sumiram. Isso tudo porque dei o nome do meu component
de Number. Então segue a dica do instrutor:
> Be aware of the top-level JavaScript objects in your scope, and do not override them

A solução para eliminar ess conflito será a renomeação do componente. O instrutor sugeriu usar duas palavras, assim ele 
passou o nome para PlayNumber. Depois adicionar um comportamento ao botão dos números. Quando eu clicar no botão do número 
, neste momento, vou apenas exibir um console.log no terminal

E como exatamente essa function de click funciona ? Aqui entra o conceito de closure. Lá no onClick, temos uma function 
que é invocada a cada vez que o usuário clica no botão. Mas como é acessado o número de cada botão? 
> The onClick handler is a function within another function, the PlayNumber function, so focusing on just the PlayNumber 
>, we created nine top functions and then nine click handler functions in them. Each onClick function here closes over the
>scope of its owner number and gives us access to its props. We have nine onClick handler and all have different closures 
>closing over differents scopes. 

Assim extraimos um componente que representa o número, PlayNumber, de modo que isso significa reusabilidade. Podemos também
extrair um componente que representa as estrelas. Vamos chamar esse componente de StartDisplay. Fazendo assim, deixamos o código
lá no StarMatch mais legível fazendo simplesmente assim:
```
<div className = "left)>
    <StarsDisplay />
</div>
```
Agora tive que fazer um pouco diferente no meu componente StarsDisplay. Inicialmente não pude aproveitar o método range 
do objeto utils criado lá no StarMatch. O que eu fiz fou exportar o utils fazendo assim, lá no StarMatch:
`export const utils = {...}`

E depois lá no componente StarsDisplay eu fiz uma importação:
`import {utils} from "./StarMatch";`

Agora observe o código do StarsDislay abaixo e observe como não pude chamar utils de dentro do return():

```
export function StarsDisplay(props) {
  let Range = utils.range(1, props.count);
  return(
      Range.map(starId =>
          <div key={starId} className="star"></div>
      )
  )
}
```
Não sei se isso é uma boa prática, mas foi assim que fiz para acompanhar a aula do instrutor. 

Seguindo na aula, a nota interface deve **descrever exatamente todos os State Elements** da nossa aplicação. Até agora 
temos apenas uma descrição exata das estrelas que é um State Element. Quer dizer, a UI sabe descrever as estrelas. 
O que acontece quando eu clico em um botão que representa um número? Clicaremos em um número e baseado em alguma lógica a cor muda.
O que queremos fazer, e alterar o State na aplicação e refletir essa alteração na UI.
Nesse momento devemos criar outros State Elements que serão úteis para trabalharmos com a interface. 
Inicialmente fazer fazer uma lógica na lado da interface. Em relação a comportamentos da nossa aplicação devemos ter 2 conceitos 
em mente:
-   App Logic to Change State 
-   UI logic to determinate State
A lógica na interface será a que vamos ver na tela. Então ela será a primeira coisa que vamos mudar. Geralmente vai ser 
mais fácil fazer essa parte primeiro.

Então qual State Element devo criar ? O instrutor chamou eles de _Containers of Data_. O instrutor pensou em 4 State Elements 
inicialmente. Um para represetar o número candidado, um para representar número errado, um para representar número usado, e outro
para representar número disponível. De acordo com o instrutor:
> Which of these containers should we place on the state to enable us to describe all the possible states?
>In React stateful Componentes is that yoy should minimize the state

Não devemos deixar um State Element que pode ser calculado a partir de outro. Então ele apenas criou availableNums e candidateNums.
Quando foi criado esses States o instrutor disse que como estamos fazendo alterações apenas na UI podemos usar Mock Values, ou 
valores simulados. Sendo assim observe abaixo como ele simulou alguns valores:

```
const [availableNums, setAvailableNums] = useState([1,2,3,4,5]);
const [candidateNums, setCanditateNums] = useState([2,3]);
``` 

Agora qual tipo de dado devemos passar para o componente PlayNumbers de modo que ele vai se renderizar novamente e mudar de cor ?
Até poderiamos passar diretamente um State Element, mas de acordo com o instrutor, o PlayNumber deve ter sua vida facilitada 
e não tratar com essas questões. 
> Single Play Number doesn't care about all the available numbers. It doesn't care about all the candidate number

Ele deve apenas saber como será renderizado, com qual cor e pronto. Sendo assim o instrutor 
decidiu passar apenas um String para ele, com determinado Status. 

Para isso o instrutor criou uma function chamada numberStatus e passou como parâmetro o número. Aí dentro dessa function, 
baseado no parâmetro que ela receber, vai decidir qual status retornar, que por sua vez será enviado para o PlayNumber 
e lá dentro vai chamar a const colors. Observe o código da numberStatus:
```
const numberStatus = (number) =>{
        if(!availableNums.includes(number)){
            return 'used'
        }
        if(candidateNums.includes(number)){
            return candidateAreWrong ? 'wrong': 'candidate'
        }
        return 'available'
    };
``` 
Observe o método includes que é um método da Array que irá retornar true se o elemento estiver dentro da array ou false 
caso contrário. E observe também na segunda if, um cont chamada candidateAreWrong. Isso é porque mesmo se o número 
vai na condição de candidade ele ainda pode ser um numero errado. Olha a logia dele:
`const candidateAreWrong = utils.sum(candidateNums) > stars;`
Simplesmente haverá uma soma dos elementos da array candidateNume e se for maior que a quantidade de estrelas, logicamente 
será um número errado. 
E no final se não cair em nenhuma das ifs, o retorno padrão é available. 