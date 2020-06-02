# calindra-async-swapi

## Introdução

Como parte das aulas de programação com IO ASYNC, construiremos uma API REST para exploração das técnicas e evoluiremos a dificuldade conforme o desempenho da turma.

## Desafio

O desafio iniciará com o objetivo de: 

* Criar uma API REST usando Node.js
* É possível utilizar algum framework web como express ou restify
* Nossa API devera inicialmente ter apenas uma action que receberá dois valores, um via pathParameter (filmId) e outra via queryString (enrichFields)
* * ex: https://api.calindra-async-swapi.com/films/{:filmId}?enrichFields=characters,planets,species,starships
* A api ao ser invocada com método GET, devera buscar os dados de filme na base do swapi.dev e retorná-los em formato JSON para quem chamou.
* O campo enrichFields será uma lista não obrigatória de nomes de entidades separados por vírgulas
* O sistema deverá enriquecer o JSON de retorno utilizando os campos enviados via enrichFields
* * Se na chamada for enviado _?enrichFields=planets_, o sistema, antes de retornar os dados do filme, deverá enriquecer todos os dados de planetas que retornaram no filme, substituindo o link do planeta ex: _http://swapi.dev/api/planets/3/_ pelo conteúdo json dele da própria api de planetas, também encontrada na swapi.dev.


## Exemplo

## chamada API

```json
https://api.calindra-async-swapi.com/films/4?enrichFields=planets
```

## retorno esperado

