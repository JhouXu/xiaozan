import{_ as s,o as a,c as n,N as l}from"./chunks/framework.a6d8af91.js";const p="/apecode/images/blog/css/20200828162025695.png",o="/apecode/images/blog/css/20200828162057407.png",e="/apecode/images/blog/css/20200828162102387.png",g=JSON.parse('{"title":"CSS 中实现隐藏","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"pages/blog/css-hidden.md","lastUpdated":1710754944000}'),t={name:"pages/blog/css-hidden.md"},c=l('<h1 id="css-中实现隐藏" tabindex="-1">CSS 中实现隐藏 <a class="header-anchor" href="#css-中实现隐藏" aria-label="Permalink to &quot;CSS 中实现隐藏&quot;">​</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>display: none; visibility: hidden; opacity: 0; 均是 css 中控制元素在页面中隐藏的属性值，但是它们之间隐藏的方式效果及性能又有所不同，下面我们将一起来探讨探讨。</p><h2 id="一、display-none" tabindex="-1">一、display: none <a class="header-anchor" href="#一、display-none" aria-label="Permalink to &quot;一、display: none&quot;">​</a></h2><p><img src="'+p+'" alt="在这里插入图片描述"></p><ol><li>DOM 结构：浏览器不会渲染 display 属性为 none 的元素，<code>不占据空间</code>；</li><li>事件监听：无法进行 DOM 事件监听；</li><li>性 能：动态改变此属性时会引起<code>重排</code>，性能较差；</li><li>继 承：不会被子元素继承，毕竟子类也不会被渲染；</li><li>transition：transition 不支持 display。</li></ol><h2 id="二、visibility-hidden" tabindex="-1">二、visibility: hidden <a class="header-anchor" href="#二、visibility-hidden" aria-label="Permalink to &quot;二、visibility: hidden&quot;">​</a></h2><p><img src="'+o+'" alt="在这里插入图片描述"></p><ol><li>DOM 结构：元素被隐藏，但是会被渲染不会消失，<code>占据空间</code>；</li><li>事件监听：无法进行 DOM 事件监听；</li><li>性 能：动态改变此属性时会引起<code>重绘</code>，性能较高；</li><li>继 承：会被子元素继承，<code>子元素可以</code>通过设置 visibility: visible; 来取消隐藏；</li><li>transition：visibility 会立即显示，隐藏时会延时。</li></ol><h2 id="三、opactiy-0" tabindex="-1">三、opactiy: 0 <a class="header-anchor" href="#三、opactiy-0" aria-label="Permalink to &quot;三、opactiy: 0&quot;">​</a></h2><p><img src="'+e+`" alt="在这里插入图片描述"></p><ol><li>DOM 结构：透明度为 100%，元素隐藏，<code>占据空间</code>；</li><li>事件监听：可以进行 DOM 事件监听；</li><li>性 能：提升为合成层，<code>不会触发重绘</code>，性能较高；</li><li>继 承：会被子元素继承,且，子元素并不能通过 opacity: 1 来取消隐藏；</li><li>transition：opacity 可以延时显示和隐藏。</li></ol><h2 id="四、测试代码" tabindex="-1">四、测试代码 <a class="header-anchor" href="#四、测试代码" aria-label="Permalink to &quot;四、测试代码&quot;">​</a></h2><p>上面所做的案例测试，使用的是此段代码，刚兴趣的小伙伴可以复制到浏览器控制台上进行逐一测试。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#A6ACCD;">DOCTYPE html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">charset</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">UTF-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Demo</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      body </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        margin: </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        padding: </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        font</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">size: 16px;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">      .parents </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        width: 100vw;</span></span>
<span class="line"><span style="color:#A6ACCD;">        height: 100vh;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">      .children </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        display: inline</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">block;</span></span>
<span class="line"><span style="color:#A6ACCD;">        overflow: hidden;</span></span>
<span class="line"><span style="color:#A6ACCD;">        margin: 10px;</span></span>
<span class="line"><span style="color:#A6ACCD;">        width: 200px;</span></span>
<span class="line"><span style="color:#A6ACCD;">        height: 200px;</span></span>
<span class="line"><span style="color:#A6ACCD;">        background</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">color: #8e44ad;</span></span>
<span class="line"><span style="color:#A6ACCD;">        font</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">size: 5rem;</span></span>
<span class="line"><span style="color:#A6ACCD;">        color: #fff;</span></span>
<span class="line"><span style="color:#A6ACCD;">        line</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">height: 200px;</span></span>
<span class="line"><span style="color:#A6ACCD;">        text</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">align: center;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">      .children:nth-child(1) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        display: none;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">/* visibility: hidden; */</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">/* opacity: 0; */</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">parents</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">children</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">1</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">children</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">2</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">children</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">3</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>以上就是今天要讲的内容，本文介绍了元素隐藏的方式，由于它们的动态修改性能和 transition 展示不同，所以需要进行合适的选择。</p>`,17),r=[c];function i(D,y,F,C,d,A){return a(),n("div",null,r)}const b=s(t,[["render",i]]);export{g as __pageData,b as default};