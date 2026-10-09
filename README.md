Gerenciador de Tarefas - MVC & Persistência de Dados

Um aplicativo web de gerenciamento de tarefas desenvolvido em JavaScript puro (Vanilla JS), focado em organização arquitetural (MVC) e persistência de dados local

---

Estrutura do Projeto

```text
├── index.html           # Interface principal da aplicação
├── style.css            # Estilização visual da interface
└── scr/
    ├── app.js           # Ponto de entrada e inicialização do sistema
    └── controllers/
        └── TaskManager.js # Controlador e gerenciador de tarefas

Tecnologias Utilizadas

HTML5: Estruturação semântica.
CSS3/BOOTSTRAP: Estilização da interface.
JavaScript (ES6+): Programação Orientada a Objetos (POO), manipuladores de eventos e regras de negócio.
Web Storage API (localStorage): Persistência de dados local no navegador via JSON.


Funcionalidades Principais
Persistência Local: As tarefas são salvas no localStorage e mantidas mesmo após recarregar a página.
Arquitetura Modular: Separação entre a inicialização da aplicação (app.js) e o controlador central (TaskManager.js).
Manipulação Dinâmica do DOM: Criação, remoção e atualização de tarefas em tempo real.

Como Executar o Projeto
Clone este repositório ou baixe os arquivos em sua máquina.
Abra a pasta no VS Code.
Abra o arquivo index.html diretamente no seu navegador (ou utilize a extensão Live Server).

Autor 
Desenvolvido por Jorge Borges Rêgo.
Graduado em Analise e Desenvolvimento de Sistema
