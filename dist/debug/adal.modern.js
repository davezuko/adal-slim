var e;!function(e){e.TOKEN_KEYS="adal.token.keys",e.ACCESS_TOKEN_KEY="adal.access.token.key",e.EXPIRATION_KEY="adal.expiration.key",e.STATE_LOGIN="adal.state.login",e.STATE_RENEW="adal.state.renew",e.NONCE_IDTOKEN="adal.nonce.idtoken",e.SESSION_STATE="adal.session.state",e.USERNAME="adal.username",e.IDTOKEN="adal.idtoken",e.ERROR="adal.error",e.ERROR_DESCRIPTION="adal.error.description",e.LOGIN_REQUEST="adal.login.request",e.LOGIN_ERROR="adal.login.error",e.RENEW_STATUS="adal.token.renew.status"}(e||(e={}));const t=(()=>{function e(e){const t=window[e];return!!t&&(t.setItem("__test__","__test__"),"__test__"===t.getItem("__test__")&&(t.removeItem("__test__"),!t.getItem("__test__")))}return e("localStorage")?localStorage:e("sessionStorage")?sessionStorage:{getItem(){},setItem(){}}})();var n;!function(e){e[e.Error=0]="Error",e[e.Warn=1]="Warn",e[e.Info=2]="Info",e[e.Verbose=3]="Verbose"}(n||(n={}));const r={[n.Error]:"ERROR",[n.Warn]:"WARNING",[n.Info]:"INFO",[n.Verbose]:"VERBOSE"},o={pii:!1,correlationId:void 0,level:n.Error,log(e,t,n,o=!1){if((!o||this.pii)&&e<=this.level){let o=(new Date).toUTCString()+":"+(this.correlationId?this.correlationId+"-":"")+r[e]+": "+t;n&&(o+="\nstack:\n"+n.stack),console.log(o)}},error(e,t){this.log(n.Error,e,t)},warn(e){this.log(n.Warn,e,null)},info(e){this.log(n.Info,e,null)},verbose(e){this.log(n.Verbose,e,null)},errorPii(e,t){this.log(n.Error,e,t,!0)},warnPii(e){this.log(n.Warn,e,null,!0)},infoPii(e){this.log(n.Info,e,null,!0)},verbosePii(e){this.log(n.Verbose,e,null,!0)}};var i,a,s;function l(t){if(window._adalInstance)return window._adalInstance;let n,r;t=u(t);let l={},c=!1,b=!1,C=[],P=[],y={},A={},U=i.LOGIN;function W(t,n,r,i,a){o.warn(i),f(e.ERROR,r),f(e.ERROR_DESCRIPTION,i),f(e.LOGIN_ERROR,a),n&&l[n]&&(l[n]=null),c=!1,b=!1,t&&t(i,null,r)}function x(e,n,r){var i=function(e,t,n,r){try{const t=window.innerWidth/2-241.5+window.screenX,n=window.innerHeight/2-300+window.screenY,r=window.open(e,"login","width=483, height=600, top="+n+", left="+t);return r.focus&&r.focus(),r}catch(e){o.warn("Error opening popup, "+e.message),c=!1,b=!1}}(e),a=r||t.callback;if(!i){var s="Popup Window is null. This can happen if you are using IE";return void W(a,n,"Error opening popup",s,s)}P.push(i);const l=t.redirectUri.split("#")[0];let d=setInterval(()=>{if(!i||i.closed||void 0===i.closed){let e="Popup Window closed by UI action/ Popup Window handle destroyed due to cross zone navigation in IE/Edge";return W(a,n,"Popup Window closed",e,e),void clearInterval(d)}try{let e=i.location;if(-1!=encodeURI(e.href).indexOf(encodeURI(l)))return Q(e.hash),clearInterval(d),c=!1,b=!1,o.info("Closing popup window"),P=[],void i.close()}catch(e){}},1)}function L(e,t,n){l[t]=e,A[e]||(A[e]=[]),A[e].push(n),y[e]||(y[e]=(n,r,i,a)=>{l[t]=null;for(var s=0;s<A[e].length;++s)try{A[e][s](n,r,i,a)}catch(i){o.warn(i)}A[e]=null,y[e]=null})}function q(n,i,s="token"){o.info("renewToken is called for resource:"+n);let l=V("adalRenewFrame"+n),c=h()+"|"+n;t.state=c,C.push(c),o.verbose("Renew token Expected state: "+c);let d=_(X(s,n),"prompt");s===a.ID_TOKEN&&(r=h(),f(e.NONCE_IDTOKEN,r,!0),d+="&nonce="+p(r)),d+="&prompt=none",d=F(d),L(c,n,i),o.verbosePii("Navigate to:"+d),l.src="about:blank",G(d,"adalRenewFrame"+n,n)}function D(n,i){let a=V("adalIdTokenFrame"),s=h()+"|"+t.clientId;r=h(),f(e.NONCE_IDTOKEN,r,!0),t.state=s,C.push(s),o.verbose("Renew Idtoken Expected state: "+s);let l=i||t.clientId,c=_(X(i=i||"id_token",l),"prompt");c=F(c+"&prompt=none"),c+="&nonce="+p(r),L(s,t.clientId,n),o.verbosePii("Navigate to:"+c),a.src="about:blank",G(c,"adalIdTokenFrame",t.clientId)}function G(n,r,i){o.verbose("Set loading state to pending for: "+i),f(e.RENEW_STATUS+i,s.InProgress),function e(t,n){o.info("LoadFrame: "+n),setTimeout(()=>{const r=V(n);r.src&&"about:blank"!==r.src||(r.src=t,e(t,n))},500)}(n,r),setTimeout(()=>{if(S(e.RENEW_STATUS+i)===s.InProgress){o.verbose("Loading frame has timed out after: "+t.loadFrameTimeout/1e3+" seconds for resource "+i);var n=l[i];n&&y[n]&&y[n]("Token renewal operation failed due to timeout",null,"Token Renewal Failed"),f(e.RENEW_STATUS+i,s.Canceled)}},t.loadFrameTimeout)}function Y(e){e?(o.infoPii("Navigate to:"+e),window.location.replace(e)):o.info("Navigate url is empty")}function F(e){if(!n||!n.profile)return e;if(n.profile.sid&&-1!==e.indexOf("&prompt=none"))E("sid",e)||(e+="&sid="+p(n.profile.sid));else if(n.profile.upn&&(E("login_hint",e)||(e+="&login_hint="+p(n.profile.upn)),!E("domain_hint",e)&&n.profile.upn.indexOf("@")>-1)){var t=n.profile.upn.split("@");e+="&domain_hint="+p(t[t.length-1])}return e}function M(e){const n=function(e){let t=d(e);var n;if(t)try{let e=(n=(n=t.JWSPayload).replace(/-/g,"+").replace(/_/g,"/"),decodeURIComponent(escape(window.atob(n))));return e?JSON.parse(e):void o.info("The returned id_token could not be base64 url safe decoded.")}catch(e){o.error("The returned id_token could not be decoded",e)}}(e);if(v(n,"aud"))return n.aud.toLowerCase()===t.clientId.toLowerCase()?{userName:n.upn||n.email,profile:n}:void o.warn("IdToken has invalid aud field")}function Q(t=window.location.hash){if(!O(t))return;let n,r;const a=P[P.length-1];a&&a.opener&&a.opener._AuthenticationContextInstance?(n=a.opener._adalInstance,r=!0):window.parent&&window.parent._adalInstance&&(n=window.parent._adalInstance);let s,l,c,d=n.getRequestInfo(t);s=r||window.parent!==window?n._callBackMappedToRenewStates[d.stateResponse]:n.config.callback,n.saveTokenFromHash(d),d.requestType===i.RENEW_TOKEN&&window.parent?(window.parent!==window?o.verbose("Window is in iframe, acquiring token silently"):o.verbose("acquiring token interactive in progress"),l=d.parameters.access_token||d.parameters.id_token,c="access_token"):d.requestType===i.LOGIN&&(l=d.parameters.id_token,c="id_token");try{s&&s(d.parameters.error_description,l,d.parameters.error,c)}catch(e){o.error("Error occurred in user defined callback function: "+e)}window.parent!==window||r||(n.config.navigateToLoginRequestUrl?window.location.href=S(e.LOGIN_REQUEST):window.location.hash="")}let X=(e,n)=>t.instance+t.tenant+"/oauth2/authorize"+m(e,t,n);function V(e){return document.getElementById(e)||(o.info("Add adal frame to document:"+e),document.body.insertAdjacentHTML("beforeEnd",`<iframe name="${e}" id="${e}" style="display:none"></iframe>`),window.frames&&window.frames[e])}return window._adalInstance={config:t,login:function(){if(c)return void o.info("Login in progress");c=!0;const n=h(),i=window.location.href;t.state=n,r=h(),o.verbose("Expected state: "+n+" startPage:"+i),f(e.LOGIN_REQUEST,i),f(e.LOGIN_ERROR,""),f(e.STATE_LOGIN,n,!0),f(e.NONCE_IDTOKEN,r,!0),f(e.ERROR,""),f(e.ERROR_DESCRIPTION,"");const a=X("id_token")+"&nonce="+p(r);t.displayCall?t.displayCall(a):t.popUp?(f(e.STATE_LOGIN,""),C.push(n),L(n,t.clientId,t.callback),x(a)):Y(a)},logout:function(){let r;if(function(){f(e.LOGIN_REQUEST,""),f(e.SESSION_STATE,""),f(e.STATE_LOGIN,""),f(e.STATE_RENEW,""),C=[],f(e.NONCE_IDTOKEN,""),f(e.IDTOKEN,""),f(e.ERROR,""),f(e.ERROR_DESCRIPTION,""),f(e.LOGIN_ERROR,""),f(e.LOGIN_ERROR,"");var t=S(e.TOKEN_KEYS);if(!k(t)){t=t.split("|");for(var n=0;n<t.length&&""!==t[n];n++)f(e.ACCESS_TOKEN_KEY+t[n],""),f(e.EXPIRATION_KEY+t[n],0)}f(e.TOKEN_KEYS,"")}(),n=null,t.logOutUri)r=t.logOutUri;else{let e="";t.postLogoutRedirectUri&&(e="post_logout_redirect_uri="+p(t.postLogoutRedirectUri)),r=t.instance+t.tenant+"/oauth2/logout?"+e}o.infoPii("Logout navigate to: "+r),Y(r)},getUser:function(){if(!n){const t=S(e.IDTOKEN);t&&(n=M(t))}return n},registerCallback:L,acquireToken:function(r,s){if(!r){const e="resource is required";return o.warn(e),void s(e,null,e)}const c=function(n){if(!R(n))return;const r=S(e.ACCESS_TOKEN_KEY+n),o=S(e.EXPIRATION_KEY+n);if(o&&o>K()+t.expireOffsetSeconds)return r;f(e.ACCESS_TOKEN_KEY+n,""),f(e.EXPIRATION_KEY+n,0)}(r);if(c)return o.info("Token is already in cache for resource:"+r),void s(null,c,null);if(!(n||t.extraQueryParameter&&-1!==t.extraQueryParameter.indexOf("login_hint"))){const e="User login is required";return o.warn(e),void s(e,null,e)}l[r]?L(l[r],r,s):(U=i.RENEW_TOKEN,r===t.clientId?n?(o.verbose("renewing idtoken"),D(s)):(o.verbose("renewing idtoken and access_token"),D(s,a.ID_TOKEN)):n?(o.verbose("renewing access_token"),q(r,s)):(o.verbose("renewing idtoken and access_token"),q(r,s,a.ID_TOKEN)))},acquireTokenPopup:function(e,r,a,s){if(function(e){let r;return e?n?b&&(r="Acquire token interactive is already in progress"):r="User login is required":r="Resource is required",r&&(o.warn(r),t.callback(r,null,r)),!r}(e)){var l=h()+"|"+e;t.state=l,C.push(l),U=i.RENEW_TOKEN,o.verbose("Renew token Expected state: "+l);var c=_(X("token",e),"prompt");if(c+="&prompt=select_account",r&&(c+=r),a){if(-1!==c.indexOf("&claims"))throw new Error("Claims cannot be passed as an extraQueryParameter");c+="&claims="+p(a)}c=F(c),b=!0,o.info("acquireToken interactive is called for the resource "+e),L(l,e,s),x(c,e,s)}},getRequestInfo:function(t){const n={valid:!1,parameters:{},stateMatch:!1,stateResponse:"",requestType:i.UNKNOWN},r=N(I(t));if(!r)return n;if(n.parameters=r,v(r,"error_description")||v(r,"access_token")||v(r,"id_token")){if(n.valid=!0,!v(r,"state"))return o.warn("No state returned"),n;if(o.verbose("State: "+r.state),n.stateResponse=r.state,function(t){const n=S(e.STATE_LOGIN);if(n)for(const e of n.split("||"))if(e===t.stateResponse)return t.requestType=i.LOGIN,t.stateMatch=!0,!0;const r=S(e.STATE_RENEW);if(r)for(const e of r.split("||"))if(e===t.stateResponse)return t.requestType=i.RENEW_TOKEN,t.stateMatch=!0,!0;return!1}(n))return n;if(!n.stateMatch&&window.parent){n.requestType=U;for(const e of C)if(e===n.stateResponse){n.stateMatch=!0;break}}}return n},saveTokenFromHash:function(r){o.info("State status:"+r.stateMatch+"; Request type:"+r.requestType),f(e.ERROR,""),f(e.ERROR_DESCRIPTION,"");let a=g(r.stateResponse);if(v(r.parameters,"error_description"))o.infoPii("Error :"+r.parameters.error+"; Error description:"+r.parameters.error_description),f(e.ERROR,r.parameters.error),f(e.ERROR_DESCRIPTION,r.parameters.error_description),r.requestType===i.LOGIN&&(c=!1,f(e.LOGIN_ERROR,r.parameters.error_description));else if(r.stateMatch){let i;if(o.info("State is right"),v(r.parameters,"session_state")&&f(e.SESSION_STATE,r.parameters.session_state),v(r.parameters,"access_token")&&(o.info("Fragment has access token"),R(a)||(i=S(e.TOKEN_KEYS)||"",f(e.TOKEN_KEYS,i+a+"|")),f(e.ACCESS_TOKEN_KEY+a,r.parameters.access_token),f(e.EXPIRATION_KEY+a,w(r.parameters.expires_in))),v(r.parameters,"id_token"))if(c=!1,n=M(r.parameters.id_token),n&&n.profile)T(n)?(f(e.IDTOKEN,r.parameters.id_token),a=t.loginResource?t.loginResource:t.clientId,R(a)||(i=S(e.TOKEN_KEYS)||"",f(e.TOKEN_KEYS,i+a+"|")),f(e.ACCESS_TOKEN_KEY+a,r.parameters.id_token),f(e.EXPIRATION_KEY+a,n.profile.exp)):(f(e.LOGIN_ERROR,"Nonce received: "+n.profile.nonce+" is not same as requested: "+S(e.NONCE_IDTOKEN)),n=null);else{const t="invalid id_token",n="Invalid id_token. id_token: "+r.parameters.id_token;r.parameters.error=t,r.parameters.error_description=n,f(e.ERROR,t),f(e.ERROR_DESCRIPTION,n)}}else{const t="Invalid_state",n="Invalid_state. state: "+r.stateResponse;r.parameters.error=t,r.parameters.error_description=n,f(e.ERROR,t),f(e.ERROR_DESCRIPTION,n)}f(e.RENEW_STATUS+a,s.Completed)},loginInProgress:()=>c,handleWindowCallback:Q,_callBackMappedToRenewStates:y,_callBacksMappedToRenewStates:A}}!function(e){e.LOGIN="LOGIN",e.RENEW_TOKEN="RENEW_TOKEN",e.UNKNOWN="UNKNOWN"}(i||(i={})),function(e){e.ID_TOKEN="id_token token",e.TOKEN="token"}(a||(a={})),function(e){e.Canceled="Canceled",e.Completed="Completed",e.InProgress="In Progress"}(s||(s={}));let c=t=>{f(e.STATE_RENEW,""),f(e.ERROR,""),f(e.ERROR_DESCRIPTION,""),R(t)&&(f(e.ACCESS_TOKEN_KEY+t,""),f(e.EXPIRATION_KEY+t,0))},d=e=>{if(k(e))return;let t=/^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/.exec(e);if(t&&!(t.length<4))return{header:t[1],JWSPayload:t[2],JWSSig:t[3]};o.warn("The returned id_token is not parseable.")},u=e=>(e={popUp:!1,instance:"https://login.microsoftonline.com/",loginResource:e.clientId,laodFrameTimeout:6e3,expireOffsetSeconds:300,navigateToLoginRequestUrl:!0,tenant:"common",redirectUri:window.location.href.split("?")[0].split("#")[0],callback:()=>{},...e},o.correlationId=e.correlationId,e),p=e=>encodeURIComponent(e),E=(e,t)=>new RegExp("[\\?&]"+e+"=").test(t),_=(e,t)=>e.replace(new RegExp("(\\&"+t+"=)[^&]+"),"").replace(new RegExp("("+t+"=)[^&]+&"),"").replace(new RegExp("("+t+"=)[^&]+"),""),f=(e,n,r=!1)=>{if(r){let r=S(e)||"";t.setItem(e,r+n+"||")}else t.setItem(e,n)},R=t=>{let n=S(e.TOKEN_KEYS);return!k(n)&&n.indexOf(t+"|")>-1},I=e=>e.indexOf("#/")>-1?e.substring(e.indexOf("#/")+2):e.indexOf("#")>-1?e.substring(1):e,O=e=>{const t=N(I(e));return v(t,"error_description")||v(t,"access_token")||v(t,"id_token")},N=e=>{let t=/\+/g,n=/([^&=]+)=([^&]*)/g,r=e=>decodeURIComponent(e.replace(t," ")),o={},i=n.exec(e);for(;i;)o[r(i[1])]=r(i[2]),i=n.exec(e);return o},T=t=>{const n=S(e.NONCE_IDTOKEN);if(n)for(const e of n.split("||"))if(e===t.profile.nonce)return!0;return!1},g=e=>{if(e){let t=e.indexOf("|");if(t>-1&&t+1<e.length)return e.substring(t+1)}return""},w=e=>(e||(e=3599),K()+parseInt(e,10)),m=(e,t,n)=>{if(!t)return"";const r=["?response_type="+e,"client_id="+p(t.clientId)];n&&r.push("resource="+p(n)),r.push("redirect_uri="+p(t.redirectUri)),r.push("state="+p(t.state)),v(t,"slice")&&r.push("slice="+p(t.slice)),v(t,"extraQueryParameter")&&r.push(t.extraQueryParameter);const o=t.correlationId||h();return r.push("client-request-id="+p(o)),r.join("&")},h=()=>{let e=new Uint8Array(16);return crypto.getRandomValues(e),e[6]|=64,e[6]&=79,e[8]|=128,e[8]&=191,e=e.map(e=>{let t=e.toString(16);for(;t.length<2;)t="0"+t;return t}),e[0]+e[1]+e[2]+e[3]+"-"+e[4]+e[5]+"-"+e[6]+e[7]+"-"+e[8]+e[9]+"-"+e[10]+e[11]+e[12]+e[13]+e[14]+e[15]},S=e=>t.getItem(e),k=e=>!e||!e.length,v=(e,t)=>Object.hasOwnProperty.call(e,t),K=()=>Math.round(Date.now()/1e3);export{l as AuthenticationContext,c as clearCacheForResource};
//# sourceMappingURL=adal.modern.js.map