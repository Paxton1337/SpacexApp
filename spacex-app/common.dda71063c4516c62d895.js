(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{TWQ8:function(t,e,r){"use strict";r.d(e,"a",(function(){return h}));var s=r("LRne"),o=r("eIep"),c=r("vkgz"),p=r("fXoL"),a=r("tk/3"),n=r("zM63");let i=(()=>{class t{constructor(t){this.progress=t,this.progressRef=this.progress.ref("myProgress")}start(){this.progressRef.start()}complete(){this.progressRef.complete()}}return t.\u0275fac=function(e){return new(e||t)(p.bc(n.a))},t.\u0275prov=p.Ob({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),h=(()=>{class t{constructor(t,e){this.http=t,this.progress=e}getAllLaunches(){return this.progress.start(),Object(s.a)(this.http.get("https://api.spacexdata.com/v3/launches")).pipe(Object(o.a)(t=>t),Object(c.a)(()=>this.progress.complete()))}getCurrentLaunch(t){return this.progress.start(),Object(s.a)(this.http.get("https://api.spacexdata.com/v3/launches/"+t)).pipe(Object(o.a)(t=>t),Object(c.a)(()=>this.progress.complete()))}}return t.\u0275fac=function(e){return new(e||t)(p.bc(a.b),p.bc(i))},t.\u0275prov=p.Ob({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);