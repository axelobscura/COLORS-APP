(window["webpackJsonpcolors-app"]=window["webpackJsonpcolors-app"]||[]).push([[0],{220:function(e,a,t){e.exports=t.p+"static/media/bkg.674971e3.svg"},237:function(e,a,t){e.exports=t(478)},242:function(e,a,t){},304:function(e,a,t){},306:function(e,a,t){},478:function(e,a,t){"use strict";t.r(a);var o,n=t(0),r=t.n(n),l=t(8),c=t.n(l),i=t(31),s=(t(242),t(30)),m=t(15),u=t(13),d=t(19),h=t(20),p=t(6),b=t(21),f=t(60),g=t(214),v=t(482),C=t(5),y=t(51),w=t.n(y),j=function(e){return"@media (max-width: ".concat({xs:"576px",sm:"768px",md:"992px",lg:"1200px",xl:"1600px"}[e],")")},E={ColorBox:(o={width:"25%",height:function(e){return e.showingFullPalette?"25%":"50%"},margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px","&:hover button":{opacity:1}},Object(C.a)(o,j("lg"),{width:"25%",height:function(e){return e.showingFullPalette?"20%":"33.3333%"}}),Object(C.a)(o,j("md"),{width:"50%",height:function(e){return e.showingFullPalette?"10%":"20%"}}),Object(C.a)(o,j("xs"),{width:"100%",height:function(e){return e.showingFullPalette?"5%":"10%"}}),o),copyText:{color:function(e){return w()(e.background).luminance()>=.7?"black":"white"}},colorName:{color:function(e){return w()(e.background).luminance()<=.08?"white":"black"}},seeMore:{color:function(e){return w()(e.background).luminance()>=.7?"rgba(0,0,0,0.6)":"white"},background:"rgba(255, 255, 255, 0.3)",position:"absolute",border:"none",right:"0px",bottom:"0px",width:"60px",height:"30px",textAlign:"center",lineHeight:"30px",textTransform:"uppercase"},copyButton:{color:function(e){return w()(e.background).luminance()>=.7?"rgba(0,0,0,0.6)":"white"},width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",background:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",textTransform:"uppercase",border:"none",textDecoration:"none",opacity:0},boxContent:{position:"absolute",width:"100%",left:"0px",bottom:"0px",padding:"10px",color:"black",letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px"},copyOverlay:{opacity:"0",zIndex:"0",width:"100%",height:"100%",transition:"transform 0.6s ease-in-out",transform:"scale(0.1)"},showOverlay:{opacity:"1",transform:"scale(50)",zIndex:"10",position:"absolute"},copyMessage:{position:"fixed",left:"0",right:"0",top:"0",bottom:"0",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",fontSize:"4rem",transform:"scale(0.1)",opacity:"0",color:"white","& h1":Object(C.a)({fontWeight:"400",textShadow:"1px 2px black",background:"rgba(255, 255, 255, 0.2)",width:"100%",textAlign:"center",marginBottom:"0",padding:"1rem",textTransform:"uppercase"},j("xs"),{fontSize:"5rem"}),"& p":{fontSize:"2rem",fontWeight:"100"}},showMessage:{opacity:"1",transform:"scale(1)",zIndex:"25",transition:"all 0.4s ease-in-out",transitionDelay:"0.3s"}},O=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(d.a)(this,Object(h.a)(a).call(this,e))).state={copied:!1},t.changeCopyState=t.changeCopyState.bind(Object(p.a)(t)),t}return Object(b.a)(a,e),Object(u.a)(a,[{key:"changeCopyState",value:function(){var e=this;this.setState({copied:!0},function(){setTimeout(function(){return e.setState({copied:!1})},1500)})}},{key:"render",value:function(){var e=this.props,a=e.name,t=e.background,o=e.moreUrl,n=e.showingFullPalette,l=e.classes,c=this.state.copied;return r.a.createElement(g.CopyToClipboard,{text:t,onCopy:this.changeCopyState},r.a.createElement("div",{style:{background:t},className:l.ColorBox},r.a.createElement("div",{style:{background:t},className:"".concat(l.copyOverlay," ").concat(c&&l.showOverlay)}),r.a.createElement("div",{className:"".concat(l.copyMessage," ").concat(c&&l.showMessage)},r.a.createElement("h1",null,"copied!"),r.a.createElement("p",{className:l.copyText},this.props.background)),r.a.createElement("div",null,r.a.createElement("div",{className:l.boxContent},r.a.createElement("span",{className:l.colorName},a)),r.a.createElement("button",{className:l.copyButton},"Copy")),n&&r.a.createElement(i.c,{to:o,onClick:function(e){return e.stopPropagation()}},r.a.createElement("span",{className:l.seeMore},"MORE"))))}}]),a}(n.Component),k=Object(v.a)(E)(O),x=t(534),S=t(536),N=t(535),P=t(523),F=t(219),B=t.n(F),D=t(225),I=(t(303),t(304),function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(d.a)(this,Object(h.a)(a).call(this,e))).state={format:"hex",open:!1},t.handleFormatChange=t.handleFormatChange.bind(Object(p.a)(t)),t.closeSnackbar=t.closeSnackbar.bind(Object(p.a)(t)),t}return Object(b.a)(a,e),Object(u.a)(a,[{key:"handleFormatChange",value:function(e){this.setState({format:e.target.value,open:!0}),this.props.handleChange(e.target.value)}},{key:"closeSnackbar",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this.props,a=e.level,t=e.changeLevel,o=e.showingAllColors,n=this.state.format;return r.a.createElement("header",{className:"Navbar"},r.a.createElement("div",{className:"logo"},r.a.createElement(i.c,{to:"/"},"reactcolorpicker")),o&&r.a.createElement("div",{className:"slider-container"},r.a.createElement("span",null,"Level: ",a),r.a.createElement("div",{className:"slider"},r.a.createElement(D.a,{defaultValue:a,min:100,max:900,step:100,onAfterChange:t}))),r.a.createElement("div",{className:"select-container"},r.a.createElement(x.a,{value:n,onChange:this.handleFormatChange},r.a.createElement(S.a,{value:"hex"},"HEX - #ffffff"),r.a.createElement(S.a,{value:"rgb"},"RGB - rgb(255,255,255)"),r.a.createElement(S.a,{value:"rgba"},"RGBA - rgba(255,255,255, 1.0)"))),r.a.createElement(N.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.open,autoHideDuration:3e3,message:r.a.createElement("span",{id:"message-id"},"Format Changed To ",n.toUpperCase()),ContentProps:{"aria-describedby":"message-id"},onClose:this.closeSnackbar,action:[r.a.createElement(P.a,{onClick:this.closeSnackbar,color:"inherit",key:"close","aria-label":"close"},r.a.createElement(B.a,null))]}))}}]),a}(n.Component));var A,L,T,G=function(e){var a=e.paletteName,t=e.emoji;return r.a.createElement("footer",{className:"Palette-footer"},a,r.a.createElement("span",{className:"emoji"},t))},M=(t(306),function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(d.a)(this,Object(h.a)(a).call(this,e))).state={level:500,format:"hex"},t.changeLevel=t.changeLevel.bind(Object(p.a)(t)),t.changeFormat=t.changeFormat.bind(Object(p.a)(t)),t}return Object(b.a)(a,e),Object(u.a)(a,[{key:"changeLevel",value:function(e){this.setState({level:e})}},{key:"changeFormat",value:function(e){this.setState({format:e})}},{key:"render",value:function(){var e=this.props.palette,a=e.colors,t=e.paletteName,o=e.emoji,n=e.id,l=this.props.classes,c=this.state,i=c.level,s=c.format,m=a[i].map(function(e){return r.a.createElement(k,{background:e[s],name:e.name,key:e.id,moreUrl:"/palette/".concat(n,"/").concat(e.id),showingFullPalette:!0})});return r.a.createElement("div",{className:l.Palette},r.a.createElement(I,{level:i,changeLevel:this.changeLevel,handleChange:this.changeFormat,showingAllColors:!0}),r.a.createElement("div",{className:l.colors},m),r.a.createElement(G,{paletteName:t,emoji:o}))}}]),a}(n.Component)),R=Object(v.a)({Palette:{height:"100vh",display:"flex",flexDirection:"column"},colors:{height:"90%"}})(M),z={root:{backgroundColor:"white",border:"1px solid black",borderRadius:"5px",padding:"0.5rem",position:"relative",overflow:"hidden",cursor:"pointer","&:hover svg":{opacity:1}},colors:{backgroundColor:"#dae1e4",height:"150px",width:"100%",borderRadius:"5px",overflow:"hidden"},title:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"0",color:"black",paddingTop:"0.5rem",fontSize:"1rem",position:"relative"},emoji:{marginLeft:"0.5rem",fontSize:"1.5rem"},miniColor:{height:"25%",width:"20%",display:"inline-block",margin:"0 auto",position:"relative",marginBottom:"-3.5px"},delete:{},deleteIcon:{color:"white",backgroundColor:"#eb3d30",width:"20px",height:"20px",position:"absolute",right:"0px",top:"0px",padding:"10px",zIndex:100,opacity:0,transition:"all 0.3s ease-in-out"}},U=t(114),H=t.n(U),q=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(d.a)(this,Object(h.a)(a).call(this,e))).deletePalette=t.deletePalette.bind(Object(p.a)(t)),t}return Object(b.a)(a,e),Object(u.a)(a,[{key:"deletePalette",value:function(e){e.stopPropagation(),this.props.handleDelete(this.props.id)}},{key:"render",value:function(){var e=this.props,a=e.classes,t=e.paletteName,o=e.emoji,n=e.colors,l=e.handleClick,c=n.map(function(e){return r.a.createElement("div",{className:a.miniColor,style:{backgroundColor:e.color},key:e.name})});return r.a.createElement("div",{className:a.root,onClick:l},r.a.createElement(H.a,{className:a.deleteIcon,style:{transition:"all 0.3s ease-in-out"},onClick:this.deletePalette}),r.a.createElement("div",{className:a.colors},c),r.a.createElement("h5",{className:a.title},t," ",r.a.createElement("span",{className:a.emoji},o)))}}]),a}(n.Component),V=Object(v.a)(z)(q),W=t(220),J=t.n(W),Y={root:(A={backgroundColor:"blue",height:"100vh",display:"flex",alignItems:"flex-start",justifyContent:"center"},Object(C.a)(A,"backgroundColor","#ff7700"),Object(C.a)(A,"backgroundImage","url(".concat(J.a,")")),Object(C.a)(A,"backgroundSize","cover"),Object(C.a)(A,"backgroundPosition","center center"),Object(C.a)(A,"overflow","scroll"),A),container:(L={width:"50%",display:"flex",alignItems:"flex-start",flexDirection:"column",flexWrap:"wrap"},Object(C.a)(L,j("xl"),{width:"80%"}),Object(C.a)(L,j("xs"),{width:"70%"}),L),nav:{display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center",color:"white","& a":{color:"white"}},palettes:(T={boxSizing:"border-box",width:"100%",display:"grid",gridTemplateColumns:"repeat(3, 30%)",gridGap:"1.5rem"},Object(C.a)(T,j("md"),{gridTemplateColumns:"repeat(2, 50%)"}),Object(C.a)(T,j("xs"),{gridTemplateColumns:"repeat(1, 100%)"}),T)},K=function(e){function a(){return Object(m.a)(this,a),Object(d.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(b.a)(a,e),Object(u.a)(a,[{key:"goToPalette",value:function(e){this.props.history.push("/palette/".concat(e))}},{key:"render",value:function(){var e=this,a=this.props,t=a.palettes,o=a.classes,n=a.deletePalette;return r.a.createElement("div",{className:o.root},r.a.createElement("div",{className:o.container},r.a.createElement("nav",{className:o.nav},r.a.createElement("h1",null,"React Colors"),r.a.createElement(i.c,{to:"/palette/new"},"Create Palette")),r.a.createElement("div",{className:o.palettes},t.map(function(a){return r.a.createElement(V,Object.assign({},a,{handleClick:function(){return e.goToPalette(a.id)},handleDelete:n,key:a.id,id:a.id}))}))))}}]),a}(n.Component),_=Object(v.a)(Y)(K),Q=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(d.a)(this,Object(h.a)(a).call(this,e)))._shades=t.gatherShades(t.props.palette,t.props.colorId),t.state={format:"hex"},t.changeFormat=t.changeFormat.bind(Object(p.a)(t)),t}return Object(b.a)(a,e),Object(u.a)(a,[{key:"gatherShades",value:function(e,a){var t=[],o=e.colors;for(var n in o)t=t.concat(o[n].filter(function(e){return e.id===a}));return t.slice(1)}},{key:"changeFormat",value:function(e){this.setState({format:e})}},{key:"render",value:function(){var e=this.state.format,a=this.props.palette,t=a.paletteName,o=a.emoji,n=a.id,l=this.props.classes,c=this._shades.map(function(a){return r.a.createElement(k,{key:a.name,name:a.name,background:a[e],showingFullPalette:!1})});return r.a.createElement("div",{className:l.Palette},r.a.createElement(I,{handleChange:this.changeFormat,showingAllColors:!1}),r.a.createElement("div",{className:l.colors},c,r.a.createElement("div",{className:l.goBack},r.a.createElement(i.c,{to:"/palette/".concat(n)},"GO BACK"))),r.a.createElement(G,{paletteName:t,emoji:o}))}}]),a}(n.Component),X=Object(v.a)({Palette:{height:"100vh",display:"flex",flexDirection:"column"},colors:{height:"90%"},goBack:{width:"20%",height:"50%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px",opacity:1,backgroundColor:"black","& a":{color:"white",width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",background:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",textTransform:"uppercase",border:"none",textDecoration:"none"}}})(Q),$=[{paletteName:"Material UI Colors",id:"material-ui-colors",emoji:"\ud83c\udfa8",colors:[{name:"red",color:"#F44336"},{name:"pink",color:"#E91E63"},{name:"purple",color:"#9C27B0"},{name:"deeppurple",color:"#673AB7"},{name:"indigo",color:"#3F51B5"},{name:"blue",color:"#2196F3"},{name:"lightblue",color:"#03A9F4"},{name:"cyan",color:"#00BCD4"},{name:"teal",color:"#009688"},{name:"green",color:"#4CAF50"},{name:"lightgreen",color:"#8BC34A"},{name:"lime",color:"#CDDC39"},{name:"yellow",color:"#FFEB3B"},{name:"amber",color:"#FFC107"},{name:"orange",color:"#FF9800"},{name:"deeporange",color:"#FF5722"},{name:"brown",color:"#795548"},{name:"grey",color:"#9E9E9E"},{name:"bluegrey",color:"#607D8B"}]},{paletteName:"Flat UI Colors v1",id:"flat-ui-colors-v1",emoji:"\ud83e\udd19",colors:[{name:"Turquoise",color:"#1abc9c"},{name:"Emerald",color:"#2ecc71"},{name:"PeterRiver",color:"#3498db"},{name:"Amethyst",color:"#9b59b6"},{name:"WetAsphalt",color:"#34495e"},{name:"GreenSea",color:"#16a085"},{name:"Nephritis",color:"#27ae60"},{name:"BelizeHole",color:"#2980b9"},{name:"Wisteria",color:"#8e44ad"},{name:"MidnightBlue",color:"#2c3e50"},{name:"SunFlower",color:"#f1c40f"},{name:"Carrot",color:"#e67e22"},{name:"Alizarin",color:"#e74c3c"},{name:"Clouds",color:"#ecf0f1"},{name:"Concrete",color:"#95a5a6"},{name:"Orange",color:"#f39c12"},{name:"Pumpkin",color:"#d35400"},{name:"Pomegranate",color:"#c0392b"},{name:"Silver",color:"#bdc3c7"},{name:"Asbestos",color:"#7f8c8d"}]},{paletteName:"Flat UI Colors Dutch",id:"flat-ui-colors-dutch",emoji:"\ud83c\uddf3\ud83c\uddf1",colors:[{name:"Sunflower",color:"#FFC312"},{name:"Energos",color:"#C4E538"},{name:"BlueMartina",color:"#12CBC4"},{name:"LavenderRose",color:"#FDA7DF"},{name:"BaraRose",color:"#ED4C67"},{name:"RadiantYellow",color:"#F79F1F"},{name:"AndroidGreen",color:"#A3CB38"},{name:"MediterraneanSea",color:"#1289A7"},{name:"LavenderTea",color:"#D980FA"},{name:"VerryBerry",color:"#B53471"},{name:"PuffinsBill",color:"#EE5A24"},{name:"PixelatedGrass",color:"#009432"},{name:"MerchantMarineBlue",color:"#0652DD"},{name:"ForgottenPurple",color:"#9980FA"},{name:"HollyHock",color:"#833471"},{name:"RedPigment",color:"#EA2027"},{name:"TurkishAqua",color:"#006266"},{name:"20000LeaguesUnderTheSea",color:"#1B1464"},{name:"CircumorbitalRing",color:"#5758BB"},{name:"MagentaPurple",color:"#6F1E51"}]},{paletteName:"Flat UI Colors American",id:"flat-ui-colors-american",emoji:"\ud83c\uddfa\ud83c\uddf8",colors:[{name:"LightGreenishBlue",color:"#55efc4"},{name:"FadedPoster",color:"#81ecec"},{name:"GreenDarnerTail",color:"#74b9ff"},{name:"ShyMoment",color:"#a29bfe"},{name:"CityLights",color:"#dfe6e9"},{name:"MintLeaf",color:"#00b894"},{name:"RobinsEggBlue",color:"#00cec9"},{name:"ElectronBlue",color:"#0984e3"},{name:"ExodusFruit",color:"#6c5ce7"},{name:"SoothingBreeze",color:"#b2bec3"},{name:"SourLemon",color:"#ffeaa7"},{name:"FirstDate",color:"#fab1a0"},{name:"PinkGlamour",color:"#ff7675"},{name:"Pico8Pink",color:"#fd79a8"},{name:"AmericanRiver",color:"#636e72"},{name:"BrightYarrow",color:"#fdcb6e"},{name:"OrangeVille",color:"#e17055"},{name:"Chi-Gong",color:"#d63031"},{name:"PrunusAvium",color:"#e84393"},{name:"DraculaOrchid",color:"#2d3436"}]},{paletteName:"Flat UI Colors Aussie",id:"flat-ui-colors-aussie",emoji:"\ud83c\udde6\ud83c\uddfa",colors:[{name:"Beekeeper",color:"#f6e58d"},{name:"SpicedNectarine",color:"#ffbe76"},{name:"PinkGlamour",color:"#ff7979"},{name:"JuneBud",color:"#badc58"},{name:"CoastalBreeze",color:"#dff9fb"},{name:"Turbo",color:"#f9ca24"},{name:"QuinceJelly",color:"#f0932b"},{name:"CarminePink",color:"#eb4d4b"},{name:"PureApple",color:"#6ab04c"},{name:"HintOfIcePack",color:"#c7ecee"},{name:"MiddleBlue",color:"#7ed6df"},{name:"Heliotrope",color:"#e056fd"},{name:"ExodusFruit",color:"#686de0"},{name:"DeepKoamaru",color:"#30336b"},{name:"SoaringEagle",color:"#95afc0"},{name:"GreenlandGreen",color:"#22a6b3"},{name:"SteelPink",color:"#be2edd"},{name:"Blurple",color:"#4834d4"},{name:"DeepCove",color:"#130f40"},{name:"WizardGrey",color:"#535c68"}]},{paletteName:"Flat UI Colors British",id:"flat-ui-colors-british",emoji:"\ud83c\uddec\ud83c\udde7",colors:[{name:"ProtossPylon",color:"#00a8ff"},{name:"Periwinkle",color:"#9c88ff"},{name:"Rise-N-Shine",color:"#fbc531"},{name:"DownloadProgress",color:"#4cd137"},{name:"Seabrook",color:"#487eb0"},{name:"VanaDylBlue",color:"#0097e6"},{name:"MattPurple",color:"#8c7ae6"},{name:"NanohanachaGold",color:"#e1b12c"},{name:"SkirretGreen",color:"#44bd32"},{name:"Naval",color:"#40739e"},{name:"NasturcianFlower",color:"#e84118"},{name:"LynxWhite",color:"#f5f6fa"},{name:"BlueberrySoda",color:"#7f8fa6"},{name:"MazarineBlue",color:"#273c75"},{name:"BlueNights",color:"#353b48"},{name:"HarleyOrange",color:"#c23616"},{name:"HintOfPensive",color:"#dcdde1"},{name:"ChainGangGrey",color:"#718093"},{name:"PicoVoid",color:"#192a56"},{name:"ElectroMagnetic",color:"#2f3640"}]},{paletteName:"Flat UI Colors Spanish",id:"flat-ui-colors-spanish",emoji:"\ud83c\uddea\ud83c\uddf8",colors:[{name:"JacksonsPurple",color:"#40407a"},{name:"C64Purple",color:"#706fd3"},{name:"SwanWhite",color:"#f7f1e3"},{name:"SummerSky",color:"#34ace0"},{name:"CelestialGreen",color:"#33d9b2"},{name:"LuckyPoint",color:"#2c2c54"},{name:"Liberty",color:"#474787"},{name:"HotStone",color:"#aaa69d"},{name:"DevilBlue",color:"#227093"},{name:"PalmSpringsSplash",color:"#218c74"},{name:"FlourescentRed",color:"#ff5252"},{name:"SyntheticPumpkin",color:"#ff793f"},{name:"CrocodileTooth",color:"#d1ccc0"},{name:"MandarinSorbet",color:"#ffb142"},{name:"SpicedButterNut",color:"#ffda79"},{name:"EyeOfNewt",color:"#b33939"},{name:"ChileanFire",color:"#cd6133"},{name:"GreyPorcelain",color:"#84817a"},{name:"AlamedaOchre",color:"#cc8e35"},{name:"Desert",color:"#ccae62"}]},{paletteName:"Flat UI Colors Indian",id:"flat-ui-colors-indian",emoji:"\ud83c\uddee\ud83c\uddf3",colors:[{name:"OrchidOrange",color:"#FEA47F"},{name:"SpiroDiscoBall",color:"#25CCF7"},{name:"HoneyGlow",color:"#EAB543"},{name:"SweetGarden",color:"#55E6C1"},{name:"FallingStar",color:"#CAD3C8"},{name:"RichGardenia",color:"#F97F51"},{name:"ClearChill",color:"#1B9CFC"},{name:"WhitePepper",color:"#F8EFBA"},{name:"Keppel",color:"#58B19F"},{name:"ShipsOfficer",color:"#2C3A47"},{name:"FieryFuchsia",color:"#B33771"},{name:"BlueBell",color:"#3B3B98"},{name:"GeorgiaPeach",color:"#FD7272"},{name:"OasisStream",color:"#9AECDB"},{name:"BrightUbe",color:"#D6A2E8"},{name:"MagentaPurple",color:"#6D214F"},{name:"EndingNavyBlue",color:"#182C61"},{name:"SasquatchSocks",color:"#FC427B"},{name:"PineGlade",color:"#BDC581"},{name:"HighlighterLavender",color:"#82589F"}]},{paletteName:"Flat UI Colors French",id:"flat-ui-colors-french",emoji:"\ud83c\uddeb\ud83c\uddf7",colors:[{name:"FlatFlesh",color:"#fad390"},{name:"MelonMelody",color:"#f8c291"},{name:"Livid",color:"#6a89cc"},{name:"Spray",color:"#82ccdd"},{name:"ParadiseGreen",color:"#b8e994"},{name:"SquashBlossom",color:"#f6b93b"},{name:"MandarinRed",color:"#e55039"},{name:"AzraqBlue",color:"#4a69bd"},{name:"Dupain",color:"#60a3bc"},{name:"AuroraGreen",color:"#78e08f"},{name:"IcelandPoppy",color:"#fa983a"},{name:"TomatoRed",color:"#eb2f06"},{name:"YueGuangBlue",color:"#1e3799"},{name:"GoodSamaritan",color:"#3c6382"},{name:"Waterfall",color:"#38ada9"},{name:"CarrotOrange",color:"#e58e26"},{name:"JalapenoRed",color:"#b71540"},{name:"DarkSapphire",color:"#0c2461"},{name:"ForestBlues",color:"#0a3d62"},{name:"ReefEncounter",color:"#079992"}]}],Z=t(25),ee=t.n(Z),ae=t(7),te=t(529),oe=t(524),ne=t(528),re=t(526),le=t(527),ce=t(525),ie=t(47),se=t(226),me=(t(315),function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(d.a)(this,Object(h.a)(a).call(this,e))).state={newPaletteName:"",open:!0,stage:"form"},t.handleChange=t.handleChange.bind(Object(p.a)(t)),t.showEmojiPicker=t.showEmojiPicker.bind(Object(p.a)(t)),t.savePalette=t.savePalette.bind(Object(p.a)(t)),t}return Object(b.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;ie.ValidatorForm.addValidationRule("isPaletteNameUnique",function(a){return e.props.palettes.every(function(e){return e.paletteName.toLowerCase()!==a.toLowerCase()})})}},{key:"handleChange",value:function(e){this.setState(Object(C.a)({},e.target.name,e.target.value)),this.setState({newPaletteName:e.target.value})}},{key:"showEmojiPicker",value:function(){this.setState({stage:"emoji"})}},{key:"savePalette",value:function(e){console.log(e.native);var a={paletteName:this.state.newPaletteName,emoji:e.native};this.props.handleSubmit(a)}},{key:"render",value:function(){var e=this.state.newPaletteName,a=this.props.hideForm;return r.a.createElement("div",null,r.a.createElement(oe.a,{open:"emoji"===this.state.stage,onClose:a},r.a.createElement(ce.a,{id:"form-dialog-title"},"Choose a Palette Emoji"),r.a.createElement(se.a,{title:"Pick a palette emoji",onSelect:this.savePalette})),r.a.createElement(oe.a,{open:"form"===this.state.stage,"aria-labelledby":"form-dialog-title",onClose:a},r.a.createElement(ce.a,{id:"form-dialog-title"},"Choose a Palette Name"),r.a.createElement(ie.ValidatorForm,{onSubmit:this.showEmojiPicker},r.a.createElement(re.a,null,r.a.createElement(le.a,null,"Please enter a name for your new beautiful palette. Make sure it's unique."),r.a.createElement(ie.TextValidator,{label:"Palette Name",value:e,name:"newPaletteName",onChange:this.handleChange,fullWidth:!0,margin:"normal",validators:["required","isPaletteNameUnique"],errorMessage:["Enter Palette Name","Name already used!"]})),r.a.createElement(ne.a,null,r.a.createElement(te.a,{onClick:a,color:"primary"},"Cancel"),r.a.createElement(te.a,{variant:"contained",color:"primary",type:"submit"},"Save Palette")))))}}]),a}(n.Component)),ue=t(537),de=t(530),he=t(531),pe=t(228),be=t(222),fe=t.n(be),ge=function(e){return{root:{display:"flex"},hide:{display:"none"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),flexDirection:"row",justifyContent:"space-between",alignItems:"center",height:"64px"},appBarShift:{width:"calc(100% - ".concat(400,"px)"),marginLeft:400,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:12,marginRight:20},navBtns:{marginRight:"1rem","& a":{textDecoration:"none"}},button:{margin:"0 0.5rem"}}},ve=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(d.a)(this,Object(h.a)(a).call(this,e))).state={newPaletteName:"",formShowing:!1},t.handleChange=t.handleChange.bind(Object(p.a)(t)),t.showForm=t.showForm.bind(Object(p.a)(t)),t.hideForm=t.hideForm.bind(Object(p.a)(t)),t}return Object(b.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;ie.ValidatorForm.addValidationRule("isPaletteNameUnique",function(a){return e.props.palettes.every(function(e){return e.paletteName.toLowerCase()!==a.toLowerCase()})})}},{key:"handleChange",value:function(e){this.setState(Object(C.a)({},e.target.name,e.target.value)),this.setState({newPaletteName:e.target.value})}},{key:"showForm",value:function(){this.setState({formShowing:!0})}},{key:"hideForm",value:function(){this.setState({formShowing:!1})}},{key:"render",value:function(){var e=this.props,a=e.classes,t=e.open,o=e.palettes,n=e.handleSubmit;return r.a.createElement("div",{className:a.root},r.a.createElement(ue.a,null),r.a.createElement(de.a,{position:"fixed",color:"default",className:ee()(a.appBar,Object(C.a)({},a.appBarShift,t))},r.a.createElement(he.a,{disableGutters:!t},r.a.createElement(P.a,{color:"inherit","aria-label":"Open drawer",onClick:this.props.handleDrawerOpen,className:ee()(a.menuButton,Object(C.a)({},a.hide,t))},r.a.createElement(fe.a,null)),r.a.createElement(pe.a,{variant:"h6",color:"inherit",noWrap:!0},"Create a Palette")),r.a.createElement("div",{className:a.navBtns},r.a.createElement(i.c,{to:"/"},r.a.createElement(te.a,{variant:"contained",color:"secondary",className:a.button},"Go Back")),r.a.createElement(te.a,{variant:"contained",color:"primary",onClick:this.showForm,className:a.button},"Save"))),this.state.formShowing&&r.a.createElement(me,{palettes:o,handleSubmit:n,hideForm:this.hideForm}))}}]),a}(n.Component),Ce=Object(ae.a)(ge,{withTheme:!0})(ve),ye=t(223),we={picker:{width:"100% !important",marginTop:"2rem"},addColor:{width:"100%",padding:"1rem",marginTop:"1rem",fontSize:"2rem"},colorNameInput:{width:"100%",height:"70px"}},je=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(d.a)(this,Object(h.a)(a).call(this,e))).state={currentColor:"teal",newColorName:""},t.updateCurrentColor=t.updateCurrentColor.bind(Object(p.a)(t)),t.handleChange=t.handleChange.bind(Object(p.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(p.a)(t)),t}return Object(b.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;ie.ValidatorForm.addValidationRule("isColorNameUnique",function(a){return e.props.colors.every(function(e){return e.name.toLowerCase()!==a.toLowerCase()})}),ie.ValidatorForm.addValidationRule("isColorUnique",function(a){return e.props.colors.every(function(a){return a.color!==e.state.currentColor})})}},{key:"updateCurrentColor",value:function(e){this.setState({currentColor:e.hex})}},{key:"handleChange",value:function(e){this.setState(Object(C.a)({},e.target.name,e.target.value)),this.setState({newPaletteName:e.target.value})}},{key:"handleSubmit",value:function(){var e={color:this.state.currentColor,name:this.state.newColorName};this.props.addNewColor(e),this.setState({newColorName:""})}},{key:"render",value:function(){var e=this.props,a=e.paletteIsFull,t=e.classes,o=this.state,n=o.currentColor,l=o.newColorName;return r.a.createElement("div",null,r.a.createElement(ye.ChromePicker,{color:this.state.currentColor,onChangeComplete:this.updateCurrentColor,className:t.picker}),r.a.createElement(ie.ValidatorForm,{onSubmit:this.handleSubmit},r.a.createElement(ie.TextValidator,{value:l,className:t.colorNameInput,placeholder:"Color Name",name:"newColorName",variant:"filled",marin:"normal",onChange:this.handleChange,validators:["required","isColorUnique","isColorNameUnique"],errorMessages:["Enter a color name","The color must be unique!","Each color has to be unique!"]}),r.a.createElement(te.a,{variant:"contained",type:"submit",color:"primary",disabled:a,className:t.addColor,style:{backgroundColor:a?"grey":n}},a?"Palette is full":"Add Color")))}}]),a}(n.Component),Ee=Object(ae.a)(we,{withTheme:!0})(je),Oe=t(538),ke=t(532),xe=t(224),Se=t.n(xe),Ne=t(77),Pe={root:{width:"20%",height:"25%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px","&:hover svg":{color:"white",transform:"scale(1.5)"}},boxContent:{position:"absolute",width:"100%",left:"0px",bottom:"0px",padding:"10px",color:"rgba(0,0,0,0.5)",letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px",display:"flex",justifyContent:"space-between"},deleteIcon:{transition:"all 0.3s ease-in-out"}},Fe=Object(Ne.b)(function(e){var a=e.classes,t=e.handleClick,o=e.name,n=e.color;return r.a.createElement("div",{className:a.root,style:{backgroundColor:n}},r.a.createElement("div",{className:a.boxContent},r.a.createElement("span",null,o),r.a.createElement("span",null,r.a.createElement(H.a,{className:a.deleteIcon,onClick:t}))))}),Be=Object(ae.a)(Pe)(Fe),De=Object(Ne.a)(function(e){var a=e.colors,t=e.removeColor;return r.a.createElement("div",{style:{height:"100%"}},a.map(function(e,a){return r.a.createElement(Be,{index:a,key:e.name,color:e.color,name:e.name,handleClick:function(){return t(e.name)}})}))});function Ie(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,o)}return t}function Ae(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?Ie(t,!0).forEach(function(a){Object(C.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ie(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var Le=function(e){return{root:{display:"flex"},hide:{display:"none"},drawer:{width:400,flexShrink:0,height:"100vh"},drawerPaper:{width:400,display:"flex",alignItems:"center"},drawerHeader:Ae({display:"flex",alignItems:"center",width:"100%",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,height:"calc(100vh - 64px)",padding:0,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-400},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},container:{width:"90%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},buttons:{width:"100%"},button:{width:"50%"}}},Te=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(d.a)(this,Object(h.a)(a).call(this,e))).handleDrawerOpen=function(){t.setState({open:!0})},t.handleDrawerClose=function(){t.setState({open:!1})},t.onSortEnd=function(e){var a=e.oldIndex,o=e.newIndex;t.setState(function(e){var t=e.colors;return{colors:Object(Ne.c)(t,a,o)}})},t.state={open:!1,currentColor:"teal",newColorName:"",colors:t.props.palettes[0].colors},t.updateCurrentColor=t.updateCurrentColor.bind(Object(p.a)(t)),t.addNewColor=t.addNewColor.bind(Object(p.a)(t)),t.handleChange=t.handleChange.bind(Object(p.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(p.a)(t)),t.removeColor=t.removeColor.bind(Object(p.a)(t)),t.clearColors=t.clearColors.bind(Object(p.a)(t)),t.addRandomColor=t.addRandomColor.bind(Object(p.a)(t)),t}return Object(b.a)(a,e),Object(u.a)(a,[{key:"updateCurrentColor",value:function(e){this.setState({currentColor:e.hex})}},{key:"addNewColor",value:function(e){this.setState({colors:[].concat(Object(s.a)(this.state.colors),[e]),newColorName:""})}},{key:"handleChange",value:function(e){this.setState(Object(C.a)({},e.target.name,e.target.value)),this.setState({newPaletteName:e.target.value})}},{key:"handleSubmit",value:function(e){e.id=e.paletteName.toLowerCase().replace(/ /g,"-"),e.colors=this.state.colors,this.props.savePalette(e),this.props.history.push("/")}},{key:"removeColor",value:function(e){this.setState({colors:this.state.colors.filter(function(a){return a.name!==e})})}},{key:"clearColors",value:function(){this.setState({colors:[]})}},{key:"addRandomColor",value:function(){var e=this.props.palettes.map(function(e){return e.colors}).flat(),a=e[Math.floor(Math.random()*e.length)];this.setState({colors:[].concat(Object(s.a)(this.state.colors),[a])})}},{key:"render",value:function(){var e=this.props,a=e.classes,t=e.maxColors,o=e.palettes,n=this.state,l=n.open,c=n.colors,i=c.length>=t;return r.a.createElement("div",{className:a.root},r.a.createElement(Ce,{open:l,palettes:o,handleSubmit:this.handleSubmit,handleDrawerOpen:this.handleDrawerOpen}),r.a.createElement(Oe.a,{className:a.drawer,variant:"persistent",anchor:"left",open:l,classes:{paper:a.drawerPaper}},r.a.createElement("div",{className:a.drawerHeader},r.a.createElement(P.a,{onClick:this.handleDrawerClose},r.a.createElement(Se.a,null))),r.a.createElement(ke.a,null),r.a.createElement("div",{className:a.container},r.a.createElement(pe.a,{variant:"h4",gutterBottom:!0},"Design Your Palette"),r.a.createElement("div",{className:a.buttons},r.a.createElement(te.a,{variant:"contained",color:"secondary",onClick:this.clearColors,className:a.button},"Clear Palette"),r.a.createElement(te.a,{variant:"contained",color:"primary",onClick:this.addRandomColor,disabled:i,className:a.button},"Random Color")),r.a.createElement(Ee,{paletteIsFull:i,addNewColor:this.addNewColor,colors:c}))),r.a.createElement("main",{className:ee()(a.content,Object(C.a)({},a.contentShift,l))},r.a.createElement("div",{className:a.drawerHeader}),r.a.createElement(De,{colors:c,removeColor:this.removeColor,axis:"xy",onSortEnd:this.onSortEnd})))}}]),a}(n.Component);Te.defaultProps={maxColors:20};var Ge=Object(ae.a)(Le,{withTheme:!0})(Te),Me=[50,100,200,300,400,500,600,700,800,900];function Re(e){for(var a={paletteName:e.paletteName,id:e.id,emoji:e.emoji,colors:{}},t=0,o=Me;t<o.length;t++){var n=o[t];a.colors[n]=[]}var r,l,c=!0,i=!1,s=void 0;try{for(var m,u=e.colors[Symbol.iterator]();!(c=(m=u.next()).done);c=!0){var d=m.value,h=(r=d.color,l=10,w.a.scale(function(e){return[w()(e).darken(1.4).hex(),e,"#fff"]}(r)).mode("lab").colors(l)).reverse();for(var p in h)a.colors[Me[p]].push({name:"".concat(d.name," ").concat(Me[p]),id:d.name.toLowerCase().replace(/ /g,"-"),hex:h[p],rgb:w()(h[p]).css(),rgba:w()(h[p]).css().replace("rgb","rgba").replace(")",",1.0)")})}}catch(b){i=!0,s=b}finally{try{c||null==u.return||u.return()}finally{if(i)throw s}}return a}var ze=function(e){function a(e){var t;Object(m.a)(this,a),t=Object(d.a)(this,Object(h.a)(a).call(this,e));var o=JSON.parse(window.localStorage.getItem("palettes"));return t.state={palettes:o||$},t.savePalette=t.savePalette.bind(Object(p.a)(t)),t.findPalette=t.findPalette.bind(Object(p.a)(t)),t.deletePalette=t.deletePalette.bind(Object(p.a)(t)),t}return Object(b.a)(a,e),Object(u.a)(a,[{key:"findPalette",value:function(e){return this.state.palettes.find(function(a){return a.id===e})}},{key:"deletePalette",value:function(e){this.setState(function(a){return{palettes:a.palettes.filter(function(a){return a.id!==e})}},this.syncLocalStorage)}},{key:"savePalette",value:function(e){this.setState({palettes:[].concat(Object(s.a)(this.state.palettes),[e])},this.syncLocalStorage)}},{key:"syncLocalStorage",value:function(){window.localStorage.setItem("palettes",JSON.stringify(this.state.palettes))}},{key:"render",value:function(){var e=this;return r.a.createElement(i.b,{basename:"/"},r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/palette/new",render:function(a){return r.a.createElement(Ge,Object.assign({savePalette:e.savePalette,palettes:e.state.palettes},a))}}),r.a.createElement(f.a,{exact:!0,path:"/palette/:paletteId/:colorId",render:function(a){return r.a.createElement(X,{colorId:a.match.params.colorId,palette:Re(e.findPalette(a.match.params.paletteId))})}}),r.a.createElement(f.a,{exact:!0,path:"/",render:function(a){return r.a.createElement(_,Object.assign({palettes:e.state.palettes,deletePalette:e.deletePalette},a))}}),r.a.createElement(f.a,{exact:!0,path:"/palette/:id",render:function(a){return r.a.createElement(R,{palette:Re(e.findPalette(a.match.params.id))})}})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(i.a,null,r.a.createElement(ze,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[237,1,2]]]);
//# sourceMappingURL=main.da3fdffa.chunk.js.map