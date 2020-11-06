# 🌈 k-progress-v3

> A Vue plugin, linear progress bar.

![](https://img.shields.io/npm/v/k-progress-v3?color=success&style=flat-square)
![](https://img.shields.io/github/languages/top/xrkffgg/k-progress-v3?style=flat-square)
![](https://img.shields.io/github/stars/xrkffgg/k-progress-v3?color=blueviolet&style=flat-square)
![](https://img.shields.io/github/license/xrkffgg/k-progress-v3?color=red&style=flat-square)
![](https://img.shields.io/npm/dt/k-progress-v3?color=ff69b4&style=flat-square)

## 🎈 Vue2

If you need vue2 version, you can find in [`k-progress`](https://github.com/xrkffgg/k-progress).

## 📚 Course
[k-progress](https://xrkffgg.github.io/Knotes/course/k-progress.html)

## 📦 Install
```bash
npm install -S k-progress-v3
# or
yarn add k-progress-v3
```

## 🔨 Begin Start
```js
// main.js
import KProgress from 'k-progress';

const app = createApp(App);
app
  .component('k-progress', KProgress)
  .mount('#app');
```

## 📔 Attributes
|  Attribute   |           Type            |  Default  |            Optional             |                                                 explain                                                  |
| :----------: | :-----------------------: | :-------: | :-----------------------------: | :------------------------------------------------------------------------------------------------------: |
|   percent    |          Number           |     0     |              0-100              |                                            Percent (Required)                                            |
| line-height  |          Number           |     6     |                                 |                                           Progress bar height                                            |
|     type     |          String           |  `line`   |         `line` / `lump`         |                                            Progress bar type                                             |
|    status    |          String           |           | `success` / `warning` / `error` |                                           Progress bar status                                            |
|    color     | String / Array / Function |           |                                 | Progress bar color; When using `Array`, the limit is 6; When using `Function`, the argument is `percent` |
|  color-flow  |          Boolean          |  `false`  |                                 |                                       Whether to enable color flow                                       |
| flow-second  |          Number           |     5     |               1-6               |           The time required for the flow, that is, the smaller the time, the faster the speed            |
|   bg-color   |          String           | `#ebeef5` |           Color code            |                                      Progress bar background color                                       |
|    border    |          Boolean          |  `true`   |                                 |                                               Whether arc                                                |
|  show-text   |          Boolean          |  `true`   |                                 |                                    Whether to show progress bar text                                     |
|    format    |         Function          |           |                                 |                               Custom text display, parameter is `percent`                                |
|  cut-width   |          Number           |     1     |                                 |                                               `lump` width                                               |
|  cut-color   |          String           | `#ebeef5` |           Color code            |                                               `lump` color                                               |
|    active    |          Boolean          |  `false`  |                                 |                                    Whether to enable dynamic effects                                     |
| active-color |          String           |           |                                 |                                           Dynamic effect color                                           |

## 📒 ChangeLog
[ChangeLog](./CHANGELOG.md)

## 🖊 Thanks
Thank you for using, if you find some problems, welcome to correct!
- [Issues](https://github.com/xrkffgg/k-progress-v3/issues) 
- [PR](https://github.com/xrkffgg/k-progress-v3/pulls)

## LICENSE
[MIT](https://github.com/xrkffgg/k-progress-v3/blob/master/LICENSE)