```json

{
    "characters": [
        "http://swapi.dev/api/people/2/",
        "http://swapi.dev/api/people/3/",
        "http://swapi.dev/api/people/10/",
        "http://swapi.dev/api/people/11/",
        "http://swapi.dev/api/people/16/",
        "http://swapi.dev/api/people/20/",
        "http://swapi.dev/api/people/21/",
        "http://swapi.dev/api/people/32/",
        "http://swapi.dev/api/people/33/",
        "http://swapi.dev/api/people/34/",
        "http://swapi.dev/api/people/35/",
        "http://swapi.dev/api/people/36/",
        "http://swapi.dev/api/people/37/",
        "http://swapi.dev/api/people/38/",
        "http://swapi.dev/api/people/39/",
        "http://swapi.dev/api/people/40/",
        "http://swapi.dev/api/people/41/",
        "http://swapi.dev/api/people/42/",
        "http://swapi.dev/api/people/43/",
        "http://swapi.dev/api/people/44/",
        "http://swapi.dev/api/people/46/",
        "http://swapi.dev/api/people/47/",
        "http://swapi.dev/api/people/48/",
        "http://swapi.dev/api/people/49/",
        "http://swapi.dev/api/people/50/",
        "http://swapi.dev/api/people/51/",
        "http://swapi.dev/api/people/52/",
        "http://swapi.dev/api/people/53/",
        "http://swapi.dev/api/people/54/",
        "http://swapi.dev/api/people/55/",
        "http://swapi.dev/api/people/56/",
        "http://swapi.dev/api/people/57/",
        "http://swapi.dev/api/people/58/",
        "http://swapi.dev/api/people/59/"
    ],
    "created": "2014-12-19T16:52:55.740000Z",
    "director": "George Lucas",
    "edited": "2014-12-20T10:54:07.216000Z",
    "episode_id": 1,
    "opening_crawl": "Turmoil has engulfed the\r\nGalactic Republic. The taxation\r\nof trade routes to outlying star\r\nsystems is in dispute.\r\n\r\nHoping to resolve the matter\r\nwith a blockade of deadly\r\nbattleships, the greedy Trade\r\nFederation has stopped all\r\nshipping to the small planet\r\nof Naboo.\r\n\r\nWhile the Congress of the\r\nRepublic endlessly debates\r\nthis alarming chain of events,\r\nthe Supreme Chancellor has\r\nsecretly dispatched two Jedi\r\nKnights, the guardians of\r\npeace and justice in the\r\ngalaxy, to settle the conflict....",
    "planets": [
        {
            "climate": "arid",
            "created": "2014-12-09T13:50:49.641000Z",
            "diameter": "10465",
            "edited": "2014-12-20T20:58:18.411000Z",
            "films": [
                "http://swapi.dev/api/films/1/",
                "http://swapi.dev/api/films/3/",
                "http://swapi.dev/api/films/4/",
                "http://swapi.dev/api/films/5/",
                "http://swapi.dev/api/films/6/"
            ],
            "gravity": "1 standard",
            "name": "Tatooine",
            "orbital_period": "304",
            "population": "200000",
            "residents": [
                "http://swapi.dev/api/people/1/",
                "http://swapi.dev/api/people/2/",
                "http://swapi.dev/api/people/4/",
                "http://swapi.dev/api/people/6/",
                "http://swapi.dev/api/people/7/",
                "http://swapi.dev/api/people/8/",
                "http://swapi.dev/api/people/9/",
                "http://swapi.dev/api/people/11/",
                "http://swapi.dev/api/people/43/",
                "http://swapi.dev/api/people/62/"
            ],
            "rotation_period": "23",
            "surface_water": "1",
            "terrain": "desert",
            "url": "http://swapi.dev/api/planets/1/"
        },
        {
            "climate": "temperate",
            "created": "2014-12-10T11:52:31.066000Z",
            "diameter": "12120",
            "edited": "2014-12-20T20:58:18.430000Z",
            "films": [
                "http://swapi.dev/api/films/3/",
                "http://swapi.dev/api/films/4/",
                "http://swapi.dev/api/films/5/",
                "http://swapi.dev/api/films/6/"
            ],
            "gravity": "1 standard",
            "name": "Naboo",
            "orbital_period": "312",
            "population": "4500000000",
            "residents": [
                "http://swapi.dev/api/people/3/",
                "http://swapi.dev/api/people/21/",
                "http://swapi.dev/api/people/35/",
                "http://swapi.dev/api/people/36/",
                "http://swapi.dev/api/people/37/",
                "http://swapi.dev/api/people/38/",
                "http://swapi.dev/api/people/39/",
                "http://swapi.dev/api/people/42/",
                "http://swapi.dev/api/people/60/",
                "http://swapi.dev/api/people/61/",
                "http://swapi.dev/api/people/66/"
            ],
            "rotation_period": "26",
            "surface_water": "12",
            "terrain": "grassy hills, swamps, forests, mountains",
            "url": "http://swapi.dev/api/planets/8/"
        },
        {
            "climate": "temperate",
            "created": "2014-12-10T11:54:13.921000Z",
            "diameter": "12240",
            "edited": "2014-12-20T20:58:18.432000Z",
            "films": [
                "http://swapi.dev/api/films/3/",
                "http://swapi.dev/api/films/4/",
                "http://swapi.dev/api/films/5/",
                "http://swapi.dev/api/films/6/"
            ],
            "gravity": "1 standard",
            "name": "Coruscant",
            "orbital_period": "368",
            "population": "1000000000000",
            "residents": [
                "http://swapi.dev/api/people/34/",
                "http://swapi.dev/api/people/55/",
                "http://swapi.dev/api/people/74/"
            ],
            "rotation_period": "24",
            "surface_water": "unknown",
            "terrain": "cityscape, mountains",
            "url": "http://swapi.dev/api/planets/9/"
        }
    ],
    "producer": "Rick McCallum",
    "release_date": "1999-05-19",
    "species": [
        "http://swapi.dev/api/species/1/",
        "http://swapi.dev/api/species/2/",
        "http://swapi.dev/api/species/6/",
        "http://swapi.dev/api/species/11/",
        "http://swapi.dev/api/species/12/",
        "http://swapi.dev/api/species/13/",
        "http://swapi.dev/api/species/14/",
        "http://swapi.dev/api/species/15/",
        "http://swapi.dev/api/species/16/",
        "http://swapi.dev/api/species/17/",
        "http://swapi.dev/api/species/18/",
        "http://swapi.dev/api/species/19/",
        "http://swapi.dev/api/species/20/",
        "http://swapi.dev/api/species/21/",
        "http://swapi.dev/api/species/22/",
        "http://swapi.dev/api/species/23/",
        "http://swapi.dev/api/species/24/",
        "http://swapi.dev/api/species/25/",
        "http://swapi.dev/api/species/26/",
        "http://swapi.dev/api/species/27/"
    ],
    "starships": [
        "http://swapi.dev/api/starships/31/",
        "http://swapi.dev/api/starships/32/",
        "http://swapi.dev/api/starships/39/",
        "http://swapi.dev/api/starships/40/",
        "http://swapi.dev/api/starships/41/"
    ],
    "title": "The Phantom Menace",
    "url": "http://swapi.dev/api/films/4/",
    "vehicles": [
        "http://swapi.dev/api/vehicles/33/",
        "http://swapi.dev/api/vehicles/34/",
        "http://swapi.dev/api/vehicles/35/",
        "http://swapi.dev/api/vehicles/36/",
        "http://swapi.dev/api/vehicles/37/",
        "http://swapi.dev/api/vehicles/38/",
        "http://swapi.dev/api/vehicles/42/"
    ]
}

```

# Regras

* É esperado que sejam produzidos Pull Requests para esse repositório, contendo o código do desafio
* O desafio pode ser realizado em duplas
* É possível utilizar callbacks, promises ou async/await ou cada modelo que conseguir executar.

# Extras

* Vou indicando aqui as novas capacidades conforme a evolução do grupo
