Crie um formulário conforme o exemplo na pasta site. O formulário deve ter os seguintes comportamentos:

* Ao trocar a seleção do tipo de ação cultural, o formulário deve se adequar.
    * Teatro
        * Título *
        * Sinopse *
        * Texto *
        * Direção *
        * Elenco
        * Duração
        * Classificação *
        * Valor da entrada * (obrigatório se "Entrada Gratuita" estiver marcado)
        * Entrada Gratuita
    * Cinema
        * Título *
        * Sinopse *
        * Direção *
        * Elenco
        * Duração
        * Classificação * 
        * Valor da entrada * (obrigatório se "Entrada Gratuita" estiver marcado)
        * Entrada Gratuita
    * Debate Literário
        * Título *
        * Livro/Artigo/Brochura *
        * Autor *
        * Moderador *
        * Duração
        * Classificação *
        * Entrada Gratuita (checked e readonly)
    * Dança
        * Título *
        * Sinopse *
        * Concepção *
        * Direção *
        * Elenco
        * Duração
        * Classificação *
        * Valor da entrada * (obrigatório se "Entrada Gratuita" estiver marcado)
        * Entrada Gratuita
    * Artes visuais e exposições
        * Título *
        * Sinopse *
        * Curadoria *
        * Artistas convidados
        * Classificação *
        * Entrada Gratuita (checked e readonly)
    * Música
        * Título *
        * Sinopse *
        * Artista/Banda *
        * Classificação *
        * Valor da entrada * (obrigatório se "Entrada Gratuita" estiver marcado)
        * Entrada Gratuita
* Para formulários que contêm os campos "Valor da entrada" e "Entrada gratuita", ao se marcar o campo "Entrada gratuita", o valor deve ser zerado e o campo de valor desaparecer, ao se desmarcar o campo de valor deve reaparecer.
* No hover e no focus dos campos do formulário o campo deverá ser destacado (borda suave).
* Ao submitar o formulário, deve ser feita a verificação dos campos obrigatórios. Caso haja algum campo obrigatório não preenchido, o campo deverá receber uma borda vermelha e um alerta deverá ser emitido.