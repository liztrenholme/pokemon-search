(this["webpackJsonppokemon-search"]=this["webpackJsonppokemon-search"]||[]).push([[0],{21:function(e,t,n){},23:function(e){e.exports=JSON.parse('{"name":"pokemon-search","version":"1.4.1","private":true,"author":{"name":"liztrenholme.github.io"},"homepage":"https://liztrenholme.github.io/pokemon-search","dependencies":{"@babel/core":"7.12.3","@pmmmwh/react-refresh-webpack-plugin":"0.4.3","@svgr/webpack":"5.5.0","@testing-library/jest-dom":"^5.11.4","@testing-library/react":"^11.1.0","@testing-library/user-event":"^12.1.10","@typescript-eslint/eslint-plugin":"^4.5.0","@typescript-eslint/parser":"^4.5.0","axios":"^0.25.0","babel-eslint":"^10.1.0","babel-jest":"^26.6.0","babel-loader":"8.1.0","babel-plugin-named-asset-import":"^0.3.7","babel-preset-react-app":"^10.0.0","bfj":"^7.0.2","camelcase":"^6.1.0","case-sensitive-paths-webpack-plugin":"2.3.0","css-loader":"4.3.0","dotenv":"8.2.0","dotenv-expand":"5.1.0","eslint":"^7.32.0","eslint-config-react-app":"^6.0.0","eslint-plugin-flowtype":"^5.2.0","eslint-plugin-import":"^2.22.1","eslint-plugin-jest":"^24.1.0","eslint-plugin-jsx-a11y":"^6.3.1","eslint-plugin-react":"^7.28.0","eslint-plugin-react-hooks":"^4.2.0","eslint-plugin-testing-library":"^3.9.2","eslint-webpack-plugin":"^2.6.0","file-loader":"6.1.1","fs-extra":"^9.0.1","gh-pages":"^2.1.1","html-webpack-plugin":"4.5.0","identity-obj-proxy":"3.0.0","jest":"26.6.0","jest-circus":"26.6.0","jest-resolve":"26.6.0","jest-watch-typeahead":"0.6.1","mini-css-extract-plugin":"0.11.3","optimize-css-assets-webpack-plugin":"5.0.4","pnp-webpack-plugin":"1.6.4","postcss-flexbugs-fixes":"4.2.1","postcss-loader":"3.0.0","postcss-normalize":"8.0.1","postcss-preset-env":"6.7.0","postcss-safe-parser":"5.0.2","prompts":"2.4.0","react":"^17.0.1","react-app-polyfill":"^2.0.0","react-dev-utils":"^11.0.2","react-dom":"^17.0.1","react-refresh":"^0.8.3","resolve":"1.18.1","resolve-url-loader":"^3.1.2","sass-loader":"^10.0.5","semver":"7.3.2","style-loader":"1.3.0","terser-webpack-plugin":"4.2.3","ts-pnp":"1.2.0","url-loader":"4.1.1","web-vitals":"^1.0.1","webpack":"4.44.2","webpack-dev-server":"3.11.0","webpack-manifest-plugin":"2.2.0","whatwg-fetch":"^3.6.2","workbox-webpack-plugin":"5.1.4"},"scripts":{"start":"node scripts/start.js","build":"node scripts/build.js","test":"node scripts/test.js","predeploy":"npm run build","deploy":"gh-pages -d build"},"eslintConfig":{"extends":["react-app","react-app/jest"]},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"jest":{"roots":["<rootDir>/src"],"collectCoverageFrom":["src/**/*.{js,jsx,ts,tsx}","!src/**/*.d.ts"],"setupFiles":["react-app-polyfill/jsdom"],"setupFilesAfterEnv":["<rootDir>/src/setupTests.js"],"testMatch":["<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}","<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"],"testEnvironment":"jsdom","testRunner":"/Users/liztrenholme/Documents/GitHub/react-starter-emplate/node_modules/jest-circus/runner.js","transform":{"^.+\\\\.(js|jsx|mjs|cjs|ts|tsx)$":"<rootDir>/config/jest/babelTransform.js","^.+\\\\.css$":"<rootDir>/config/jest/cssTransform.js","^(?!.*\\\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)":"<rootDir>/config/jest/fileTransform.js"},"transformIgnorePatterns":["[/\\\\\\\\]node_modules[/\\\\\\\\].+\\\\.(js|jsx|mjs|cjs|ts|tsx)$","^.+\\\\.module\\\\.(css|sass|scss)$"],"modulePaths":[],"moduleNameMapper":{"^react-native$":"react-native-web","^.+\\\\.module\\\\.(css|sass|scss)$":"identity-obj-proxy"},"moduleFileExtensions":["web.js","js","web.ts","ts","web.tsx","tsx","json","web.jsx","jsx","node"],"watchPlugins":["jest-watch-typeahead/filename","jest-watch-typeahead/testname"],"resetMocks":true},"babel":{"presets":["react-app"]}}')},29:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){},52:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var s=n(2),a=n.n(s),i=n(22),r=n.n(i),l=(n(29),n(30),n(1)),c=n.n(l),o=n(24),u=n(3),p=n(5),d=n(6),h=n(8),m=n(7),v=(n(32),n(33),n(9)),j=n.n(v),b=function(){var e=Object(u.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},e.prev=1,e.next=4,j.a.get("https://pokeapi.co/api/v2/pokemon/".concat("string"===typeof t?t.toLowerCase():t));case 4:n=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),console.log("error fetching",e.t0),e.abrupt("return","Error "+e.t0);case 11:if(!n||!Object.keys(n)){e.next=13;break}return e.abrupt("return",n.data);case 13:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(u.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},e.prev=1,e.next=4,j.a.get(t);case 4:n=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),console.log("error fetching",e.t0),e.abrupt("return","Error "+e.t0);case 11:if(!n||!Object.keys(n)){e.next=13;break}return e.abrupt("return",n.data);case 13:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(u.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},n=Math.floor(898*Math.random()),e.prev=2,e.next=5,j.a.get("https://pokeapi.co/api/v2/pokemon-species/".concat(n));case 5:t=e.sent,e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(2),console.log("error fetching",e.t0),e.abrupt("return","Error "+e.t0);case 12:if(!t||!Object.keys(t)){e.next=14;break}return e.abrupt("return",t.data);case 14:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(u.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},e.prev=1,e.next=4,j.a.get("https://pokeapi.co/api/v2/item/");case 4:t=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),console.log("error fetching",e.t0),e.abrupt("return","Error "+e.t0);case 11:if(!t||!Object.keys(t)){e.next=13;break}return e.abrupt("return",t.data);case 13:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}(),k=n.p+"static/media/Pokeball.32cfee51.png",y=(n(52),n(0)),O=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(y.jsx)("div",{className:"level-two",style:{display:"flex",maxWidth:"6em",justifyContent:"center",flexWrap:"wrap",flexDirection:"column",maxHeight:"30em",transform:"scale(0.75, 0.75)"},children:this.props.evolutionChain.map((function(t){return t.level===e.props.selectedLevel?Object(y.jsxs)("div",{onClick:function(){var n;return e.props.handleSearchCall((null===(n=t.imageUrl)||void 0===n?void 0:n.split("/")[t.imageUrl.split("/").length-1].split(".png")[0])||t.name)},className:"evolve-item",children:[Object(y.jsxs)("div",{className:"images-box",children:[t.evolveItemImg?Object(y.jsx)("img",{className:"held-item",src:t.evolveItemImg,alt:t.evolveItem}):null,Object(y.jsx)("img",{className:"evolImg",src:t.imageUrl,alt:t.name})]}),t.evolveItem?Object(y.jsxs)("span",{children:["+ ",t.evolveItem]}):null,t.name]},t.name):null}))})}}]),n}(s.Component),S=(n(54),function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(p.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={displayed:!1},e.handleFillInputAndCallSearch=function(t){e.props.populateInput(t),e.props.handleSearchCall(t)},e.handleDisplayList=function(){return e.state.displayed?e.setState({displayed:!1}):e.setState({displayed:!0})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.header,s=t.regionSpecies;return Object(y.jsxs)("div",{className:"explore-container",children:[Object(y.jsxs)("div",{className:"variety-btn",onClick:this.handleDisplayList,children:["Show all ",n," species"]}),this.state.displayed?Object(y.jsxs)("div",{className:"explore-species-modal",children:[Object(y.jsxs)("div",{className:"fixed-header",children:[Object(y.jsxs)("p",{className:"header-title",children:[this.props.header," (",s.length,")"]}),Object(y.jsx)("div",{className:"x-box",onClick:this.handleDisplayList,children:"x"})]}),s&&s.length?s.map((function(t){var n;return Object(y.jsxs)("p",{className:"species-result",onClick:function(){return e.handleFillInputAndCallSearch(t.name)},children:[Object(y.jsx)("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(null===t||void 0===t||null===(n=t.url)||void 0===n?void 0:n.split("/")[6],".png"),alt:t.name}),t.name]},t.name)})):null]}):null]})}}]),n}(s.Component)),N=(n(55),function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(p.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={displayed:!1},e.handleDisplayArt=function(){return e.state.displayed?e.setState({displayed:!1}):e.setState({displayed:!0})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,t=e.pokemonName,n=e.officialArtImg;return Object(y.jsxs)("div",{className:"art-container",children:[Object(y.jsx)("div",{className:"variety-btn",onClick:this.handleDisplayArt,children:"Official Artwork"}),this.state.displayed?Object(y.jsxs)("div",{className:"art-modal",children:[Object(y.jsxs)("div",{className:"fixed-header",children:[Object(y.jsx)("p",{className:"header-title",children:t}),Object(y.jsx)("div",{className:"x-box",onClick:this.handleDisplayArt,children:"x"})]}),Object(y.jsx)("img",{className:"art-image",src:n,alt:t})]}):null]})}}]),n}(s.Component)),w=(n(21),function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.props.item;return Object(y.jsxs)("div",{className:"item",onClick:function(){return e.props.handleSelectItem(t.url)},children:[Object(y.jsx)("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/".concat(t.name.includes("tm")?"tm-normal":t.name,".png"),alt:t.name}),t.name]})}}]),n}(s.Component)),I=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(p.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={displayed:!1,selectedItem:{},allItems:{}},e.handleFetchNav=function(){var t=Object(u.a)(c.a.mark((function t(n){var s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.getAnyUrl(n);case 2:(s=t.sent)&&s.results&&e.setState({allItems:s});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleSelectItem=function(){var t=Object(u.a)(c.a.mark((function t(n){var s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.getAnyUrl(n);case 2:(s=t.sent)&&e.setState({selectedItem:s});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleDisplayList=function(){return e.state.displayed?e.setState({displayed:!1}):e.setState({displayed:!0})},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.allItems;e&&e.results&&e.results.length&&this.setState({allItems:e})}},{key:"render",value:function(){var e=this,t=this.state,n=t.allItems,s=t.selectedItem;return Object(y.jsxs)("div",{className:"items-container",children:[Object(y.jsx)("div",{className:"variety-btn",onClick:this.handleDisplayList,children:"Show all Items"}),this.state.displayed?Object(y.jsxs)("div",{className:"items-modal",children:[Object(y.jsxs)("div",{className:"fixed-div",children:[Object(y.jsxs)("div",{className:"fixed-items-header",children:[Object(y.jsx)("p",{className:"header-title",children:"Items"}),Object(y.jsx)("div",{className:"x-box",onClick:this.handleDisplayList,children:"x"})]}),s&&s.name?Object(y.jsxs)("div",{className:"selected-item",children:[Object(y.jsxs)("div",{className:"selected-item-header",children:[Object(y.jsx)("img",{style:{width:"80px"},src:s.sprites.default,alt:s.name}),s.name.split("-").join(" ")]}),Object(y.jsxs)("div",{className:"item-row",children:["Attributes: ",s.attributes.map((function(e){return Object(y.jsxs)("span",{children:[e.name,"   "]},e.name)}))]}),Object(y.jsxs)("div",{className:"item-row",children:["Category: ",s.category.name]}),s.held_by_pokemon&&s.held_by_pokemon.length?Object(y.jsxs)("div",{className:"item-row",children:["Held by Pok\xe9mon: ",s.held_by_pokemon.map((function(e){return Object(y.jsxs)("span",{children:[e.pokemon.name,"  "]},e.pokemon.name)}))]}):null,s.baby_trigger_for?Object(y.jsxs)("div",{className:"item-row",children:["Baby Trigger for: ",s.baby_trigger_for]}):null,Object(y.jsxs)("div",{className:"item-row",children:["Description: ",s.effect_entries.find((function(e){return"en"===e.language.name})).short_effect]})]}):null]}),n&&n.results&&n.results.length?n.results.map((function(t){return Object(y.jsx)(w,{handleSelectItem:e.handleSelectItem,item:t},Math.random())})):null,Object(y.jsxs)("div",{className:"nav-box",children:[Object(y.jsx)("p",{onClick:n.previous?function(){return e.handleFetchNav(n.previous)}:null,className:"nav-previous ".concat(n.previous?"active":"disabled"),children:"Previous"}),Object(y.jsx)("p",{onClick:n.next?function(){return e.handleFetchNav(n.next)}:null,className:"nav-next ".concat(n.next?"active":"disabled"),children:"Next"})]})]}):null]})}}]),n}(s.Component),_=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(p.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!1,shinyMode:!1,pokemon:"",imgFront:"",imgBack:"",imgFrontFemale:"",imgBackFemale:"",imgFrontShiny:"",imgBackShiny:"",imgFrontShinyFemale:"",imgBackShinyFemale:"",searchInput:"",moves:[],types:[],evolutionChain:[],deName:"",jaName:"",isBaby:!1,isMythical:!1,isLegendary:!1,generation:"",habitat:"",growthRate:"",shape:"",varieties:[],allPokemon:[],genus:"",mainRegion:"",description:"",pokedexId:"",regionSpecies:"",shapeSpecies:"",growthRateSpecies:""},e.handleUpdateInput=function(t){e.setState({searchInput:t.target.value})},e.handleOnEnter=function(t){"Enter"===t.key&&e.handleSearchCall()},e.toggleShinyMode=function(){return e.state.shinyMode?e.setState({shinyMode:!1}):e.setState({shinyMode:!0})},e.checkPokemonName=function(t){return e.state.allPokemon.find((function(e){return e.name.includes(t)}))},e.populateInput=function(t){return e.setState({searchInput:t})},e.handleSearchCall=function(){var t=Object(u.a)(c.a.mark((function t(n){var s,a,i,r,l,p,d,h,m,v,f,k,y,O,S,N,w,I,_,C,F,P,A,M,L,D,B,U,E,R,T,$,z,G,H,J,K,V,W,q,Q,X,Y,Z,ee,te,ne,se,ae,ie,re,le,ce,oe,ue,pe,de;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(n&&"string"===typeof n||n&&"number"===typeof n||e.state.searchInput)){t.next=71;break}return e.setState({isLoading:!0}),t.next=4,b("string"===typeof n||"number"===typeof n?n:e.state.searchInput);case 4:return s=t.sent,t.next=7,x();case 7:if(a=t.sent,i=[],r="",l="",p=!1,d=!1,h=!1,m="",v="",f="",k="",y="",O=[],S="",N="",w="",I="",_="",C="",!s||!s.name){t.next=70;break}return t.next=29,g(s.species.url);case 29:return z=t.sent,p=z.is_baby,d=z.is_mythical,h=z.is_legendary,m=null===(F=z.generation)||void 0===F?void 0:F.name,t.next=36,g(null===(P=z.generation)||void 0===P?void 0:P.url);case 36:return G=t.sent,S=null===G||void 0===G||null===(A=G.main_region)||void 0===A?void 0:A.name,w=null===G||void 0===G?void 0:G.pokemon_species,t.next=41,g(null===z||void 0===z||null===(M=z.shape)||void 0===M?void 0:M.url);case 41:return(H=t.sent).pokemon_species&&(I=H.pokemon_species),t.next=45,g(null===z||void 0===z||null===(L=z.growth_rate)||void 0===L?void 0:L.url);case 45:return(J=t.sent).pokemon_species&&(_=J.pokemon_species),t.next=49,g(null===z||void 0===z||null===(D=z.habitat)||void 0===D?void 0:D.url);case 49:if((K=t.sent).pokemon_species&&(C=K.pokemon_species),v=z.habitat,f=null===(B=z.growth_rate)||void 0===B?void 0:B.name,k=null===(U=z.shape)||void 0===U?void 0:U.name,null===(E=z.genera)||void 0===E||E.find((function(e){return"en"===e.language.name})).genus,N=null===(R=z.flavor_text_entries)||void 0===R?void 0:R.find((function(e){return"en"===e.language.name})).flavor_text,(V=z.varieties)&&V.length&&V.forEach((function(e){var t,n,s;return(null===(t=e.pokemon)||void 0===t?void 0:t.name.includes("world-cap"))?null:O.push({name:null===(n=e.pokemon)||void 0===n?void 0:n.name,url:null===(s=e.pokemon)||void 0===s?void 0:s.url})})),W=null,!z||!z.evolution_chain){t.next=63;break}return t.next=62,j.a.get(z.evolution_chain.url);case 62:W=t.sent;case 63:W&&W.data&&(te=W.data.chain.species.name,ne=null===(q=W.data.chain.evolves_to[0])||void 0===q||null===(Q=q.evolves_to[0])||void 0===Q||null===(X=Q.evolves_to[0])||void 0===X?void 0:X.species.name,se=[],W.data.chain.evolves_to.forEach((function(e){var t,n;return se.push({level:2,name:e.species.name,imageUrl:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(e.species.url.split("/")[e.species.url.split("/").length-2],".png"),evolveItem:null===(t=e.evolution_details[0].held_item)||void 0===t?void 0:t.name.split("-").join(" "),evolveItemUrl:null===(n=e.evolution_details[0].held_item)||void 0===n?void 0:n.url})})),null===(Y=W.data.chain.evolves_to[0])||void 0===Y||Y.evolves_to.forEach((function(e){var t,n;return se.push({level:3,name:e.species.name,imageUrl:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(e.species.url.split("/")[e.species.url.split("/").length-2],".png"),evolveItem:null===(t=e.evolution_details[0].held_item)||void 0===t?void 0:t.name,evolveItemUrl:null===(n=e.evolution_details[0].held_item)||void 0===n?void 0:n.url})})),null===(Z=W.data.chain.evolves_to[1])||void 0===Z||Z.evolves_to.forEach((function(e){var t,n;return se.push({level:3,name:e.species.name,imageUrl:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(e.species.url.split("/")[e.species.url.split("/").length-2],".png"),evolveItem:null===(t=e.evolution_details[0].held_item)||void 0===t?void 0:t.name.split("-").join(" "),evolveItemUrl:null===(n=e.evolution_details[0].held_item)||void 0===n?void 0:n.url})})),te&&i.push({level:1,name:te,imageUrl:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(W.data.chain.species.url.split("/")[W.data.chain.species.url.split("/").length-2],".png")}),ne&&i.push({level:4,name:ne,imageUrl:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(null===(ae=W.data.chain.evolves_to[0])||void 0===ae||null===(ie=ae.evolves_to[0])||void 0===ie||null===(re=ie.evolves_to[0])||void 0===re?void 0:re.species.url.split("/")[(null===(le=W.data.chain.evolves_to[0])||void 0===le||null===(ce=le.evolves_to[0])||void 0===ce||null===(oe=ce.evolves_to[0])||void 0===oe?void 0:oe.species.url.split("/").length)-2],".png")}),(i=[].concat(Object(o.a)(i),se)).forEach(function(){var t=Object(u.a)(c.a.mark((function t(n){var s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s="",!n.evolveItemUrl){t.next=7;break}return t.next=4,g(n.evolveItemUrl);case 4:s=t.sent,n.evolveItemImg=s.sprites.default,e.setState({evolutionChain:i});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),r=z.names.find((function(e){return"de"===e.language.name})).name,l=z.names.find((function(e){return"ja"===e.language.name})).name,y=null===(ee=z.genera)||void 0===ee?void 0:ee.find((function(e){return"en"===e.language.name})).genus),ue=s.moves.map((function(e){return e.move.name})),pe=[],s.types.forEach(function(){var t=Object(u.a)(c.a.mark((function t(n){var s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(n.type.url);case 2:(s=t.sent)&&pe.push({name:n.type.name,url:n.type.url,data:s}),e.setState({types:pe});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),e.setState({isLoading:!1,pokemon:s.name,imgFront:s.sprites.front_default,imgBack:s.sprites.back_default,imgFrontShiny:s.sprites.front_shiny,imgBackShiny:s.sprites.back_shiny,imgFrontFemale:s.sprites.front_female,imgBackFemale:s.sprites.back_female,imgFrontShinyFemale:s.sprites.front_shiny_female,imgBackShinyFemale:s.sprites.back_shiny_female,officialArt:null===(T=s.sprites.other["official-artwork"])||void 0===T?void 0:T.front_default,moves:ue,types:pe,evolutionChain:i,searchInput:s.name,deName:r,jaName:l,isBaby:p,isMythical:d,isLegendary:h,generation:m,habitat:v,growthRate:f,shape:k,varieties:O,genus:y,mainRegion:S,description:N,pokedexId:null===($=z.pokedex_numbers[0])||void 0===$?void 0:$.entry_number,regionSpecies:w,shapeSpecies:I,growthRateSpecies:_,habitatSpecies:C,allItems:a}),t.next=71;break;case 70:s&&s.includes("404")&&((de=e.checkPokemonName(e.state.searchInput.toLowerCase().trim()))?e.handleSearchCall(de.name):e.setState({pokemon:"Try your search again, because this pokemon does not exist!",isLoading:!1,shinyMode:!1,imgFront:"",imgBack:"",imgFrontFemale:"",imgBackFemale:"",imgFrontShiny:"",imgBackShiny:"",imgFrontShinyFemale:"",imgBackShinyFemale:"",officialArt:"",searchInput:"",moves:[],types:[],evolutionChain:[],isBaby:!1,isMythical:!1,isLegendary:!1,deName:"",jaName:"",generation:"",habitat:"",growthRate:"",shape:"",varieties:[],genus:"",mainRegion:"",description:"",pokedexId:"",regionSpecies:[],shapeSpecies:[],growthRateSpecies:[],habitatSpecies:[]}));case 71:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleRandomPokemon=Object(u.a)(c.a.mark((function t(){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:(n=t.sent)&&"string"===typeof n&&n.includes("Error")&&e.handleRandomPokemon(),e.setState({isLoading:!0}),n&&n.name&&e.handleSearchCall(n.id);case 6:case"end":return t.stop()}}),t)}))),e.clearInput=function(){return e.setState({searchInput:""})},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g("https://pokeapi.co/api/v2/pokemon/?limit=1200");case 2:(t=e.sent)&&t.results&&this.setState({allPokemon:t.results});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=this,n=this.state,s=n.pokemon,a=n.moves,i=n.imgFront,r=n.imgBack,l=n.imgFrontShiny,c=n.imgBackShiny,o=n.imgFrontFemale,u=n.imgBackFemale,p=n.imgFrontShinyFemale,d=n.imgBackShinyFemale,h=n.officialArt,m=n.shinyMode,v=n.isLoading,j=n.types,b=n.searchInput,f=n.evolutionChain,x=n.deName,w=n.jaName,_=n.isBaby,C=n.isMythical,F=n.isLegendary,P=n.generation,A=n.habitat,M=n.growthRate,L=n.shape,D=n.varieties,B=n.genus,U=n.mainRegion,E=n.description,R=n.pokedexId,T=n.regionSpecies,$=n.shapeSpecies,z=n.growthRateSpecies,G=n.habitatSpecies,H=n.allItems,J=s&&s.length?s[0].toUpperCase()+s.slice(1,s.length+1).toLowerCase():null,K=P?P.split("-")[1]:"",V=null===P||void 0===P?void 0:P.split("-")[0],W=V?V[0].toUpperCase()+V.slice(1,V.length+1).toLowerCase()+" "+K.toUpperCase():null,q=A&&null!==A&&"string"===typeof A?A.split("-").join(" "):A&&A.name||"",Q=M?M.split("-").join(" "):"",X=L?L.split("-").join(" "):"",Y=null===(e=E.split("\f").join(" ").split("POK\xe9MON").join("Pok\xe9mon").split(",").join(", ").split("\n").join(" ").split(".").join(". ").split(s.toUpperCase()))||void 0===e?void 0:e.join(J);return Object(y.jsxs)("div",{className:"display",children:[Object(y.jsx)("div",{children:Object(y.jsx)("h1",{children:"Search any Pok\xe9mon!"})}),Object(y.jsxs)("div",{className:"search-container",children:[Object(y.jsx)("input",{className:"search-input",onKeyDown:this.handleOnEnter,onChange:this.handleUpdateInput,value:b,placeholder:"Name or Pok\xe9dex ID..."}),Object(y.jsx)("div",{className:"clear",onClick:this.clearInput,children:"x"}),Object(y.jsx)("div",{className:"search-button",onClick:this.handleSearchCall,children:"Search!"})]}),Object(y.jsx)("div",{className:"search-button",onClick:this.handleRandomPokemon,children:"Random!"}),v?Object(y.jsx)("div",{children:Object(y.jsx)("img",{className:"loading",src:k,alt:"loading"})}):Object(y.jsxs)("div",{className:"results-container",children:[s?Object(y.jsxs)("div",{style:{backgroundColor:"azure",border:"5px solid #fff",borderRadius:"15px"},children:[Object(y.jsxs)("div",{style:{color:"black"},children:[Object(y.jsxs)("div",{className:"name-container",children:[Object(y.jsx)("h2",{children:J}),w?Object(y.jsxs)("em",{children:["Japanese: ",w]}):null,x?Object(y.jsxs)("em",{children:["German: ",x]}):null]}),j.length?Object(y.jsx)("span",{children:Object(y.jsxs)("ul",{className:"types-list",children:[Object(y.jsx)("h3",{children:"Type(s):"})," ",j.map((function(e){return Object(y.jsx)("li",{children:e.name},e.name)}))]})}):null]}),l||c?Object(y.jsxs)("div",{onClick:this.toggleShinyMode,className:m?"shiny-button":"normal-button",children:["Shiny Mode ",m?"On":"Off"]}):null,m?Object(y.jsxs)("div",{className:"picture-box",children:[d||p?"Male:":null,Object(y.jsxs)("div",{className:"picture-group",children:[l?Object(y.jsx)("img",{className:"pokemon-front",src:l,alt:s}):null,c?Object(y.jsx)("img",{className:"pokemon-front",src:c,alt:s}):null]}),d||p?"Female:":null,Object(y.jsxs)("div",{className:"picture-group",children:[p?Object(y.jsx)("img",{className:"pokemon-front",src:p,alt:s}):null,d?Object(y.jsx)("img",{className:"pokemon-front",src:d,alt:s}):null]})]}):Object(y.jsxs)("div",{className:"picture-box",children:[u||o?"Male:":null,Object(y.jsxs)("div",{className:"picture-group",children:[i?Object(y.jsx)("img",{className:"pokemon-front",src:i,alt:s}):null,r?Object(y.jsx)("img",{className:"pokemon-front",src:r,alt:s}):null]}),u||o?"Female:":null,Object(y.jsxs)("div",{className:"picture-group",children:[o?Object(y.jsx)("img",{className:"pokemon-front",src:o,alt:s}):null,u?Object(y.jsx)("img",{className:"pokemon-front",src:u,alt:s}):null]})]}),Object(y.jsxs)("div",{style:{color:"black",marginTop:"auto"},children:[_?"This pokemon is a baby!":null,C?"This pokemon is mythical.":null,F?"This pokemon is legendary.":null]})]}):null,a&&a.length?Object(y.jsx)("div",{className:"moves-list",children:Object(y.jsxs)("ul",{children:[Object(y.jsxs)("h3",{children:[a.length," Moves:"]})," ",a.map((function(e){return Object(y.jsx)("li",{children:e},e)}))]})}):null]}),!v&&s&&(q||Q||X)?Object(y.jsxs)("div",{className:"data-rows",children:[Object(y.jsx)("strong",{children:W}),U?Object(y.jsxs)("p",{children:["Main Region: ",U]}):null,q?Object(y.jsxs)("p",{children:["Habitat: ",q]}):null,Q?Object(y.jsxs)("p",{children:["Growth Rate: ",Q]}):null,X?Object(y.jsxs)("p",{children:["Shape: ",X]}):null,B?Object(y.jsxs)("p",{children:["Genus: ",B]}):null,R&&R<899?Object(y.jsxs)("p",{children:["Pok\xe9dex ID: ",R]}):null,h?Object(y.jsx)(N,{officialArtImg:h,pokemonName:J}):null,E?Object(y.jsx)("div",{className:"divider"}):null,E?Object(y.jsx)("p",{children:Y}):null,D&&D.length-1?Object(y.jsx)("strong",{children:Object(y.jsx)("p",{className:"varieties-header",children:"Varieties"})}):null,D&&D.length-1?Object(y.jsxs)("div",{className:"varieties-box",children:[D.map((function(e){return e.name!==s?Object(y.jsx)("div",{className:"variety-btn",onClick:function(){return t.handleSearchCall(e.name)},children:e.name},e.name):null}))," "]}):null]}):null,!v&&f&&f.length?Object(y.jsxs)("div",{className:"evolve-container",children:[Object(y.jsx)("h3",{children:"Evolution Chain:"}),Object(y.jsxs)("div",{className:"evolves-list",children:[f.find((function(e){return 1===e.level}))?Object(y.jsx)(O,{evolutionChain:f,handleSearchCall:this.handleSearchCall,selectedLevel:1}):null,f.find((function(e){return 2===e.level}))?Object(y.jsx)("div",{className:"arrow",children:" > "}):null,f.find((function(e){return 2===e.level}))?Object(y.jsx)(O,{evolutionChain:f,handleSearchCall:this.handleSearchCall,selectedLevel:2}):null,f.find((function(e){return 3===e.level}))?Object(y.jsx)("div",{className:"arrow",children:" > "}):null,f.find((function(e){return 3===e.level}))?Object(y.jsx)(O,{evolutionChain:f,handleSearchCall:this.handleSearchCall,selectedLevel:3}):null]})]}):null,!v&&s&&(W||L||M||j||A)?Object(y.jsxs)("div",{className:"explore-box",children:[Object(y.jsx)("strong",{children:Object(y.jsx)("p",{className:"varieties-header",children:"Explore"})}),Object(y.jsxs)("div",{className:"varieties-box",children:[Object(y.jsx)(I,{allItems:H,getAnyUrl:g}),W?Object(y.jsx)(S,{header:W,regionSpecies:T,populateInput:this.populateInput,handleSearchCall:this.handleSearchCall}):null,L?Object(y.jsx)(S,{header:L,regionSpecies:$,populateInput:this.populateInput,handleSearchCall:this.handleSearchCall}):null,M?Object(y.jsx)(S,{header:"".concat(M," growth rate"),regionSpecies:z,populateInput:this.populateInput,handleSearchCall:this.handleSearchCall}):null,j&&j.length?j.map((function(e){return Object(y.jsx)(S,{header:"".concat(e.name," type"),regionSpecies:e.data.pokemon.map((function(e){return{name:e.pokemon.name,url:e.pokemon.url}})).filter((function(e){return!e.name.includes("totem")})),populateInput:t.populateInput,handleSearchCall:t.handleSearchCall},e.name)})):null,A?Object(y.jsx)(S,{header:"".concat(A.name," habitat"),regionSpecies:G,populateInput:this.populateInput,handleSearchCall:this.handleSearchCall}):null]})]}):null]})}}]),n}(s.Component),C=n(23);var F=function(){return Object(y.jsx)("div",{className:"App",children:Object(y.jsxs)("header",{className:"App-header",children:[Object(y.jsx)(_,{}),Object(y.jsxs)("h3",{className:"version-box",children:["Version: ",C.version]})]})})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,57)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),i(e),r(e)}))};r.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(F,{})}),document.getElementById("root")),P()}},[[56,1,2]]]);
//# sourceMappingURL=main.490d9f8e.chunk.js.map