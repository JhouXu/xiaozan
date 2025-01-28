import{j as t,c as n,ak as e,M as l,g as i,p as h,J as p,a as k}from"./chunks/framework.F_7_8ZIU.js";const u=JSON.parse('{"title":"ECMAScript 2017","description":"","frontmatter":{},"headers":[],"relativePath":"blog/es/es-2017.md","filePath":"blog/es/es-2017.md","lastUpdated":1738036750000}'),d={name:"blog/es/es-2017.md"};function r(o,s,c,E,g,y){const a=p("BrowserCard");return k(),n("div",null,[s[0]||(s[0]=e(`<h1 id="ecmascript-2017" tabindex="-1">ECMAScript 2017 <a class="header-anchor" href="#ecmascript-2017" aria-label="Permalink to &quot;ECMAScript 2017&quot;">​</a></h1><p>ECMAScript 2017（ES8）于 2017 年 6 月发布。</p><h2 id="核心特性" tabindex="-1">核心特性 <a class="header-anchor" href="#核心特性" aria-label="Permalink to &quot;核心特性&quot;">​</a></h2><h3 id="_1-async-await" tabindex="-1">1. async / await <a class="header-anchor" href="#_1-async-await" aria-label="Permalink to &quot;1. async / await&quot;">​</a></h3><p>引入了 <code>async</code> 和 <code>await</code> 关键字，这两个关键字极大简化了异步代码的书写。async 用于定义异步函数，await 用于等待 Promise 对象的解析，避免了回调函数和链式 .then() 的层层嵌套。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fetchData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    setTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Data fetched&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fetchData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;Data fetched&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p><strong>影响</strong>：</p><ul><li>更简洁的异步代码：<code>async/await</code> 使得处理异步逻辑时<code>不再需要使用复杂的回调</code>或者 <code>.then() 链式调用</code>，代码结构更为清晰。</li><li>增强可读性：代码看起来更像同步代码，开发者可以更容易地理解异步操作的流程。</li></ul><h3 id="_2-object-entries-和-object-values" tabindex="-1">2. Object.entries() 和 Object.values() <a class="header-anchor" href="#_2-object-entries-和-object-values" aria-label="Permalink to &quot;2. Object.entries() 和 Object.values()&quot;">​</a></h3><p>引入了 <code>Object.entries()</code> 和 <code>Object.values()</code> 方法，分别用于获取对象的键值对数组和对象的值数组。这两个方法极大简化了处理对象时的迭代操作。</p><ul><li><code>Object.entries()</code>：返回一个数组，其中包含对象所有自身属性的键值对（以数组形式）。</li><li><code>Object.values()</code>：返回一个包含对象所有自身属性值的数组。</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> obj</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { a: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, b: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, c: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> };</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Object.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">entries</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(obj)); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// [[&#39;a&#39;, 1], [&#39;b&#39;, 2], [&#39;c&#39;, 3]]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Object.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">values</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(obj)); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// [1, 2, 3]</span></span></code></pre></div><p><strong>影响</strong>：</p><ul><li>简化对象操作：这两个方法使得操作对象变得更加简单，尤其是在需要迭代对象属性时，代码更简洁、易读。</li><li>更方便的数据处理：当需要<code>将对象转换为数组</code>格式进行操作时，<code>Object.entries()</code> 和 <code>Object.values()</code> 提供了直接的方式。</li></ul><h3 id="_3-string-padding-padstart-和-padend" tabindex="-1">3. String padding (padStart() 和 padEnd()) <a class="header-anchor" href="#_3-string-padding-padstart-和-padend" aria-label="Permalink to &quot;3. String padding (padStart() 和 padEnd())&quot;">​</a></h3><p>引入了 <code>String.prototype.padStart()</code> 和 <code>String.prototype.padEnd()</code> 方法，用于在字符串的开始或结束填充指定的字符，直到字符串达到指定的长度。这对于格式化字符串（例如，数字填充零）非常有用。</p><ul><li><code>padStart(targetLength, padString)</code>：在字符串的开头填充指定的字符，直到字符串的总长度达到目标长度。</li><li><code>padEnd(targetLength, padString)</code>：在字符串的结尾填充指定的字符，直到字符串的总长度达到目标长度。</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> str </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;5&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(str.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">padStart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;005&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(str.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">padEnd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;500&#39;</span></span></code></pre></div><p><strong>影响</strong>：</p><ul><li>简化字符串格式化：开发者可以更容易地进行字符串格式化操作，例如填充日期、时间或数字，避免手动编写繁琐的字符串处理代码。</li><li>提升代码可读性：减少了对传统 <code>if</code> 语句或其他字符串操作方法的依赖，使得代码更加简洁。</li></ul><h3 id="_4-shared-memory-和-atomics" tabindex="-1">4. Shared Memory 和 Atomics <a class="header-anchor" href="#_4-shared-memory-和-atomics" aria-label="Permalink to &quot;4. Shared Memory 和 Atomics&quot;">​</a></h3><p>引入了 <code>SharedArrayBuffer</code> 和 <code>Atomics</code>，这两个特性为<code>多线程编程</code>提供了支持，使得 JavaScript 可以进行<code>共享内存操作</code>。这对于 <code>Web Workers</code> 或者<code>多线程环境</code>中的<code>数据同步</code>和<code>并发控制</code>非常重要。</p><ul><li><code>SharedArrayBuffer</code>：提供一种在<code>多个线程间共享内存</code>的方式。</li><li><code>Atomics</code>：提供原子操作，用于安全地<code>访问共享内存</code>中的数据。</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 使用 SharedArrayBuffer 创建共享内存</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> buffer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SharedArrayBuffer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1024</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 创建一个 1024 字节的共享内存缓冲区</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> view</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Int32Array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(buffer);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 使用 Atomics 进行原子操作</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Atomics.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">store</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(view, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">123</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Atomics.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">load</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(view, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 输出 123</span></span></code></pre></div><p><strong>影响</strong>：</p><ul><li>增强并发处理能力：<code>SharedArrayBuffer</code> 和 <code>Atomics</code> 为 JavaScript 提供了对<code>共享内存</code>和<code>线程同步</code>的支持，这对于 <code>Web Workers</code> 或 <code>WebAssembly</code> 的<code>并行计算</code>非常重要。</li><li>多线程编程：使得 JavaScript 在需要多线程支持的场景中能够更高效地运行，解决了<code>单线程模型</code>下的性能瓶颈。</li></ul><h2 id="兼容性" tabindex="-1">兼容性 <a class="header-anchor" href="#兼容性" aria-label="Permalink to &quot;兼容性&quot;">​</a></h2>`,27)),l(a,{cv:"58+",fv:"55+",sv:"10+",oev:"15+",iev:"不支持",nv:"7.6+"}),s[1]||(s[1]=i("blockquote",null,[i("p",null,"注：兼容性数据可能随着版本的更新而有所调整，建议开发者根据项目的具体需求参考最新的浏览器版本和 Polyfill 支持情况。")],-1)),s[2]||(s[2]=i("h2",{id:"总结",tabindex:"-1"},[h("总结 "),i("a",{class:"header-anchor",href:"#总结","aria-label":'Permalink to "总结"'},"​")],-1)),s[3]||(s[3]=i("p",null,"ECMAScript 2017（ES8）带来了几个非常重要的特性，尤其是 async / await，使得异步编程变得更加直观和简洁；Object.entries() 和 Object.values() 方法简化了对对象的操作；而 共享内存和原子操作 为多线程编程提供了强有力的支持。",-1)),s[4]||(s[4]=i("p",null,[i("strong",null,"参考文献")],-1)),s[5]||(s[5]=i("p",null,[i("a",{href:"https://tc39.es/ecma262/2017/",target:"_blank",rel:"noreferrer"},"ECMA-262 2017 规范 👉")],-1))])}const C=t(d,[["render",r]]);export{u as __pageData,C as default};
