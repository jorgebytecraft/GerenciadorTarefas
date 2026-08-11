
export class TaskManager{
    constructor(){
        // Captura dos elementos da tela        
        
        // Botões
        this.botaoAdicionar = document.querySelector('[data-js="botao-tarefa"]');
        this.botaoAndamento = document.querySelector('[data-js="botao-andamento"]');
        this.botaoFinalizar = document.querySelector('[data-js="botao-finalizada"]');

        //Imput
        this.novaTarefa = document.querySelector('[data-js="adicionar-tarefa"]');
        this.andamentoTarefa = document.querySelector('[data-js="andamento-tarefa"]');
        this.removaTarefa = document.querySelector('[data-js="remova-tarefa"]');

        // Lista
        this.listaIniciada = document.querySelector('[data-js="lista-tarefa"]');
        this.listaAndamento = document.querySelector('[data-js="lista-andamento"]');
        this.listaFinalizada = document.querySelector('[data-js="lista-finalizada"]')

        }    
        init(){
        // Inicializa a aplicação
        // Chama o método que registra os eventos
        this.registrarEventos()        
        }

        registrarEventos(){
            // Eventos do botão adicionar
            this.botaoAdicionar.addEventListener("click", () =>{
                this.adicionarTarefa();
            });
            this.novaTarefa.addEventListener("keypress", (e) => {
                if(e.key === "Enter"){
                    this.adicionarTarefa()
                }
            })
            // Eventos do botão andamento
            this.botaoAndamento.addEventListener("click", () => {
                this.moverParaAndamento() 
            });

            this.andamentoTarefa.addEventListener("keypress", (e) => {
                if(e.key === "Enter"){
                this.moverParaAndamento()
                } 
            });
            // Eventos do botão finalizar
            this.botaoFinalizar.addEventListener("click", () => {
                this.finalizarTarefa();
            });
            this.removaTarefa.addEventListener("keypress", (e) =>{
            if(e.key === "Enter"){
            this.finalizarTarefa();
            }
        });

    }
        adicionarTarefa(){
            // Regra para adicionar tarefa
            const tarefaAdicionada = this.novaTarefa.value.trim()

            if(tarefaAdicionada === ""){
                alert("Digite uma tarefa antes de adicionar");
                return
            }
            const listaAdicionada = document.createElement("li");
            listaAdicionada.classList.add("list-group-item");
            listaAdicionada.textContent = tarefaAdicionada;
            this.listaIniciada.appendChild(listaAdicionada);

            this.novaTarefa.value = "";
            this.novaTarefa.focus();
        }

        moverParaAndamento(){
        // Regra para mover tarefa para andamento
        const nomeTarefa = this.andamentoTarefa.value.trim();

        const tarefas = this.listaIniciada.querySelectorAll("li");
            
        for(const tarefa of tarefas){    
            if(tarefa.textContent.toLowerCase() === nomeTarefa.toLowerCase()){
                this.listaAndamento.appendChild(tarefa);
                this.andamentoTarefa.value = "";
                return;
            }
        }  
        alert("Tarefa não encontrado")
        }    
        finalizarTarefa(){
            // Regra para concluir tarefa
        const tarefaFinalizada = this.removaTarefa.value.trim();
        
        const finalizadaTabela = this.listaAndamento.querySelectorAll("li")

        for(const tarefa of finalizadaTabela){
            if(tarefa.textContent === tarefaFinalizada){
                this.listaFinalizada.appendChild(tarefa);
                this.removaTarefa.value = "";
                return;
            }
        }
        alert("Tarefa não encontrada");
        }


}
