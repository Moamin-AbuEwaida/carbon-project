"use strict";(self["webpackChunkcarbon_project"]=self["webpackChunkcarbon_project"]||[]).push([[725],{4725:function(t,e,s){s.r(e),s.d(e,{default:function(){return d}});var a=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"home"},[e("div",{staticClass:"mt-4"},[e("h4",[t._v("User's info")]),e("b-card",{staticClass:"mb-3",staticStyle:{height:"200px"},attrs:{"img-src":"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80","img-alt":"Card image","img-left":""}},[e("b-card-text",[e("div",{staticClass:"user-info"},[e("p",{staticClass:"name"},[t._v("Name: "+t._s(t.name))]),e("p",{staticClass:"gender"},[t._v("Gender: "+t._s(t.gender))]),e("p",{staticClass:"height"},[t._v("Height: "+t._s(t.height))]),e("p",{staticClass:"year"},[t._v("Date of birth: "+t._s(t.year))])])])],1)],1),e("div",{staticClass:"mt-4"},[e("h4",[t._v("Vehicle Info")]),e("b-card",{staticClass:"mb-3",staticStyle:{height:"200px"},attrs:{"img-src":"https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80","img-alt":"Card image","img-right":""}},[e("b-card-text",[e("div",{staticClass:"user-info"},[e("p",[t._v("Car model: "+t._s(t.model))]),e("p",[t._v("Car length: "+t._s(t.length)+"m")]),e("p",[t._v("No. of passengers: "+t._s(t.passengers))]),e("p",[t._v("Period: "+t._s(t.consumables))])])])],1)],1)])])},i=[],l=s(8358),n={name:"HomeView",data(){return{name:null,gender:null,height:null,year:null,model:null,length:null,passengers:null,consumables:null}},mounted(){l.Z.get("https://swapi.dev/api/people/1/").then((t=>{this.name=t.data.name,this.gender=t.data.gender,this.height=t.data.height,this.year=t.data.birth_year})),l.Z.get("https://swapi.dev/api/vehicles/4/").then((t=>{this.model=t.data.model,this.length=t.data.length,this.passengers=t.data.passengers,this.consumables=t.data.consumables}))}},r=n,h=s(1001),c=(0,h.Z)(r,a,i,!1,null,"84e7c82e",null),d=c.exports}}]);
//# sourceMappingURL=725.b889f103.js.map