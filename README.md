# coolapk-emotion
酷安 emoji 表情包原版 & svg重制版，可快速简便地用于个人网页与博客。

![](https://coolemotion.netlify.com/source/other/0.png)

路过的酷友，欢迎  Star，Fork，PR。

[Demo](https://emotion.texice.xyz/demo.html) 页面<br>

原版png来源于酷安安装包拆包，表情包原作者为<a href="https://coolapk.com/">酷安</a>，禁止用于商业用途。

<br>

## 使用方法
- <a href="#使用原文件&图片">使用原文件&图片</a>
- <a href="#使用JS插件">使用 JS 插件</a>
- <a href="#Hexo使用指南">Hexo使用指南</a>

### 使用原文件&图片

如果只是想使用原`png`，`svg`文件，可直接下载

如果应用于网页，也可以不必下载，使用每个文件对应的链接，比如：

```html
<img src="https://coolemotion.netlify.com/source/png/c-coolb.png">
```

这里使用了类名为`c-coolb`的`png`图像，对于每个图标的预览及类名，请看[Demo](https://emotion.texice.xyz/demo.html)页面

<hr>

### 使用JS插件

插件也分为`png`版和`svg`版

它们使用起来同样的简便，主要差别如下：

#### svg

__需要`jQuery`__

表情图标将会以`svg`的形式展现，因此在任意屏幕分辨率下都能达到最佳清晰度。

不过使用会加载整个插件（约1.2MB），即使您的页面只使用了一个表情图标。当然，加载一次后它会缓存到本地。

#### png

表情图标将会以`<i>`标签背景图片形式展现，因为浏览器的渲染不同，可能不能达到最佳清晰度，且放大后模糊。

优点是只有当您使用该表情图标时才会加载对应的图片，相当省流。

原生`JS`支持。

<br>

使用步骤如下：




#### 引入

只需引入 JS，CSS 已集成至 JS ，两个版本任选其一

可以用无需下载的方式，但注意这没有CDN，中国大陆加载可能会比较慢

```html
<!-- svg 版本 | svg edition -->
<script src="https://coolemotion.netlify.com/svg-edition/coolapk-emotion-svg.js"></script>
<!-- png 版本 | svg edition -->
<script src="https://coolemotion.netlify.com/png-edition/coolapk-emotion-png.min.js"></script>
```

或者下载之后引入

```html
<!-- svg 版本 | svg edition -->
<script src="./coolapk-emotion-svg.js"></script>
<!-- png 版本 | svg edition -->
<script src="./coolapk-emotion-svg.min.js"></script>
```




#### 在页面中引用

参考以下例子：

<br>

```html
<p>这是一段话<i class="c-coolb"></i>中间有个酷币</p>
```

这将引入一个类名为`c-coolb`的图标到这段话中

对于每个图标的预览及类名，请看[Demo](https://emotion.texice.xyz/demo.html)页面




#### 值得注意

svg 版本使用 Symbol 引用的方法（详见下方[关于 Symbol 引用方法](#关于 Symbol 引用方法)），引用时使用的`<i>`标签会在页面加载时被替换为相应的`<svg>`标签。

也就是说 原`<i>`标签会被删除，展示的是`<svg>`标签。因此在页面加载后，如果有新加的`<i>`标签表情则不会被正常显示，直到调用`setCoolapkEmotion()`函数再次进行替换：

```javascript
setCoolapkEmotion();
```

<hr>

#### 关于 Symbol 引用方法

以下原理内容您不必了解

<p>多色svg图标无法直接使用，为了能够简便使用，svg 版本用了 Symbol 引用方法，此方法由 <a href="https://www.iconfont.cn/">iconfont+</a> 提供</p>
<p>正如其名，Symbol 引用方式不同于一般的使用，使用时写下的只是 Symbol，然后JS会将 Symbol 替换为真正的 SVG，并实现完整的 SVG 效果。</p>

> <p>这是一种全新的使用方式，应该说这才是未来的主流，也是平台目前推荐的用法。相关介绍可以参考这篇<a href="https://www.iconfont.cn/help/detail?helptype=code">文章</a><br>这种用法其实是做了一个 SVG 的集合，与另外两种相比具有如下特点：</p><ul><li>支持多色图标了，不再受单色限制。</li><li>通过一些技巧，支持像字体那样，通过 <code>font-size</code>, <code>color</code> 来调整样式。</li><li>兼容性较差，支持 IE9+，及现代浏览器。</li><li>浏览器渲染 SVG 的性能一般，还不如 png。</li></ul>

我进行了一些改进：将 Symbol 代码进一步封装，集成 CSS 到 JS ，使得引用更为简便。

这种使用 Symbol 引用的方法，引用时使用的`<i>`标签会在页面加载时被替换为相应的`<svg>`标签。

也就是说 原`<i>`标签会被删除，展示的是`<svg>`标签。页面加载后，如果有新加的`<i>`标签表情则不会被正常显示，直到调用`setCoolapkEmotion()`函数再次进行替换：

```javascript
setCoolapkEmotion();
```

<hr>

### Hexo使用指南

由于我的博客是 Hexo 框架，也不熟悉其他框架，所以这里只为 Hexo 提供参考。

这里只提一种方法

在`hexo`的`/scaffolds/post.md`（文章模板文件）最下方加上：

```markdown
<script src="https://coolemotion.netlify.com/png-edition/coolapk-emotion-png.min.js"></script>
```

即可在新建的文章中使用：

```html
这是一段话<i class="c-coolb"></i>中间有个酷币
```

这将引入一个类名为`c-coolb`的图标到这段话中

对于每个图标的预览及类名，请看[Demo](https://emotion.texice.xyz/demo.html)页面