// const pags = [1,2,3]
let pagAtual = 0

botaoPassar = document.getElementById('buttonNext')

divFormularioContainer = document.getElementById('formularioInfos')
divFormulario = document.getElementById('formulario')
tituloFormulario = document.getElementById('titulo')

function carregarPagina(atual) {
    console.log(atual)

    if (atual == 1) {
        tituloFormulario.innerHTML = 'DADOS DE LOGIN'
        divFormulario.innerHTML = `
        <div class="scrollAulas">
        <div class="formRow">
                    <div class="formGroup">
                        <label for="EmailEducacional">Email Educacional</label>
                        <input class="disabled" id="EmailEducacional"  type="text" disabled>
                    </div>
                </div>
                <div class="formRow row2">
                    <div class="formGroup">
                        <label for="Senha">Senha</label>
                        <input id="Senha" placeholder="Escreva aqui" type="text">
                    </div>
                    <div class="formGroup">
                        <label for="ConfirmarSenha">Confirmar Senha</label>
                        <input id="ConfirmarSenha" placeholder="Escreva aqui" type="text">
                    </div>
                </div>
        </div>
                

                <div class="botoes maisdeum">
                    <button id="buttonPreview" onclick="voltarPagina()" type="submit">Anterior</button>
                    <button id="buttonNext" onclick="passarPagina()" type="submit">Próximo</button>
                </div>
`
    } else if (atual == 0) {
        tituloFormulario.innerHTML = 'DADOS PESSOAIS'
        divFormulario.innerHTML = `<div class="formRow row2">
                    <div class="formGroup">
                        <label for="Nome">Nome</label>
                        <input id="Nome" placeholder="Escreva aqui" type="text">
                    </div>
                    <div class="formGroup">
                        <label for="Sobrenome">Sobrenome</label>
                        <input id="Sobrenome" placeholder="Escreva aqui" type="text">
                    </div>
                </div>
                <div class="formRow">
                    <div class="formGroup">
                        <label for="EmailPessoal">Email Pessoal</label>
                        <input id="EmailPessoal" placeholder="Escreva aqui" type="email">
                    </div>
                </div>
                <div class="formRow">
                    <div class="formGroup">
                        <label for="Numero">Numero de celular (com DDD)</label>
                        <input id="Numero" placeholder="11912345678" type="number">
                    </div>
                </div>
                <div class="formRow">
                    <div class="formGroup">
                        <label for="CPF">CPF</label>
                        <input id="CPF" placeholder="Escreva sem pontuação" type="number">
                    </div>
                </div>
                <div class="botoes">
                    <button id="buttonNext" onclick="passarPagina()" type="submit">Próximo</button>
                </div>`
    }
    else if (atual = 2) {
        tituloFormulario.innerHTML = 'AULAS'
        divFormulario.innerHTML = `
        <div class="scrollAulas">
        <div class="formRow row2">
        <div class="formGroup turmaGroup">
            <label for="Turma">Turma</label>
            <select name="Turma" class="Turma">
                <option value="9b">9°B</option>
                <option value="9a">9°A</option>
                <option value="1aem">1°A EM</option>
                <option value="1bem">1°B EM</option>
            </select>
        </div>
        <div class="formGroup materiaGroup">
            <label for="Materia">Materia</label>
            <select name="Materia" class="materia">
                <option value="linguaPortuguesa">Lingua Portuguesa</option>
                <option value="matematica">Matematica</option>
                <option value="educacaoFisica">Educação Fisica</option>
                <option value="historia">Historia</option>
            </select>
        </div>
    </div>
        <div class="formRow row2">
        <div class="formGroup turmaGroup">
            <label for="Turma">Turma</label>
            <select name="Turma" class="Turma">
                <option value="9b">9°B</option>
                <option value="9a">9°A</option>
                <option value="1aem">1°A EM</option>
                <option value="1bem">1°B EM</option>
            </select>
        </div>
        <div class="formGroup materiaGroup">
            <label for="Materia">Materia</label>
            <select name="Materia" class="materia">
                <option value="linguaPortuguesa">Lingua Portuguesa</option>
                <option value="matematica">Matematica</option>
                <option value="educacaoFisica">Educação Fisica</option>
                <option value="historia">Historia</option>
            </select>
        </div>
    </div>
        <div class="formRow row2">
        <div class="formGroup turmaGroup">
            <label for="Turma">Turma</label>
            <select name="Turma" class="Turma">
                <option value="9b">9°B</option>
                <option value="9a">9°A</option>
                <option value="1aem">1°A EM</option>
                <option value="1bem">1°B EM</option>
            </select>
        </div>
        <div class="formGroup materiaGroup">
            <label for="Materia">Materia</label>
            <select name="Materia" class="materia">
                <option value="linguaPortuguesa">Lingua Portuguesa</option>
                <option value="matematica">Matematica</option>
                <option value="educacaoFisica">Educação Fisica</option>
                <option value="historia">Historia</option>
            </select>
        </div>
    </div>
        <div class="formRow row2">
        <div class="formGroup turmaGroup">
            <label for="Turma">Turma</label>
            <select name="Turma" class="Turma">
                <option value="9b">9°B</option>
                <option value="9a">9°A</option>
                <option value="1aem">1°A EM</option>
                <option value="1bem">1°B EM</option>
            </select>
        </div>
        <div class="formGroup materiaGroup">
            <label for="Materia">Materia</label>
            <select name="Materia" class="materia">
                <option value="linguaPortuguesa">Lingua Portuguesa</option>
                <option value="matematica">Matematica</option>
                <option value="educacaoFisica">Educação Fisica</option>
                <option value="historia">Historia</option>
            </select>
        </div>
    </div>
        <div class="formRow row2">
        <div class="formGroup turmaGroup">
            <label for="Turma">Turma</label>
            <select name="Turma" class="Turma">
                <option value="9b">9°B</option>
                <option value="9a">9°A</option>
                <option value="1aem">1°A EM</option>
                <option value="1bem">1°B EM</option>
            </select>
        </div>
        <div class="formGroup materiaGroup">
            <label for="Materia">Materia</label>
            <select name="Materia" class="materia">
                <option value="linguaPortuguesa">Lingua Portuguesa</option>
                <option value="matematica">Matematica</option>
                <option value="educacaoFisica">Educação Fisica</option>
                <option value="historia">Historia</option>
            </select>
        </div>
    </div>
        <div class="formRow row2">
        <div class="formGroup turmaGroup">
            <label for="Turma">Turma</label>
            <select name="Turma" class="Turma">
                <option value="9b">9°B</option>
                <option value="9a">9°A</option>
                <option value="1aem">1°A EM</option>
                <option value="1bem">1°B EM</option>
            </select>
        </div>
        <div class="formGroup materiaGroup">
            <label for="Materia">Materia</label>
            <select name="Materia" class="materia">
                <option value="linguaPortuguesa">Lingua Portuguesa</option>
                <option value="matematica">Matematica</option>
                <option value="educacaoFisica">Educação Fisica</option>
                <option value="historia">Historia</option>
            </select>
        </div>
    </div>
        <div class="formRow row2">
        <div class="formGroup turmaGroup">
            <label for="Turma">Turma</label>
            <select name="Turma" class="Turma">
                <option value="9b">9°B</option>
                <option value="9a">9°A</option>
                <option value="1aem">1°A EM</option>
                <option value="1bem">1°B EM</option>
            </select>
        </div>
        <div class="formGroup materiaGroup">
            <label for="Materia">Materia</label>
            <select name="Materia" class="materia">
                <option value="linguaPortuguesa">Lingua Portuguesa</option>
                <option value="matematica">Matematica</option>
                <option value="educacaoFisica">Educação Fisica</option>
                <option value="historia">Historia</option>
            </select>
        </div>
    </div>
        <div class="formRow row2">
        <div class="formGroup turmaGroup">
            <label for="Turma">Turma</label>
            <select name="Turma" class="Turma">
                <option value="9b">9°B</option>
                <option value="9a">9°A</option>
                <option value="1aem">1°A EM</option>
                <option value="1bem">1°B EM</option>
            </select>
        </div>
        <div class="formGroup materiaGroup">
            <label for="Materia">Materia</label>
            <select name="Materia" class="materia">
                <option value="linguaPortuguesa">Lingua Portuguesa</option>
                <option value="matematica">Matematica</option>
                <option value="educacaoFisica">Educação Fisica</option>
                <option value="historia">Historia</option>
            </select>
        </div>
    </div>
    
        </div>
    
                <div class="botoes maisdeum">

                    <button id="buttonPreview" onclick="voltarPagina()" type="submit">Anterior</button>
                    <button id="buttonFinish" onclick="fecharModal()" type="submit">Finalizar</button>
                </div>`
    }
}


function voltarPagina() {
    if (pagAtual == 0) {
        return
    }
    else {
        pagAtual--
    }

    carregarPagina(pagAtual)
}

function passarPagina() {
    if (pagAtual == 2) {
        return
    }
    else {
        pagAtual++
    }

    carregarPagina(pagAtual)

}

botaoPassar.addEventListener('click', passarPagina) 