(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[27],{"09cb":function(e,i,t){"use strict";t.r(i);var o=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("q-layout",{attrs:{view:"lHh Lpr lFf"}},[t("q-page-container",{staticClass:"bg-grey-2"},[t("q-page",{staticClass:"q-pa-md pagina",staticStyle:{margin:"auto","padding-top":"80px","padding-bottom":"80px","max-width":"210mm"},attrs:{id:"vistaPrevia"}},[null!=e.formulario?t("div",[t("q-card",{staticClass:"q-pa-md"},[t("q-card-section",[t("div",{staticClass:"row q-col-gutter-md"},[t("div",{staticClass:"col-4"},[t("q-img",{staticStyle:{height:"80px","max-width":"250px"},attrs:{src:"statics/imagenes-plantilla/logo1.png",contain:"",position:"center"}})],1)]),t("div",{staticClass:"seccion"},[t("br"),t("br"),t("div",{staticClass:"row q-col-gutter-md"},[t("label",{staticClass:"titulo text-primary"},[e._v("\n                  "+e._s(e.formulario.secciones[e.page].titulo)+"\n                  ")])]),t("div",{staticClass:"row q-col-gutter-md"},[t("label",{domProps:{innerHTML:e._s(e.formulario.secciones[e.page].descripcion)}})]),t("br"),t("label",{staticClass:"pregunta"},[e._v("\n                Los campos con\n                "),t("span",{staticStyle:{color:"#c10015","font-size":"20px",display:"inline"}},[e._v("\n                  *\n                ")]),e._v("\n                son requeridos\n              ")]),t("br"),t("br"),t("br"),e._l(e.formulario.secciones[e.page].campos,(function(i,o){return t("div",{key:o},[t("div",{staticClass:"row q-col-gutter-lg q-pa-md"},[t("div",{staticClass:"col-12 col-4-md"},[e.campoVisible(i)?t("label",{staticClass:"pregunta q-mb-md q-mt-md flex"},[e._v("\n                      "+e._s(o+1+".")+" "+e._s(i.texto)+"\n                      "),t("span",{staticStyle:{color:"#c10015","font-size":"20px",display:"inline"}},[e._v("\n                        "+e._s(i.requerido?"*":"")+"\n                      ")])]):e._e(),i.imagen&&e.campoVisible(i)?t("q-img",{staticClass:"imagen q-mb-md",attrs:{src:i.imagen,"spinner-color":"white",contain:""}}):e._e(),e.campoVisible(i)?t("label",{staticClass:"pregunta q-mt-md"},[e._v("\n                      "+e._s(i.subtitulo)+"\n                    ")]):e._e(),2===i.id_tipo&&1===i.tipo_input.id&&e.campoVisible(i)?t("q-input",{attrs:{outlined:"",type:"text","input-style":"text-transform: uppercase;",error:!i.isValid,"error-message":"Este campo es requerido","lazy-rules":"",rules:[function(e){return e&&i.requerido||!i.requerido||"Este campo es requerido"}]},model:{value:i.respuesta,callback:function(t){e.$set(i,"respuesta",t)},expression:"campo.respuesta"}}):e._e(),2===i.id_tipo&&2===i.tipo_input.id&&e.campoVisible(i)?t("q-input",{attrs:{type:"textarea",outlined:"",error:!i.isValid,"error-message":"Este campo es requerido"},model:{value:i.respuesta,callback:function(t){e.$set(i,"respuesta",t)},expression:"campo.respuesta"}}):e._e(),2===i.id_tipo&&3===i.tipo_input.id&&e.campoVisible(i)?t("q-input",{attrs:{outlined:"",type:"number",error:!i.isValid,"error-message":"Este campo es requerido"},model:{value:i.respuesta,callback:function(t){e.$set(i,"respuesta",e._n(t))},expression:"campo.respuesta"}}):e._e(),2===i.id_tipo&&4===i.tipo_input.id&&e.campoVisible(i)?t("q-input",{attrs:{outlined:"","lazy-rules":"",rules:[function(t){return e.isValidDate(t)&&/\d{1,2}\/\d{1,2}\/\d{4}/.test(t)||!i.requerido||"Ingrese un fecha válida"}],error:!i.isValid,"error-message":"Ingrese una fecha válida"},scopedSlots:e._u([{key:"append",fn:function(){return[t("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[t("q-popup-proxy",{ref:"qDateProxy"+i.id,refInFor:!0,attrs:{"transition-show":"scale","transition-hide":"scale"}},[t("q-date",{attrs:{mask:"DD/MM/YYYY","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Ingrese una fecha válida"}]},on:{input:function(){return e.hideDatePopUp("qDateProxy"+i.id)}},model:{value:i.respuesta,callback:function(t){e.$set(i,"respuesta",t)},expression:"campo.respuesta"}})],1)],1)]},proxy:!0}],null,!0),model:{value:i.respuesta,callback:function(t){e.$set(i,"respuesta",t)},expression:"campo.respuesta"}}):e._e(),1===i.id_tipo&&1===i.tipo_input.id&&e.campoVisible(i)?t("div",{staticClass:"row q-col-gutter-md q-pa-md"},[t("div",{staticClass:"col-12 q-col-gutter-md"},e._l(i.opciones,(function(o){return t("q-radio",{key:o.id,attrs:{val:o.nombre,label:o.nombre,error:!i.isValid,"error-message":"Este campo es requerido"},model:{value:i.respuesta,callback:function(t){e.$set(i,"respuesta",t)},expression:"campo.respuesta"}})})),1),i.isValid||!i.requerido||i.respuesta?e._e():t("label",{staticStyle:{color:"#c10015","font-size":"12px"}},[e._v("\n                        Selecciona una opción\n                      ")])]):e._e(),1===i.id_tipo&&3===i.tipo_input.id&&e.campoVisible(i)?t("q-select",{attrs:{"bg-color":"white",options:i.opciones,"lazy-rules":"","emit-value":"","map-options":"","option-value":"nombre","option-label":"nombre",error:!i.isValid,"error-message":"Selecciona una opción",rules:[function(e){return e&&i.requerido||!i.requerido||"Selecciona una opción"}]},model:{value:i.respuesta,callback:function(t){e.$set(i,"respuesta",t)},expression:"campo.respuesta"}}):e._e(),1===i.id_tipo&&2===i.tipo_input.id&&e.campoVisible(i)?t("div",[t("div",{staticClass:"row"},[t("q-list",{staticStyle:{"background-color":"white"},attrs:{dense:"",padding:""}},e._l(i.opciones,(function(o){return t("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:o.id,attrs:{tag:"label"}},[t("q-item-section",{attrs:{side:"",top:""}},[t("q-checkbox",{attrs:{error:!i.isValid,"error-message":i.texto+" es requerido"},model:{value:o.respuesta,callback:function(i){e.$set(o,"respuesta",i)},expression:"option.respuesta"}})],1),t("q-item-section",[t("q-item-label",[e._v(e._s(o.nombre))])],1)],1)})),1)],1),i.isValid||!i.requerido||i.respuesta?e._e():t("label",{staticStyle:{color:"#c10015","font-size":"12px"}},[e._v("\n                        Selecciona una opción\n                      ")])]):e._e(),3===i.id_tipo&&i.arregloTable&&i.arregloTable.length>0&&e.campoVisible(i)?t("div",{staticClass:"row"},[t("div",{staticClass:"col-12"},[t("table",{staticClass:"full-width bg-white"},[t("thead",{staticClass:"full-width text-center"},[t("td"),e._l(i.arregloTable[0].columns,(function(i){return t("td",{key:i.id},[e._v("\n                              "+e._s(i.valor)+"\n                            ")])}))],2),e._l(i.arregloTable,(function(i){return t("tr",{key:i.id,class:i.isValid?"":"error"},[t("span",{staticClass:"flex q-mt-md"},[e._v(e._s(i.valor))]),e._l(i.columns,(function(o,s){return t("td",{key:o.id,staticClass:"text-center"},[t("q-radio",{staticClass:"text-right",attrs:{val:!0},on:{input:function(t){return e.setFilaCheckbox(i,i.columns[s])}},model:{value:i.columns[s].checked,callback:function(t){e.$set(i.columns[s],"checked",t)},expression:"fila.columns[index2].checked"}})],1)}))],2)}))],2)])]):e._e(),4===i.id_tipo&&e.campoVisible(i)?t("q-select",{attrs:{"bg-color":"white",options:e.departamentos,"lazy-rules":"","emit-value":"","map-options":"","option-value":"nombre","option-label":"nombre",error:!i.isValid,"error-message":"Selecciona una opción",rules:[function(e){return e&&i.requerido||!i.requerido||"Selecciona una opción"}]},on:{input:function(t){return e.CargarMunicipios(i,i.respuesta,e.formulario.secciones[e.page].campos[o+1],!0)}},model:{value:i.respuesta,callback:function(t){e.$set(i,"respuesta",t)},expression:"campo.respuesta"}}):e._e(),5===i.id_tipo&&e.campoVisible(i)?t("q-select",{attrs:{"bg-color":"white",options:e.municipios,"lazy-rules":"","emit-value":"","map-options":"","option-value":"nombre","option-label":"nombre",error:!i.isValid,"error-message":"Selecciona una opción",rules:[function(e){return e&&i.requerido||!i.requerido||"Selecciona una opción"}]},model:{value:i.respuesta,callback:function(t){e.$set(i,"respuesta",t)},expression:"campo.respuesta"}}):e._e(),6===i.id_tipo&&e.campoVisible(i)?t("div",[t("div",{staticClass:"row"},[t("q-rating",{attrs:{size:"2.5em",max:"10",color:"yellow",icon:"star_border","icon-selected":"star","no-dimming":"",error:!i.isValid,"error-message":"Selecciona una valoración",rules:[function(e){return e&&e.length>0&&i.requerido||!i.requerido||"Selecciona una valoración"}]},scopedSlots:e._u([{key:"tip-1",fn:function(){return[t("q-tooltip",[e._v("1")])]},proxy:!0},{key:"tip-2",fn:function(){return[t("q-tooltip",[e._v("2")])]},proxy:!0},{key:"tip-3",fn:function(){return[t("q-tooltip",[e._v("3")])]},proxy:!0},{key:"tip-4",fn:function(){return[t("q-tooltip",[e._v("4")])]},proxy:!0},{key:"tip-5",fn:function(){return[t("q-tooltip",[e._v("5")])]},proxy:!0},{key:"tip-6",fn:function(){return[t("q-tooltip",[e._v("6")])]},proxy:!0},{key:"tip-7",fn:function(){return[t("q-tooltip",[e._v("7")])]},proxy:!0},{key:"tip-8",fn:function(){return[t("q-tooltip",[e._v("8")])]},proxy:!0},{key:"tip-9",fn:function(){return[t("q-tooltip",[e._v("9")])]},proxy:!0},{key:"tip-10",fn:function(){return[t("q-tooltip",[e._v("10")])]},proxy:!0}],null,!0),model:{value:i.respuesta,callback:function(t){e.$set(i,"respuesta",t)},expression:"campo.respuesta"}})],1),t("div",{staticClass:"row"},[i.isValid||!i.requerido||i.respuesta?e._e():t("label",{staticClass:"q-mt-md",staticStyle:{color:"#c10015","font-size":"12px"}},[e._v("\n                          Selecciona una opción\n                        ")])])]):e._e()],1)])])}))],2)]),t("q-card-section",{},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-4 col-md-2"},[e.page>0?t("q-btn",{attrs:{label:"Atrás"},on:{click:e.prevPage}}):e._e()],1),t("div",{staticClass:"col-2 offset-6 col-md-2",class:(e.page,"offset-md-8 offset-xl-10")},[e.page<e.formulario.secciones.length?t("q-btn",{attrs:{color:"primary"},on:{click:e.nextPage}},[e._v("\n                  "+e._s(e.formulario.secciones.length-1===e.page?"Finalizar":"Siguiente")+"\n                ")]):e._e()],1)])])],1)],1):t("div",[e._v("La vista previa no ha podido ser generada")])])],1)],1)},s=[],a=(t("6762"),t("2fdb"),t("a34a")),r=t.n(a),n=(t("96cf"),t("c973")),c=t.n(n),l=t("bc3a"),u=t.n(l),p=t("c1df"),d=t.n(p),m={data:function(){return{formulario:null,nombre:"Nombre del Formulario",titulo:"Titulo",descripcion:"Descripcion",page:0,departamentos:[],municipios:[],loadingDepartamentos:!1,loadingMunicipios:!1,reglas:[],reglasTabla:[],campos_excluidos:[],seccionesVisibles:[]}},created:function(){var e=this;return c()(r.a.mark((function i(){var t;return r.a.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,e.CargarDatosFormulario();case 2:return i.next=4,e.CargarDepartamentos("",!1);case 4:if(t=e.obtenerCampoMunicipio(),!t){i.next=9;break}return i.next=9,e.CargarMunicipios(null,null,t,!1);case 9:case"end":return i.stop()}}),i)})))()},methods:{obtenerCampoMunicipio:function(){return this.formulario.secciones[this.page].campos.filter((function(e){return 5===e.id_tipo}))[0]},campoVisible:function(e){var i=!0;return this.campos_excluidos.forEach((function(t){t.id===e.id&&(i=!1)})),i},excluirSeccion:function(e){this.seccionesVisibles=this.formulario.secciones.filter((function(i){return i.id!==e}))},excluirCampo:function(e,i){for(var t=0;t<this.formulario.secciones.length;t++)for(var o=this.formulario.secciones[t],s=o.campos,a=0;a<s.length;a++){var r=s[a];r.id===i&&this.campos_excluidos.push(r)}},validarSeccionesVisibles:function(){if(this.seccionesVisibles=this.formulario.secciones,this.campos_excluidos=[],0!==this.reglas.length)for(var e=0;e<this.formulario.secciones.length;e++)for(var i=this.formulario.secciones[e],t=i.campos,o=0;o<t.length;o++)for(var s=t[o],a=0;a<this.reglas.length;a++){var r=this.reglas[a],n=this.reglasTabla[a];if(s.id===r.campo_excluyente){var c=r.operacion,l=n.respuesta_excluyente;switch(c){case"=":1!==s.id_tipo&&2!==s.id_tipo||(s.respuesta===l&&(!0===r.excluir_full_seccion?this.excluirSeccion(r.seccion_excluida):this.excluirCampo(r.seccion_excluida,r.campo_excluido)),2===s.id_tipo&&4===s.tipo_input.id&&d()(s.respuesta,"DD/MM/YYYY",!0).isSame(d()(l,"DD/MM/YYYY",!0))&&(!0===r.excluir_full_seccion?this.excluirSeccion(r.seccion_excluida):this.excluirCampo(r.seccion_excluida,r.campo_excluido)));break;case"<":if((1===s.id_tipo||2===s.id_tipo)&&(s.respuesta<l&&(r.excluir_full_seccion?this.excluirSeccion(r.seccion_excluida):this.excluirCampo(r.seccion_excluida,r.campo_excluido)),2===s.id_tipo&&4===s.tipo_input.id)){var u=d()(s.respuesta,"DD/MM/YYYY",!0),p=d()(l,"DD/MM/YYYY",!0);u.isSameOrBefore(p)&&(!0===r.excluir_full_seccion?this.excluirSeccion(r.seccion_excluida):this.excluirCampo(r.seccion_excluida,r.campo_excluido))}break;case">":if((1===s.id_tipo||2===s.id_tipo)&&(s.respuesta>l&&(!0===r.excluir_full_seccion?this.excluirSeccion(r.seccion_excluida):this.excluirCampo(r.seccion_excluida,r.campo_excluido)),2===s.id_tipo&&4===s.tipo_input.id)){var m=d()(s.respuesta,"DD/MM/YYYY",!0),f=d()(l,"DD/MM/YYYY",!0);m.isSameOrAfter(f)&&(!0===r.excluir_full_seccion?this.excluirSeccion(r.seccion_excluida):this.excluirCampo(r.seccion_excluida,r.campo_excluido))}break;case"!==":1!==s.id_tipo&&2!==s.id_tipo||(s.respuesta!==l&&(r.excluir_full_seccion?this.excluirSeccion(r.seccion_excluida):this.excluirCampo(r.seccion_excluida,r.campo_excluido)),2===s.id_tipo&&4===s.tipo_input.id&&d()(s.respuesta,"DD/MM/YYYY",!0)!==d()(l,"DD/MM/YYYY",!0)&&(r.excluir_full_seccion?this.excluirSeccion(r.seccion_excluida):this.excluirCampo(r.seccion_excluida,r.campo_excluido)));break;default:break}}}},CargarDepartamentos:function(){var e=this;this.loadingDepartamentos=!0;var i="http://35.203.165.142/api/catalogos/departamentos",t={Authorization:"Bearer "+this.$store.state.token},o={q:"",id_padre:1438};u()({method:"get",url:i,params:o,headers:t}).then((function(i){e.departamentos=i.data.departamentos,e.loadingDepartamentos=!1})).catch((function(i){e.loadingDepartamentos=!1,401===i.response.status&&(e.removeCredentials(),e.$router.push({name:"login"}))}))},CargarMunicipios:function(e,i,t){var o=this,s=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";this.loadingMunicipios=!0;var r="http://35.203.165.142/api/catalogos/municipios";t&&!1===t.FiltrarXDepartamento&&(r="http://35.203.165.142/api/catalogos/TodosMunicipios");var n={Authorization:"Bearer "+this.$store.state.token};s&&(t.respuesta=null);var c={filtro:a,id_padre:i&&null!==i?this.departamentos.filter((function(e){return e.nombre===i}))[0].id:""};u()({method:"get",url:r,params:c,headers:n}).then((function(e){o.municipios=e.data.municipios,o.loadingMunicipios=!1})).catch((function(e){o.loadingMunicipios=!1,401===e.response.status&&(o.removeCredentials(),o.$router.push({name:"login"}))}))},setFilaCheckbox:function(e,i){var t=this;e.columns.forEach((function(e,o,s){e.id!==i.id&&t.$set(e,"checked",!1)})),this.$forceUpdate()},shuffle:function(e){var i,t,o=e.length;while(0!==o)t=Math.floor(Math.random()*o),o-=1,i=e[o],4!==i.id_tipo&&5!==i.id_tipo&&(e[o]=e[t],e[t]=i);return e},validateForm:function(){var e=this,i=this.formulario.secciones[this.page];i.campos.forEach((function(i,t,o){if(i.requerido&&!i.respuesta&&3!==i.id_tipo)i.isValid=!1;else if(2===i.id_tipo&&4===i.tipo_input.id)i&&e.isValidDate(i.respuesta)&&/\d{1,2}\/\d{1,2}\/\d{4}/.test(i.respuesta)?i.isValid=!0:i.isValid=!1;else if(3===i.id_tipo){var s=0;i.arregloTable.forEach((function(e){e.columns.filter((function(e){return e.checked})).length>0?(s+=1,e.isValid=!0):e.isValid=!1})),s===i.arregloTable.length?(i.isValid=!0,e.formulario.secciones.forEach((function(e){e.campos.forEach((function(e,t,o){e.id===i.id&&(e.isValid=!0,i.isValid=!0)}))}))):i.isValid=!1}else i.isValid=!0;1===i.id_tipo&&2===i.tipo_input.id&&(i.isValid=i.requerido&&i.opciones.filter((function(e){return e.respuesta})).length>0||!i.requerido)}));var t=this.campos_excluidos.map((function(e){return e.id}));return i.campos.filter((function(e){return e.isValid&&!t.includes(e.id)})).length===i.campos.filter((function(e){return!t.includes(e.id)})).length},getPreviousSection:function(){if(0===this.page)return 0;var e=0;if(this.formulario.secciones.lenght!==this.seccionesVisibles.length){var i=this.formulario.secciones[this.page].id;return this.seccionesVisibles.forEach((function(t,o){t.id===i&&(e=o-1)})),e}return this.page-1},getNextSection:function(){if(this.page>=this.formulario.secciones.length-1)return this.page;var e=this.page;if(this.formulario.secciones.lenght!==this.seccionesVisibles.length){var i=this.seccionesVisibles[this.page+1].id;return this.formulario.secciones.forEach((function(t,o){t.id===i&&(e=o)})),e}return this.page+1},prevPage:function(){var e=this.getPreviousSection();this.page=e},nextPage:function(){var e=this,i=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];!i||this.validateForm()?this.page>=this.formulario.secciones.length-1?this.$q.notify({color:"green-4",textColor:"white",icon:"fas fa-check-circle",message:"¡Llegaste al final de la vista previa!",position:"bottom",timeout:2e3}):(this.page=this.getNextSection(),this.formulario.secciones[this.page].campos.forEach((function(i,t,o){e.$set(i,"isValid",!0)})),window.scrollTo({left:0,top:80,behavior:"smooth"})):this.$q.notify({color:"red-5",textColor:"white",icon:"fas fa-exclamation-triangle",message:"Por favor complete todos los campos"})},showDatePopUp:function(e){this.$refs[e][0].show()},hideDatePopUp:function(e){this.$refs[e][0].hide()},isValidDate:function(e){return d()(e,"DD/MM/YYYY",!0).isValid()},CargarDatosFormulario:function(){var e=this,i=JSON.parse(localStorage.getItem("formulario_vista_previa")||null),t=null;for(var o in i&&(t=i.formulario,this.nombre=i.nombre,this.confirm=!1,this.inicializado=!0,this.reglas=i.reglas,this.reglasTabla=i.reglasTabla),t.secciones){var s=t.secciones[o].campos;for(var a in s){var r=s[a];1===r.id_tipo&&2===r.tipo_input.id&&r.opciones.forEach((function(e,i,t){e.respuesta=!1})),2===r.id_tipo&&4===r.tipo_input.id&&(r.respuesta=d()().format("DD/MM/YYYY")),1===r.id_tipo&&1===r.tipo_input.id&&(r.respuesta=!1),2===r.id_tipo&&3===r.tipo_input.id&&(r.respuesta=null),1===r.id_tipo&&2===r.tipo_input.id&&(r.respuesta=!1),6===r.id_tipo&&(r.respuesta=0),r.isValid=!0}}5561===t.id_tipo&&!0===t.ordenar_aleatoriamente&&t.secciones.forEach((function(i){i.campos=e.shuffle(i.campos),i.campos.forEach((function(i){i.opciones=e.shuffle(i.opciones)}))})),this.formulario=JSON.parse(JSON.stringify(t))}},computed:{ancho:function(){var e=this.$q.screen.lt,i=500;return e.xs||e.sm?(i=0,window.screen.width-i+"px"):e.md?(i=150,window.screen.width-i+"px"):e.lg?(i=250,window.screen.width-i+"px"):e.xl?(i=500,window.screen.width-i+"px"):window.screen.width-i+"px"},app_url:function(){return"http://34.72.90.164/"}},watch:{formulario:{handler:function(e){this.validarSeccionesVisibles()},deep:!0},page:function(){this.validarSeccionesVisibles()}}},f=m,h=(t("58cd"),t("2877")),_=Object(h["a"])(f,o,s,!1,null,null,null);i["default"]=_.exports},"43df":function(e,i,t){},"58cd":function(e,i,t){"use strict";var o=t("43df"),s=t.n(o);s.a}}]);