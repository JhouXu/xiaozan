import{_ as s,o as a,c as n,N as l}from"./chunks/framework.a6d8af91.js";const F=JSON.parse('{"title":"Sass 动态转换单位","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"pages/blog/css-scss-unit.md","lastUpdated":1701232433000}'),p={name:"pages/blog/css-scss-unit.md"},o=l(`<h1 id="sass-动态转换单位" tabindex="-1">Sass 动态转换单位 <a class="header-anchor" href="#sass-动态转换单位" aria-label="Permalink to &quot;Sass 动态转换单位&quot;">​</a></h1><h2 id="项目场景" tabindex="-1">项目场景： <a class="header-anchor" href="#项目场景" aria-label="Permalink to &quot;项目场景：&quot;">​</a></h2><p>在使用 Sass 扩展语言进行开发的时候。</p><h2 id="问题描述" tabindex="-1">问题描述： <a class="header-anchor" href="#问题描述" aria-label="Permalink to &quot;问题描述：&quot;">​</a></h2><p>使用 Sass 定义了一个变量 $box: 750px, 在这个时候想直接在后面添加是行不通的。</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">$box: 750px;</span></span>
<span class="line"><span style="color:#FFCB6B;">div</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> $box vw</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 返回 750px vw */</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="原因分析" tabindex="-1">原因分析： <a class="header-anchor" href="#原因分析" aria-label="Permalink to &quot;原因分析：&quot;">​</a></h2><p>在这里与 Sass 语言的编译处理机制有关。</p><h2 id="解决方案" tabindex="-1">解决方案： <a class="header-anchor" href="#解决方案" aria-label="Permalink to &quot;解决方案：&quot;">​</a></h2><p>首先我们得先去掉当前长度的单位，用现在的长度除于 1 的单位即可去掉单位；然后在乘以需要转换的比例即可，当然在转换单位的时候记得按比例转换。</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* 示例 */</span></span>
<span class="line"><span style="color:#A6ACCD;">$box: 750px;</span></span>
<span class="line"><span style="color:#FFCB6B;">div</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> $box / </span><span style="color:#F78C6C;">1px</span><span style="color:#A6ACCD;"> * </span><span style="color:#F78C6C;">1vw</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 返回 750vw */</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>现在有一个需求的就是将 px 转变为 vw，并且基准值为 100px</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">$box: 750px;</span></span>
<span class="line"><span style="color:#FFCB6B;">div</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> $n / </span><span style="color:#F78C6C;">1px</span><span style="color:#A6ACCD;"> / </span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;"> * </span><span style="color:#F78C6C;">1vw</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 返回 7.5vw */</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>可是通过这样写发现，如果需要重复转换的时候就得重复这样写了，所以我们可以使用 Sass 中的函数进行封装，以便重复调用。</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">$box: 750px;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* 转换width */</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@function</span><span style="color:#A6ACCD;"> getWidth($n) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/* $n * 0 + 1 这样可以获取到 $n 的单位 */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">@return</span><span style="color:#A6ACCD;"> $n / ($n * 0 + 1) / 100 * 1vw</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* 转换Height */</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@function</span><span style="color:#A6ACCD;"> getHeight($n) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">@return</span><span style="color:#A6ACCD;"> $n / ($n * 0 + 1) / 100 * 1vh</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">div</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> getWitch($box)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 返回 7.5vw */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> getHeight(</span><span style="color:#F78C6C;">3721px</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 返回 37.21vh */</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,15),e=[o];function t(c,r,i,y,C,D){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{F as __pageData,d as default};