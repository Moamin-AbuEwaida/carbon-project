"use strict";(self["webpackChunkcarbon_project"]=self["webpackChunkcarbon_project"]||[]).push([[614],{3784:function(s,e,a){a.r(e),a.d(e,{default:function(){return o}});var t=function(){var s=this,e=s._self._c;return e("div",[e("div",{staticClass:"home"},[e("h1",[s._v("User's info")]),e("div",{staticClass:"info"},[e("div",{staticClass:"left-side"},[e("div",{staticClass:"name"},[s._v("Name: "+s._s(s.name))])]),e("div",{staticClass:"right-side"},[e("div",{staticClass:"gender"},[s._v("Gender: "+s._s(s.gender))]),e("div",{staticClass:"height"},[s._v("Height: "+s._s(s.height))]),e("div",{staticClass:"year"},[s._v("Date of birth: "+s._s(s.year))])])]),e("h1",[s._v("Vehicle Info")]),e("div",{staticClass:"car-info"},[e("div",{staticClass:"model"},[s._v("Car model: "+s._s(s.model))]),e("div",{staticClass:"model"},[s._v("Car length: "+s._s(s.length)+"m")]),e("div",{staticClass:"model"},[s._v("No. of passengers: "+s._s(s.passengers))]),e("div",{staticClass:"model"},[s._v("Period: "+s._s(s.consumables))])])])])},i=[],l=a(8358),n={name:"HomeView",data(){return{name:null,gender:null,height:null,year:null,model:null,length:null,passengers:null,consumables:null}},mounted(){l.Z.get("https://swapi.dev/api/people/1/").then((s=>{this.name=s.data.name,this.gender=s.data.gender,this.height=s.data.height,this.year=s.data.birth_year})),l.Z.get("https://swapi.dev/api/vehicles/4/").then((s=>{this.model=s.data.model,this.length=s.data.length,this.passengers=s.data.passengers,this.consumables=s.data.consumables}))}},d=n,h=a(1001),r=(0,h.Z)(d,t,i,!1,null,"af95107e",null),o=r.exports}}]);
//# sourceMappingURL=614.4ba0cda5.js.map