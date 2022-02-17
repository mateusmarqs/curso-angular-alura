#  :computer: Curso Angular - Alura

Exercícios e anotações sobre o curso de Angular da Alura.

## Instalação no Windows

Para instalação, utiliza-se o Angula CLI, com o seguinte comando:
 
~~~javascript
npm install -g @angular/cli
~~~ 

Para verificar se está funcionando corretamente, executar o seguinte comando:

~~~javascript
ng --version
~~~ 

Caso de o seguinte erro:

> "O arquivo não pode ser carregado porque a execução de scripts foi desabilitada neste sistema."

Execute o seguinte comando no temrinal:

~~~javascript
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
~~~ 

## Criando novo projeto

Para criar um novo projeto, basta executar o seguinte comando:

~~~javascript
ng new <nomeDoProjeto>
~~~ 

Após criado o projeto, pode executar o seguinte comando para rodar o mesmo:

~~~javascript
ng serve
~~~ 

## Fundamentos

### Data binding

Darta binding é o processo de envio de dados do componente para o template, digamos que no componente forneça seguintes atributos:

~~~javascript
export class AppComponent {
  title = 'alurapic';
  url='https://fotos.jornaldocarro.estadao.com.br/uploads/2018/08/30062752/nacar-yamaha-yz-450f-1160x654.jpg';
}
~~~ 

Para usar esses atributos no template, podemos fazer o data binding da seguinte maneira:
~~~javascript
// Para atributos, usa-se []
<img [src]="url" alt="">
~~~ 
~~~javascript
// Valores isolados usa-se {{ }}
<h1> {{ title }} </h1>
~~~ 

### Convenções de código

O arquivo do componente, sua classe, seu estilo e o template seguem o mesmo padrão de nomenclatura, por exemplo:

~~~javascript
// Classe
MenubarComponent
// Componente
menubar.componente.ts
// Estilo
menubar.component.css
// Template
menubar.component.html
~~~ 

### Instalação do Bootstrap ou outra biblioteca CSS

Após instalar a biblioteca, vá até o arquivo "angular.js" contido dentro da raiz do projeto. Após entrar nele, basta adicionar o arquivo minificado da bilbioteca dentro de "styles", por exemplo:

~~~javascript
"styles": [
    "src/styles.css",
    "./node_modules/bootstrap/dist/css/bootstrap.min.css"
]
~~~ 

### Gerando um novo componente através do Angular CLI

~~~javascript
 ng generate component photos/photo-list
~~~

### Gerando um novo módulo através do Angular CLI

~~~javascript
 ng generate component photos/photo-list
~~~