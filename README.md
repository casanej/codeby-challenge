# Desafio de front-end Pleno

## Iniciando

Para começar, você precisará instalar os pacotes em seu projeto usando um gerenciador de pacotes como npm e yarn.

```
yarn install
```

## Usando

Para executar o modo de desenvolvimento execute o comando a seguir, e acesse a URL em [localhost:3000](http://localhost:3000).

```
yarn start
```

Para montar um build para produção utilize o comando e uma pasta será criada na raiz do projeto chamada `./dist` compilando todo o projeto proto para uso.

```
yarn build
```

Para testar o modo produção, utilize o pacote `serve` utilizando o comando

```
yarn global add serve
```

Ao final da instalação, execute o comando

```
npx serve ./dist
```

Verifique a porta que foi disponibilizada, acesse o link e verifique o projeto em modo produção

## Todo

Para a finalização completa desse projeto até a data desse README, falta realizar a correção do build do Parcel. Parece que alguma configuração falta ser implementada no package ou alguma configuração complementar. Ao rodar o comando `build` a geração do arquivo é feita corretamente mas é feita na pasta `src/assets` gerando os arquivos `.js` e sobrescrevendo o arquivo `index.html`.