|                                            Fluxo com login e postagens                                            |                                             Pagamento via cartão com o stripe.                                             |
| :---------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------: |
| ![ignews2](https://user-images.githubusercontent.com/55575751/146494423-6436d143-9a03-4f8f-b811-d0fa86a7299e.gif) | ![ignewscreditcart](https://user-images.githubusercontent.com/55575751/146580361-2d956c44-7926-4ef1-a66c-27a2c52d0a8a.gif) |

<h1> Technologies: </h1>

<li> Next-Js </li>
<li> Prismic-CMS </li>
<li> FaunaDB </li>
<li> Stripe </li>
<li> Sass </li>

<h1>About the application: </h1>

<p> A app é um blog do tipo "newsletter" onde o usuário pode ler o conteúdo completo apenas se possuir inscrição ativa. <br/>
Todo o processo de pagamento através do cartão de crédito e feita utilizando a integração com o Stripe. </p>

<h1> How to install </h1>

<h3> Use o comando yarn ou npm install para instalar as dependências do projeto. </h3>

> Atenção: É necessário criar numa conta no stripe, github, faunbaDB e Prismic para rodar o projeto.

> Após isso crie um arquivo .env.local na raiz do projeto e o preecha com as keys da seguinte forma:

```
#stripe

STRIPE_API_KEY =
STRIPE_SUCCESS_URL =
STRIPE_CANCEL_URL =
NEXT_PUBLIC_STRIPE_PUBLIC_KEY =
STRIPE_WEBHOOK_SECRET =
```

```
#github

GITHUB_CLIENT_ID =
GITHUB_CLIENT_SECRET =
```

> Atenção: É necessário criar numa conta no stripe, github, faunbaDB e Prismic para rodar o projeto.

> Após isso crie um arquivo .env.local na raiz do projeto e o preecha com as keys da seguinte forma:

```
#stripe

STRIPE_API_KEY =
STRIPE_SUCCESS_URL =
STRIPE_CANCEL_URL =
NEXT_PUBLIC_STRIPE_PUBLIC_KEY =
STRIPE_WEBHOOK_SECRET =
```

```
#github

GITHUB_CLIENT_ID =
GITHUB_CLIENT_SECRET =
```

```
#faunaDB

FAUNA_KEY =

```

```
#PrismicCMS

PRISMIC_END_POINT =
PRISMIC_ACESS_TOKEN =
```

```
#PrismicCMS

PRISMIC_END_POINT =
PRISMIC_ACESS_TOKEN =
```
