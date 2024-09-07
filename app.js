function pesquisar() {
    // Esta função é responsável por pesquisar os dados e exibir os resultados na seção "resultados-pesquisa".
    

    let resultado = ""; // Variável para armazenar o HTML dos resultados da pesquisa

    let section = document.getElementById("resultados-pesquisa"); // Obtém a seção onde os resultados serão exibidos
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value
 
    if (!campoPesquisa ) {
        section.innerHTML = "Você precisa inserir o nome, data ou local da competição"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
    console.log(section); // Loga a seção no console para verificar se foi encontrada

        let titulo = "";
        let descricao = "";
       


    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        
        // tags = dado.tags.toLocaleLowerCase()
        // se titulo includes campoPesquisa então, faça ...
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || dado.data.includes(campoPesquisa) || dado.localizacao.includes(campoPesquisa))
            {
            // cria um novo elemento
            resultado += `
            <div class="iten-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao} ${dado.data} ${dado.localizacao}</p>
                <a href="${dado.link}" target="_blank">mais informações</a>
            </div>
        `;
        }
        console.log (dado.titulo.includes(campoPesquisa))
        // Constrói o HTML para cada item do resultado da pesquisa
       
    }

    if (!resultado) {
        resultado = "<p>Nenhuma competição encontrada</p>"


    }

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultado;
}