# coolapk-emotion
酷安表情包原版/svg重制版，提供CSS和JavaScript使用方法，可用于个人网页/博客
<br>

原版png来源于酷安安装包拆包，表情包原作者为<a href="https://coolapk.com/">酷安</a>，禁止用于商业用途。

<br>

## 使用方法
如果只是需要 原版`png`/ 重制版`svg`文件，下载即可，在`/source`目录

<br>用于网页的方法如下：

_目前只有`svg`版_

__需要`jQuery`，必须先引入`jQuery`！__

### 引入`coolapk-emotion.js`

这是无需下载的方式，但注意这没有CDN，大陆加载可能会比较慢

```html
<script src="https://coolemotion.netlify.com/svg-edition/coolapk-emotion.js"></script>
```

或者下载之后，引入`svg-edition/coolapk-emotion.js`，像这样：

```html
<script src="js/coolapk-emotion.js"></script>
```

只用引入`js`即可

### 在页面中使用

参考以下例子：

<br>

```html
<p>这是一段话<i class="c-coolb"></i>中间有个酷币</p>
```

这将引入一个类名为`c-coolb`的图标到这段话中

对于每个图标的预览及类名，请看[Demo](https://emotion.texice.xyz/svg-edition/demo.html)页面

<br>

### 注意

这种使用 Symbol 引用的方法，引用时使用的`<i>`标签会在页面加载时被替换为相应的`<svg>`标签。

也就是说 原`<i>`标签会被删除，展示的是`<svg>`标签。页面加载后，如果有新加的`<i>`标签表情则不会被正常显示，直到调用`setCoolapkEmotion()`函数再次进行替换：

```javascript
setCoolapkEmotion();
```

