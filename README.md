# API - Copa do mundo 2022

## Informações sobre classificações, times e partidas

A API foi desenvolvida para resolver conflitos de CORS ao consumir a [API Original](https://github.com/raminmr/free-api-worldcup2022) durante o desenvolvimento do meu projeto [Cupinfo](https://github.com/LucasHayashi/cupinfo-angular).

Ao acessar qualquer um dos endpoints, o backend faz uma requisição via Axios para o respectivo endpoint da API original. A autenticação é realizada de forma automática através do backend.

## Tecnologias

- Express.js
- Axios

## Endpoints

### Fase de grupos

Obtém informações de todos os grupos

`GET /standings`

Obtém informações sobre um grupo específico

`GET /standings/{grupo}`

#### Requisição

```sh
curl --location --request GET 'https://api-copa-do-mundo-2022.onrender.com/api/standings' \
--header 'Content-Type: application/json' \
```

#### Resposta

```sh
{
    "status": "success",
    "data": [
        {
            "_id": "629c9c7c5749c4077500ead0",
            "group": "G",
            "teams": [
                {
                    "team_id": "25",
                    "mp": "3",
                    "w": "2",
                    "l": "1",
                    "pts": "6",
                    "gf": "3",
                    "ga": "1",
                    "gd": "2",
                    "d": "0",
                    "name_fa": "برزیل",
                    "name_en": "Brazil",
                    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/125px-Flag_of_Brazil.svg.png"
                },
                {
                    "team_id": "26",
                    "mp": "3",
                    "w": "0",
                    "l": "2",
                    "pts": "1",
                    "gf": "5",
                    "ga": "8",
                    "gd": "-3",
                    "d": "1",
                    "name_fa": "صربستان",
                    "name_en": "Serbia",
                    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/125px-Flag_of_Serbia.svg.png"
                },
                {
                    "team_id": "31",
                    "mp": "3",
                    "w": "2",
                    "l": "1",
                    "pts": "6",
                    "gf": "4",
                    "ga": "3",
                    "gd": "1",
                    "d": "0",
                    "name_fa": "سوئیس",
                    "name_en": "Switzerland",
                    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/100px-Flag_of_Switzerland.svg.png"
                },
                {
                    "team_id": "32",
                    "mp": "3",
                    "w": "1",
                    "l": "1",
                    "pts": "4",
                    "gf": "4",
                    "ga": "4",
                    "gd": "0",
                    "d": "1",
                    "name_fa": "کامرون",
                    "name_en": "Cameroon",
                    "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flag_of_Cameroon.svg/125px-Flag_of_Cameroon.svg.png"
                }
            ]
        }
    ]
}
```

### Partidas

Obtém informações sobre todas as partidas

`GET /match`

Obtém informações sobre uma partida específica

`GET /match/{match_id}`

#### Requisição

```sh
curl --location --request GET 'https://api-copa-do-mundo-2022.onrender.com/api/match' \
--header 'Content-Type: application/json' \
```

#### Resposta

```sh
{
    "status": "success",
    "data": [
        {
            "_id": "638923be0eab2168b945af36",
            "away_score": 4,
            "away_scorers": [
                "Vini Jr.,Neymar,Richarlison,Lucas Paquetá"
            ],
            "away_team_id": "25",
            "finished": "TRUE",
            "group": "R16",
            "home_score": 1,
            "home_scorers": [
                "S.H. Paik"
            ],
            "home_team_id": "30",
            "id": "53",
            "local_date": "12/5/2022 22:00",
            "matchday": "16",
            "persian_date": "1400-09-14 22:30",
            "stadium_id": "1",
            "time_elapsed": "finished",
            "type": "R16",
            "home_team_fa": "کره جنوبی",
            "away_team_fa": "برزیل",
            "home_team_en": "South Korea",
            "away_team_en": "Brazil",
            "home_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/125px-Flag_of_South_Korea.svg.png",
            "away_flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/125px-Flag_of_Brazil.svg.png"
        }
    ]
}
```

### Times

Obtém informações sobre todos os times

`GET /team`

Obtém informações sobre um time específico

`GET /team/{team_id}`

#### Requisição

```sh
curl --location --request GET 'https://api-copa-do-mundo-2022.onrender.com/api/team' \
--header 'Content-Type: application/json' \
```

#### Resposta

```sh
{
    "status": "success",
    "data": [
        {
            "_id": "629c9c6b5749c4077500eac0",
            "name_en": "Brazil",
            "name_fa": "برزیل",
            "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/125px-Flag_of_Brazil.svg.png",
            "fifa_code": "BRA",
            "iso2": "BR",
            "groups": "G",
            "id": "25"
        }
    ]
}
```