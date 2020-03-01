# front-weather

> My peachy Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## 파일 구조
```
└───src/
    │
    └───components
    └──────common/
    |         Box.vue
    |         Modal.vue
    |         Search.vue
    |
    └───config/
    |     development.json
    |
    └───assets/
    |     └───img/
    |     └───style/
    |           global.scss
    |           normalize.min.css
    |           reset.scss
    |
    └───stores/
    |     index.js
    |     modal.js
    |
    └───layouts/
    |     default.vue
    |
    └───middleware/
    |     list.js
    |
    └───pages/
    |   └─── detail/
    |         _id.vue
    |   └─── index.vue
    |
    └───plugins/
    |     utils.js
    |     error.js
    |     utils.js
    |
    └───static/
    |     favicon.ico
    |       
    |───data/
    |     citylist.json
    |
    └───package.json
    |
    └───nuxt.config.js
```
### TODO: 추후 eslint 다시 세팅 grid layout 리펙토링
