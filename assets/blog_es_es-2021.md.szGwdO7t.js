import{j as n,c as l,ak as t,M as h,g as i,p,J as k,a as e}from"./chunks/framework.F_7_8ZIU.js";const u=JSON.parse('{"title":"ECMAScript 2021","description":"","frontmatter":{},"headers":[],"relativePath":"blog/es/es-2021.md","filePath":"blog/es/es-2021.md","lastUpdated":1738032021000}'),r={name:"blog/es/es-2021.md"};function E(d,s,o,g,y,c){const a=k("BrowserCard");return e(),l("div",null,[s[0]||(s[0]=t(`<h1 id="ecmascript-2021" tabindex="-1">ECMAScript 2021 <a class="header-anchor" href="#ecmascript-2021" aria-label="Permalink to &quot;ECMAScript 2021&quot;">​</a></h1><p>ECMAScript 2021（ES12）于 2021 年 6 月发布。</p><h2 id="核心特性" tabindex="-1">核心特性 <a class="header-anchor" href="#核心特性" aria-label="Permalink to &quot;核心特性&quot;">​</a></h2><h3 id="_1-string-prototype-replaceall-方法" tabindex="-1">1. String.prototype.replaceAll() 方法 <a class="header-anchor" href="#_1-string-prototype-replaceall-方法" aria-label="Permalink to &quot;1. String.prototype.replaceAll() 方法&quot;">​</a></h3><p><code>String.prototype.replaceAll()</code> 方法，用于<code>替换字符串中所有匹配的子字符串</code>。以前，<code>replace()</code> 只能替换第一个匹配项，而 <code>replaceAll()</code> 解决了这个问题，允许一次性替换所有匹配项。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> str</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;apple banana apple orange&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> newStr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> str.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replaceAll</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;apple&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;kiwi&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(newStr); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;kiwi banana kiwi orange&#39;</span></span></code></pre></div><p><strong>影响</strong>：</p><ul><li>简化字符串替换：避免了使用正则表达式替代所有匹配项的复杂度。</li><li>更简洁的代码：使得多次替换操作更加清晰和易读。</li></ul><h3 id="_2-promise-any-方法" tabindex="-1">2. Promise.any() 方法 <a class="header-anchor" href="#_2-promise-any-方法" aria-label="Permalink to &quot;2. Promise.any() 方法&quot;">​</a></h3><p><code>Promise.any()</code> 方法，它接受一个<code>可迭代的 Promise 集合</code>，返回一个新的 Promise。这个新的 Promise 会在集合中的任何一个 Promise 成功时立即解决。如果所有 Promise 都被拒绝，则返回一个拒绝状态的 Promise。</p><p><code>一个成功即成功</code></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> p1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">reject</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Error 1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> p2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Success 2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> p3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">reject</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Error 3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([p1, p2, p3])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(value)) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;Success 2&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(error));</span></span></code></pre></div><p><strong>影响</strong>：</p><ul><li>处理多个异步操作：当有多个 Promise 时，Promise.any() 允许你仅关注第一个成功的 Promise，避免等待所有 Promise 都完成。</li><li>提高异步处理效率：特别适用于需要在多个异步操作中选取最快完成的结果的场景。</li></ul><h3 id="_3-weakrefs-弱引用" tabindex="-1">3. WeakRefs（弱引用） <a class="header-anchor" href="#_3-weakrefs-弱引用" aria-label="Permalink to &quot;3. WeakRefs（弱引用）&quot;">​</a></h3><p><code>WeakRef</code> 为开发者提供了一种创建弱引用的方式。弱引用不会阻止垃圾回收机制回收其引用的对象。它适用于需要手动控制对象内存管理的场景，比如缓存机制。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> target </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Alice&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> };</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> weakRef </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> WeakRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(target);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> deref </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> weakRef.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">deref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(deref.name); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;Alice&#39;</span></span></code></pre></div><p><strong>影响</strong>：</p><ul><li>内存管理：提供了一种管理大型对象或缓存的方式，防止其在不需要时长时间占用内存。</li><li>适用于缓存机制：当对象不再有强引用时，JavaScript 可以自动回收它。</li></ul><h3 id="_4-logical-assignment-operators-逻辑赋值运算符" tabindex="-1">4. Logical Assignment Operators（逻辑赋值运算符） <a class="header-anchor" href="#_4-logical-assignment-operators-逻辑赋值运算符" aria-label="Permalink to &quot;4. Logical Assignment Operators（逻辑赋值运算符）&quot;">​</a></h3><p>引入了三种新的逻辑赋值运算符：<code>&amp;&amp;=</code>, <code>||=</code>, 和 <code>??=</code>。它们结合了逻辑操作符和赋值操作，简化了代码中常见的逻辑判断和赋值操作。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Default Value&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 如果 a 为 null 或 undefined，则赋值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;Default Value&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 如果 b 为 falsy 值，则不改变 b</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(b); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> c </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">c </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">??=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Fallback Value&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 如果 c 为 null 或 undefined，则赋值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(c); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;Fallback Value&#39;</span></span></code></pre></div><p><strong>影响</strong>：</p><ul><li>简化赋值逻辑：这些新运算符使得代码更加简洁，尤其是在需要结合逻辑判断和赋值的场景。</li><li>提高代码可读性：开发者可以通过单一表达式处理逻辑操作和赋值，而不需要冗长的条件判断。</li></ul><h3 id="_5-array-prototype-at-方法" tabindex="-1">5. Array.prototype.at() 方法 <a class="header-anchor" href="#_5-array-prototype-at-方法" aria-label="Permalink to &quot;5. Array.prototype.at() 方法&quot;">​</a></h3><p><code>Array</code> 类增加了 <code>at()</code> 方法，允许使用负数索引从数组的末尾访问元素。这种方法简化了访问数组末尾元素的过程。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> arr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(arr.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">at</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 4 (最后一个元素)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(arr.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">at</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 3 (倒数第二个元素)</span></span></code></pre></div><p><strong>影响</strong>：</p><ul><li>更方便地访问数组元素：通过负数索引，开发者可以轻松地访问数组的最后几个元素，避免使用 arr.length - 1。</li><li>提升代码简洁性：简化了访问数组末尾元素的代码逻辑。</li></ul><h3 id="_6-object-hasown-方法" tabindex="-1">6. Object.hasOwn() 方法 <a class="header-anchor" href="#_6-object-hasown-方法" aria-label="Permalink to &quot;6. Object.hasOwn() 方法&quot;">​</a></h3><p><code>Object.hasOwn() </code>方法提供了一种更安全的方式来检查对象是否拥有某个属性。与 <code>Object.prototype.hasOwnProperty()</code> 相比，<code>Object.hasOwn() </code>方法更简洁并且避免了由于 null 或 undefined 产生的错误。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> obj</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Alice&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Object.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hasOwn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(obj, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Object.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hasOwn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(obj, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;age&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// false</span></span></code></pre></div><p><strong>影响</strong>：</p><ul><li>代码更简洁：减少了 hasOwnProperty 的调用，并提高了代码的安全性。</li><li>增强健壮性：不再需要检查对象是否为 null 或 undefined，避免了潜在的运行时错误。</li></ul><h2 id="兼容性" tabindex="-1">兼容性 <a class="header-anchor" href="#兼容性" aria-label="Permalink to &quot;兼容性&quot;">​</a></h2>`,35)),h(a,{cv:"91+",fv:"89+",sv:"14.0+",ev:"91+",nv:"16.0+"}),s[1]||(s[1]=i("blockquote",null,[i("p",null,"注：兼容性数据可能随着版本的更新而有所调整，建议开发者根据项目的具体需求参考最新的浏览器版本和 Polyfill 支持情况。")],-1)),s[2]||(s[2]=i("h2",{id:"总结",tabindex:"-1"},[p("总结 "),i("a",{class:"header-anchor",href:"#总结","aria-label":'Permalink to "总结"'},"​")],-1)),s[3]||(s[3]=i("p",null,"ECMAScript 2021（ES12）引入了一些重要的特性，极大地提升了 JavaScript 语言的功能性和简洁性。尤其是在字符串操作、异步处理、数组操作和内存管理等方面，ES2021 提供了更为简洁和高效的解决方案。这些特性使得开发者在编写现代 JavaScript 应用时能够更加高效和轻松地处理常见的编程任务。",-1)),s[4]||(s[4]=i("p",null,[i("strong",null,"参考文献")],-1)),s[5]||(s[5]=i("p",null,[i("a",{href:"https://tc39.es/ecma262/2021/",target:"_blank",rel:"noreferrer"},"ECMA-262 2021 规范 👉")],-1))])}const C=n(r,[["render",E]]);export{u as __pageData,C as default};
