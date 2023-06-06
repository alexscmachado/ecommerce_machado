# Projeto E-Commerce de Maquiagem

## Objetivo
O objetivo do projeto é a criação de um e-commerce, no caso deste, criaremos um e-commerce para a venda de Maquiagens.

## Integrantes do projeto
Alex Machado.\
Cíntia Soares

## Atualizações feitas no projeto

13/04/23-20/04/23.\
Criação do App utilizando CLI, logo após, o projeto foi enviado para o Github.\

18/04/23-25/04/23.\
Foi criado o menu do e-commerce contendo as principais informações.\
Caminho da pasta: src --> components --> navbar.\
dentro da pasta navbar temos os arquivos: NavBar.js ; NavBarBusca.js ; NavBarCarrinho.js ; NavBarLogin.js e NavBarMenu.js.\

20/04/23-27/04/23.\
Foi criado o uma Landing com pelo menos um item, de como será a visualização dos produtos e suas informações.\
Caminho da pasta: src --> components --> listItens.\
dentro da pasta listItens temos os arquivos: Itens.js e ListItensContents.js.\

25/04/23-02/05/23.\
Foi criado um contador com botão, que representa a quantidade de itens que o usuário clica para a compra dos produtos, logo abaixo tem o botão "Adicionar ao carrinho", na qual colocamos um alert, somente para informar ao usuário que os itens foram adicionados ao carrinho.\
Caminho da pasta: src --> components --> listItens.\
dentro da pasta listItens temos os arquivos: CountItens.js.\

27/04/23-04/05/23.\
DESAFIO ENVIADO PELO GITHUB: https://github.com/crisCintia/e-commerce-maquiagem.git .\
Nesse desafio criamos um catálogo com maps e promises, mostrando como será a apresentação dos produtos. Criamos uma pasta chamada "catalogo" onde adicionamos o arquivo ItemListContainer.js, os arquivos Itens.js e ListItensContents.js estão na pasta "listItens", segue o caminho para os arquivos:.\
1) Pasta Catalogo: src --> components --> catalogo --> contendo o arquivo ItemListContainer.js.\
2) Pasta Item List: src --> components --> listItens --> contendo os arquivos Itens.js e ListItensContents.js.\

02/05/23-09/05/23.\
Foi criado dois arquivos, o primeiro é o ItemDetailContainer.js que tem a mesma premissa que o ItemListContents.js para visualizar os produtos na página, nela foi adicionado um efeito de montagem utilizando promise e um async mock usando setTimeout de duração de 2 segundos. Por fim, utilizamos o then para retornar o ItemDetails.js. O arquivo ItemDetails.js tem o objetivo de mostrar a visualização dos detalhes de um item, que tem os seguintes componentes: nome, preço, descrição do produto, botão "Comprar (Detalhes)" e botão "Adicionar ao carrinho".\
Caminho da pasta: src --> components --> datails.
dentro da pasta datails temos os arquivos: ItemDetails.js, ItemListDetails.js e a pasta mockDetails, com o arquivo productsDetails.js.\

04/05/23-11/05/23.\
Primeira entrega do Projeto.\
Nessa entrega criamos o roteamento e navegação do projeto, para que o usuário consiga navegar pelas páginas criadas pelo e-commerce. Conforme ensinado em aula, usamos o "react-router-dom" para criar as Routes. Realizamos as seguintes atualizações:.\
  1) Adicionamos "import { Link } from 'react-router-dom'" alterando a tag <a> pela <Link>, fizemos isso nos arquivos: NavBar.js; NavBarCarrinho.js; NavBarLogin.js; NavBarMenuItem.js; Itens.js; ItemDetails.js;.\
  2) Adicionamos "import { useParams } from "react-router-dom"" nos arquivos ListItensContents.js e ItemDetailsContainer.js.\
  3) Adicionamos "import { BrowserRouter, Routes ,Route} from 'react-router-dom'" no arquivo App.js.\
  4) Para inclusão do ícones, utilizamos "npm install react-icons --save".\
 Com isso, temos os componentes completos: NavBar com carrinho, Catálogo e Detalhes do Produto.\
  
09/05/23-16/05/23.\
Nessa entrega realizamos a sincronização do arquivo CountItens.js criado no desafio 4 no arquivo ItemDetail.js e fizemos a configuração destes, ajustando as responsabilidades de quais itens ficariam em cada documentos. Além disso, configuramos estado interno no ItemDetail.js após o onAdd ser acionado no CountItens.js e assim, o ItemCount desapareceu. Adicionamos a lógica para quando um item é adicionado ao carrinho de compras e clicando no botão "Ir para o carrinho".\
Caminho da pasta: src --> components --> datails --> ItemDetails.js.\
                  src --> components --> listItens --> CountItens.js.\

 09/05/23-16/05/23.\
Nessa entrega realizamos a sincronização do arquivo CountItens.js criado no desafio 4 no arquivo ItemDetail.js e fizemos a configuração destes, ajustando as responsabilidades de quais itens ficariam em cada documentos. Além disso, configuramos estado interno no ItemDetail.js após o onAdd ser acionado no CountItens.js e assim, o ItemCount desapareceu. Adicionamos a lógica para quando um item é adicionado ao carrinho de compras e clicando no botão "Ir para o carrinho".\
Caminho da pasta: src --> components --> datails --> ItemDetails.js.\
src --> components --> listItens --> CountItens.js.\

11/05/23-18/05/23.\
Nessa entrega criamos uma pasta chamada "contexts" e nela criamos o documento "CartContext.js" que vamos utilizar para todo o processo de compra, nessa primeira parte realizamos o mapeamento para que quando o usuário adicionar o produto ao carrinho, armazenar, em forma de objeto, no CartContext.js e nele possui lógicas para adicionar remover produto, limpar todo o carrinho e verificação de item duplicado. Para isso, usamos o conceito de context para criar todo o processo.\
Caminho da pasta: src --> contexts --> CartContext.js.\

16/05/23-23/05/23.\
Nessa entrega criamos uma pasta chamada "cart" e nela temos os documentos "Cart.js" e "CartPage.js" que vamos utilizar para todo o processo de compra. Para isso, realizamos toda a expansão do componente no documentos CartPage.js mostrando como será dividido o item na página do carrinho e atualizamos para que os arquivos, incluíndo-os no BrowserRouter.\
Caminho da pasta: src --> components --> cart --> Cart.js e CartPage.js.\

18/05/23-25/05/23.\
Nessa entrega criamos uma ItemCollection no Google Firestore, na qual a coleção possui os seguintes atributos: categoryId, title, description, image, price, stock. Logo após, conectamos a coleção nos arquivos ListItensContents.js e ItemDetailsContainer.js, na qual eliminamos os async mocks (as promises) e substituímos pela coleção do Firestore.\
Caminho da pasta ListItens: src --> components --> listItens --> ListItensContents.js.\
Caminho da pasta Datails: src --> components --> datails --> ItemDetailsContainer.js.\

## Abaixo temos as informações gerais dos arquivos (Readme padrão):
_______________________________________________________________________________________________________________________________________________________________________
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
