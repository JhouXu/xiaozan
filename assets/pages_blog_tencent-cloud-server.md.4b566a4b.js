import{_ as e,o,c as t,Q as a}from"./chunks/framework.12257390.js";const r="/apecode/images/blog/other/20210314164151861.png",i="/apecode/images/blog/other/20210314164241961.png",p="/apecode/images/blog/other/2021031416425822.png",s="/apecode/images/blog/other/20210314164329926.png",l="/apecode/images/blog/other/20210314164345178.png",c="/apecode/images/blog/other/2021031416440672.png",n="/apecode/images/blog/other/20210314164420569.png",g="/apecode/images/blog/other/20210314164425778.png",_="/apecode/images/blog/other/20210314164443427.png",m="/apecode/images/blog/other/20210314164448373.png",d="/apecode/images/blog/other/20210314164517987.png",h="/apecode/images/blog/other/20210314164536289.png",w=JSON.parse('{"title":"腾讯云服务器购买以及部署（完整版）","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"pages/blog/tencent-cloud-server.md","lastUpdated":1694483409000}'),b={name:"pages/blog/tencent-cloud-server.md"},I=a('<h1 id="腾讯云服务器购买以及部署-完整版" tabindex="-1">腾讯云服务器购买以及部署（完整版） <a class="header-anchor" href="#腾讯云服务器购买以及部署-完整版" aria-label="Permalink to &quot;腾讯云服务器购买以及部署（完整版）&quot;">​</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>本文是先前不久部署腾讯云服务器时，所保留下来的笔记。使用的是腾讯云服务器，以及部署 IIS 系统。</p><h2 id="操作步骤" tabindex="-1">操作步骤 <a class="header-anchor" href="#操作步骤" aria-label="Permalink to &quot;操作步骤&quot;">​</a></h2><ol><li><p>打开“腾讯云”网站并进行实名的认证，并找到“云+校园”服务器进行购买。（这里我是购买了一个月 window server2016 广州四区的服务器） <img src="'+r+'" alt="在这里插入图片描述"></p></li><li><p>因为是使用 ip 地址及端口号来访问的，所以在此就不购买域名了。</p></li><li><p>到达总览实例这里，点击登陆，之后按照提示 1 的要求下载 RPD 文件，下载好之后双击打开 RPD 文件打开。 <img src="'+i+'" alt="在这里插入图片描述"></p><p><img src="'+p+'" alt="在这里插入图片描述"></p></li><li><p>打开的时候会提示需要输入密码，这个密码一般新购买的时候会发到腾讯云的收信箱里面里面查看即可，又或者可以通过重置密码也行。 <img src="'+s+'" alt="在这里插入图片描述"></p><p><img src="'+l+'" alt="在这里插入图片描述"></p></li><li><p>输入密码之后就会进入了服务器中，它的界面和日常操作的电脑一样，现在开始安装 IIs，打开开始菜单-&gt;选择服务器管理器-&gt;添加角色和功能-&gt;点击下一步直到服务器角色-&gt;将 Web 服务器（IIS）里面的内容都选中好-&gt;下一步安装即可。 <img src="'+c+'" alt="在这里插入图片描述"></p><p><img src="'+n+'" alt="在这里插入图片描述"></p><p><img src="'+g+'" alt="在这里插入图片描述"></p></li><li><p>安装 IIS 成功之后会在服务器管理器里面多出 IIS 标题，点击 IIS，右键点击会有 Internet Information Services(IIs)管理器的字样（点击），之后会打开 IIS 管理器 <img src="'+_+'" alt="在这里插入图片描述"></p><p><img src="'+m+'" alt="在这里插入图片描述"></p></li><li><p>将需要放进服务器的文件使用复制粘贴的方式发到服务器当中，这里推荐使用的文件路径 C:\\inetpub\\wwwroot 当中，因为是 80 端口默认页面的位置，也为了方便管理。</p></li><li><p>添加需要的网站设置端口号，最后设置默认文档即可。 <img src="'+d+'" alt="在这里插入图片描述"></p></li><li><p>使用 IP 地址访问时需要找到自己服务器的 IP 地址，这个在腾讯云网站里面可以查看，并且是使用公网的 IP 地址加端口号即可（例如 186.168.1.1：8080） <img src="'+h+'" alt="在这里插入图片描述"></p></li></ol><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>以上便是腾讯云服务器购买以及部署的全部内容，希望会对你有所帮助。</p><br><br><br><p><code>最后，如果您有更好的方法，欢迎在留言区中分享；或者实际操作中遇到什么问题均可留言或者私信我，感谢您的观看！</code></p>',11),u=[I];function S(f,P,q,v,x,k){return o(),t("div",null,u)}const C=e(b,[["render",S]]);export{w as __pageData,C as default};
