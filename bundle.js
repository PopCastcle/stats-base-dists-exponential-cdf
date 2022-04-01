// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).cdf=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return r({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,a=e.__defineSetter__,i=e.__lookupGetter__,f=e.__lookupSetter__;var c=n,l=function(r,t,n){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(i.call(r,t)||f.call(r,t)?(c=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=c):r[t]=n.value),y="get"in n,v="set"in n,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,t,n.get),v&&a&&a.call(r,t,n.set),r},y=t()?c:l;var v=function(r,t,n){y(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})};var p=function(r){return r!=r},b=Math.floor,d=Math.ceil,A=b,_=d;var w=function(r){return r<0?_(r):A(r)},m=Number.NEGATIVE_INFINITY,s=Number.POSITIVE_INFINITY,h=s,U=m;var g=function(r){return r===h||r===U};var j=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var I=function(){return j&&"symbol"==typeof Symbol.toStringTag},N=Object.prototype.toString,O=N;var S=function(r){return O.call(r)},E=Object.prototype.hasOwnProperty;var F=function(r,t){return null!=r&&E.call(r,t)},T="function"==typeof Symbol?Symbol.toStringTag:"",H=F,G=T,P=N;var L=S,V=function(r){var t,n,e;if(null==r)return P.call(r);n=r[G],t=H(r,G);try{r[G]=void 0}catch(t){return P.call(r)}return e=P.call(r),t?r[G]=n:delete r[G],e},W=I()?V:L,x=W,M="function"==typeof Uint32Array;var k="function"==typeof Uint32Array?Uint32Array:null,Y=function(r){return M&&r instanceof Uint32Array||"[object Uint32Array]"===x(r)},C=k;var q=function(){var r,t;if("function"!=typeof C)return!1;try{t=new C(t=[1,3.14,-3.14,4294967296,4294967297]),r=Y(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var z="function"==typeof Uint32Array?Uint32Array:void 0,B=function(){throw new Error("not implemented")},D=q()?z:B,J=W,K="function"==typeof Float64Array;var Q="function"==typeof Float64Array?Float64Array:null,R=function(r){return K&&r instanceof Float64Array||"[object Float64Array]"===J(r)},X=Q;var Z=function(){var r,t;if("function"!=typeof X)return!1;try{t=new X([1,3.14,-3.14,NaN]),r=R(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r};var $="function"==typeof Float64Array?Float64Array:void 0,rr=function(){throw new Error("not implemented")},tr=Z()?$:rr,nr=W,er="function"==typeof Uint8Array;var or="function"==typeof Uint8Array?Uint8Array:null,ur=function(r){return er&&r instanceof Uint8Array||"[object Uint8Array]"===nr(r)},ar=or;var ir=function(){var r,t;if("function"!=typeof ar)return!1;try{t=new ar(t=[1,3.14,-3.14,256,257]),r=ur(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var fr="function"==typeof Uint8Array?Uint8Array:void 0,cr=function(){throw new Error("not implemented")},lr=ir()?fr:cr,yr=W,vr="function"==typeof Uint16Array;var pr="function"==typeof Uint16Array?Uint16Array:null,br=function(r){return vr&&r instanceof Uint16Array||"[object Uint16Array]"===yr(r)},dr=pr;var Ar=function(){var r,t;if("function"!=typeof dr)return!1;try{t=new dr(t=[1,3.14,-3.14,65536,65537]),r=br(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var _r,wr="function"==typeof Uint16Array?Uint16Array:void 0,mr=function(){throw new Error("not implemented")},sr={uint16:Ar()?wr:mr,uint8:lr};(_r=new sr.uint16(1))[0]=4660;var hr,Ur,gr=52===new sr.uint8(_r.buffer)[0];!0===gr?(hr=1,Ur=0):(hr=0,Ur=1);var jr=D,Ir={HIGH:hr,LOW:Ur},Nr=new tr(1),Or=new jr(Nr.buffer),Sr=Ir.HIGH,Er=Ir.LOW;var Fr=function(r,t){return Nr[0]=t,r[0]=Or[Sr],r[1]=Or[Er],r};var Tr=function(r,t){return 1===arguments.length?Fr([0,0],r):Fr(r,t)},Hr=Tr,Gr=D,Pr=!0===gr?1:0,Lr=new tr(1),Vr=new Gr(Lr.buffer);var Wr,xr,Mr=function(r){return Lr[0]=r,Vr[Pr]};!0===gr?(Wr=1,xr=0):(Wr=0,xr=1);var kr=D,Yr={HIGH:Wr,LOW:xr},Cr=new tr(1),qr=new kr(Cr.buffer),zr=Yr.HIGH,Br=Yr.LOW;var Dr=function(r,t){return qr[zr]=r,qr[Br]=t,Cr[0]},Jr=Hr,Kr=Mr,Qr=Dr,Rr=[0,0];var Xr=g,Zr=p,$r=function(r){return Math.abs(r)};var rt=function(r,t){return Zr(t)||Xr(t)?(r[0]=t,r[1]=0,r):0!==t&&$r(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)};var tt=function(r,t){return 1===arguments.length?rt([0,0],r):rt(r,t)},nt=Mr;var et=function(r){var t=nt(r);return(t=(2146435072&t)>>>20)-1023|0},ot=s,ut=m,at=p,it=g,ft=function(r,t){var n,e;return Jr(Rr,r),n=Rr[0],n&=2147483647,e=Kr(t),Qr(n|=e&=2147483648,Rr[1])},ct=tt,lt=et,yt=Hr,vt=Dr,pt=[0,0],bt=[0,0];var dt=function(r,t){var n,e;return 0===t||0===r||at(r)||it(r)?r:(ct(pt,r),t+=pt[1],(t+=lt(r=pt[0]))<-1074?ft(0,r):t>1023?r<0?ut:ot:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,yt(bt,r),n=bt[0],n&=2148532223,e*vt(n|=t+1023<<20,bt[1])))};var At=dt,_t=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var wt=p,mt=w,st=m,ht=s,Ut=function(r,t,n){var e,o,u;return u=(e=r-t)-(o=e*e)*_t(o),At(1-(t-e*u/(2-u)-r),n)},gt=1.4426950408889634,jt=1/(1<<28);var It=function(r){var t;return wt(r)||r===ht?r:r===st?0:r>709.782712893384?ht:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<jt?1+r:(t=mt(r<0?gt*r-.5:gt*r+.5),Ut(r-.6931471803691238*t,1.9082149292705877e-10*t,t))},Nt=p,Ot=It,St=s;var Et=function(r){return function(){return r}},Ft=p,Tt=It,Ht=s;var Gt=function(r,t){return Nt(t)||t<0||t===St?NaN:r<0?0:1-Ot(-t*r)};return v(Gt,"factory",(function(r){return Ft(r)||r<0||r===Ht?Et(NaN):function(t){if(t<0)return 0;return 1-Tt(-r*t)}})),Gt}));
//# sourceMappingURL=bundle.js.map
