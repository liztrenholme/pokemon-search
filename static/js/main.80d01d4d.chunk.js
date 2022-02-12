(this["webpackJsonppokemon-search"]=this["webpackJsonppokemon-search"]||[]).push([[0],{20:function(e){e.exports=JSON.parse('{"name":"pokemon-search","version":"0.1.1","private":true,"homepage":"https://liztrenholme.github.io/pokemon-search","dependencies":{"@babel/core":"7.12.3","@pmmmwh/react-refresh-webpack-plugin":"0.4.3","@svgr/webpack":"5.5.0","@testing-library/jest-dom":"^5.11.4","@testing-library/react":"^11.1.0","@testing-library/user-event":"^12.1.10","@typescript-eslint/eslint-plugin":"^4.5.0","@typescript-eslint/parser":"^4.5.0","axios":"^0.25.0","babel-eslint":"^10.1.0","babel-jest":"^26.6.0","babel-loader":"8.1.0","babel-plugin-named-asset-import":"^0.3.7","babel-preset-react-app":"^10.0.0","bfj":"^7.0.2","camelcase":"^6.1.0","case-sensitive-paths-webpack-plugin":"2.3.0","css-loader":"4.3.0","dotenv":"8.2.0","dotenv-expand":"5.1.0","eslint":"^7.11.0","eslint-config-react-app":"^6.0.0","eslint-plugin-flowtype":"^5.2.0","eslint-plugin-import":"^2.22.1","eslint-plugin-jest":"^24.1.0","eslint-plugin-jsx-a11y":"^6.3.1","eslint-plugin-react":"^7.21.5","eslint-plugin-react-hooks":"^4.2.0","eslint-plugin-testing-library":"^3.9.2","eslint-webpack-plugin":"^2.1.0","file-loader":"6.1.1","fs-extra":"^9.0.1","gh-pages":"^2.1.1","html-webpack-plugin":"4.5.0","identity-obj-proxy":"3.0.0","jest":"26.6.0","jest-circus":"26.6.0","jest-resolve":"26.6.0","jest-watch-typeahead":"0.6.1","mini-css-extract-plugin":"0.11.3","optimize-css-assets-webpack-plugin":"5.0.4","pnp-webpack-plugin":"1.6.4","postcss-flexbugs-fixes":"4.2.1","postcss-loader":"3.0.0","postcss-normalize":"8.0.1","postcss-preset-env":"6.7.0","postcss-safe-parser":"5.0.2","prompts":"2.4.0","react":"^17.0.1","react-app-polyfill":"^2.0.0","react-dev-utils":"^11.0.2","react-dom":"^17.0.1","react-refresh":"^0.8.3","resolve":"1.18.1","resolve-url-loader":"^3.1.2","sass-loader":"^10.0.5","semver":"7.3.2","style-loader":"1.3.0","terser-webpack-plugin":"4.2.3","ts-pnp":"1.2.0","url-loader":"4.1.1","web-vitals":"^1.0.1","webpack":"4.44.2","webpack-dev-server":"3.11.0","webpack-manifest-plugin":"2.2.0","whatwg-fetch":"^3.6.2","workbox-webpack-plugin":"5.1.4"},"scripts":{"start":"node scripts/start.js","build":"node scripts/build.js","test":"node scripts/test.js","predeploy":"npm run build","deploy":"gh-pages -d build"},"eslintConfig":{"extends":["react-app","react-app/jest"]},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"jest":{"roots":["<rootDir>/src"],"collectCoverageFrom":["src/**/*.{js,jsx,ts,tsx}","!src/**/*.d.ts"],"setupFiles":["react-app-polyfill/jsdom"],"setupFilesAfterEnv":["<rootDir>/src/setupTests.js"],"testMatch":["<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}","<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"],"testEnvironment":"jsdom","testRunner":"/Users/liztrenholme/Documents/GitHub/react-starter-emplate/node_modules/jest-circus/runner.js","transform":{"^.+\\\\.(js|jsx|mjs|cjs|ts|tsx)$":"<rootDir>/config/jest/babelTransform.js","^.+\\\\.css$":"<rootDir>/config/jest/cssTransform.js","^(?!.*\\\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)":"<rootDir>/config/jest/fileTransform.js"},"transformIgnorePatterns":["[/\\\\\\\\]node_modules[/\\\\\\\\].+\\\\.(js|jsx|mjs|cjs|ts|tsx)$","^.+\\\\.module\\\\.(css|sass|scss)$"],"modulePaths":[],"moduleNameMapper":{"^react-native$":"react-native-web","^.+\\\\.module\\\\.(css|sass|scss)$":"identity-obj-proxy"},"moduleFileExtensions":["web.js","js","web.ts","ts","web.tsx","tsx","json","web.jsx","jsx","node"],"watchPlugins":["jest-watch-typeahead/filename","jest-watch-typeahead/testname"],"resetMocks":true},"babel":{"presets":["react-app"]}}')},27:function(e,t,s){},28:function(e,t,s){},30:function(e,t,s){},51:function(e,t,s){"use strict";s.r(t);var n=s(5),a=s.n(n),r=s(17),i=s.n(r),o=(s(27),s(28),s(2)),c=s.n(o),l=s(3),p=s(18),u=s(19),d=s(22),h=s(21),m=(s(30),s(31),s(4)),v=s.n(m),j=function(){var e=Object(l.a)(c.a.mark((function e(t){var s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={},e.prev=1,e.next=4,v.a.get("https://pokeapi.co/api/v2/pokemon/".concat(t.toLowerCase()));case 4:s=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),console.log("error fetching",e.t0),e.abrupt("return","Error "+e.t0);case 11:if(!s||!Object.keys(s)){e.next=13;break}return e.abrupt("return",s.data);case 13:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(l.a)(c.a.mark((function e(t){var s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={},e.prev=1,e.next=4,v.a.get("https://pokeapi.co/api/v2/pokemon-species/".concat(t));case 4:s=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),console.log("error fetching",e.t0),e.abrupt("return","Error "+e.t0);case 11:if(!s||!Object.keys(s)){e.next=13;break}return e.abrupt("return",s.data);case 13:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),g=s.p+"static/media/Pokeball.32cfee51.png",x=s(0),f=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(p.a)(this,s);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!1,shinyMode:!1,pokemon:"",imgFront:"",imgBack:"",imgFrontShiny:"",imgBackShiny:"",searchInput:"",moves:[],types:[],evolutionChain:[]},e.handleUpdateInput=function(t){e.setState({searchInput:t.target.value})},e.toggleShinyMode=function(){return e.state.shinyMode?e.setState({shinyMode:!1}):e.setState({shinyMode:!0})},e.handleSearchCall=function(){var t=Object(l.a)(c.a.mark((function t(s){var n,a,r,i,o,l,p,u,d,h,m,g,x,f,k,y,O,w,_,S,C,N,F,I,P,M,B,L,D;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("hkhkjhg",s),e.setState({isLoading:!0}),t.next=4,j("string"===typeof s?s:e.state.searchInput);case 4:if(n=t.sent,a=[],!n||!n.name){t.next=20;break}return r=n.id,t.next=10,b(r);case 10:return i=t.sent,t.next=13,v.a.get(i.evolution_chain.url);case 13:(o=t.sent)&&o.data&&(g=o.data.chain.species.name,x=null===(l=o.data.chain.evolves_to[0])||void 0===l?void 0:l.species.name,f=null===(p=o.data.chain.evolves_to[0])||void 0===p||null===(u=p.evolves_to[0])||void 0===u?void 0:u.species.name,k=null===(d=o.data.chain.evolves_to[0])||void 0===d||null===(h=d.evolves_to[0])||void 0===h||null===(m=h.evolves_to[0])||void 0===m?void 0:m.species.name,g&&a.push({name:g,imageUrl:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(o.data.chain.species.url.split("/")[o.data.chain.species.url.split("/").length-2],".png")}),x&&a.push({name:x,imageUrl:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(null===(y=o.data.chain.evolves_to[0])||void 0===y?void 0:y.species.url.split("/")[(null===(O=o.data.chain.evolves_to[0])||void 0===O?void 0:O.species.url.split("/").length)-2],".png")}),f&&a.push({name:f,imageUrl:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(null===(w=o.data.chain.evolves_to[0])||void 0===w||null===(_=w.evolves_to[0])||void 0===_?void 0:_.species.url.split("/")[(null===(S=o.data.chain.evolves_to[0])||void 0===S||null===(C=S.evolves_to[0])||void 0===C?void 0:C.species.url.split("/").length)-2],".png")}),k&&a.push({name:k,imageUrl:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(null===(N=o.data.chain.evolves_to[0])||void 0===N||null===(F=N.evolves_to[0])||void 0===F||null===(I=F.evolves_to[0])||void 0===I?void 0:I.species.url.split("/")[(null===(P=o.data.chain.evolves_to[0])||void 0===P||null===(M=P.evolves_to[0])||void 0===M||null===(B=M.evolves_to[0])||void 0===B?void 0:B.species.url.split("/").length)-2],".png")})),L=n.moves.map((function(e){return e.move.name})),D=n.types.map((function(e){return e.type.name})),e.setState({isLoading:!1,pokemon:n.name,imgFront:n.sprites.front_default,imgBack:n.sprites.back_default,imgFrontShiny:n.sprites.front_shiny,imgBackShiny:n.sprites.back_shiny,moves:L,types:D,evolutionChain:a,searchInput:n.name}),t.next=21;break;case 20:n&&n.includes("404")&&e.setState({pokemon:"This pokemon does not exist- try your search again.",isLoading:!1,shinyMode:!1,imgFront:"",imgBack:"",imgFrontShiny:"",imgBackShiny:"",searchInput:"",moves:[],types:[],evolutionChain:[]});case 21:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(u.a)(s,[{key:"render",value:function(){var e=this,t=this.state,s=t.pokemon,n=t.moves,a=t.imgFront,r=t.imgBack,i=t.imgFrontShiny,o=t.imgBackShiny,c=t.shinyMode,l=t.isLoading,p=t.types,u=t.searchInput,d=t.evolutionChain,h=s&&s.length?s[0].toUpperCase()+s.slice(1,s.length+1).toLowerCase():null;return Object(x.jsxs)("div",{className:"display",children:[Object(x.jsx)("div",{children:Object(x.jsx)("h1",{children:"Search any Pokemon!"})}),Object(x.jsxs)("div",{className:"search-container",children:[Object(x.jsx)("input",{className:"search-input",onChange:this.handleUpdateInput,value:u}),Object(x.jsx)("div",{className:"search-button",onClick:this.handleSearchCall,children:"Search!"})]}),l?Object(x.jsxs)("div",{children:[Object(x.jsx)("p",{children:"Loading..."}),Object(x.jsx)("img",{className:"loading",src:g,alt:"loading"})]}):Object(x.jsxs)("div",{className:"results-container",children:[Object(x.jsxs)("div",{style:{backgroundColor:"azure",border:"5px solid #fff",borderRadius:"15px"},children:[Object(x.jsxs)("div",{style:{color:"black"},children:[Object(x.jsx)("h2",{children:h}),p.length?Object(x.jsx)("span",{children:Object(x.jsxs)("ul",{className:"types-list",children:[Object(x.jsx)("h3",{children:"Type(s):"})," ",p.map((function(e){return Object(x.jsx)("li",{children:e},e)}))]})}):null]}),a||r||i||o?Object(x.jsx)("div",{onClick:this.toggleShinyMode,className:c?"shiny-button":"normal-button",children:"Shiny Mode"}):null,c?Object(x.jsxs)("div",{children:[i?Object(x.jsx)("img",{className:"pokemon-front",src:i,alt:s}):null,o?Object(x.jsx)("img",{className:"pokemon-front",src:o,alt:s}):null]}):Object(x.jsxs)("div",{children:[a?Object(x.jsx)("img",{className:"pokemon-front",src:a,alt:s}):null,r?Object(x.jsx)("img",{className:"pokemon-front",src:r,alt:s}):null]})]}),n&&n.length?Object(x.jsx)("div",{className:"moves-list",children:Object(x.jsxs)("ul",{children:[Object(x.jsxs)("h3",{children:[n.length," Moves:"]})," ",n.map((function(e){return Object(x.jsx)("li",{children:e},e)}))]})}):null]}),!l&&d&&d.length?Object(x.jsxs)("div",{className:"evolve-container",children:[Object(x.jsx)("h3",{children:"Evolution Chain:"}),Object(x.jsx)("div",{className:"evolves-list",children:d.map((function(t,s){return Object(x.jsxs)("div",{onClick:function(){return e.handleSearchCall(t.name)},className:"evolve-item",children:[Object(x.jsx)("img",{height:"100%",src:t.imageUrl,alt:t.name}),s===d.length-1?t.name:t.name+" -> "]},t.name)}))})]}):null]})}}]),s}(n.Component),k=s(20);var y=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)("header",{className:"App-header",children:[Object(x.jsx)(f,{}),Object(x.jsxs)("h3",{children:["Version: ",k.version]})]})})},O=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,52)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;s(e),n(e),a(e),r(e),i(e)}))};i.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(y,{})}),document.getElementById("root")),O()}},[[51,1,2]]]);
//# sourceMappingURL=main.80d01d4d.chunk.js.map