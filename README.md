# API - Copa do mundo 2022

## Informações sobre classificações, times e partidas

A API foi desenvolvida para resolver erros de CORS ao consumir a [API Original](https://github.com/raminmr/free-api-worldcup2022) de forma local ou externa.

### Instalação

Para instalação é necessário criar uma conta no serviço original.

As informações de como criar uma conta podem ser encontradas [neste link](https://github.com/raminmr/free-api-worldcup2022#register).

Após o registro, adicione o e-mail e senha, nas variáveis E-MAIL e PASSWORD do arquivo `.env.example`, e renomei-e o arquivo para `.env`.

Agora instale as dependências com o comando `npm install`, em seguida inicie o serviço com `npm start`.

**Obs:** Caso esteja utilizando um serviço de hospedagem online, é necessário configurar as variáveis de ambiente do arquivo `.env.example` manualmente no serviço, e após isso basta executar o deploy automático.


### Endpoints

Os endpoints são os mesmos do serviço listado abaixo, o que irá mudar é apenas o seu host

Obs: Caso a porta não seja definida automaticamente, o serviço irá utilizar a 3000 como padrão, você pode alterá-la no arquivo

[Endpoints](https://github.com/raminmr/free-api-worldcup2022#teams)