(this["webpackJsonppokemon-search"]=this["webpackJsonppokemon-search"]||[]).push([[0],{20:function(e){e.exports=JSON.parse('{"name":"pokemon-search","version":"1.0.10","private":true,"homepage":"https://liztrenholme.github.io/pokemon-search","dependencies":{"@babel/core":"7.12.3","@pmmmwh/react-refresh-webpack-plugin":"0.4.3","@svgr/webpack":"5.5.0","@testing-library/jest-dom":"^5.11.4","@testing-library/react":"^11.1.0","@testing-library/user-event":"^12.1.10","@typescript-eslint/eslint-plugin":"^4.5.0","@typescript-eslint/parser":"^4.5.0","axios":"^0.25.0","babel-eslint":"^10.1.0","babel-jest":"^26.6.0","babel-loader":"8.1.0","babel-plugin-named-asset-import":"^0.3.7","babel-preset-react-app":"^10.0.0","bfj":"^7.0.2","camelcase":"^6.1.0","case-sensitive-paths-webpack-plugin":"2.3.0","css-loader":"4.3.0","dotenv":"8.2.0","dotenv-expand":"5.1.0","eslint":"^7.32.0","eslint-config-react-app":"^6.0.0","eslint-plugin-flowtype":"^5.2.0","eslint-plugin-import":"^2.22.1","eslint-plugin-jest":"^24.1.0","eslint-plugin-jsx-a11y":"^6.3.1","eslint-plugin-react":"^7.28.0","eslint-plugin-react-hooks":"^4.2.0","eslint-plugin-testing-library":"^3.9.2","eslint-webpack-plugin":"^2.6.0","file-loader":"6.1.1","fs-extra":"^9.0.1","gh-pages":"^2.1.1","html-webpack-plugin":"4.5.0","identity-obj-proxy":"3.0.0","jest":"26.6.0","jest-circus":"26.6.0","jest-resolve":"26.6.0","jest-watch-typeahead":"0.6.1","mini-css-extract-plugin":"0.11.3","optimize-css-assets-webpack-plugin":"5.0.4","pnp-webpack-plugin":"1.6.4","postcss-flexbugs-fixes":"4.2.1","postcss-loader":"3.0.0","postcss-normalize":"8.0.1","postcss-preset-env":"6.7.0","postcss-safe-parser":"5.0.2","prompts":"2.4.0","react":"^17.0.1","react-app-polyfill":"^2.0.0","react-dev-utils":"^11.0.2","react-dom":"^17.0.1","react-refresh":"^0.8.3","resolve":"1.18.1","resolve-url-loader":"^3.1.2","sass-loader":"^10.0.5","semver":"7.3.2","style-loader":"1.3.0","terser-webpack-plugin":"4.2.3","ts-pnp":"1.2.0","url-loader":"4.1.1","web-vitals":"^1.0.1","webpack":"4.44.2","webpack-dev-server":"3.11.0","webpack-manifest-plugin":"2.2.0","whatwg-fetch":"^3.6.2","workbox-webpack-plugin":"5.1.4"},"scripts":{"start":"node scripts/start.js","build":"node scripts/build.js","test":"node scripts/test.js","predeploy":"npm run build","deploy":"gh-pages -d build"},"eslintConfig":{"extends":["react-app","react-app/jest"]},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"jest":{"roots":["<rootDir>/src"],"collectCoverageFrom":["src/**/*.{js,jsx,ts,tsx}","!src/**/*.d.ts"],"setupFiles":["react-app-polyfill/jsdom"],"setupFilesAfterEnv":["<rootDir>/src/setupTests.js"],"testMatch":["<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}","<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"],"testEnvironment":"jsdom","testRunner":"/Users/liztrenholme/Documents/GitHub/react-starter-emplate/node_modules/jest-circus/runner.js","transform":{"^.+\\\\.(js|jsx|mjs|cjs|ts|tsx)$":"<rootDir>/config/jest/babelTransform.js","^.+\\\\.css$":"<rootDir>/config/jest/cssTransform.js","^(?!.*\\\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)":"<rootDir>/config/jest/fileTransform.js"},"transformIgnorePatterns":["[/\\\\\\\\]node_modules[/\\\\\\\\].+\\\\.(js|jsx|mjs|cjs|ts|tsx)$","^.+\\\\.module\\\\.(css|sass|scss)$"],"modulePaths":[],"moduleNameMapper":{"^react-native$":"react-native-web","^.+\\\\.module\\\\.(css|sass|scss)$":"identity-obj-proxy"},"moduleFileExtensions":["web.js","js","web.ts","ts","web.tsx","tsx","json","web.jsx","jsx","node"],"watchPlugins":["jest-watch-typeahead/filename","jest-watch-typeahead/testname"],"resetMocks":true},"babel":{"presets":["react-app"]}}')},28:function(e,t,s){},29:function(e,t,s){},31:function(e,t,s){},52:function(e,t,s){"use strict";s.r(t);var n=s(5),a=s.n(n),r=s(17),i=s.n(r),l=(s(28),s(29),s(2)),c=s.n(l),o=s(21),p=s(3),u=s(18),m=s(19),h=s(23),d=s(22),j=(s(31),s(32),s(4)),v=s.n(j),b=function(){var e=Object(p.a)(c.a.mark((function e(t){var s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={},e.prev=1,e.next=4,v.a.get("https://pokeapi.co/api/v2/pokemon/".concat(t.toLowerCase()));case 4:s=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),console.log("error fetching",e.t0),e.abrupt("return","Error "+e.t0);case 11:if(!s||!Object.keys(s)){e.next=13;break}return e.abrupt("return",s.data);case 13:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(p.a)(c.a.mark((function e(t){var s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={},e.prev=1,e.next=4,v.a.get("https://pokeapi.co/api/v2/pokemon-species/".concat(t));case 4:s=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),console.log("error fetching",e.t0),e.abrupt("return","Error "+e.t0);case 11:if(!s||!Object.keys(s)){e.next=13;break}return e.abrupt("return",s.data);case 13:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(p.a)(c.a.mark((function e(){var t,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},s=Math.floor(1118*Math.random()),console.log("rand is",s),e.prev=3,e.next=6,v.a.get("https://pokeapi.co/api/v2/pokemon-species/".concat(s));case 6:t=e.sent,e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(3),console.log("error fetching",e.t0),e.abrupt("return","Error "+e.t0);case 13:if(!t||!Object.keys(t)){e.next=15;break}return e.abrupt("return",t.data);case 15:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(){return e.apply(this,arguments)}}(),x=s.p+"static/media/Pokeball.32cfee51.png",y=s(0),k=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(u.a)(this,s);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!1,shinyMode:!1,pokemon:"",imgFront:"",imgBack:"",imgFrontShiny:"",imgBackShiny:"",searchInput:"",moves:[],types:[],evolutionChain:[],deName:"",isBaby:!1,isMythical:!1,isLegendary:!1,generation:"",habitat:"",growthRate:"",shape:""},e.handleUpdateInput=function(t){e.setState({searchInput:t.target.value})},e.toggleShinyMode=function(){return e.state.shinyMode?e.setState({shinyMode:!1}):e.setState({shinyMode:!0})},e.handleSearchCall=function(){var t=Object(p.a)(c.a.mark((function t(s){var n,a,r,i,l,p,u,m,h,d,j,f,x,y,k,O,w,N,C,S,_,I,M,P,F,L,U,B,D;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({isLoading:!0}),t.next=3,b("string"===typeof s?s:e.state.searchInput);case 3:if(n=t.sent,a=[],r="",i=!1,l=!1,p=!1,u="",m="",h="",d="",!n||!n.name){t.next=34;break}return j=n.id,t.next=17,g(j);case 17:return f=t.sent,i=f.is_baby,l=f.is_mythical,p=f.is_legendary,u=f.generation.name,m=f.habitat,h=f.growth_rate.name,d=f.shape.name,t.next=27,v.a.get(f.evolution_chain.url);case 27:(x=t.sent)&&x.data&&(C=x.data.chain.species.name,S=null===(y=x.data.chain.evolves_to[0])||void 0===y||null===(k=y.evolves_to[0])||void 0===k||null===(O=k.evolves_to[0])||void 0===O?void 0:O.species.name,_=[],x.data.chain.evolves_to.forEach((function(e){return _.push({level:2,name:e.species.name,imageUrl:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(e.species.url.split("/")[e.species.url.split("/").length-2],".png")})})),null===(w=x.data.chain.evolves_to[0])||void 0===w||w.evolves_to.forEach((function(e){return _.push({level:3,name:e.species.name,imageUrl:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(e.species.url.split("/")[e.species.url.split("/").length-2],".png")})})),null===(N=x.data.chain.evolves_to[1])||void 0===N||N.evolves_to.forEach((function(e){return _.push({level:3,name:e.species.name,imageUrl:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(e.species.url.split("/")[e.species.url.split("/").length-2],".png")})})),C&&a.push({level:1,name:C,imageUrl:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(x.data.chain.species.url.split("/")[x.data.chain.species.url.split("/").length-2],".png")}),a=[].concat(Object(o.a)(a),_),S&&a.push({level:4,name:S,imageUrl:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(null===(I=x.data.chain.evolves_to[0])||void 0===I||null===(M=I.evolves_to[0])||void 0===M||null===(P=M.evolves_to[0])||void 0===P?void 0:P.species.url.split("/")[(null===(F=x.data.chain.evolves_to[0])||void 0===F||null===(L=F.evolves_to[0])||void 0===L||null===(U=L.evolves_to[0])||void 0===U?void 0:U.species.url.split("/").length)-2],".png")}),r=f.names.find((function(e){return"de"===e.language.name})).name),B=n.moves.map((function(e){return e.move.name})),D=n.types.map((function(e){return e.type.name})),e.setState({isLoading:!1,pokemon:n.name,imgFront:n.sprites.front_default,imgBack:n.sprites.back_default,imgFrontShiny:n.sprites.front_shiny,imgBackShiny:n.sprites.back_shiny,moves:B,types:D,evolutionChain:a,searchInput:n.name,deName:r,isBaby:i,isMythical:l,isLegendary:p,generation:u,habitat:m,growthRate:h,shape:d}),t.next=35;break;case 34:n&&n.includes("404")&&e.setState({pokemon:"Try your search again, because this pokemon does not exist!",isLoading:!1,shinyMode:!1,imgFront:"",imgBack:"",imgFrontShiny:"",imgBackShiny:"",searchInput:"",moves:[],types:[],evolutionChain:[],isBaby:!1,isMythical:!1,isLegendary:!1,deName:"",generation:"",habitat:"",growthRate:"",shape:""});case 35:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleRandomPokemon=Object(p.a)(c.a.mark((function t(){var s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:(s=t.sent)&&"string"===typeof s&&s.includes("Error")&&e.handleRandomPokemon(),e.setState({isLoading:!0}),s&&s.name&&e.handleSearchCall(s.name);case 6:case"end":return t.stop()}}),t)}))),e}return Object(m.a)(s,[{key:"render",value:function(){var e=this,t=this.state,s=t.pokemon,n=t.moves,a=t.imgFront,r=t.imgBack,i=t.imgFrontShiny,l=t.imgBackShiny,c=t.shinyMode,o=t.isLoading,p=t.types,u=t.searchInput,m=t.evolutionChain,h=t.deName,d=t.isBaby,j=t.isMythical,v=t.isLegendary,b=t.generation,g=t.habitat,f=t.growthRate,k=t.shape,O=s&&s.length?s[0].toUpperCase()+s.slice(1,s.length+1).toLowerCase():null,w=b?b.split("-")[1]:"",N=b.split("-")[0],C=N?N[0].toUpperCase()+N.slice(1,N.length+1).toLowerCase()+" "+w.toUpperCase():null,S=g&&null!==g&&"string"===typeof g?g.split("-").join(" "):g&&g.name||"",_=f?f.split("-").join(" "):"",I=k?k.split("-").join(" "):"";return Object(y.jsxs)("div",{className:"display",children:[Object(y.jsx)("div",{children:Object(y.jsx)("h1",{children:"Search any Pokemon!"})}),Object(y.jsxs)("div",{className:"search-container",children:[Object(y.jsx)("input",{className:"search-input",onChange:this.handleUpdateInput,value:u}),Object(y.jsx)("div",{className:"search-button",onClick:this.handleSearchCall,children:"Search!"}),Object(y.jsx)("div",{className:"search-button",onClick:this.handleRandomPokemon,children:"Random!"})]}),o?Object(y.jsx)("div",{children:Object(y.jsx)("img",{className:"loading",src:x,alt:"loading"})}):Object(y.jsxs)("div",{className:"results-container",children:[s?Object(y.jsxs)("div",{style:{backgroundColor:"azure",border:"5px solid #fff",borderRadius:"15px"},children:[Object(y.jsxs)("div",{style:{color:"black"},children:[Object(y.jsxs)("div",{className:"name-container",children:[Object(y.jsx)("h2",{children:O}),h?Object(y.jsx)("em",{children:h}):null]}),p.length?Object(y.jsx)("span",{children:Object(y.jsxs)("ul",{className:"types-list",children:[Object(y.jsx)("h3",{children:"Type(s):"})," ",p.map((function(e){return Object(y.jsx)("li",{children:e},e)}))]})}):null]}),a||r||i||l?Object(y.jsx)("div",{onClick:this.toggleShinyMode,className:c?"shiny-button":"normal-button",children:"Shiny Mode"}):null,c?Object(y.jsxs)("div",{children:[i?Object(y.jsx)("img",{className:"pokemon-front",src:i,alt:s}):null,l?Object(y.jsx)("img",{className:"pokemon-front",src:l,alt:s}):null]}):Object(y.jsxs)("div",{children:[a?Object(y.jsx)("img",{className:"pokemon-front",src:a,alt:s}):null,r?Object(y.jsx)("img",{className:"pokemon-front",src:r,alt:s}):null]}),Object(y.jsxs)("div",{style:{color:"black",marginTop:"auto"},children:[d?"This pokemon is a baby!":null,j?"This pokemon is mythical.":null,v?"This pokemon is legendary.":null]})]}):null,n&&n.length?Object(y.jsx)("div",{className:"moves-list",children:Object(y.jsxs)("ul",{children:[Object(y.jsxs)("h3",{children:[n.length," Moves:"]})," ",n.map((function(e){return Object(y.jsx)("li",{children:e},e)}))]})}):null]}),!o&&s&&(S||_||I)?Object(y.jsxs)("div",{className:"data-rows",children:[Object(y.jsx)("strong",{children:C}),S?Object(y.jsxs)("p",{children:["Habitat: ",S]}):null,_?Object(y.jsxs)("p",{children:["Growth Rate: ",_]}):null,I?Object(y.jsxs)("p",{children:["Shape: ",I]}):null]}):null,!o&&m&&m.length?Object(y.jsxs)("div",{className:"evolve-container",children:[Object(y.jsx)("h3",{children:"Evolution Chain:"}),Object(y.jsxs)("div",{className:"evolves-list",children:[m.find((function(e){return 1===e.level}))?Object(y.jsx)("div",{className:"level-one",style:{display:"flex",maxWidth:"10em",justifyContent:"center",flexWrap:"wrap",flexDirection:"column",transform:"scale(0.75, 0.75)"},children:m.map((function(t){return 1===t.level?Object(y.jsxs)("div",{onClick:function(){return e.handleSearchCall(t.name)},className:"evolve-item",children:[Object(y.jsx)("img",{className:"evolImg",src:t.imageUrl,alt:t.name}),t.name]},t.name):null}))}):null,m.find((function(e){return 2===e.level}))?Object(y.jsx)("div",{className:"arrow",children:" -> "}):null,m.find((function(e){return 2===e.level}))?Object(y.jsx)("div",{className:"level-two",style:{display:"flex",maxWidth:"10em",justifyContent:"center",flexWrap:"wrap",flexDirection:"column",maxHeight:"30em",transform:"scale(0.75, 0.75)"},children:m.map((function(t){return 2===t.level?Object(y.jsxs)("div",{onClick:function(){return e.handleSearchCall(t.name)},className:"evolve-item",children:[Object(y.jsx)("img",{className:"evolImg",src:t.imageUrl,alt:t.name}),t.name]},t.name):null}))}):null,m.find((function(e){return 3===e.level}))?Object(y.jsx)("div",{className:"arrow",children:" -> "}):null,m.find((function(e){return 3===e.level}))?Object(y.jsx)("div",{className:"level-three",style:{display:"flex",maxWidth:"10em",justifyContent:"center",flexWrap:"wrap",flexDirection:"column",transform:"scale(0.75, 0.75)"},children:m.map((function(t){return 3===t.level?Object(y.jsxs)("div",{onClick:function(){return e.handleSearchCall(t.name)},className:"evolve-item",children:[Object(y.jsx)("img",{className:"evolImg",src:t.imageUrl,alt:t.name}),t.name]},t.name):null}))}):null,m.find((function(e){return 4===e.level}))?Object(y.jsx)("div",{className:"arrow",children:" -> "}):null,m.find((function(e){return 4===e.level}))?Object(y.jsx)("div",{className:"level-four",style:{display:"flex",maxWidth:"10em",justifyContent:"center",flexWrap:"wrap",flexDirection:"column",transform:"scale(0.75, 0.75)"},children:m.map((function(t){return 4===t.level?Object(y.jsxs)("div",{onClick:function(){return e.handleSearchCall(t.name)},className:"evolve-item",children:[Object(y.jsx)("img",{className:"evolImg",src:t.imageUrl,alt:t.name}),t.name]},t.name):null}))}):null]})]}):null]})}}]),s}(n.Component),O=s(20);var w=function(){return Object(y.jsx)("div",{className:"App",children:Object(y.jsxs)("header",{className:"App-header",children:[Object(y.jsx)(k,{}),Object(y.jsxs)("h3",{children:["Version: ",O.version]})]})})},N=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,53)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;s(e),n(e),a(e),r(e),i(e)}))};i.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(w,{})}),document.getElementById("root")),N()}},[[52,1,2]]]);
//# sourceMappingURL=main.a5c7233d.chunk.js.map