(this["webpackJsonppokemon-search"]=this["webpackJsonppokemon-search"]||[]).push([[0],{22:function(e){e.exports=JSON.parse('{"name":"pokemon-search","version":"1.3.7","private":true,"homepage":"https://liztrenholme.github.io/pokemon-search","dependencies":{"@babel/core":"7.12.3","@pmmmwh/react-refresh-webpack-plugin":"0.4.3","@svgr/webpack":"5.5.0","@testing-library/jest-dom":"^5.11.4","@testing-library/react":"^11.1.0","@testing-library/user-event":"^12.1.10","@typescript-eslint/eslint-plugin":"^4.5.0","@typescript-eslint/parser":"^4.5.0","axios":"^0.25.0","babel-eslint":"^10.1.0","babel-jest":"^26.6.0","babel-loader":"8.1.0","babel-plugin-named-asset-import":"^0.3.7","babel-preset-react-app":"^10.0.0","bfj":"^7.0.2","camelcase":"^6.1.0","case-sensitive-paths-webpack-plugin":"2.3.0","css-loader":"4.3.0","dotenv":"8.2.0","dotenv-expand":"5.1.0","eslint":"^7.32.0","eslint-config-react-app":"^6.0.0","eslint-plugin-flowtype":"^5.2.0","eslint-plugin-import":"^2.22.1","eslint-plugin-jest":"^24.1.0","eslint-plugin-jsx-a11y":"^6.3.1","eslint-plugin-react":"^7.28.0","eslint-plugin-react-hooks":"^4.2.0","eslint-plugin-testing-library":"^3.9.2","eslint-webpack-plugin":"^2.6.0","file-loader":"6.1.1","fs-extra":"^9.0.1","gh-pages":"^2.1.1","html-webpack-plugin":"4.5.0","identity-obj-proxy":"3.0.0","jest":"26.6.0","jest-circus":"26.6.0","jest-resolve":"26.6.0","jest-watch-typeahead":"0.6.1","mini-css-extract-plugin":"0.11.3","optimize-css-assets-webpack-plugin":"5.0.4","pnp-webpack-plugin":"1.6.4","postcss-flexbugs-fixes":"4.2.1","postcss-loader":"3.0.0","postcss-normalize":"8.0.1","postcss-preset-env":"6.7.0","postcss-safe-parser":"5.0.2","prompts":"2.4.0","react":"^17.0.1","react-app-polyfill":"^2.0.0","react-dev-utils":"^11.0.2","react-dom":"^17.0.1","react-refresh":"^0.8.3","resolve":"1.18.1","resolve-url-loader":"^3.1.2","sass-loader":"^10.0.5","semver":"7.3.2","style-loader":"1.3.0","terser-webpack-plugin":"4.2.3","ts-pnp":"1.2.0","url-loader":"4.1.1","web-vitals":"^1.0.1","webpack":"4.44.2","webpack-dev-server":"3.11.0","webpack-manifest-plugin":"2.2.0","whatwg-fetch":"^3.6.2","workbox-webpack-plugin":"5.1.4"},"scripts":{"start":"node scripts/start.js","build":"node scripts/build.js","test":"node scripts/test.js","predeploy":"npm run build","deploy":"gh-pages -d build"},"eslintConfig":{"extends":["react-app","react-app/jest"]},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"jest":{"roots":["<rootDir>/src"],"collectCoverageFrom":["src/**/*.{js,jsx,ts,tsx}","!src/**/*.d.ts"],"setupFiles":["react-app-polyfill/jsdom"],"setupFilesAfterEnv":["<rootDir>/src/setupTests.js"],"testMatch":["<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}","<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"],"testEnvironment":"jsdom","testRunner":"/Users/liztrenholme/Documents/GitHub/react-starter-emplate/node_modules/jest-circus/runner.js","transform":{"^.+\\\\.(js|jsx|mjs|cjs|ts|tsx)$":"<rootDir>/config/jest/babelTransform.js","^.+\\\\.css$":"<rootDir>/config/jest/cssTransform.js","^(?!.*\\\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)":"<rootDir>/config/jest/fileTransform.js"},"transformIgnorePatterns":["[/\\\\\\\\]node_modules[/\\\\\\\\].+\\\\.(js|jsx|mjs|cjs|ts|tsx)$","^.+\\\\.module\\\\.(css|sass|scss)$"],"modulePaths":[],"moduleNameMapper":{"^react-native$":"react-native-web","^.+\\\\.module\\\\.(css|sass|scss)$":"identity-obj-proxy"},"moduleFileExtensions":["web.js","js","web.ts","ts","web.tsx","tsx","json","web.jsx","jsx","node"],"watchPlugins":["jest-watch-typeahead/filename","jest-watch-typeahead/testname"],"resetMocks":true},"babel":{"presets":["react-app"]}}')},28:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){},51:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var s=n(3),a=n.n(s),i=n(21),l=n.n(i),r=(n(28),n(29),n(1)),o=n.n(r),c=n(23),p=n(4),u=n(5),d=n(6),h=n(8),m=n(7),v=(n(31),n(32),n(9)),j=n.n(v),b=function(){var e=Object(p.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},e.prev=1,e.next=4,j.a.get("https://pokeapi.co/api/v2/pokemon/".concat("string"===typeof t?t.toLowerCase():t));case 4:n=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),console.log("error fetching",e.t0),e.abrupt("return","Error "+e.t0);case 11:if(!n||!Object.keys(n)){e.next=13;break}return e.abrupt("return",n.data);case 13:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(p.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},e.prev=1,e.next=4,j.a.get(t);case 4:n=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),console.log("error fetching",e.t0),e.abrupt("return","Error "+e.t0);case 11:if(!n||!Object.keys(n)){e.next=13;break}return e.abrupt("return",n.data);case 13:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(p.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},n=Math.floor(898*Math.random()),e.prev=2,e.next=5,j.a.get("https://pokeapi.co/api/v2/pokemon-species/".concat(n));case 5:t=e.sent,e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(2),console.log("error fetching",e.t0),e.abrupt("return","Error "+e.t0);case 12:if(!t||!Object.keys(t)){e.next=14;break}return e.abrupt("return",t.data);case 14:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(){return e.apply(this,arguments)}}(),x=n.p+"static/media/Pokeball.32cfee51.png",k=(n(51),n(0)),y=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(k.jsx)("div",{className:"level-two",style:{display:"flex",maxWidth:"6em",justifyContent:"center",flexWrap:"wrap",flexDirection:"column",maxHeight:"30em",transform:"scale(0.75, 0.75)"},children:this.props.evolutionChain.map((function(t){return t.level===e.props.selectedLevel?Object(k.jsxs)("div",{onClick:function(){var n;return e.props.handleSearchCall((null===(n=t.imageUrl)||void 0===n?void 0:n.split("/")[t.imageUrl.split("/").length-1].split(".png")[0])||t.name)},className:"evolve-item",children:[Object(k.jsxs)("div",{className:"images-box",children:[t.evolveItemImg?Object(k.jsx)("img",{className:"held-item",src:t.evolveItemImg,alt:t.evolveItem}):null,Object(k.jsx)("img",{className:"evolImg",src:t.imageUrl,alt:t.name})]}),t.evolveItem?Object(k.jsxs)("span",{children:["+ ",t.evolveItem]}):null,t.name]},t.name):null}))})}}]),n}(s.Component),O=(n(53),function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={displayed:!1},e.handleFillInputAndCallSearch=function(t){e.props.populateInput(t),e.props.handleSearchCall(t)},e.handleDisplayList=function(){return e.state.displayed?e.setState({displayed:!1}):e.setState({displayed:!0})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.header,s=t.regionSpecies;return Object(k.jsxs)("div",{className:"explore-container",children:[Object(k.jsxs)("div",{className:"variety-btn",onClick:this.handleDisplayList,children:["Show all ",n," species"]}),this.state.displayed?Object(k.jsxs)("div",{className:"explore-species-modal",children:[Object(k.jsxs)("div",{className:"fixed-header",children:[Object(k.jsxs)("p",{className:"header-title",children:[this.props.header," (",s.length,")"]}),Object(k.jsx)("div",{className:"x-box",onClick:this.handleDisplayList,children:"x"})]}),s&&s.length?s.map((function(t){var n;return Object(k.jsxs)("p",{className:"species-result",onClick:function(){return e.handleFillInputAndCallSearch(t.name)},children:[Object(k.jsx)("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(null===t||void 0===t||null===(n=t.url)||void 0===n?void 0:n.split("/")[6],".png"),alt:t.name}),t.name]},t.name)})):null]}):null]})}}]),n}(s.Component)),S=(n(54),function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={displayed:!1},e.handleDisplayArt=function(){return e.state.displayed?e.setState({displayed:!1}):e.setState({displayed:!0})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,t=e.pokemonName,n=e.officialArtImg;return Object(k.jsxs)("div",{className:"art-container",children:[Object(k.jsx)("div",{className:"variety-btn",onClick:this.handleDisplayArt,children:"Official Artwork"}),this.state.displayed?Object(k.jsxs)("div",{className:"art-modal",children:[Object(k.jsxs)("div",{className:"fixed-header",children:[Object(k.jsx)("p",{className:"header-title",children:t}),Object(k.jsx)("div",{className:"x-box",onClick:this.handleDisplayArt,children:"x"})]}),Object(k.jsx)("img",{className:"art-image",src:n,alt:t})]}):null]})}}]),n}(s.Component)),w=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!1,shinyMode:!1,pokemon:"",imgFront:"",imgBack:"",imgFrontFemale:"",imgBackFemale:"",imgFrontShiny:"",imgBackShiny:"",imgFrontShinyFemale:"",imgBackShinyFemale:"",searchInput:"",moves:[],types:[],evolutionChain:[],deName:"",jaName:"",isBaby:!1,isMythical:!1,isLegendary:!1,generation:"",habitat:"",growthRate:"",shape:"",varieties:[],allPokemon:[],genus:"",mainRegion:"",description:"",pokedexId:"",regionSpecies:"",shapeSpecies:"",growthRateSpecies:""},e.handleUpdateInput=function(t){e.setState({searchInput:t.target.value})},e.handleOnEnter=function(t){"Enter"===t.key&&e.handleSearchCall()},e.toggleShinyMode=function(){return e.state.shinyMode?e.setState({shinyMode:!1}):e.setState({shinyMode:!0})},e.checkPokemonName=function(t){return e.state.allPokemon.find((function(e){return e.name.includes(t)}))},e.populateInput=function(t){return e.setState({searchInput:t})},e.handleSearchCall=function(){var t=Object(p.a)(o.a.mark((function t(n){var s,a,i,l,r,u,d,h,m,v,f,x,k,y,O,S,w,N,C,_,I,F,P,M,A,L,B,D,R,U,E,T,$,z,G,J,H,K,V,W,q,Q,X,Y,Z,ee,te,ne,se,ae,ie,le,re,oe,ce,pe;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(n&&"string"===typeof n||n&&"number"===typeof n||e.state.searchInput)){t.next=68;break}return e.setState({isLoading:!0}),t.next=4,b("string"===typeof n||"number"===typeof n?n:e.state.searchInput);case 4:if(s=t.sent,a=[],i="",l="",r=!1,u=!1,d=!1,h="",m="",v="",f="",x="",k=[],y="",O="",S="",w="",N="",C="",!s||!s.name){t.next=67;break}return t.next=26,g(s.species.url);case 26:return T=t.sent,r=T.is_baby,u=T.is_mythical,d=T.is_legendary,h=null===(_=T.generation)||void 0===_?void 0:_.name,t.next=33,g(null===(I=T.generation)||void 0===I?void 0:I.url);case 33:return $=t.sent,y=null===$||void 0===$||null===(F=$.main_region)||void 0===F?void 0:F.name,S=null===$||void 0===$?void 0:$.pokemon_species,t.next=38,g(null===T||void 0===T||null===(P=T.shape)||void 0===P?void 0:P.url);case 38:return(z=t.sent).pokemon_species&&(w=z.pokemon_species),t.next=42,g(null===T||void 0===T||null===(M=T.growth_rate)||void 0===M?void 0:M.url);case 42:return(G=t.sent).pokemon_species&&(N=G.pokemon_species),t.next=46,g(null===T||void 0===T||null===(A=T.habitat)||void 0===A?void 0:A.url);case 46:if((J=t.sent).pokemon_species&&(C=J.pokemon_species),m=T.habitat,v=null===(L=T.growth_rate)||void 0===L?void 0:L.name,f=null===(B=T.shape)||void 0===B?void 0:B.name,null===(D=T.genera)||void 0===D||D.find((function(e){return"en"===e.language.name})).genus,O=null===(R=T.flavor_text_entries)||void 0===R?void 0:R.find((function(e){return"en"===e.language.name})).flavor_text,(H=T.varieties)&&H.length&&H.forEach((function(e){var t,n,s;return(null===(t=e.pokemon)||void 0===t?void 0:t.name.includes("world-cap"))?null:k.push({name:null===(n=e.pokemon)||void 0===n?void 0:n.name,url:null===(s=e.pokemon)||void 0===s?void 0:s.url})})),K=null,!T||!T.evolution_chain){t.next=60;break}return t.next=59,j.a.get(T.evolution_chain.url);case 59:K=t.sent;case 60:K&&K.data&&(Z=K.data.chain.species.name,ee=null===(V=K.data.chain.evolves_to[0])||void 0===V||null===(W=V.evolves_to[0])||void 0===W||null===(q=W.evolves_to[0])||void 0===q?void 0:q.species.name,te=[],K.data.chain.evolves_to.forEach((function(e){var t,n;return te.push({level:2,name:e.species.name,imageUrl:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(e.species.url.split("/")[e.species.url.split("/").length-2],".png"),evolveItem:null===(t=e.evolution_details[0].held_item)||void 0===t?void 0:t.name.split("-").join(" "),evolveItemUrl:null===(n=e.evolution_details[0].held_item)||void 0===n?void 0:n.url})})),null===(Q=K.data.chain.evolves_to[0])||void 0===Q||Q.evolves_to.forEach((function(e){var t,n;return te.push({level:3,name:e.species.name,imageUrl:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(e.species.url.split("/")[e.species.url.split("/").length-2],".png"),evolveItem:null===(t=e.evolution_details[0].held_item)||void 0===t?void 0:t.name,evolveItemUrl:null===(n=e.evolution_details[0].held_item)||void 0===n?void 0:n.url})})),null===(X=K.data.chain.evolves_to[1])||void 0===X||X.evolves_to.forEach((function(e){var t,n;return te.push({level:3,name:e.species.name,imageUrl:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(e.species.url.split("/")[e.species.url.split("/").length-2],".png"),evolveItem:null===(t=e.evolution_details[0].held_item)||void 0===t?void 0:t.name.split("-").join(" "),evolveItemUrl:null===(n=e.evolution_details[0].held_item)||void 0===n?void 0:n.url})})),Z&&a.push({level:1,name:Z,imageUrl:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(K.data.chain.species.url.split("/")[K.data.chain.species.url.split("/").length-2],".png")}),ee&&a.push({level:4,name:ee,imageUrl:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(null===(ne=K.data.chain.evolves_to[0])||void 0===ne||null===(se=ne.evolves_to[0])||void 0===se||null===(ae=se.evolves_to[0])||void 0===ae?void 0:ae.species.url.split("/")[(null===(ie=K.data.chain.evolves_to[0])||void 0===ie||null===(le=ie.evolves_to[0])||void 0===le||null===(re=le.evolves_to[0])||void 0===re?void 0:re.species.url.split("/").length)-2],".png")}),(a=[].concat(Object(c.a)(a),te)).forEach(function(){var t=Object(p.a)(o.a.mark((function t(n){var s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s="",!n.evolveItemUrl){t.next=7;break}return t.next=4,g(n.evolveItemUrl);case 4:s=t.sent,n.evolveItemImg=s.sprites.default,e.setState({evolutionChain:a});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),i=T.names.find((function(e){return"de"===e.language.name})).name,l=T.names.find((function(e){return"ja"===e.language.name})).name,x=null===(Y=T.genera)||void 0===Y?void 0:Y.find((function(e){return"en"===e.language.name})).genus),oe=s.moves.map((function(e){return e.move.name})),ce=[],s.types.forEach(function(){var t=Object(p.a)(o.a.mark((function t(n){var s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(n.type.url);case 2:(s=t.sent)&&ce.push({name:n.type.name,url:n.type.url,data:s}),e.setState({types:ce});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),e.setState({isLoading:!1,pokemon:s.name,imgFront:s.sprites.front_default,imgBack:s.sprites.back_default,imgFrontShiny:s.sprites.front_shiny,imgBackShiny:s.sprites.back_shiny,imgFrontFemale:s.sprites.front_female,imgBackFemale:s.sprites.back_female,imgFrontShinyFemale:s.sprites.front_shiny_female,imgBackShinyFemale:s.sprites.back_shiny_female,officialArt:null===(U=s.sprites.other["official-artwork"])||void 0===U?void 0:U.front_default,moves:oe,types:ce,evolutionChain:a,searchInput:s.name,deName:i,jaName:l,isBaby:r,isMythical:u,isLegendary:d,generation:h,habitat:m,growthRate:v,shape:f,varieties:k,genus:x,mainRegion:y,description:O,pokedexId:null===(E=T.pokedex_numbers[0])||void 0===E?void 0:E.entry_number,regionSpecies:S,shapeSpecies:w,growthRateSpecies:N,habitatSpecies:C}),t.next=68;break;case 67:s&&s.includes("404")&&((pe=e.checkPokemonName(e.state.searchInput.toLowerCase().trim()))?e.handleSearchCall(pe.name):e.setState({pokemon:"Try your search again, because this pokemon does not exist!",isLoading:!1,shinyMode:!1,imgFront:"",imgBack:"",imgFrontFemale:"",imgBackFemale:"",imgFrontShiny:"",imgBackShiny:"",imgFrontShinyFemale:"",imgBackShinyFemale:"",officialArt:"",searchInput:"",moves:[],types:[],evolutionChain:[],isBaby:!1,isMythical:!1,isLegendary:!1,deName:"",jaName:"",generation:"",habitat:"",growthRate:"",shape:"",varieties:[],genus:"",mainRegion:"",description:"",pokedexId:"",regionSpecies:[],shapeSpecies:[],growthRateSpecies:[],habitatSpecies:[]}));case 68:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleRandomPokemon=Object(p.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:(n=t.sent)&&"string"===typeof n&&n.includes("Error")&&e.handleRandomPokemon(),e.setState({isLoading:!0}),n&&n.name&&e.handleSearchCall(n.id);case 6:case"end":return t.stop()}}),t)}))),e.clearInput=function(){return e.setState({searchInput:""})},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(p.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g("https://pokeapi.co/api/v2/pokemon/?limit=1200");case 2:(t=e.sent)&&t.results&&this.setState({allPokemon:t.results});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=this,n=this.state,s=n.pokemon,a=n.moves,i=n.imgFront,l=n.imgBack,r=n.imgFrontShiny,o=n.imgBackShiny,c=n.imgFrontFemale,p=n.imgBackFemale,u=n.imgFrontShinyFemale,d=n.imgBackShinyFemale,h=n.officialArt,m=n.shinyMode,v=n.isLoading,j=n.types,b=n.searchInput,g=n.evolutionChain,f=n.deName,w=n.jaName,N=n.isBaby,C=n.isMythical,_=n.isLegendary,I=n.generation,F=n.habitat,P=n.growthRate,M=n.shape,A=n.varieties,L=n.genus,B=n.mainRegion,D=n.description,R=n.pokedexId,U=n.regionSpecies,E=n.shapeSpecies,T=n.growthRateSpecies,$=n.habitatSpecies,z=s&&s.length?s[0].toUpperCase()+s.slice(1,s.length+1).toLowerCase():null,G=I?I.split("-")[1]:"",J=null===I||void 0===I?void 0:I.split("-")[0],H=J?J[0].toUpperCase()+J.slice(1,J.length+1).toLowerCase()+" "+G.toUpperCase():null,K=F&&null!==F&&"string"===typeof F?F.split("-").join(" "):F&&F.name||"",V=P?P.split("-").join(" "):"",W=M?M.split("-").join(" "):"",q=null===(e=D.split("\f").join(" ").split("POK\xe9MON").join("Pok\xe9mon").split(",").join(", ").split("\n").join(" ").split(".").join(". ").split(s.toUpperCase()))||void 0===e?void 0:e.join(z);return Object(k.jsxs)("div",{className:"display",children:[Object(k.jsx)("div",{children:Object(k.jsx)("h1",{children:"Search any Pok\xe9mon!"})}),Object(k.jsxs)("div",{className:"search-container",children:[Object(k.jsx)("input",{className:"search-input",onKeyDown:this.handleOnEnter,onChange:this.handleUpdateInput,value:b,placeholder:"Name or Pok\xe9dex ID..."}),Object(k.jsx)("div",{className:"clear",onClick:this.clearInput,children:"x"}),Object(k.jsx)("div",{className:"search-button",onClick:this.handleSearchCall,children:"Search!"})]}),Object(k.jsx)("div",{className:"search-button",onClick:this.handleRandomPokemon,children:"Random!"}),v?Object(k.jsx)("div",{children:Object(k.jsx)("img",{className:"loading",src:x,alt:"loading"})}):Object(k.jsxs)("div",{className:"results-container",children:[s?Object(k.jsxs)("div",{style:{backgroundColor:"azure",border:"5px solid #fff",borderRadius:"15px"},children:[Object(k.jsxs)("div",{style:{color:"black"},children:[Object(k.jsxs)("div",{className:"name-container",children:[Object(k.jsx)("h2",{children:z}),w?Object(k.jsxs)("em",{children:["Japanese: ",w]}):null,f?Object(k.jsxs)("em",{children:["German: ",f]}):null]}),j.length?Object(k.jsx)("span",{children:Object(k.jsxs)("ul",{className:"types-list",children:[Object(k.jsx)("h3",{children:"Type(s):"})," ",j.map((function(e){return Object(k.jsx)("li",{children:e.name},e.name)}))]})}):null]}),r||o?Object(k.jsxs)("div",{onClick:this.toggleShinyMode,className:m?"shiny-button":"normal-button",children:["Shiny Mode ",m?"On":"Off"]}):null,m?Object(k.jsxs)("div",{className:"picture-box",children:[d||u?"Male:":null,Object(k.jsxs)("div",{className:"picture-group",children:[r?Object(k.jsx)("img",{className:"pokemon-front",src:r,alt:s}):null,o?Object(k.jsx)("img",{className:"pokemon-front",src:o,alt:s}):null]}),d||u?"Female:":null,Object(k.jsxs)("div",{className:"picture-group",children:[u?Object(k.jsx)("img",{className:"pokemon-front",src:u,alt:s}):null,d?Object(k.jsx)("img",{className:"pokemon-front",src:d,alt:s}):null]})]}):Object(k.jsxs)("div",{className:"picture-box",children:[p||c?"Male:":null,Object(k.jsxs)("div",{className:"picture-group",children:[i?Object(k.jsx)("img",{className:"pokemon-front",src:i,alt:s}):null,l?Object(k.jsx)("img",{className:"pokemon-front",src:l,alt:s}):null]}),p||c?"Female:":null,Object(k.jsxs)("div",{className:"picture-group",children:[c?Object(k.jsx)("img",{className:"pokemon-front",src:c,alt:s}):null,p?Object(k.jsx)("img",{className:"pokemon-front",src:p,alt:s}):null]})]}),Object(k.jsxs)("div",{style:{color:"black",marginTop:"auto"},children:[N?"This pokemon is a baby!":null,C?"This pokemon is mythical.":null,_?"This pokemon is legendary.":null]})]}):null,a&&a.length?Object(k.jsx)("div",{className:"moves-list",children:Object(k.jsxs)("ul",{children:[Object(k.jsxs)("h3",{children:[a.length," Moves:"]})," ",a.map((function(e){return Object(k.jsx)("li",{children:e},e)}))]})}):null]}),!v&&s&&(K||V||W)?Object(k.jsxs)("div",{className:"data-rows",children:[Object(k.jsx)("strong",{children:H}),B?Object(k.jsxs)("p",{children:["Main Region: ",B]}):null,K?Object(k.jsxs)("p",{children:["Habitat: ",K]}):null,V?Object(k.jsxs)("p",{children:["Growth Rate: ",V]}):null,W?Object(k.jsxs)("p",{children:["Shape: ",W]}):null,L?Object(k.jsxs)("p",{children:["Genus: ",L]}):null,R&&R<899?Object(k.jsxs)("p",{children:["Pok\xe9dex ID: ",R]}):null,h?Object(k.jsx)(S,{officialArtImg:h,pokemonName:z}):null,D?Object(k.jsx)("div",{className:"divider"}):null,D?Object(k.jsx)("p",{children:q}):null,A&&A.length-1?Object(k.jsx)("strong",{children:Object(k.jsx)("p",{className:"varieties-header",children:"Varieties"})}):null,A&&A.length-1?Object(k.jsxs)("div",{className:"varieties-box",children:[A.map((function(e){return e.name!==s?Object(k.jsx)("div",{className:"variety-btn",onClick:function(){return t.handleSearchCall(e.name)},children:e.name},e.name):null}))," "]}):null]}):null,!v&&g&&g.length?Object(k.jsxs)("div",{className:"evolve-container",children:[Object(k.jsx)("h3",{children:"Evolution Chain:"}),Object(k.jsxs)("div",{className:"evolves-list",children:[g.find((function(e){return 1===e.level}))?Object(k.jsx)(y,{evolutionChain:g,handleSearchCall:this.handleSearchCall,selectedLevel:1}):null,g.find((function(e){return 2===e.level}))?Object(k.jsx)("div",{className:"arrow",children:" > "}):null,g.find((function(e){return 2===e.level}))?Object(k.jsx)(y,{evolutionChain:g,handleSearchCall:this.handleSearchCall,selectedLevel:2}):null,g.find((function(e){return 3===e.level}))?Object(k.jsx)("div",{className:"arrow",children:" > "}):null,g.find((function(e){return 3===e.level}))?Object(k.jsx)(y,{evolutionChain:g,handleSearchCall:this.handleSearchCall,selectedLevel:3}):null]})]}):null,!v&&s&&(H||M||P||j||F)?Object(k.jsxs)("div",{className:"explore-box",children:[Object(k.jsx)("strong",{children:Object(k.jsx)("p",{className:"varieties-header",children:"Explore"})}),Object(k.jsxs)("div",{className:"varieties-box",children:[H?Object(k.jsx)(O,{header:H,regionSpecies:U,populateInput:this.populateInput,handleSearchCall:this.handleSearchCall}):null,M?Object(k.jsx)(O,{header:M,regionSpecies:E,populateInput:this.populateInput,handleSearchCall:this.handleSearchCall}):null,P?Object(k.jsx)(O,{header:"".concat(P," growth rate"),regionSpecies:T,populateInput:this.populateInput,handleSearchCall:this.handleSearchCall}):null,j&&j.length?j.map((function(e){return Object(k.jsx)(O,{header:"".concat(e.name," type"),regionSpecies:e.data.pokemon.map((function(e){return{name:e.pokemon.name,url:e.pokemon.url}})).filter((function(e){return!e.name.includes("totem")})),populateInput:t.populateInput,handleSearchCall:t.handleSearchCall},e.name)})):null,F?Object(k.jsx)(O,{header:"".concat(F.name," habitat"),regionSpecies:$,populateInput:this.populateInput,handleSearchCall:this.handleSearchCall}):null]})]}):null]})}}]),n}(s.Component),N=n(22);var C=function(){return Object(k.jsx)("div",{className:"App",children:Object(k.jsxs)("header",{className:"App-header",children:[Object(k.jsx)(w,{}),Object(k.jsxs)("h3",{className:"version-box",children:["Version: ",N.version]})]})})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,56)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,l=t.getTTFB;n(e),s(e),a(e),i(e),l(e)}))};l.a.render(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsx)(C,{})}),document.getElementById("root")),_()}},[[55,1,2]]]);
//# sourceMappingURL=main.5fd0cac8.chunk.js.map