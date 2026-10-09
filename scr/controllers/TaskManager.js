
export class TaskManager{
    constructor(){
        /*Referencia no DOM */

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

        /*Estado*/
        this.tarefas = [];
        
        }
        // Inicializa a aplicação
        init(){

        // Chama o método de carregar os estados
        this.carregarTarefa();
        // Chama o método que registra os eventos
        this.registrarEventos();
        // Chama o método que renderiza o DOM
        this.renderizacao();           
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
        //Comportamento da tarefa
        adicionarTarefa(){
            // Regra para adicionar tarefa
            
            // A tarefaAdicionada/tarefa sendo atribuida tarefaNova/Input e criando uma condição estiver vazio emite um alerta
            const tarefaAdicionada = this.novaTarefa.value.trim()
            if(tarefaAdicionada === ""){
                alert("Digite uma tarefa antes de adicionar");
                return
            }
            // Alterando o estado e adiciona a nova tarefa
            this.tarefas.push({
                nome: tarefaAdicionada,
                status: 'Lista de Tarefa'
            })

            //Chamada para salvar a Tarefa
            this.salvarTarefa()

            //Chamada para renderizar a Lista de Tarefa
            this.renderizacao();

            // Limpa o imput
            this.novaTarefa.value = "";
        }

        moverParaAndamento(){

        // Regra para mover tarefa para andamento
        const tarefaAndamento = this.andamentoTarefa.value.trim();

        // Alterando o estado e movendo a tarefa para andamento

        //Percorrendo o estado tarefas
        for(const tarefa of this.tarefas){
            // Com a condição de encotrar o nome da tarefa igual ao nome do input e troca o estado da tarefa
            if(tarefa.nome.toLowerCase() === tarefaAndamento.toLowerCase()){
                tarefa.status = "Andamento";
            }
        }
            //Chamada para salvar a Tarefa
            this.salvarTarefa()

            //Chamada para renderizar a Lista de Andamento
            this.renderizacao();

            // Limpa o imput
            this.andamentoTarefa.value = "";
        }
            
        finalizarTarefa(){
            // Regra para concluir tarefa

        //A tarefaFinalizada sendo atribuida a removaTarefa/Input             
        const tarefaFinalizada = this.removaTarefa.value.trim();
        
        for(const tarefa of this.tarefas){
            // Com a condição de encotrar o nome da tarefa igual ao nome do input e troca o estado da tarefa            
            if(tarefa.nome.toLowerCase() === tarefaFinalizada.toLowerCase()){
                tarefa.status = "Finalizada";
            }
        }

            //Chamada para salvar a Tarefa
            this.salvarTarefa()

            //Chamada para renderizar a Lista Finalizada
            this.renderizacao();

            // Limpa o imput
            this.removaTarefa.value = "";
        }
               /*Persistencia de Dados */

        /* Serialização  */
        salvarTarefa(){
            try {
                const jsonString = JSON.stringify(this.tarefas);
                console.log("JSON SERIALIZADO ", jsonString)

                localStorage.setItem("tarefas", jsonString);
            } catch (error) {
                console.log("ERRO AO SERIALIZAR: ", error);
            }
        }
        /* Desserialização */
        carregarTarefa(){
            try {
                const jsonObject = localStorage.getItem("tarefas");
                if(jsonObject){
                    const tarefasObject = JSON.parse(jsonObject);
                    console.log("Objeto desserializado ",tarefasObject);
                    this.tarefas = tarefasObject;
                }else{
                    console.warn("Nenhum dos dados encontrado no localStorage. ")
                }
            }catch (error) {
                console.error("Erro ao desserializar: ", error);  
            }
        } 

        renderizacao(){       
            //Iniciando a Lista Vazia
            this.listaIniciada.innerHTML = "";
            this.listaAndamento.innerHTML = "";
            this.listaFinalizada.innerHTML = "";

        // Render da Lista de Tarefa           
            for(const tarefa of this.tarefas){              
                if(tarefa.status === 'Lista de Tarefa'){
                    const linhaAdicionada = document.createElement("li");
                    linhaAdicionada.classList.add("list-group-item");
                    linhaAdicionada.textContent = tarefa.nome;
                    this.listaIniciada.appendChild(linhaAdicionada);                             
                }
            }
        // Render da Lista em Andamento    
            for(const tarefa of this.tarefas){
                if(tarefa.status === 'Andamento'){
                    const linhaAndamento = document.createElement("li");
                    linhaAndamento.classList.add("list-group-item");
                    linhaAndamento.textContent = tarefa.nome;
                    this.listaAndamento.appendChild(linhaAndamento);
                }
            }
        
        // Render de Lista Concluida
            for(const tarefa of this.tarefas){
                if(tarefa.status === 'Finalizada'){
                    const linhaFinalizada = document.createElement("li");
                    linhaFinalizada.classList.add("list-group-item");
                    linhaFinalizada.textContent = tarefa.nome;
                    this.listaFinalizada.appendChild(linhaFinalizada);
                }
            }
        }
    }

    //