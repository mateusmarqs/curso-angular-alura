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

#### Data binding

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


