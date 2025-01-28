import{j as t,c as h,ak as n,M as e,g as i,p as l,J as p,a as k}from"./chunks/framework.F_7_8ZIU.js";const u=JSON.parse('{"title":"ECMAScript 2024","description":"","frontmatter":{},"headers":[],"relativePath":"blog/es/es-2024.md","filePath":"blog/es/es-2024.md","lastUpdated":1738032021000}'),r={name:"blog/es/es-2024.md"};function d(o,s,E,g,c,y){const a=p("BrowserCard");return k(),h("div",null,[s[0]||(s[0]=n(`<h1 id="ecmascript-2024" tabindex="-1">ECMAScript 2024 <a class="header-anchor" href="#ecmascript-2024" aria-label="Permalink to &quot;ECMAScript 2024&quot;">​</a></h1><p>ECMAScript 2024（ES15）于 2024 年 6 月发布。</p><h2 id="核心特性" tabindex="-1">核心特性 <a class="header-anchor" href="#核心特性" aria-label="Permalink to &quot;核心特性&quot;">​</a></h2><h3 id="_1-promise-withresolvers" tabindex="-1">1. Promise.withResolvers() <a class="header-anchor" href="#_1-promise-withresolvers" aria-label="Permalink to &quot;1. Promise.withResolvers()&quot;">​</a></h3><p><code>异步控制增强</code>，允许直接创建 Promise 并获取其 <code>resolve</code> 和 <code>reject</code> 函数，适用于需要手动控制异步结果的场景。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">withResolvers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;操作成功&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> promise; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 输出：&quot;操作成功&quot;</span></span></code></pre></div><h3 id="_2-数据分组方法" tabindex="-1">2. 数据分组方法 <a class="header-anchor" href="#_2-数据分组方法" aria-label="Permalink to &quot;2. 数据分组方法&quot;">​</a></h3><p><code>Object.groupBy()</code> 与 <code>Map.groupBy()</code></p><p>按条件对数组元素分组，返回普通对象或 Map 对象，简化数据聚合逻辑。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> users</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Alice&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, role: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;admin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Bob&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, role: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;user&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> grouped</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Object.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">groupBy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(users, (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">user</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> user.role);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 输出：{ admin: [Alice...], user: [Bob...] }</span></span></code></pre></div><p>场景：数据聚合、分类统计。</p><p><code>注意</code>：Object.groupBy 返回无原型的对象，无法调用 hasOwnProperty 等方法。</p><h3 id="_3-正则表达式-v-标志" tabindex="-1">3. 正则表达式 <code>v</code> 标志 <a class="header-anchor" href="#_3-正则表达式-v-标志" aria-label="Permalink to &quot;3. 正则表达式 \`v\` 标志&quot;">​</a></h3><p><code>增强 Unicode 支持</code>，支持集合操作（<code>差集 --</code>、<code>交集 &amp;&amp;</code>）和多节点字符匹配。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> re</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">[</span><span style="--shiki-light:#22863A;--shiki-light-font-weight:bold;--shiki-dark:#85E89D;--shiki-dark-font-weight:bold;">\\p</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{Letter}&amp;&amp;</span><span style="--shiki-light:#22863A;--shiki-light-font-weight:bold;--shiki-dark:#85E89D;--shiki-dark-font-weight:bold;">\\p</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{ASCII}]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">v</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">re.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true（仅匹配 ASCII 字母）</span></span></code></pre></div><h3 id="_4-字符串格式校验与修复" tabindex="-1">4. 字符串格式校验与修复 <a class="header-anchor" href="#_4-字符串格式校验与修复" aria-label="Permalink to &quot;4. 字符串格式校验与修复&quot;">​</a></h3><p>检测并修复无效 Unicode 字符。</p><ul><li><code>String.prototype.isWellFormed()</code>：检测字符串是否有效。</li><li><code>String.prototype.toWellFormed()</code>：将无效字符替换为 �（U+FFFD）。</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> str</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Hello</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\uD800</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">World&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">str.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isWellFormed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">str.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toWellFormed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &quot;Hello�World&quot;</span></span></code></pre></div><h3 id="_5-arraybuffer-动态调整与转移" tabindex="-1">5. <code>ArrayBuffer</code> 动态调整与转移 <a class="header-anchor" href="#_5-arraybuffer-动态调整与转移" aria-label="Permalink to &quot;5. \`ArrayBuffer\` 动态调整与转移&quot;">​</a></h3><p>优化二进制数据处理性能。用于音视频处理、WebAssembly 交互。</p><ul><li><code>resize()</code>：动态调整缓冲区大小（需预定义 <code>maxByteLength</code>）。</li><li><code>transfer()</code>：零拷贝转移所有权，提升大内存操作效率。</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> buffer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ArrayBuffer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { maxByteLength: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">16</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">buffer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">12</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 扩容至 12 字节</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> newBuffer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> buffer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">transfer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 原 buffer 分离</span></span></code></pre></div><h3 id="_6-atomics-waitasync" tabindex="-1">6. Atomics.waitAsync() <a class="header-anchor" href="#_6-atomics-waitasync" aria-label="Permalink to &quot;6. Atomics.waitAsync()&quot;">​</a></h3><p><code>异步共享内存等待</code>，非阻塞等待 <code>SharedArrayBuffer</code> 的值变化，避免主线程冻结。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> sab</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SharedArrayBuffer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1024</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> int32</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Int32Array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(sab);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Atomics.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">waitAsync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(int32, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Atomics.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">notify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(int32, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 触发解决</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> promise;</span></span></code></pre></div><p>场景：多线程协作（Web Worker）、高性能计算。</p><h3 id="_7-顶层-await" tabindex="-1">7. 顶层 await <a class="header-anchor" href="#_7-顶层-await" aria-label="Permalink to &quot;7. 顶层 await&quot;">​</a></h3><p>允许在模块顶层直接使用 await，简化异步初始化逻辑。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 模块中直接使用</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fetchData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> data;</span></span></code></pre></div><h3 id="_8-hashbang-语法标准化" tabindex="-1">8. Hashbang 语法标准化 <a class="header-anchor" href="#_8-hashbang-语法标准化" aria-label="Permalink to &quot;8. Hashbang 语法标准化&quot;">​</a></h3><p>支持在脚本文件首行使用 #!/usr/bin/env node，兼容 Node.js 直接执行。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#!/usr/bin/env node</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello World&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="兼容性" tabindex="-1">兼容性 <a class="header-anchor" href="#兼容性" aria-label="Permalink to &quot;兼容性&quot;">​</a></h2>`,34)),e(a,{cv:"127+",fv:"128+",sv:"18.0+",ev:"127+",nv:"21.0+"}),s[1]||(s[1]=i("blockquote",null,[i("p",null,"注：兼容性数据可能随着版本的更新而有所调整，建议开发者根据项目的具体需求参考最新的浏览器版本和 Polyfill 支持情况。")],-1)),s[2]||(s[2]=i("h2",{id:"总结",tabindex:"-1"},[l("总结 "),i("a",{class:"header-anchor",href:"#总结","aria-label":'Permalink to "总结"'},"​")],-1)),s[3]||(s[3]=i("p",null,"ES2024 聚焦于 异步控制、数据处理 和 内存优化。",-1)),s[4]||(s[4]=i("p",null,[i("strong",null,"参考文献")],-1)),s[5]||(s[5]=i("p",null,[i("a",{href:"https://tc39.es/ecma262/2024/",target:"_blank",rel:"noreferrer"},"ECMA-262 2024 规范 👉")],-1))])}const C=t(r,[["render",d]]);export{u as __pageData,C as default};
