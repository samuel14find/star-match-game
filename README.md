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
[aqui](jsdrops.com/rgs3.1). Neste template, temos um conteúdo estático, onde vamos fazer algumas alterações. Observer que 
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

Devemos analisar cada situação. Porque se não corremos o risco de ter componentes em excesso ou componentes faltando. De 
acordo com o instrutor devemos seguir o seguinte:
> Every time in the UI you have many items that share similar data or bevavior, that's a candidate for and intem component

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


