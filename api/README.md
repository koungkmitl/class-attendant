# This project build for Subject: Software Engineering

You can run this project via `yarn` and migrate database via `sequelize`

`First` install dependencies

```zsh
$ yarn install
```

// `deprecated` //
`Secondary` build project

```zsh
$ yarn build
```

`Third` migrate database

```zsh
$ node_modules/.bin/sequelize db:migrate
```

`Fourth` run

```zsh
$ yarn start
```

**note** if you wanna to run via docker `docker run --rm -it --net <sandbox> -e DB_HOST=<172.18.0.2> koung/se:1.0`