var e;!function(e){e.TOKEN_KEYS="adal.token.keys",e.ACCESS_TOKEN_KEY="adal.access.token.key",e.EXPIRATION_KEY="adal.expiration.key",e.STATE_LOGIN="adal.state.login",e.STATE_RENEW="adal.state.renew",e.NONCE_IDTOKEN="adal.nonce.idtoken",e.SESSION_STATE="adal.session.state",e.USERNAME="adal.username",e.IDTOKEN="adal.idtoken",e.ERROR="adal.error",e.ERROR_DESCRIPTION="adal.error.description",e.LOGIN_REQUEST="adal.login.request",e.LOGIN_ERROR="adal.login.error",e.RENEW_STATUS="adal.token.renew.status"}(e||(e={}));const t=(()=>{function e(e){const t=window[e];return!!t&&(t.setItem("__test__","__test__"),"__test__"===t.getItem("__test__")&&(t.removeItem("__test__"),!t.getItem("__test__")))}return e("localStorage")?localStorage:e("sessionStorage")?sessionStorage:{getItem(){},setItem(){}}})();var n,o,r,a;function i(t){if(window._adalInstance)return window._adalInstance;let n,i;t=(e=>({popUp:!1,instance:"https://login.microsoftonline.com/",loginResource:e.clientId,laodFrameTimeout:6e3,expireOffsetSeconds:300,anonymousEndpoints:[],navigateToLoginRequestUrl:!0,tenant:"common",redirectUri:window.location.href.split("?")[0].split("#")[0],callback:()=>{},...e}))(t);let s={},g=!1,h=!1,K=[],C=[],k={},U={},y=o.LOGIN;function P(t,n,o,r,a){d(e.ERROR,o),d(e.ERROR_DESCRIPTION,r),d(e.LOGIN_ERROR,a),n&&s[n]&&(s[n]=null),g=!1,h=!1,t&&t(r,null,o)}function v(n,r,a){var i=function(e,t,n,o){try{const t=window.innerWidth/2-241.5+window.screenX,n=window.innerHeight/2-300+window.screenY,o=window.open(e,"login","width=483, height=600, top="+n+", left="+t);return o.focus&&o.focus(),o}catch(e){g=!1,h=!1}}(n),s=a||t.callback;if(!i){var c="Popup Window is null. This can happen if you are using IE";return void P(s,r,"Error opening popup",c,c)}C.push(i);const l=t.redirectUri.split("#")[0];let d=setInterval(()=>{if(!i||i.closed||void 0===i.closed){let e="Popup Window closed by UI action/ Popup Window handle destroyed due to cross zone navigation in IE/Edge";return P(s,r,"Popup Window closed",e,e),void clearInterval(d)}try{let t=i.location;if(-1!=encodeURI(t.href).indexOf(encodeURI(l)))return function(t=window.location.hash){if(!u(t))return;let n,r;const a=C[C.length-1];a&&a.opener&&a.opener._adalInstance?(n=a.opener._adalInstance,r=!0):window.parent&&window.parent._adalInstance&&(n=window.parent._adalInstance);let i,s,c,l=n.getRequestInfo(t);i=r||window.parent!==window?n._callBackMappedToRenewStates[l.stateResponse]:n.config.callback,n.saveTokenFromHash(l),l.requestType===o.RENEW_TOKEN&&window.parent?(s=l.parameters.access_token||l.parameters.id_token,c="access_token"):l.requestType===o.LOGIN&&(s=l.parameters.id_token,c="id_token");let d=l.parameters.error_description,p=l.parameters.error;try{i&&i(d,s,p,c)}catch(e){}window.parent!==window||r||(n.config.navigateToLoginRequestUrl?window.location.href=T(e.LOGIN_REQUEST):window.location.hash="")}(t.hash),clearInterval(d),g=!1,h=!1,C=[],void i.close()}catch(e){}},1)}function A(){if(!n){const t=T(e.IDTOKEN);t&&(n=q(t))}return n}function L(n){if(!p(n))return;const o=T(e.ACCESS_TOKEN_KEY+n),r=T(e.EXPIRATION_KEY+n);if(r&&r>S()+t.expireOffsetSeconds)return o;d(e.ACCESS_TOKEN_KEY+n,""),d(e.EXPIRATION_KEY+n,0)}function x(e,t,n){s[t]=e,U[e]||(U[e]=[]),U[e].push(n),k[e]||(k[e]=(n,o,r,a)=>{s[t]=null;for(var i=0;i<U[e].length;++i)try{U[e][i](n,o,r,a)}catch(r){}U[e]=null,k[e]=null})}function W(n,o,a="token"){let s=F("adalRenewFrame"+n),c=N()+"|"+n;t.state=c,K.push(c);let p=l(M(a,n),"prompt");a===r.ID_TOKEN&&(i=N(),d(e.NONCE_IDTOKEN,i,!0),p+="&nonce="+encodeURIComponent(i)),p+="&prompt=none",p=G(p),x(c,n,o),s.src="about:blank",b(p,"adalRenewFrame"+n,n)}function D(n,o){let r=F("adalIdTokenFrame"),a=N()+"|"+t.clientId;i=N(),d(e.NONCE_IDTOKEN,i,!0),t.state=a,K.push(a);let s=o||t.clientId,c=l(M(o=o||"id_token",s),"prompt");c=G(c+"&prompt=none"),c+="&nonce="+encodeURIComponent(i),x(a,t.clientId,n),r.src="about:blank",b(c,"adalIdTokenFrame",t.clientId)}function b(n,o,r){d(e.RENEW_STATUS+r,a.InProgress),function e(t,n){setTimeout(()=>{const o=F(n);o.src&&"about:blank"!==o.src||(o.src=t,e(t,n))},500)}(n,o),setTimeout(()=>{if(T(e.RENEW_STATUS+r)===a.InProgress){var t=s[r];t&&k[t]&&k[t]("Token renewal operation failed due to timeout",null,"Token Renewal Failed"),d(e.RENEW_STATUS+r,a.Canceled)}},t.loadFrameTimeout)}function Y(e){e&&window.location.replace(e)}function G(e){if(!n||!n.profile)return e;if(n.profile.sid&&-1!==e.indexOf("&prompt=none"))c("sid",e)||(e+="&sid="+encodeURIComponent(n.profile.sid));else if(n.profile.upn&&(c("login_hint",e)||(e+="&login_hint="+encodeURIComponent(n.profile.upn)),!c("domain_hint",e)&&n.profile.upn.indexOf("@")>-1)){var t=n.profile.upn.split("@");e+="&domain_hint="+encodeURIComponent(t[t.length-1])}return e}function q(e){const n=function(e){let t=function(e){if(m(e))return;let t=/^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/.exec(e);return!t||t.length<4?void 0:{header:t[1],JWSPayload:t[2],JWSSig:t[3]}}(e);var n;if(t)try{let e=(n=(n=t.JWSPayload).replace(/-/g,"+").replace(/_/g,"/"),decodeURIComponent(escape(window.atob(n))));return e?JSON.parse(e):void 0}catch(e){}}(e);if(w(n,"aud"))return n.aud.toLowerCase()===t.clientId.toLowerCase()?{userName:n.upn||n.email,profile:n}:void 0}let M=(e,n)=>t.instance+t.tenant+"/oauth2/authorize"+O(e,t,n);function F(e){return document.getElementById(e)||(document.body.insertAdjacentHTML("beforeEnd",`<iframe name="${e}" id="${e}" style="display:none"></iframe>`),window.frames&&window.frames[e])}return window._adalInstance={config:t,login:function(){if(g)return;g=!0;const n=N(),o=window.location.href;t.state=n,i=N(),d(e.LOGIN_REQUEST,o),d(e.LOGIN_ERROR,""),d(e.STATE_LOGIN,n,!0),d(e.NONCE_IDTOKEN,i,!0),d(e.ERROR,""),d(e.ERROR_DESCRIPTION,"");const r=M("id_token")+"&nonce="+encodeURIComponent(i);t.displayCall?t.displayCall(r):t.popUp?(d(e.STATE_LOGIN,""),K.push(n),x(n,t.clientId,t.callback),v(r)):Y(r)},logOut:function(){let o;if(function(){d(e.LOGIN_REQUEST,""),d(e.SESSION_STATE,""),d(e.STATE_LOGIN,""),d(e.STATE_RENEW,""),K=[],d(e.NONCE_IDTOKEN,""),d(e.IDTOKEN,""),d(e.ERROR,""),d(e.ERROR_DESCRIPTION,""),d(e.LOGIN_ERROR,""),d(e.LOGIN_ERROR,"");var t=T(e.TOKEN_KEYS);if(!m(t)){t=t.split("|");for(var n=0;n<t.length&&""!==t[n];n++)d(e.ACCESS_TOKEN_KEY+t[n],""),d(e.EXPIRATION_KEY+t[n],0)}d(e.TOKEN_KEYS,"")}(),n=null,t.logOutUri)o=t.logOutUri;else{let e="";t.postLogoutRedirectUri&&(e="post_logout_redirect_uri="+encodeURIComponent(t.postLogoutRedirectUri)),o=t.instance+t.tenant+"/oauth2/logout?"+e}Y(o)},getUser:A,getCachedUser:A,getCachedToken:L,registerCallback:x,acquireToken:function(e,a){if(!e){const e="resource is required";return void a(e,null,e)}const i=L(e);if(i)a(null,i,null);else if(n||t.extraQueryParameter&&-1!==t.extraQueryParameter.indexOf("login_hint"))s[e]?x(s[e],e,a):(y=o.RENEW_TOKEN,e===t.clientId?n?D(a):D(a,r.ID_TOKEN):n?W(e,a):W(e,a,r.ID_TOKEN));else{const e="User login is required";a(e,null,e)}},acquireTokenPopup:function(e,r,a,i){if(function(e){let o;return e?n?h&&(o="Acquire token interactive is already in progress"):o="User login is required":o="Resource is required",o&&t.callback(o,null,o),!o}(e)){var s=N()+"|"+e;t.state=s,K.push(s),y=o.RENEW_TOKEN;var c=l(M("token",e),"prompt");if(c+="&prompt=select_account",r&&(c+=r),a){if(-1!==c.indexOf("&claims"))throw new Error("Claims cannot be passed as an extraQueryParameter");c+="&claims="+encodeURIComponent(a)}c=G(c),h=!0,x(s,e,i),v(c,e,i)}},getRequestInfo:function(t){const n={valid:!1,parameters:{},stateMatch:!1,stateResponse:"",requestType:o.UNKNOWN},r=_(E(t));if(!r)return n;if(n.parameters=r,w(r,"error_description")||w(r,"access_token")||w(r,"id_token")){if(n.valid=!0,!r.hasOwnProperty("state"))return n;if(n.stateResponse=r.state,function(t){const n=T(e.STATE_LOGIN);if(n)for(const e of n.split("||"))if(e===t.stateResponse)return t.requestType=o.LOGIN,t.stateMatch=!0,!0;const r=T(e.STATE_RENEW);if(r)for(const e of r.split("||"))if(e===t.stateResponse)return t.requestType=o.RENEW_TOKEN,t.stateMatch=!0,!0;return!1}(n))return n;if(!n.stateMatch&&window.parent){n.requestType=y;for(const e of K)if(e===n.stateResponse){n.stateMatch=!0;break}}}return n},saveTokenFromHash:function(r){d(e.ERROR,""),d(e.ERROR_DESCRIPTION,"");let i=I(r.stateResponse);if(r.parameters.hasOwnProperty("error_description"))d(e.ERROR,r.parameters.error),d(e.ERROR_DESCRIPTION,r.parameters.error_description),r.requestType===o.LOGIN&&(g=!1,d(e.LOGIN_ERROR,r.parameters.error_description));else if(r.stateMatch){let o;if(r.parameters.hasOwnProperty("session_state")&&d(e.SESSION_STATE,r.parameters.session_state),r.parameters.hasOwnProperty("access_token")&&(p(i)||(o=T(e.TOKEN_KEYS)||"",d(e.TOKEN_KEYS,o+i+"|")),d(e.ACCESS_TOKEN_KEY+i,r.parameters.access_token),d(e.EXPIRATION_KEY+i,f(r.parameters.expires_in))),r.parameters.hasOwnProperty("id_token"))if(g=!1,n=q(r.parameters.id_token),n&&n.profile)R(n)?(d(e.IDTOKEN,r.parameters.id_token),i=t.loginResource?t.loginResource:t.clientId,p(i)||(o=T(e.TOKEN_KEYS)||"",d(e.TOKEN_KEYS,o+i+"|")),d(e.ACCESS_TOKEN_KEY+i,r.parameters.id_token),d(e.EXPIRATION_KEY+i,n.profile.exp)):(d(e.LOGIN_ERROR,"Nonce received: "+n.profile.nonce+" is not same as requested: "+T(e.NONCE_IDTOKEN)),n=null);else{const t="invalid id_token",n="Invalid id_token. id_token: "+r.parameters.id_token;r.parameters.error=t,r.parameters.error_description=n,d(e.ERROR,t),d(e.ERROR_DESCRIPTION,n)}}else{const t="Invalid_state",n="Invalid_state. state: "+r.stateResponse;r.parameters.error=t,r.parameters.error_description=n,d(e.ERROR,t),d(e.ERROR_DESCRIPTION,n)}d(e.RENEW_STATUS+i,a.Completed)},loginInProgress:()=>g,_callBackMappedToRenewStates:k,_callBacksMappedToRenewStates:U}}!function(e){e[e.Error=0]="Error",e[e.Warn=1]="Warn",e[e.Info=2]="Info",e[e.Verbose=3]="Verbose"}(n||(n={})),function(e){e.LOGIN="LOGIN",e.RENEW_TOKEN="RENEW_TOKEN",e.UNKNOWN="UNKNOWN"}(o||(o={})),function(e){e.ID_TOKEN="id_token token",e.TOKEN="token"}(r||(r={})),function(e){e.Canceled="Canceled",e.Completed="Completed",e.InProgress="In Progress"}(a||(a={}));let s=t=>{d(e.STATE_RENEW,""),d(e.ERROR,""),d(e.ERROR_DESCRIPTION,""),p(t)&&(d(e.ACCESS_TOKEN_KEY+t,""),d(e.EXPIRATION_KEY+t,0))},c=(e,t)=>new RegExp("[\\?&]"+e+"=").test(t),l=(e,t)=>e.replace(new RegExp("(\\&"+t+"=)[^&]+"),"").replace(new RegExp("("+t+"=)[^&]+&"),"").replace(new RegExp("("+t+"=)[^&]+"),""),d=(e,n,o=!1)=>{if(o){let o=T(e)||"";t.setItem(e,o+n+"||")}else t.setItem(e,n)},p=t=>{const n=T(e.TOKEN_KEYS);return!m(n)&&n.indexOf(t+"|")>-1},E=e=>e.indexOf("#/")>-1?e.substring(e.indexOf("#/")+2):e.indexOf("#")>-1?e.substring(1):e,u=e=>{const t=_(E(e));return w(t,"error_description")||w(t,"access_token")||w(t,"id_token")},_=e=>{let t=/\+/g,n=/([^&=]+)=([^&]*)/g,o=e=>decodeURIComponent(e.replace(t," ")),r={},a=n.exec(e);for(;a;)r[o(a[1])]=o(a[2]),a=n.exec(e);return r},R=t=>{const n=T(e.NONCE_IDTOKEN);if(n)for(const e of n.split("||"))if(e===t.profile.nonce)return!0;return!1},I=e=>{if(e){let t=e.indexOf("|");if(t>-1&&t+1<e.length)return e.substring(t+1)}return""},f=e=>(e||(e=3599),S()+parseInt(e,10)),O=(e,t,n)=>{if(!t)return"";const o=["?response_type="+e,"client_id="+encodeURIComponent(t.clientId)];n&&o.push("resource="+encodeURIComponent(n)),o.push("redirect_uri="+encodeURIComponent(t.redirectUri)),o.push("state="+encodeURIComponent(t.state)),w(t,"slice")&&o.push("slice="+encodeURIComponent(t.slice)),w(t,"extraQueryParameter")&&o.push(t.extraQueryParameter);const r=t.correlationId||N();return o.push("client-request-id="+encodeURIComponent(r)),o.join("&")},N=()=>{let e=new Uint8Array(16);return crypto.getRandomValues(e),e[6]|=64,e[6]&=79,e[8]|=128,e[8]&=191,e=e.map(e=>{let t=e.toString(16);for(;t.length<2;)t="0"+t;return t}),e[0]+e[1]+e[2]+e[3]+"-"+e[4]+e[5]+"-"+e[6]+e[7]+"-"+e[8]+e[9]+"-"+e[10]+e[11]+e[12]+e[13]+e[14]+e[15]},T=e=>t.getItem(e),m=e=>!e||!e.length,w=(e,t)=>Object.hasOwnProperty.call(e,t),S=()=>Math.round(Date.now()/1e3);export{i as AuthenticationContext,s as clearCacheForResource};
//# sourceMappingURL=adal.modern.js.map
