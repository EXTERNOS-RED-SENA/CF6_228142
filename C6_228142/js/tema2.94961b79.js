(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tema2"],{"03cc":function(s,a,e){s.exports=e.p+"img/22.f24bea30.png"},"117e":function(s,a,e){s.exports=e.p+"img/18.4d60b24d.png"},1185:function(s,a,e){s.exports=e.p+"img/26.56fba14e.png"},"20a4":function(s,a,e){"use strict";a["a"]={data:()=>({mainId:Math.floor(Math.random()*10**10),selected:0,elements:[],stateStr:"",rendered:!1,firstSelection:!0}),watch:{menuState(){this.domUpdated()}},created(){window.addEventListener("resize",this.domUpdated)},mounted(){this.$nextTick(()=>{this.crearElementos()})},computed:{menuState(){return this.$store.getters.isMenuOpen},navObj(){if(!this.elements.length||!this.secuencial)return{};const s=this.elements.map(s=>s.id),a=s.indexOf(this.selected);if(a<0)return{};const e={};return 0===a?e.next=s[a+1]:(a+1===s.length||(e.next=s[a+1]),e.back=s[a-1]),e}},beforeDestroy(){window.removeEventListener("resize",this.domUpdated)},updated(){this.$nextTick(()=>{this.getStateStr()!=this.stateStr&&this.crearElementos()})},methods:{crearElementos(){return this.$slots.default&&this.$slots.default.length?(this.domUpdated(),this.elements=this.$slots.default.map((s,a)=>{const e=s.data&&s.data.attrs?s.data.attrs:[];return{id:this.mainId+a+1,elm:s.elm,...e}}),this.firstSelection&&(this.selected=this.selected>0?this.selected:this.elements[0].id),void(this.stateStr=this.getStateStr())):[]},getActiveHeight(s){return this.$refs[s][0].scrollHeight+"px"},getStateStr(){return this.$slots.default.map(s=>s.elm.outerHTML).join("")},domUpdated(){this.rendered=!1,setTimeout(()=>{this.rendered=!0},100)}}}},2370:function(s,a,e){s.exports=e.p+"img/33.7fa5fb12.png"},"385b":function(s,a,e){s.exports=e.p+"img/27.1aeb8a5e.png"},"3f47":function(s,a,e){s.exports=e.p+"img/28.869d2570.png"},"5ea9":function(s,a,e){s.exports=e.p+"img/21.82a6a5d7.png"},"5f9d":function(s,a,e){s.exports=e.p+"img/23.3fdedd1a.svg"},8564:function(s,a,e){"use strict";var t=function(){var s=this,a=s._self._c;return a("div",{staticClass:"slyder-a"},["a"===s.tipo?a("div",{staticClass:"slyder-a__tipo-a"},[s.navObj.next?a("div",{staticClass:"slyder-a__btn--sigt",on:{click:function(a){s.selected=s.navObj.next},mouseover:function(a){s.mostrarIndicador=!1}}},[s.mostrarIndicador?a("div",{staticClass:"indicador__container indicador--left"},[a("div",{staticClass:"indicador--click"})]):s._e()]):s._e(),s.navObj.back?a("div",{staticClass:"slyder-a__btn--atrs",on:{click:function(a){s.selected=s.navObj.back}}}):s._e(),a("div",{staticClass:"slyder-a__bullets"},s._l(s.elements,(function(e){return a("div",{key:"sl-blt-key-"+e.id,staticClass:"slyder-a__bullets__item",class:{"slyder-a__bullets__item--active":s.selected===e.id},on:{click:function(a){s.selected=e.id}}})})),0)]):s._e(),s.elements.length&&s.rendered?a("ScrollHorizontal",{attrs:{selectedId:"sl-"+s.selected,"item-full-width":""}},s._l(s.elements,(function(s){return a("div",{directives:[{name:"child",rawName:"v-child",value:s.elm,expression:"item.elm"}],key:"sl-key-"+s.id,staticClass:"slyder-a__item",attrs:{id:"sl-"+s.id}})})),0):s._e(),"b"===s.tipo?a("div",{staticClass:"slyder-a__tipo-b mt-3"},[a("div",{staticClass:"slyder-a__btn--atrs",class:{hide:!s.navObj.back},on:{click:function(a){s.selected=s.navObj.back}}}),a("div",{staticClass:"slyder-a__bullets"},s._l(s.elements,(function(e){return a("div",{key:"sl-blt-key-"+e.id,staticClass:"slyder-a__bullets__item",class:{"slyder-a__bullets__item--active":s.selected===e.id},on:{click:function(a){s.selected=e.id}}})})),0),a("div",{staticClass:"slyder-a__btn--sigt",class:{hide:!s.navObj.next},on:{click:function(a){s.selected=s.navObj.next},mouseover:function(a){s.mostrarIndicador=!1}}},[s.mostrarIndicador?a("div",{staticClass:"indicador__container indicador--left"},[a("div",{staticClass:"indicador--click"})]):s._e()])]):s._e(),a("div",{staticClass:"hidden-slot"},[s._t("default")],2)],1)},i=[],o=function(){var s=this,a=s._self._c;return a("div",{ref:"hContainer",staticClass:"horizontal-scroll__wrapper"},[a("div",{staticClass:"horizontal-scroll",class:[{"horizontal-scroll--item-fw":s.itemFullWidth},{row:s.row}],style:[{transform:`translate(${s.scrollVal}px,0px)`}]},[s._t("default")],2)])},n=[],c={name:"ScrollHorizontal",props:{selectedId:{type:String,default:""},itemFullWidth:{type:Boolean,default:!1},row:{type:Boolean,default:!1}},data(){return{scrollVal:0,ids:[]}},watch:{selectedId(s){s.length&&this.scroll()}},mounted(){this.getCords(),this.scroll(),window.addEventListener("resize",this.scroll)},updated(){this.getCords()},beforeDestroy(){window.removeEventListener("resize",this.scroll)},methods:{scroll(){var s;const a=null===(s=this.ids.find(s=>s.id===this.selectedId))||void 0===s?void 0:s.id,e=document.getElementById(a);if(!Object.keys(this.$slots.default).length||!this.selectedId.length||null===e)return;const t=this.$refs.hContainer,i=e.offsetWidth*this.ids.length;let o=e.offsetLeft;const n=t.offsetWidth/e.offsetWidth;n>1&&i-o<t.offsetWidth&&(o=i-t.offsetWidth),this.scrollVal=1===this.ids.length?0:-o},getCords(){this.$slots.default&&(this.ids=this.$slots.default.map(s=>({id:s.elm.id,key:s.key})))}}},r=c,d=(e("fff0"),e("2877")),l=Object(d["a"])(r,o,n,!1,null,"2a7d1721",null),u=l.exports,m=e("20a4"),p={name:"SlyderA",components:{ScrollHorizontal:u},mixins:[m["a"]],props:{tipo:{type:String,default:"a"}},data:()=>({mostrarIndicador:!0,secuencial:!0})},v=p,g=Object(d["a"])(v,t,i,!1,null,null,null);a["a"]=g.exports},a43b:function(s,a,e){s.exports=e.p+"img/24.7cd4c8dd.png"},a84e:function(s,a,e){"use strict";var t=function(){var s=this,a=s._self._c;return a("div",{staticClass:"acordion"},[s._l(s.elements,(function(e,t){return a("div",{key:e.id,staticClass:"p-3 pb-0 p-md-4 pb-md-0 mb-3",class:s.cardClass(e.id)},[a("div",{staticClass:"acordion__header mb-3 mb-md-4",on:{click:function(a){s.selected=s.selected!=e.id?e.id:0},mouseover:function(a){s.mostrarIndicador=(!s.mostrarIndicador||1!==t)&&s.mostrarIndicador}}},[a("div",{staticClass:"d-flex align-items-center"},["a"===s.tipo?a("div",{staticClass:"acordion__accion"},[a("div",{staticClass:"acordion__accion__btn--a h3 mb-0 me-3"},[s.selected===e.id?a("i",{staticClass:"fas fa-minus"}):a("i",{staticClass:"fas fa-plus"}),s.mostrarIndicador&&1===t?a("div",{staticClass:"indicador__container"},[a("div",{staticClass:"indicador--click indicador--sm"})]):s._e()])]):s._e(),a("div",{staticClass:"acordion__titulo"},[a("h3",{staticClass:"mb-0",domProps:{innerHTML:s._s(e.titulo)}})])]),"b"===s.tipo?a("div",{staticClass:"acordion__accion"},[a("div",{staticClass:"acordion__accion__btn--b h3 mb-0"},[s.selected===e.id?a("i",{staticClass:"fas fa-angle-up"}):a("i",{staticClass:"fas fa-angle-down"}),s.mostrarIndicador&&1===t?a("div",{staticClass:"indicador__container indicador--left"},[a("div",{staticClass:"indicador--click indicador--sm"})]):s._e()])]):s._e()]),a("div",{staticClass:"acordion__contenido",style:{height:s.rendered&&s.selected===e.id?s.getActiveHeight(e.id):0}},[a("div",{directives:[{name:"child",rawName:"v-child",value:e.elm,expression:"elm.elm"}],ref:e.id,refInFor:!0,staticClass:"acordion__contenido__item pb-3 pb-md-4"})])])})),a("div",{staticClass:"hidden-slot"},[s._t("default")],2)],2)},i=[],o=(e("14d9"),e("20a4")),n={name:"AcordionA",mixins:[o["a"]],props:{claseTarjeta:{type:String,default:""},tipo:{type:String,default:"a"}},data:()=>({mostrarIndicador:!0}),mounted(){this.$nextTick(()=>{setTimeout(()=>{this.domUpdated()},5e3)})},methods:{cardClass(s){const a=[];return this.claseTarjeta.length?a.push(this.claseTarjeta):a.push("tarjeta tarjeta--blanca"),this.selected===s&&a.push("acordion__activo"),a}}},c=n,r=e("2877"),d=Object(r["a"])(c,t,i,!1,null,null,null);a["a"]=d.exports},aac1:function(s,a,e){s.exports=e.p+"img/29.66508893.png"},b676:function(s,a,e){s.exports=e.p+"img/icon.946e4a83.svg"},bec2:function(s,a,e){},c521:function(s,a,e){s.exports=e.p+"img/19.21c0caf2.png"},c868:function(s,a,e){s.exports=e.p+"img/32.b2fd81eb.png"},ca0a:function(s,a,e){s.exports=e.p+"img/30.93ed35e9.png"},cd97:function(s,a,e){s.exports=e.p+"img/20.7e1e9223.png"},d4b3:function(s,a,e){s.exports=e.p+"img/31.3d871231.png"},e9af:function(s,a,e){s.exports=e.p+"img/33.c5a28cc1.svg"},fab4:function(s,a,e){s.exports=e.p+"img/25.6fb79808.png"},fd11:function(s,a,e){"use strict";e.r(a);var t=function(){var s=this,a=s._self._c;return a("div",{staticClass:"curso-main-container pb-3"},[a("BannerInterno"),a("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},[s._m(0),s._m(1),a("Separador"),s._m(2),s._m(3),s._m(4),s._m(5),s._m(6),s._m(7),s._m(8),s._m(9),a("figcaption",[s._v("Fuente: OIT, 2024. ")]),a("Separador"),s._m(10),s._m(11),s._m(12),a("div",{staticClass:"row bg6 align-items-center"},[a("div",{staticClass:"px-lg-5 px-4"},[a("div",{staticClass:"bgw brad p-5 my-5"},[a("SlyderA",{attrs:{tipo:"b"}},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-6 my-2"},[a("h5",{staticClass:"mb-4"},[s._v("Puntos de conexión")]),a("p",[s._v("Las áreas de trabajo deben contar con puntos de conexión adecuados, como tomas de red y conectores RJ-45. Estos puntos de conexión permiten a los usuarios finales conectar sus dispositivos, como computadoras, impresoras y teléfonos, a la red. Los puntos de conexión deben estar instalados de manera que sean accesibles y seguros, evitando riesgos de daño o desconexión accidental. ")])]),a("div",{staticClass:"col-lg-5 my-2"},[a("img",{staticClass:"img-a img-t",attrs:{src:e("fab4"),alt:""}})])]),a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-6 my-2"},[a("h5",{staticClass:"mb-4"},[s._v("Cables de par trenzado")]),a("p",[s._v("Los cables de par trenzado, como Cat5e, Cat6 y Cat6a, son comúnmente utilizados en las áreas de trabajo debido a su capacidad para soportar altas velocidades de transmisión de datos y su resistencia a la interferencia. Estos cables deben estar correctamente instalados y terminados para asegurar una conexión de red eficiente y confiable.")])]),a("div",{staticClass:"col-lg-5 my-2"},[a("img",{staticClass:"img-a img-t",attrs:{src:e("1185"),alt:""}})])]),a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-6 my-2"},[a("h5",{staticClass:"mb-4"},[s._v("Equipos de usuario final")]),a("p",[s._v("Los equipos de usuario final, como computadoras, impresoras y teléfonos, deben estar conectados a los puntos de conexión en las áreas de trabajo. Estos equipos deben ser compatibles con los estándares de red y deben estar configurados para asegurar una conexión segura y eficiente.")])]),a("div",{staticClass:"col-lg-5 my-2"},[a("img",{staticClass:"img-a img-t",attrs:{src:e("385b"),alt:""}})])]),a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-6 my-2"},[a("h5",{staticClass:"mb-4"},[s._v("Mobiliario y organización ")]),a("p",[s._v("Las áreas de trabajo deben estar diseñadas de manera que el mobiliario y la organización del espacio faciliten el acceso a los puntos de conexión y a los equipos de red. Esto incluye la disposición de escritorios, estaciones de trabajo y otros elementos de mobiliario para asegurar una conexión de red eficiente y segura.")])]),a("div",{staticClass:"col-lg-5 my-2"},[a("img",{staticClass:"img-a img-t",attrs:{src:e("3f47"),alt:""}})])]),a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-6 my-2"},[a("h5",{staticClass:"mb-4"},[s._v("Cuartos Técnicos")]),a("p",[s._v("Los cuartos técnicos, también conocidos como cuartos de telecomunicaciones, albergan los equipos de red centralizados, como los "),a("i",[s._v("switches")]),s._v(", "),a("i",[s._v("routers")]),s._v(" y paneles de parcheo. Estos cuartos deben estar diseñados para proporcionar un entorno seguro y controlado para los equipos de red, con sistemas de ventilación, control de temperatura y protección contra incendios.")])]),a("div",{staticClass:"col-lg-5 my-2"},[a("img",{staticClass:"img-a img-t",attrs:{src:e("aac1"),alt:""}})])])])],1)])]),a("div",{staticClass:"row bg4 align-items-center"},[a("div",{staticClass:"px-lg-5 px-4"},[s._m(13),a("div",{staticClass:"row justify-content-center"},[s._m(14),a("div",{staticClass:"col-lg-9 my-lg-0 my-3"},[a("AcordionA",{attrs:{tipo:"a","clase-tarjeta":"tarjeta bg7"}},[a("div",{attrs:{titulo:"Equipos de red centralizados"}},[a("p",[s._v("Los cuartos técnicos mantienen equipos de red centralizados, como "),a("i",[s._v("switches")]),s._v(", "),a("i",[s._v("routers")]),s._v(" y paneles de parcheo. Estos equipos se usan para la distribución y gestión de los servicios de red. Los "),a("i",[s._v("switches")]),s._v(" y "),a("i",[s._v("routers")]),s._v(" permiten la conexión y gestión de múltiples dispositivos de red, mientras que los paneles de parcheo facilitan la organización y reconfiguración de las conexiones de red. ")])]),a("div",{attrs:{titulo:"Sistemas de ventilación"}},[a("p",[s._v("Los cuartos técnicos deben estar equipados con sistemas de ventilación adecuados para asegurar una circulación de aire eficiente y mantener una temperatura óptima para los equipos de red. Los sistemas de ventilación deben estar diseñados para evitar la acumulación de calor y asegurar un funcionamiento eficiente de los equipos de red. ")])]),a("div",{attrs:{titulo:"Control de temperatura"}},[a("p",[s._v("El control de temperatura debe asegurar que los equipos de red funcionen de manera óptima. Los cuartos técnicos deben estar equipados con sistemas de control de temperatura, como aire acondicionado y sensores de temperatura, para mantener una temperatura constante y evitar sobrecalentamientos. ")])]),a("div",{attrs:{titulo:"Protección contra incendios"}},[a("p",[s._v("Los cuartos técnicos deben estar equipados con sistemas de protección contra incendios, como detectores de humo, extintores y sistemas de rociadores, para asegurar la seguridad de los equipos de red y del personal. Estos sistemas deben estar diseñados para detectar y extinguir incendios de manera rápida y eficiente. ")])]),a("div",{attrs:{titulo:"Seguridad física"}},[a("p",[s._v("Los cuartos técnicos están diseñados para proporcionar un entorno seguro para los equipos de red. Esto incluye medidas de seguridad física, como cerraduras, sistemas de control de acceso y cámaras de vigilancia, para evitar el acceso no autorizado y proteger los equipos de red contra robos y daños. ")])]),a("div",{attrs:{titulo:"Gestión de cables"}},[a("p",[s._v("Los cuartos técnicos deben facilitar la gestión de cables, incluyendo la organización y el etiquetado de los cables de red. Esto asegura que las conexiones de red sean fáciles de identificar y gestionar, facilitando el mantenimiento y la reconfiguración de la infraestructura de red. ")])]),a("div",{attrs:{titulo:"Importancia de la configuración adecuada"}},[a("p",[s._v("La configuración adecuada de las áreas de trabajo y los cuartos técnicos es para asegurar una infraestructura de red eficiente y confiable. Las áreas de trabajo deben estar equipadas con puntos de conexión adecuados y equipos de usuario final compatibles, mientras que los cuartos técnicos deben proporcionar un entorno seguro y controlado para los equipos de red. La adherencia a los estándares de rendimiento y calidad garantiza que la infraestructura de red cumpla con los requisitos necesarios para soportar las aplicaciones de red modernas y asegurar una conexión de red eficiente y confiable. ")])])])],1)])])]),a("Separador"),s._m(15),s._m(16),a("div",{staticClass:"row bg4 align-items-center mb-5"},[a("div",{staticClass:"px-lg-5 px-4"},[s._m(17),a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-9"},[a("div",{staticClass:"bg5 brad p-4"},[a("SlyderA",{attrs:{tipo:"b"}},[a("div",{staticClass:"bgw sha brad1 p-4 h-100"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-4 my-lg-0 my-3"},[a("img",{staticClass:"img-a img-t",attrs:{src:e("c868"),alt:""}})]),a("div",{staticClass:"col-lg-7 my-lg-0 my-3"},[a("h5",[s._v("Demarcadores ")]),a("p",{staticClass:"mb-0"},[s._v("Los demarcadores son dispositivos que marcan el punto de responsabilidad entre el proveedor de servicios y el propietario del edificio. Estos dispositivos actúan como un punto de demarcación claro, donde la responsabilidad de la infraestructura de red se transfiere del proveedor de servicios al propietario del edificio. Los demarcadores facilitan la identificación y resolución de problemas, ya que permiten determinar si un problema de red se origina en la infraestructura del proveedor de servicios o en la infraestructura interna del edificio.")])])])]),a("div",{staticClass:"bgw sha brad1 p-4 h-100"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-4 my-lg-0 my-3"},[a("img",{staticClass:"img-a img-t",attrs:{src:e("c868"),alt:""}})]),a("div",{staticClass:"col-lg-7 my-lg-0 my-3"},[a("h5",[s._v("Protectores de sobretensión")]),a("p",{staticClass:"mb-0"},[s._v("Los protectores de sobretensión son dispositivos diseñados para proteger los equipos de red contra daños eléctricos causados por sobretensiones y picos de voltaje. Estos dispositivos actúan como una barrera de protección, absorbiendo y disipando el exceso de energía que podría dañar los equipos de red. Los protectores de sobretensión son para asegurar la longevidad y el rendimiento de los equipos de red, especialmente en áreas donde las condiciones eléctricas pueden ser inestables. ")])])])]),a("div",{staticClass:"bgw sha brad1 p-4 h-100"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-4 my-lg-0 my-3"},[a("img",{staticClass:"img-a img-t",attrs:{src:e("c868"),alt:""}})]),a("div",{staticClass:"col-lg-7 my-lg-0 my-3"},[a("h5",[s._v("Paneles de entrada")]),a("p",{staticClass:"mb-0"},[s._v("Los paneles de entrada son estructuras que albergan los puntos de conexión donde los servicios de red externos ingresan al edificio. Estos paneles deben estar diseñados para proporcionar una conexión segura y organizada para los cables y equipos de red. Los paneles de entrada deben estar ubicados en un área accesible y segura, facilitando el mantenimiento y la reconfiguración de las conexiones de red.")])])])]),a("div",{staticClass:"bgw sha brad1 p-4 h-100"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-4 my-lg-0 my-3"},[a("img",{staticClass:"img-a img-t",attrs:{src:e("c868"),alt:""}})]),a("div",{staticClass:"col-lg-7 my-lg-0 my-3"},[a("h5",[s._v("Cables de entrada")]),a("p",{staticClass:"mb-0"},[s._v("Los cables de entrada son los cables que conectan los servicios de red externos con la infraestructura de red interna del edificio. Estos cables deben cumplir con los estándares de rendimiento y calidad establecidos por organizaciones como el Telecommunications Industry Association (TIA) y el American National Standards Institute (ANSI). Los cables de entrada deben estar correctamente instalados y protegidos para asegurar una conexión de red eficiente y confiable.")])])])]),a("div",{staticClass:"bgw sha brad1 p-4 h-100"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-4 my-lg-0 my-3"},[a("img",{staticClass:"img-a img-t",attrs:{src:e("c868"),alt:""}})]),a("div",{staticClass:"col-lg-7 my-lg-0 my-3"},[a("h5",[s._v("Equipos de Terminación")]),a("p",{staticClass:"mb-0"},[s._v("Los equipos de terminación son dispositivos que permiten la conexión y terminación de los cables de entrada. Estos equipos incluyen conectores, adaptadores y otros componentes que facilitan la conexión de los cables de entrada a la infraestructura de red interna del edificio. Los equipos de terminación deben estar diseñados para proporcionar una conexión segura y eficiente, asegurando la integridad de las señales de red. ")])])])]),a("div",{staticClass:"bgw sha brad1 p-4 h-100"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-4 my-lg-0 my-3"},[a("img",{staticClass:"img-a img-t",attrs:{src:e("c868"),alt:""}})]),a("div",{staticClass:"col-lg-7 my-lg-0 my-3"},[a("h5",[s._v("Diseño y configuración")]),a("p",{staticClass:"mb-0"},[s._v("El diseño y la configuración de la entrada de servicios deben cumplir con los estándares de rendimiento y calidad establecidos por organizaciones reconocidas. Estos estándares especifican las características y requisitos de los cables, conectores y otros componentes para asegurar una conexión de red eficiente y confiable.")])])])])])],1)]),s._m(18)])])]),a("p",[s._v("La siguiente figura enfatiza algunos requisitos que debe cumplir la entrada de servicios para garantizar un buen funcionamiento.")]),s._m(19),s._m(20),a("figcaption",[s._v("Fuente: OIT, 2024. ")])],1)],1)},i=[function(){var s=this,a=s._self._c;return a("div",{staticClass:"titulo-principal color-acento-contenido"},[a("div",{staticClass:"titulo-principal__numero"},[a("span",[s._v("2")])]),a("h1",[s._v("Subsistemas de cableado")])])},function(){var s=this,a=s._self._c;return a("div",{staticClass:"row justify-content-center mb-4"},[a("div",{staticClass:"col-lg-5"},[a("img",{staticClass:"img-a img-t",attrs:{src:e("117e"),alt:""}})]),a("div",{staticClass:"col-lg-7 my-lg-0 my-3"},[a("p",[s._v("Los subsistemas de cableado son componentes de la infraestructura de red estructurada. Estos subsistemas están diseñados para organizar y gestionar de manera eficiente el cableado que conecta los diversos dispositivos y equipos de red dentro de un edificio o campus. La implementación adecuada de estos subsistemas para garantizar una conexión de red confiable, eficiente y escalable. Este capítulo permite comprender la importancia de un subsistema de cableado dentro del proceso de instalación. ")])])])},function(){var s=this,a=s._self._c;return a("div",{staticClass:"row justify-content-center mb-4"},[a("div",{staticClass:"col-lg-9"},[a("div",{staticClass:"titulo-segundo color-acento-contenido",attrs:{id:"t_2_1"}},[a("h2",[s._v("2.1 Cableado horizontal y vertical")])]),a("div",{staticClass:"row justify-content-center bg1 p-4 brad"},[a("div",{staticClass:"col-lg-auto j1"},[a("img",{staticClass:"img-a img-t",attrs:{src:e("c521"),alt:""}})]),a("div",{staticClass:"col pt-lg-0 pt-md-4"},[a("p",{staticClass:"mb-0"},[s._v("El cableado horizontal se refiere a la infraestructura de cableado que conecta los equipos de usuario final con los cuartos técnicos. Este cableado generalmente se extiende desde los paneles de parcheo en los cuartos técnicos hasta los puntos de conexión en las áreas de trabajo. El cableado vertical, por otro lado, conecta los cuartos técnicos con los equipos de entrada de servicios, como los "),a("i",[s._v("routers")]),s._v(" y "),a("i",[s._v("switches")]),s._v(". Este cableado se utiliza para distribuir los servicios de red a lo largo del edificio. Ambos tipos de cableado deben cumplir con los estándares de rendimiento y calidad para asegurar una conexión de red eficiente y confiable. ")])])])]),a("div",{staticClass:"col-lg-3 my-lg-0 my-3"},[a("img",{staticClass:"img-a img-t",attrs:{src:e("cd97"),alt:""}})])])},function(){var s=this,a=s._self._c;return a("div",{staticClass:"row justify-content-start my-5"},[a("div",{staticClass:"col-auto"},[a("div",{staticClass:"list"},[a("div",{staticClass:"list__item"},[a("div",{staticClass:"list__item__icon"},[a("img",{attrs:{src:e("b676"),alt:""}})])]),a("div",{staticClass:"list__txt bgicon text-white p-0 px-4"},[a("h3",{staticClass:"mb-1"},[s._v("Componentes del cableado horizontal")])])])])])},function(){var s=this,a=s._self._c;return a("div",{staticClass:"row justify-content-center mb-5"},[a("div",{staticClass:"col-lg-10"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-md-6 col-xl mb-4 mb-xl-0"},[a("div",{staticClass:"tarjeta-numerada color-secundario p-5 h-100"},[a("div",{staticClass:"tarjeta-numerada__numero"},[a("div",{staticClass:"h2"},[s._v("1")])]),a("p",{staticClass:"text-center"},[a("b",[s._v("Paneles de parcheo.")])]),a("p",{staticClass:"mb-0"},[s._v("Estos paneles, ubicados en los cuartos técnicos, actúan como puntos de terminación para los cables horizontales. Los paneles de parcheo permiten una gestión organizada y flexible de las conexiones de red, facilitando la reconfiguración y el mantenimiento de la infraestructura.")])])]),a("div",{staticClass:"col-md-6 col-xl mb-4 mb-xl-0"},[a("div",{staticClass:"tarjeta-numerada color-acento-contenido p-5 h-100"},[a("div",{staticClass:"tarjeta-numerada__numero"},[a("div",{staticClass:"h2"},[s._v("2")])]),a("p",{staticClass:"text-center"},[a("b",[s._v("Cables de par trenzado.")])]),a("p",{staticClass:"mb-0"},[s._v("Los cables de par trenzado, como Cat5e, Cat6 y Cat6a, son comúnmente utilizados en el cableado horizontal debido a su capacidad para soportar altas velocidades de transmisión de datos y su resistencia a la interferencia.")])])]),a("div",{staticClass:"col-md-6 col-xl mb-4 mb-xl-0"},[a("div",{staticClass:"tarjeta-numerada color-acento-botones p-5 h-100"},[a("div",{staticClass:"tarjeta-numerada__numero"},[a("div",{staticClass:"h2"},[s._v("3")])]),a("p",{staticClass:"text-center"},[a("b",[s._v("Puntos de conexión. ")])]),a("p",{staticClass:"mb-0"},[s._v("En las áreas de trabajo, los puntos de conexión, como tomas de red y conectores RJ-45, proporcionan a los usuarios finales acceso a la red. Estos puntos de conexión deben estar instalados de manera que sean accesibles y seguros. ")])])])])])])},function(){var s=this,a=s._self._c;return a("div",{staticClass:"row justify-content-start my-5"},[a("div",{staticClass:"col-auto"},[a("div",{staticClass:"list"},[a("div",{staticClass:"list__item"},[a("div",{staticClass:"list__item__icon"},[a("img",{attrs:{src:e("b676"),alt:""}})])]),a("div",{staticClass:"list__txt bgicon text-white p-0 px-4"},[a("h3",{staticClass:"mb-1"},[s._v("Componentes del cableado vertical ")])])])])])},function(){var s=this,a=s._self._c;return a("div",{staticClass:"row justify-content-center mb-4"},[a("div",{staticClass:"col-lg-4 my-lg-0 my-3 j1"},[a("img",{staticClass:"img-a img-t",attrs:{src:e("5ea9"),alt:""}})]),a("div",{staticClass:"col-lg-8 my-lg-0 my-3 j1"},[a("ol",{staticClass:"lista-ol--cuadro fa-ul"},[a("li",[a("div",{staticClass:"lista-ol--cuadro__vineta"},[a("span",[s._v("1")])]),a("span",[a("b",[s._v("Cables de Fibra Óptica:")]),s._v(" los cables de fibra óptica son comúnmente utilizados en el cableado vertical debido a su capacidad para soportar altas velocidades de transmisión de datos y su inmunidad a la interferencia electromagnética. Estos cables pueden transmitir datos a largas distancias sin degradación significativa de la señal.")])]),a("hr"),a("li",[a("div",{staticClass:"lista-ol--cuadro__vineta"},[a("span",[s._v("2")])]),a("span",[a("b",[s._v("Cables de par trenzado de alta capacidad:")]),s._v(" en algunos casos, cables de par trenzado de alta capacidad, como Cat6a o Cat7, también se utilizan en el cableado vertical para proporcionar una conexión de red robusta y confiable.")])]),a("hr"),a("li",[a("div",{staticClass:"lista-ol--cuadro__vineta"},[a("span",[s._v("3")])]),a("span",[a("b",[s._v("Equipos de entrada de servicios:")]),s._v(" los equipos de entrada de servicios, como "),a("i",[s._v("routers")]),s._v(" y "),a("i",[s._v("switches")]),s._v(", actúan como puntos de distribución centralizados para los servicios de red. Estos equipos deben estar diseñados para soportar altas velocidades de transmisión de datos y múltiples conexiones simultáneas.")])]),a("hr")])])])},function(){var s=this,a=s._self._c;return a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-8"},[a("div",{staticClass:"row justify-content-center bg1 p-4 brad mb-5"},[a("div",{staticClass:"col-lg-auto j1"},[a("img",{staticClass:"img-a img-t",attrs:{src:e("03cc"),alt:""}})]),a("div",{staticClass:"col pt-lg-0 pt-md-4"},[a("p",{staticClass:"mb-0"},[s._v("Para garantizar el buen funcionamiento del cableado tanto horizontal como vertical, estos de cumplir con ciertos estándares de rendimiento y calidad. La siguiente figura permite conocer cuáles son y sus principales requisitos establecidos por organizaciones reconocidas como el Telecommunications Industry Association (TIA) y el American National Standards Institute (ANSI) y así garantizar una conexión de red eficiente y confiable. ")])])])])])},function(){var s=this,a=s._self._c;return a("div",{staticClass:"titulo-sexto color-acento-botones"},[a("h5",[s._v("Figura 1.")]),a("span",[s._v("Equipos de certificación y parámetros de medición")])])},function(){var s=this,a=s._self._c;return a("div",{staticClass:"bgfig p-5 brad mb-2"},[a("img",{staticClass:"img-a img-t",attrs:{src:e("5f9d"),alt:"La Figura 1 se denomina «Estándares internacionales de rendimiento y calidad del cableado horizontal y vertical» enseña los estándares establecidos polas organizaciones TIA y ANSI, lo cuales especifican los requisitos de cables, conectores y otros componentes."}})])},function(){var s=this,a=s._self._c;return a("div",{staticClass:"titulo-segundo color-acento-contenido",attrs:{id:"t_2_2"}},[a("h2",[s._v("2.2 Área de trabajo y cuartos técnicos")])])},function(){var s=this,a=s._self._c;return a("div",{staticClass:"row justify-content-center mb-5"},[a("div",{staticClass:"col-lg-8 my-lg-0 my-3"},[a("p",[s._v("Las áreas de trabajo son los espacios donde los usuarios finales acceden a la red. Estas áreas deben estar equipadas con puntos de conexión adecuados, como tomas de red y conectores RJ-45, para asegurar una conexión de red eficiente y confiable. La configuración de las áreas de trabajo es importante para garantizar que los usuarios puedan conectarse a la red de manera segura y sin interrupciones.")])]),a("div",{staticClass:"col-lg-4 my-lg-0 my-3"},[a("img",{staticClass:"img-a img-t",attrs:{src:e("a43b"),alt:""}})])])},function(){var s=this,a=s._self._c;return a("div",{staticClass:"row justify-content-start my-5"},[a("div",{staticClass:"col-auto"},[a("div",{staticClass:"list"},[a("div",{staticClass:"list__item"},[a("div",{staticClass:"list__item__icon"},[a("img",{attrs:{src:e("b676"),alt:""}})])]),a("div",{staticClass:"list__txt bgicon text-white p-0 px-4"},[a("h3",{staticClass:"mb-1"},[s._v("Área de trabajo y cuartos técnicos")])])])])])},function(){var s=this,a=s._self._c;return a("div",{staticClass:"row justify-content-start my-5"},[a("div",{staticClass:"col-auto"},[a("div",{staticClass:"list"},[a("div",{staticClass:"list__item"},[a("div",{staticClass:"list__item__icon"},[a("img",{attrs:{src:e("b676"),alt:""}})])]),a("div",{staticClass:"list__txt bgicon text-white p-0 px-4"},[a("h3",{staticClass:"mb-1"},[s._v("Componentes de los cuartos técnicos")])])])])])},function(){var s=this,a=s._self._c;return a("div",{staticClass:"col-lg-3 my-lg-0 my-3"},[a("img",{staticClass:"img-a img-t",attrs:{src:e("ca0a"),alt:""}})])},function(){var s=this,a=s._self._c;return a("div",{staticClass:"titulo-segundo color-acento-contenido",attrs:{id:"t_2_3"}},[a("h2",[s._v("2.3 Entrada de servicios ")])])},function(){var s=this,a=s._self._c;return a("div",{staticClass:"row justify-content-center align-items-end mb-4"},[a("div",{staticClass:"col-lg-auto"},[a("img",{staticClass:"img-a img-t",attrs:{src:e("d4b3"),alt:""}})]),a("div",{staticClass:"col pt-lg-0 pt-md-4"},[a("div",{staticClass:"bg3 p-4 j1"},[a("p",{staticClass:"mb-0"},[s._v(" La entrada de servicios es el punto donde los servicios de red externos, como Internet y telefonía, ingresan al edificio. Este punto de entrada debe estar diseñado para proporcionar una conexión segura y protegida para los servicios de red, asegurando que los datos y las señales de comunicación se transmitan de manera eficiente y sin interrupciones. La correcta configuración y mantenimiento de la entrada de servicios son para garantizar la integridad y el rendimiento de la infraestructura de red.")])])])])},function(){var s=this,a=s._self._c;return a("div",{staticClass:"row justify-content-start my-5"},[a("div",{staticClass:"col-auto"},[a("div",{staticClass:"list"},[a("div",{staticClass:"list__item"},[a("div",{staticClass:"list__item__icon"},[a("img",{attrs:{src:e("b676"),alt:""}})])]),a("div",{staticClass:"list__txt bgicon text-white p-0 px-4"},[a("h3",{staticClass:"mb-1"},[s._v("Componentes de la entrada de servicios ")])])])])])},function(){var s=this,a=s._self._c;return a("div",{staticClass:"col-lg-3 d-none d-lg-block j1"},[a("img",{staticClass:"img-a img-t",attrs:{src:e("2370"),alt:""}})])},function(){var s=this,a=s._self._c;return a("div",{staticClass:"titulo-sexto color-acento-botones"},[a("h5",[s._v("Figura 2.")]),a("span",[s._v("Requisitos del diseño y configuración de la entrada de servicios.")])])},function(){var s=this,a=s._self._c;return a("div",{staticClass:"bgfig p-5 brad mb-2"},[a("img",{staticClass:"img-a img-t",attrs:{src:e("e9af"),alt:"La figura 2 se denomina «Requisitos del diseño y configuración en la entrada de servicios» y desglosa los requerimientos a tener en cuenta para este elemento del cableado estructurado."}})])}],o=e("a84e"),n=e("8564"),c={name:"Tema2",components:{AcordionA:o["a"],SlyderA:n["a"]},data:()=>({}),mounted(){this.$nextTick(()=>{this.$aosRefresh()})},updated(){this.$aosRefresh()}},r=c,d=e("2877"),l=Object(d["a"])(r,t,i,!1,null,null,null);a["default"]=l.exports},fff0:function(s,a,e){"use strict";e("bec2")}}]);
//# sourceMappingURL=tema2.94961b79.js.map