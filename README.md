# Teste Front-end

O objetivo deste teste é avaliar seus conhecimentos em HTML, JS, CSS, Git e linha de comando.

Para rodar o teste, você precisará ter o nodejs e o npm instalados.

# Rodando o teste

Faça um fork e um clone deste projeto, **crie uma branch com seu nome** e instale as dependências:

`npm install`

Depois, rode a aplicação:

`npm start`

No seu navegador, abra `http://localhost:7007`

# Instruções para o desenvolvimento

- Seguir o layout **teste-front.psd**
    + Verifique as **Layer Comps** para os eventos de mouseover/mouseout.
    + Se quiser animar as barras no mouseover/mouseout, fica a seu critério ;)
- Criar um script em JS que faça uma requisição para **/plano.json**
    + Pode usar jQuery (ou qualquer outro framework de sua preferência).
    + Apresente os dados do JSON no layout.
- Atenção para:
    + Os dados apresentados devem ser de acordo com o tipo (minutos, mensagens, gigabytes).
    + Você precisará calcular os gigabytes (os dados estão em bytes).
    + Você precisará calcular as porcentagens de uso / contratado para exibir as barras.
    + Verde: <= 50%; Amarelo: > 50% e <= 100%; Vermelho: > 100%.
    + Quando for maior que 100%, o tamanho "excedente" da barra é fixo, de acordo com o layout.
- **Não altere** o arquivo **plano.json** em hipótese alguma!
- Suporte para IE8 ou superior.
- Envie seu pull-request.

# Extras

- Se fizer o stylesheet usando Sass, ganha pontos.
- Se usar automatizador (grunt, gulp), também ganha.

Boa sorte! ;D
