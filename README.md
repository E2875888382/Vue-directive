# vue-directive （Vue自定义指令集）

| name | desc | value |
| - | - | - |
| v-permission | 权限控制 | Boolean &#124;&#124; Function |
| v-copy | 点击设置粘贴板 | { text: '', click: ()=> {}, empty: ()=> {} } | 
| v-visible | 监听dom曝光，通过传入show可以实现lazy-load | { show: ()=> {}, hide: ()=> {}, once: false } |
| v-focus | 自动聚焦 | null |

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
