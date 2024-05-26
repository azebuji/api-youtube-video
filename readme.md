# YouTube Video App API

Api que fará a parte de pesquisa, cálculo e demais funcionalidades relacionadas a aplicação de busca de videos do youtube

## Principais funcionalidades

- **Pesquisa e exibição de vídeos do YouTube:** O aplicativo permite que o usuário pesquise por um termo e exiba os vídeos correspondentes do YouTube.
- **Exibição das cinco palavras mais usadas:** Para cada resultado de pesquisa, o aplicativo mostra as cinco palavras mais usadas nos títulos e descrições dos vídeos.
- **Cálculo de dias necessários para assistir todos os vídeos:**
  - O usuário insere a quantidade de tempo que ele pode dedicar a assistir vídeos por dia durante uma semana. Exemplo: `[15, 120, 30, 150, 20, 40, 90]` minutos.
  - O usuário não deve gastar mais tempo assistindo vídeos do que o limite diário estabelecido.
  - O usuário não pode iniciar um novo vídeo se não puder terminá-lo no mesmo dia.
  - Vídeos mais longos do que o dia mais longo serão ignorados.
  - O usuário deve assistir os vídeos na ordem exata em que foram retornados pela pesquisa.
  - Apenas os primeiros 200 vídeos devem ser considerados.


  ### Exemplo de Funcionamento

Considerando a semana definida acima e a pesquisa retornando 10 vídeos com as seguintes durações: `[20, 30, 60, 90, 200, 30, 40, 20, 60, 15]`, o aplicativo deve funcionar da seguinte maneira:

- No primeiro dia, nenhum vídeo será assistido, pois a duração máxima é de 15 minutos e todos os vídeos são maiores.
- No segundo dia, o usuário assistirá 3 vídeos `[20, 30, 60]`, pois a duração máxima é de 120 minutos.
- No terceiro dia, nenhum vídeo será assistido.
- No quarto dia, o usuário assistirá 2 vídeos `[90, 30]` e ignorará o vídeo de 200 minutos.
- No quinto dia, nenhum vídeo será assistido.
- No sexto dia, o usuário assistirá 1 vídeo `[40]`.
- No sétimo dia, o usuário assistirá 2 vídeos `[20, 60]`.
- No oitavo dia, o usuário assistirá o último vídeo `[15]`.


## Principais tecnologias usadas

- Node.js
- Express.js
- Axios.js
- CORS

## Configuração do projeto 

1. Clone o repositório

 ```bash
    git clone https://github.com/azebuji/api-youtube-video.git
 ```

2. Instale o mesmo
 ```bash
    npm install ou yarn
```

3. Execute as migrations do Prisma
```bash
    npm run migration
```

4. Rode as seeds para popular a base com dados
```bash
    npm run seed
```

## Rodando o projeto

### Ambiente de desenvolvimento
```bash 
    npm run dev
```
### Ambiente de produção 
```bash
   npm run prod
```

### Outros Comandos Úteis
* Testes:

```bash
npm run test
```

* Gerar Migrations:

```bash
npm run migrations
```

* Pull do Banco de Dados:
```bash
npm run pull
```

Gerar Arquivos do Prisma:

```bash
npm run generate
```
* Seed do Banco de Dados:

```bash
npm run seed
```
* Build do Projeto:

```bash
npm run build
```

### Rotas

## Rota para buscar os vídeos

**Método:** GET

**Endpoint:** `http://localhost:9070/general`

**Parâmetros:**

- `dailyLimits` (array): Quantidade de minutos disponíveis para assistir vídeos por dia durante uma semana. Exemplo: `[15, 120, 30, 150, 20, 40, 90]`
- `search` (string): Termo de pesquisa para buscar vídeos no YouTube.
- `type` (string): Indica o tipo de busca a ser realizada para obter os vídeos.
  - Valores permitidos:
    - 'google-api': Utiliza a API do Google YouTube para buscar os vídeos.
    - 'pattern': Utiliza dados padrões para teste local, sem consultar a API do Google. Note que a funcionalidade de pesquisa não funcionará neste modo se as quotas da API estiverem esgotadas.

**Exemplo de Chamada:**

```
http://localhost:9070/general?dailyLimits=[15,120,30,150,20,40,90]&search=termo_de_pesquisa&type=google-api
```
**Exemplo de Resposta:**

```json
{
    "videosFormated": [
        {
            "title": "Título do Vídeo",
            "description": "Descrição do Vídeo",
            "duration": 60
        },
        // Outros vídeos...
    ],
    "mostUsedWords": [
        "aventura",
        "descubra",
        "preparese",
        "mágica",
        "nesta"
    ],
    "daysNeeded": 0
}






















