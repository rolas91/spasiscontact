(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{8621:function(e,a,t){"use strict";var i=t("b52d"),n=t.n(i);n.a},b52d:function(e,a,t){},d070:function(e,a,t){"use strict";t.r(a);var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("q-page",{},[t("div",{staticClass:"q-pa-md"},[t("q-card",[t("q-card-section",{staticClass:"bg-blue-background text-white q-gutter-sm"},[t("h5",{staticClass:"page-title"},[e._v("\n          "+e._s(e.nuevo?"Nuevo ":"Editar ")+" Participante\n        ")])]),t("q-separator"),t("q-card-section",[t("q-form",{on:{submit:e.onSubmit}},[t("h5",[e._v("Datos Personales")]),t("div",{staticClass:"row q-col-gutter-md"},[t("label",[e._v("Foto")]),t("div",{staticClass:"col-12"},[t("q-img",{staticClass:"imagen",attrs:{src:void 0!==e.participante&&e.participante.foto&&e.participante.foto.length>0?e.participante.foto:e.emptyUrl,"spinner-color":"white",contain:""},on:{click:function(a){return e.openFile()}}}),t("div",{staticClass:"center-mobile"},[void 0!==e.participante&&e.participante.foto&&e.participante.foto.length>0?t("q-btn",{staticClass:"btn-delete-image",attrs:{disable:e.readonly,icon:"delete_forever",color:"red"},on:{click:e.deleteImage}}):e._e()],1),t("q-btn",{staticClass:"bg-primary text-white openFile",attrs:{disable:e.readonly},on:{click:function(a){return e.openFile()}}},[e._v("\n                Seleccionar\n              ")]),t("q-uploader",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"uploader",staticStyle:{"max-width":"300px"},attrs:{readonly:e.readonly,label:"Foto",url:e.imageUrl,"field-name":"imagen","hide-upload-btn":"","no-thumbnails":"",accept:".jpg, image/*"},on:{added:e.previewImage,removed:e.RemoveFile},model:{value:e.participante.foto,callback:function(a){e.$set(e.participante,"foto",a)},expression:"participante.foto"}})],1)]),t("br"),t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-md-4"},[t("q-toggle",{attrs:{disable:e.readonly,label:e.participante.menor_edad?"Es menor de edad":"Es mayor de edad",icon:"fas fa-baby"},model:{value:e.participante.menor_edad,callback:function(a){e.$set(e.participante,"menor_edad",a)},expression:"participante.menor_edad"}})],1)]),t("div",{staticClass:"row q-col-gutter-md"},[t("div",{staticClass:"col-12 col-md-4"},[t("q-input",{attrs:{readonly:e.readonly,color:"primary",label:"Nombres","lazy-rules":"",rules:[function(e){return e&&e.length>0&&e.length<50||"Ingrese un Nombres válido"}]},model:{value:e.participante.nombres,callback:function(a){e.$set(e.participante,"nombres",a)},expression:"participante.nombres"}})],1),t("div",{staticClass:"col-12 col-md-4"},[t("q-input",{attrs:{readonly:e.readonly,color:"primary",label:"Apellidos","lazy-rules":"",rules:[function(e){return e&&e.length>0&&e.length<50||"Ingrese un Apellidos válido"}]},model:{value:e.participante.apellidos,callback:function(a){e.$set(e.participante,"apellidos",a)},expression:"participante.apellidos"}})],1),t("div",{staticClass:"col-12 col-md-4"},[t("q-input",{attrs:{readonly:e.readonly,color:"primary",label:"Documento Identidad"},model:{value:e.participante.documento_identidad,callback:function(a){e.$set(e.participante,"documento_identidad",a)},expression:"participante.documento_identidad"}})],1)]),t("div",{staticClass:"row q-col-gutter-md"},[t("div",{staticClass:"col-12 col-md-4"},[t("q-input",{attrs:{readonly:e.readonly,color:"primary",label:"Correo","lazy-rules":"",rules:[function(a){return a&&e.emailRegex.test(a)||!a||"Ingrese un correo válido"}]},model:{value:e.participante.correo,callback:function(a){e.$set(e.participante,"correo",a)},expression:"participante.correo"}})],1),t("div",{staticClass:"col-12 col-md-4"},[t("q-input",{attrs:{readonly:e.readonly,color:"primary",label:"Teléfono","lazy-rules":"",rules:[function(a){return a&&e.phoneRegex.test(a)||!a||"Ingrese un Teléfono válido"}]},model:{value:e.participante.telefono,callback:function(a){e.$set(e.participante,"telefono",a)},expression:"participante.telefono"}})],1),t("div",{staticClass:"col-12 col-md-4"},[t("q-select",{attrs:{readonly:e.readonly,"bg-color":"white",label:"Sexo",options:e.tipo_sexo,"lazy-rules":"","emit-value":"","map-options":"",rules:[function(e){return e&&e.length>0||"Seleccione el sexo del participante"}]},model:{value:e.participante.sexo,callback:function(a){e.$set(e.participante,"sexo",a)},expression:"participante.sexo"}})],1)]),t("div",{staticClass:"row q-col-gutter-md"},[t("div",{staticClass:"col-12 col-md-4"},[t("q-input",{attrs:{readonly:e.readonly,label:"Fecha Nacimiento","lazy-rules":"",rules:[function(a){return a&&e.isValidDate(a)&&/\d{1,2}\/\d{1,2}\/\d{4}/.test(a)||"Ingrese una Fecha Nacimiento válida"}]},scopedSlots:e._u([{key:"append",fn:function(){return[t("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[t("q-popup-proxy",{ref:"qDateProxyFechaNacimiento",attrs:{"transition-show":"scale","transition-hide":"scale"}},[t("q-date",{attrs:{mask:"DD/MM/YYYY","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Ingrese una fecha de nacimiento válida"}]},on:{input:function(){return e.$refs.qDateProxyFechaNacimiento.hide()}},model:{value:e.participante.fecha_nacimiento,callback:function(a){e.$set(e.participante,"fecha_nacimiento",a)},expression:"participante.fecha_nacimiento"}})],1)],1)]},proxy:!0}]),model:{value:e.participante.fecha_nacimiento,callback:function(a){e.$set(e.participante,"fecha_nacimiento",a)},expression:"participante.fecha_nacimiento"}})],1),t("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"col-12 col-md-4"},[t("q-select",{attrs:{label:"Pais",options:e.paises,"lazy-rules":"",rules:[function(e){return e||"Ingrese un Pais válido"}],"option-value":"id","option-label":"nombre","emit-value":"","map-options":"",readonly:""},scopedSlots:e._u([{key:"no-option",fn:function(){return[t("q-item",[t("q-item-section",{staticClass:"text-grey"},[e._v("\n                      No hay resultados disponibles\n                    ")])],1)]},proxy:!0}]),model:{value:e.participante.id_pais,callback:function(a){e.$set(e.participante,"id_pais",a)},expression:"participante.id_pais"}})],1),t("div",{staticClass:"col-12 col-md-4"},[t("q-select",{attrs:{readonly:e.readonly,label:"Departamento",options:e.departamentos,loading:e.loadingDepartamentos,"lazy-rules":"",rules:[function(e){return e||"Ingrese un Departamento válido"}],"option-value":"id","option-label":"nombre","emit-value":"","map-options":""},on:{input:function(a){return e.CargarMunicipios("",!0)}},scopedSlots:e._u([{key:"no-option",fn:function(){return[t("q-item",[t("q-item-section",{staticClass:"text-grey"},[e._v("\n                      No hay resultados disponibles\n                    ")])],1)]},proxy:!0}]),model:{value:e.participante.id_departamento,callback:function(a){e.$set(e.participante,"id_departamento",a)},expression:"participante.id_departamento"}})],1),t("div",{staticClass:"col-12 col-md-4"},[t("q-select",{attrs:{readonly:e.readonly,label:"Municipio",options:e.municipios,loading:e.loadingmunicipios,"lazy-rules":"",rules:[function(e){return e||"Ingrese un municipio válido"}],"option-value":"id","option-label":"nombre","emit-value":"","map-options":""},scopedSlots:e._u([{key:"no-option",fn:function(){return[t("q-item",[t("q-item-section",{staticClass:"text-grey"},[e._v("\n                      No hay resultados disponibles\n                    ")])],1)]},proxy:!0}]),model:{value:e.participante.id_ciudad,callback:function(a){e.$set(e.participante,"id_ciudad",a)},expression:"participante.id_ciudad"}})],1)]),t("div",{staticClass:"row q-col-gutter-md"},[t("div",{staticClass:"col-12 col-md-4"},[t("q-input",{attrs:{readonly:e.readonly,color:"primary",label:"Dirección","lazy-rules":"",rules:[function(e){return e&&e.length>0&&e.length<255||"Ingrese un Dirección válido"}]},model:{value:e.participante.direccion,callback:function(a){e.$set(e.participante,"direccion",a)},expression:"participante.direccion"}})],1)]),t("div",{staticClass:"row q-col-gutter-md"},[t("div",{staticClass:"col-12"},[t("h5",[e._v("Información académica")])]),t("div",{staticClass:"col-12 col-md-4"},[t("q-select",{attrs:{readonly:e.readonly,label:"Nivel educacion",options:e.nivel_educaciones,loading:e.loadingNivelEducaciones,"lazy-rules":"",rules:[function(e){return e||"Ingrese un Nivel Educación válido"}],"option-value":"id","option-label":"nombre","emit-value":"","map-options":""},scopedSlots:e._u([{key:"no-option",fn:function(){return[t("q-item",[t("q-item-section",{staticClass:"text-grey"},[e._v("\n                      No hay resultados disponibles\n                    ")])],1)]},proxy:!0}]),model:{value:e.participante.id_nivel_educacion,callback:function(a){e.$set(e.participante,"id_nivel_educacion",a)},expression:"participante.id_nivel_educacion"}})],1),t("div",{staticClass:"col-12 col-md-3"},[t("q-toggle",{attrs:{disable:e.readonly,label:e.participante.estudiando?"Actualmente estudiando":"Actualmente no estudiando",icon:"fas fa-graduation-cap"},model:{value:e.participante.estudiando,callback:function(a){e.$set(e.participante,"estudiando",a)},expression:"participante.estudiando"}})],1),t("div",{staticClass:"col-12 col-md-5"},[e.participante.estudiando?t("q-input",{attrs:{readonly:e.readonly,color:"primary",label:"Curso Estudiando"},model:{value:e.participante.curso_estudiando,callback:function(a){e.$set(e.participante,"curso_estudiando",a)},expression:"participante.curso_estudiando"}}):e._e()],1)]),t("div",{staticClass:"row q-col-gutter-md"},[t("div",{staticClass:"col-12"},[t("h5",[e._v("Información laboral")])]),t("div",{staticClass:"col-12 col-md-4"},[t("q-toggle",{attrs:{disable:e.readonly,label:e.participante.trabajando?"Actualmente Trabajando":"Actualmente Desempleado",icon:"fas fa-briefcase"},model:{value:e.participante.trabajando,callback:function(a){e.$set(e.participante,"trabajando",a)},expression:"participante.trabajando"}})],1)]),t("div",{staticClass:"row q-col-gutter-md"},[t("div",{staticClass:"col-12 col-md-4"},[e.participante.trabajando?t("q-input",{attrs:{readonly:e.readonly,color:"primary",label:"Lugar Trabajo"},model:{value:e.participante.lugar_trabajo,callback:function(a){e.$set(e.participante,"lugar_trabajo",a)},expression:"participante.lugar_trabajo"}}):e._e()],1),t("div",{staticClass:"col-12 col-md-4"},[e.participante.trabajando?t("q-input",{attrs:{readonly:e.readonly,type:"number",label:"Salario","lazy-rules":"",rules:[function(e){return e&&e>0||"Ingrese un Salario válido"}]},model:{value:e.participante.salario,callback:function(a){e.$set(e.participante,"salario",a)},expression:"participante.salario"}}):e._e()],1)]),e.participante.menor_edad?t("div",{staticClass:"row q-col-gutter-md"},[t("div",{staticClass:"col-12"},[t("h5",[e._v("Datos referencia (Opcional)")])]),t("div",{staticClass:"col-12 col-md-4"},[t("q-select",{attrs:{readonly:e.readonly,label:"Parentesco",options:e.parentescos,loading:e.loadingparentescos,"lazy-rules":"",rules:[function(e){return e||"Ingrese un Nivel parentesco válido"}],"option-value":"id","option-label":"nombre","emit-value":"","map-options":"",clearable:""},scopedSlots:e._u([{key:"no-option",fn:function(){return[t("q-item",[t("q-item-section",{staticClass:"text-grey"},[e._v("\n                      No hay resultados disponibles\n                    ")])],1)]},proxy:!0}],null,!1,2138845739),model:{value:e.participante.id_parentezco,callback:function(a){e.$set(e.participante,"id_parentezco",a)},expression:"participante.id_parentezco"}})],1),t("div",{staticClass:"col-12 col-md-4"},[t("q-input",{attrs:{readonly:e.readonly,color:"primary",label:"Nombre Completo"},model:{value:e.participante.referencia_nombre,callback:function(a){e.$set(e.participante,"referencia_nombre",a)},expression:"participante.referencia_nombre"}})],1),t("div",{staticClass:"col-12 col-md-4"},[t("q-input",{attrs:{readonly:e.readonly,color:"primary",label:"Cédula","lazy-rules":"",rules:[function(a){return a&&e.cedulaRegex.test(a)||!a||"Ingrese una cédula válida"}]},model:{value:e.participante.referencia_cedula,callback:function(a){e.$set(e.participante,"referencia_cedula",a)},expression:"participante.referencia_cedula"}})],1),t("div",{staticClass:"col-12 col-md-4"},[t("q-input",{attrs:{readonly:e.readonly,color:"primary",label:"Teléfono"},model:{value:e.participante.referencia_telefono,callback:function(a){e.$set(e.participante,"referencia_telefono",a)},expression:"participante.referencia_telefono"}})],1)]):e._e(),t("div",{staticClass:"row q-col-gutter-md"},[t("div",{staticClass:"col-12 col-md-4"},[e.participante.menor_edad?t("q-input",{attrs:{color:"primary",label:"Correo","lazy-rules":"",rules:[function(a){return a&&e.emailRegex.test(a)||!a||"Ingrese un correo válido"}]},model:{value:e.participante.referencia_correo,callback:function(a){e.$set(e.participante,"referencia_correo",a)},expression:"participante.referencia_correo"}}):e._e()],1)]),t("br"),t("q-card-actions",{staticClass:"row justify-between q-gutter-sm"},[t("q-btn",{attrs:{right:"",icon:"close"},on:{click:e.Cancelar}},[e._v("Cancelar")]),e.readonly?e._e():t("q-btn",{staticClass:"bg-primary text-white",attrs:{loading:e.loading,disable:e.loading,right:"",type:"submit",icon:"save"}},[e._v("\n              Guardar\n            ")])],1)],1)],1)],1)],1)])},n=[],o=t("a34a"),r=t.n(o),s=(t("7f7f"),t("96cf"),t("c973")),l=t.n(s),c=(t("3b2b"),t("c1df")),p=t.n(c),d=t("bc3a"),u=t.n(d),m={name:"Participante",data:function(){return{nuevo:!0,initializing:!0,readonly:!1,cedulaRegex:new RegExp(/^\d{3}-?\d{6}-?\d{4}[a-zA-Z]{1}$/),emailRegex:new RegExp(/^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/),phoneRegex:new RegExp(/^[\s.-]?\(?\d{4}\)?[\s.-]?\d{4}$/),emptyUrl:"http:35.203.165.142/img/placeholder.jpg",imageUrl:"http://35.203.165.142/api/admin/participantes/uploadImage",participante:{id:0,foto:null,nombres:"",apellidos:"",telefono:"",correo:"",id_tipo_identificacion:null,documento_identidad:"",menor_edad:!1,fecha_nacimiento:null,id_estado_civil:null,sexo:"",id_pais:1438,id_departamento:null,id_ciudad:null,direccion:"",id_nivel_educacion:null,estudiando:!1,curso_estudiando:"",trabajando:!1,lugar_trabajo:"",salario:0,referencia_nombre:"",id_parentezco:null,referencia_cedula:"",referencia_telefono:"",referencia_correo:""},participantes:[],municipios:[],departamentos:[],estado_civiles:[],nivel_educaciones:[],paises:[],tipo_identificaciones:[],instructores:[],parentescos:[],loadingmunicipios:!1,loadingDepartamentos:!1,loadingEstadoCiviles:!1,loadingNivelEducaciones:!1,loadingPaises:!1,loadingTipoIdentificaciones:!1,loadingparentescos:!1,loading:!1,tipo_sexo:[{value:"F",label:"Femenino"},{value:"M",label:"Masculino"}]}},created:function(){var e=this;return l()(r.a.mark((function a(){return r.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.loading=!0,e.initializing=!0,"editar_participante"!==e.$route.name&&"ver_participante"!==e.$route.name||!e.$route.params.id){a.next=7;break}return e.nuevo=!1,e.readonly="ver_participante"===e.$route.name,a.next=7,e.cargarparticipante();case 7:return a.next=9,e.CargarPaises();case 9:return a.next=11,e.CargarDepartamentos();case 11:return a.next=13,e.CargarEstadoCiviles();case 13:return a.next=15,e.CargarNivelEducaciones();case 15:return a.next=17,e.CargarTipoIdentificaciones();case 17:return a.next=19,e.CargarParentescos();case 19:e.loading=!1,e.initializing=!1;case 21:case"end":return a.stop()}}),a)})))()},methods:{Cancelar:function(){this.$router.push({path:"/admin/participantes"})},uploadFile:function(){var e=this,a=new FormData;a.append("imagen",this.$refs.uploader.files[0]),a.append("participante",JSON.stringify(this.participante)),u.a.post(this.imageUrl,a,{headers:{"Content-Type":void 0,Authorization:"Bearer "+this.$store.state.token}}).then((function(e){if(e.data.ok)return this.participante.foto="http:35.203.165.142/img/participantes/fotos/"+e.data.urlFoto,!0})).catch((function(a){return e.$q.notify({color:"red-5",textColor:"white",icon:"fas fa-exclamation-triangle",message:a.response.data.message}),!1}))},RemoveFile:function(){this.$refs.uploader.reset()},deleteImage:function(){this.RemoveFile(),this.participante.foto=null},previewImage:function(){this.participante.foto=URL.createObjectURL(this.$refs.uploader.files[0])},openFile:function(){var e=this;this.$refs.uploader.reset(),setTimeout((function(){e.$refs.uploader.pickFiles()}),0)},isValidDate:function(e){return p()(e,"DD/MM/YYYY",!0).isValid()},onSubmit:function(){var e=this;this.loading=!0;var a="post",t="http://35.203.165.142/api/admin/participantes";this.nuevo||(t="http://35.203.165.142/api/admin/participantes/"+this.participante.id,a="put");var i={Authorization:"Bearer "+this.$store.state.token};u()({method:a,url:t,data:{participante:this.participante},headers:i}).then((function(a){if(a.data.result){e.participante.id=a.data.participante.id;var t=e.uploadFile();t&&e.$q.notify({color:"green-4",textColor:"white",icon:"fas fa-check-circle",message:"Participante creado correctamente",position:"bottom",timeout:2e3})}e.$router.push({path:"/admin/participantes"})})).catch((function(a){e.loading=!1,e.$q.notify({color:"red-5",textColor:"white",icon:"fas fa-exclamation-triangle",message:a.response.data.message}),401===a.response.status&&(e.removeCredentials(),e.$router.push({name:"login"}))}))},cargarparticipante:function(){var e=this;this.loading=!0;var a="http://35.203.165.142/api"+"/admin/participantes/".concat(this.$route.params.id,"/edit"),t={Authorization:"Bearer "+this.$store.state.token};u()({method:"get",url:a,headers:t}).then((function(a){e.participante=a.data.participante,e.participante.foto=a.data.participante.foto?"http:35.203.165.142/img/participantes/fotos/"+a.data.participante.foto:"",e.CargarMunicipios(),e.CargarParentescos()})).catch((function(a){e.loadingparticipantes=!1,401===a.response.status&&(e.removeCredentials(),e.$router.push({name:"login"}))}))},CargarMunicipios:function(){var e=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t&&(this.participante.id_ciudad=null),this.loadingmunicipios=!0;var i="http://35.203.165.142/api/catalogos/municipios",n={Authorization:"Bearer "+this.$store.state.token},o={q:a,id_padre:null!==this.participante.id_departamento?this.participante.id_departamento:""};u()({method:"get",url:i,params:o,headers:n}).then((function(a){e.municipios=a.data.municipios,e.loadingmunicipios=!1})).catch((function(a){e.loadingmunicipios=!1,401===a.response.status&&(e.removeCredentials(),e.$router.push({name:"login"}))}))},CargarDepartamentos:function(){var e=this;this.loadingDepartamentos=!0;var a="http://35.203.165.142/api/catalogos/departamentos",t={Authorization:"Bearer "+this.$store.state.token},i={q:"",id_padre:this.participante.id_pais};u()({method:"get",url:a,params:i,headers:t}).then((function(a){e.departamentos=a.data.departamentos,e.loadingDepartamentos=!1})).catch((function(a){e.loadingDepartamentos=!1,401===a.response.status&&(e.removeCredentials(),e.$router.push({name:"login"}))}))},CargarEstadoCiviles:function(){var e=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.loadingEstadoCiviles=!0;var t="http://35.203.165.142/api/catalogos/estado_civiles",i={Authorization:"Bearer "+this.$store.state.token},n={q:a};u()({method:"get",url:t,params:n,headers:i}).then((function(a){e.estado_civiles=a.data.estado_civiles,e.loadingEstadoCiviles=!1})).catch((function(a){e.loadingEstadoCiviles=!1,401===a.response.status&&(e.removeCredentials(),e.$router.push({name:"login"}))}))},CargarNivelEducaciones:function(){var e=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.loadingNivelEducaciones=!0;var t="http://35.203.165.142/api/catalogos/nivel_academicos",i={Authorization:"Bearer "+this.$store.state.token},n={q:a};u()({method:"get",url:t,params:n,headers:i}).then((function(a){e.nivel_educaciones=a.data.nivel_academicos,e.loadingNivelEducaciones=!1})).catch((function(a){e.loadingNivelEducaciones=!1,401===a.response.status&&(e.removeCredentials(),e.$router.push({name:"login"}))}))},CargarParentescos:function(){var e=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.loadingparentescos=!0;var t="http://35.203.165.142/api/catalogos/parentescos",i={Authorization:"Bearer "+this.$store.state.token},n={q:a,loadAll:!0};u()({method:"get",url:t,params:n,headers:i}).then((function(a){e.parentescos=a.data.parentescos,e.loadingparentescos=!1})).catch((function(a){e.loadingparentescos=!1,401===a.response.status&&(e.removeCredentials(),e.$router.push({name:"login"}))}))},CargarPaises:function(){var e=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.loadingPaises=!0;var t="http://35.203.165.142/api/catalogos/paises",i={Authorization:"Bearer "+this.$store.state.token},n={q:a};u()({method:"get",url:t,params:n,headers:i}).then((function(a){e.paises=a.data.paises,e.loadingPaises=!1})).catch((function(a){e.loadingPaises=!1,401===a.response.status&&(e.removeCredentials(),e.$router.push({name:"login"}))}))},CargarTipoIdentificaciones:function(){var e=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.loadingTipoIdentificaciones=!0;var t="http://35.203.165.142/api/catalogos/tipo_identificaciones",i={Authorization:"Bearer "+this.$store.state.token},n={q:a};u()({method:"get",url:t,params:n,headers:i}).then((function(a){e.tipo_identificaciones=a.data.tipo_identificaciones,e.loadingTipoIdentificaciones=!1})).catch((function(a){e.loadingTipoIdentificaciones=!1,401===a.response.status&&(e.removeCredentials(),e.$router.push({name:"login"}))}))}}},f=m,v=(t("8621"),t("2877")),g=Object(v["a"])(f,i,n,!1,null,null,null);a["default"]=g.exports}}]);