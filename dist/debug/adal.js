function e(){return(e=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function r(e,r){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,r){if(e){if("string"==typeof e)return n(e,void 0);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,void 0):void 0}}(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var o=0;return function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e[Symbol.iterator]()).next.bind(t)}var t;!function(e){e.TOKEN_KEYS="adal.token.keys",e.ACCESS_TOKEN_KEY="adal.access.token.key",e.EXPIRATION_KEY="adal.expiration.key",e.STATE_LOGIN="adal.state.login",e.STATE_RENEW="adal.state.renew",e.NONCE_IDTOKEN="adal.nonce.idtoken",e.SESSION_STATE="adal.session.state",e.USERNAME="adal.username",e.IDTOKEN="adal.idtoken",e.ERROR="adal.error",e.ERROR_DESCRIPTION="adal.error.description",e.LOGIN_REQUEST="adal.login.request",e.LOGIN_ERROR="adal.login.error",e.RENEW_STATUS="adal.token.renew.status"}(t||(t={}));var o,a,i=function(){function e(e){var n=window[e];return!!n&&(n.setItem("__test__","__test__"),"__test__"===n.getItem("__test__")&&(n.removeItem("__test__"),!n.getItem("__test__")))}return e("localStorage")?localStorage:e("sessionStorage")?sessionStorage:{getItem:function(){},setItem:function(){}}}();!function(e){e[e.Error=0]="Error",e[e.Warn=1]="Warn",e[e.Info=2]="Info",e[e.Verbose=3]="Verbose"}(a||(a={}));var s,c,l,u=((o={})[a.Error]="ERROR",o[a.Warn]="WARNING",o[a.Info]="INFO",o[a.Verbose]="VERBOSE",o),d={pii:!1,correlationId:void 0,level:a.Error,log:function(e,n,r,t){if(void 0===t&&(t=!1),(!t||this.pii)&&e<=this.level){var o=(new Date).toUTCString()+":"+(this.correlationId?this.correlationId+"-":"")+u[e]+": "+n;r&&(o+="\nstack:\n"+r.stack),console.log(o)}},error:function(e,n){this.log(a.Error,e,n)},warn:function(e){this.log(a.Warn,e,null)},info:function(e){this.log(a.Info,e,null)},verbose:function(e){this.log(a.Verbose,e,null)},errorPii:function(e,n){this.log(a.Error,e,n,!0)},warnPii:function(e){this.log(a.Warn,e,null,!0)},infoPii:function(e){this.log(a.Info,e,null,!0)},verbosePii:function(e){this.log(a.Verbose,e,null,!0)}};!function(e){e.LOGIN="LOGIN",e.RENEW_TOKEN="RENEW_TOKEN",e.UNKNOWN="UNKNOWN"}(s||(s={})),function(e){e.ID_TOKEN="id_token token",e.TOKEN="token"}(c||(c={})),function(e){e.Canceled="Canceled",e.Completed="Completed",e.InProgress="In Progress"}(l||(l={}));var f=function(e){return encodeURIComponent(e)},p=function(e,n){return new RegExp("[\\?&]"+e+"=").test(n)},E=function(e,n){return e.replace(new RegExp("(\\&"+n+"=)[^&]+"),"").replace(new RegExp("("+n+"=)[^&]+&"),"").replace(new RegExp("("+n+"=)[^&]+"),"")},_=function(e,n,r){if(void 0===r&&(r=!1),r){var t=N(e)||"";i.setItem(e,t+n+"||")}else i.setItem(e,n)},R=function(e){var n=N(t.TOKEN_KEYS);return!T(n)&&n.indexOf(e+"|")>-1},I=function(e){return e.indexOf("#/")>-1?e.substring(e.indexOf("#/")+2):e.indexOf("#")>-1?e.substring(1):e},v=function(e){for(var n=/\+/g,r=/([^&=]+)=([^&]*)/g,t=function(e){return decodeURIComponent(e.replace(n," "))},o={},a=r.exec(e);a;)o[t(a[1])]=t(a[2]),a=r.exec(e);return o},O=function(){var e=new Uint8Array(16);return crypto.getRandomValues(e),e[6]|=64,e[6]&=79,e[8]|=128,e[8]&=191,(e=e.map(function(e){for(var n=e.toString(16);n.length<2;)n="0"+n;return n}))[0]+e[1]+e[2]+e[3]+"-"+e[4]+e[5]+"-"+e[6]+e[7]+"-"+e[8]+e[9]+"-"+e[10]+e[11]+e[12]+e[13]+e[14]+e[15]},N=function(e){return i.getItem(e)},T=function(e){return!e||!e.length},g=function(e,n){return Object.hasOwnProperty.call(e,n)},m=function(){return Math.round(Date.now()/1e3)};exports.AuthenticationContext=function(n){if(window._adalInstance)return window._adalInstance;var o,a;n=function(n){return n=e({popUp:!1,instance:"https://login.microsoftonline.com/",loginResource:n.clientId,laodFrameTimeout:6e3,expireOffsetSeconds:300,navigateToLoginRequestUrl:!0,tenant:"common",redirectUri:window.location.href.split("?")[0].split("#")[0],callback:function(){}},n),d.correlationId=n.correlationId,n}(n);var i={},u=!1,w=!1,h=[],S=[],k={},b={},K=s.LOGIN;function y(e,n,r,o,a){d.warn(o),_(t.ERROR,r),_(t.ERROR_DESCRIPTION,o),_(t.LOGIN_ERROR,a),n&&i[n]&&(i[n]=null),u=!1,w=!1,e&&e(o,null,r)}function C(e,r,t){var o=function(e,n,r,t){try{var o=window.innerWidth/2-241.5+window.screenX,a=window.innerHeight/2-300+window.screenY,i=window.open(e,"login","width=483, height=600, top="+a+", left="+o);return i.focus&&i.focus(),i}catch(e){d.warn("Error opening popup, "+e.message),u=!1,w=!1}}(e),a=t||n.callback;if(o){S.push(o);var i=n.redirectUri.split("#")[0],s=setInterval(function(){if(!o||o.closed||void 0===o.closed){var e="Popup Window closed by UI action/ Popup Window handle destroyed due to cross zone navigation in IE/Edge";return y(a,r,"Popup Window closed",e,e),void clearInterval(s)}try{var n=o.location;if(-1!=encodeURI(n.href).indexOf(encodeURI(i)))return D(n.hash),clearInterval(s),u=!1,w=!1,d.info("Closing popup window"),S=[],void o.close()}catch(e){}},1)}else{var c="Popup Window is null. This can happen if you are using IE";y(a,r,"Error opening popup",c,c)}}function A(e,n,r){i[n]=e,b[e]||(b[e]=[]),b[e].push(r),k[e]||(k[e]=function(r,t,o,a){i[n]=null;for(var s=0;s<b[e].length;++s)try{b[e][s](r,t,o,a)}catch(o){d.warn(o)}b[e]=null,k[e]=null})}function P(e,r,o){void 0===o&&(o="token"),d.info("renewToken is called for resource:"+e);var i=Y("adalRenewFrame"+e),s=O()+"|"+e;n.state=s,h.push(s),d.verbose("Renew token Expected state: "+s);var l=E(G(o,e),"prompt");o===c.ID_TOKEN&&(a=O(),_(t.NONCE_IDTOKEN,a,!0),l+="&nonce="+f(a)),l=L(l+="&prompt=none"),A(s,e,r),d.verbosePii("Navigate to:"+l),i.src="about:blank",U(l,"adalRenewFrame"+e,e)}function x(e,r){var o=Y("adalIdTokenFrame"),i=O()+"|"+n.clientId;a=O(),_(t.NONCE_IDTOKEN,a,!0),n.state=i,h.push(i),d.verbose("Renew Idtoken Expected state: "+i);var s=r||n.clientId,c=E(G(r=r||"id_token",s),"prompt");c=L(c+"&prompt=none"),c+="&nonce="+f(a),A(i,n.clientId,e),d.verbosePii("Navigate to:"+c),o.src="about:blank",U(c,"adalIdTokenFrame",n.clientId)}function U(e,r,o){d.verbose("Set loading state to pending for: "+o),_(t.RENEW_STATUS+o,l.InProgress),function e(n,r){d.info("LoadFrame: "+r),setTimeout(function(){var t=Y(r);t.src&&"about:blank"!==t.src||(t.src=n,e(n,r))},500)}(e,r),setTimeout(function(){if(N(t.RENEW_STATUS+o)===l.InProgress){d.verbose("Loading frame has timed out after: "+n.loadFrameTimeout/1e3+" seconds for resource "+o);var e=i[o];e&&k[e]&&k[e]("Token renewal operation failed due to timeout",null,"Token Renewal Failed"),_(t.RENEW_STATUS+o,l.Canceled)}},n.loadFrameTimeout)}function W(e){e?(d.infoPii("Navigate to:"+e),window.location.replace(e)):d.info("Navigate url is empty")}function L(e){if(!o||!o.profile)return e;if(o.profile.sid&&-1!==e.indexOf("&prompt=none"))p("sid",e)||(e+="&sid="+f(o.profile.sid));else if(o.profile.upn&&(p("login_hint",e)||(e+="&login_hint="+f(o.profile.upn)),!p("domain_hint",e)&&o.profile.upn.indexOf("@")>-1)){var n=o.profile.upn.split("@");e+="&domain_hint="+f(n[n.length-1])}return e}function q(e){var r=function(e){var n,r=function(e){if(!T(e)){var n=/^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/.exec(e);if(n&&!(n.length<4))return{header:n[1],JWSPayload:n[2],JWSSig:n[3]};d.warn("The returned id_token is not parseable.")}}(e);if(r)try{var t=(n=(n=r.JWSPayload).replace(/-/g,"+").replace(/_/g,"/"),decodeURIComponent(escape(window.atob(n))));return t?JSON.parse(t):void d.info("The returned id_token could not be base64 url safe decoded.")}catch(e){d.error("The returned id_token could not be decoded",e)}}(e);if(g(r,"aud"))return r.aud.toLowerCase()===n.clientId.toLowerCase()?{userName:r.upn||r.email,profile:r}:void d.warn("IdToken has invalid aud field")}function D(e){if(void 0===e&&(e=window.location.hash),function(e){var n=v(I(e));return g(n,"error_description")||g(n,"access_token")||g(n,"id_token")}(e)){var n,r,o=S[S.length-1];o&&o.opener&&o.opener._AuthenticationContextInstance?(n=o.opener._adalInstance,r=!0):window.parent&&window.parent._adalInstance&&(n=window.parent._adalInstance);var a,i,c,l=n.getRequestInfo(e);a=r||window.parent!==window?n._callBackMappedToRenewStates[l.stateResponse]:n.config.callback,n.saveTokenFromHash(l),l.requestType===s.RENEW_TOKEN&&window.parent?(window.parent!==window?d.verbose("Window is in iframe, acquiring token silently"):d.verbose("acquiring token interactive in progress"),i=l.parameters.access_token||l.parameters.id_token,c="access_token"):l.requestType===s.LOGIN&&(i=l.parameters.id_token,c="id_token");try{a&&a(l.parameters.error_description,i,l.parameters.error,c)}catch(e){d.error("Error occurred in user defined callback function: "+e)}window.parent!==window||r||(n.config.navigateToLoginRequestUrl?window.location.href=N(t.LOGIN_REQUEST):window.location.hash="")}}var G=function(e,r){return n.instance+n.tenant+"/oauth2/authorize"+function(e,n,r){if(!n)return"";var t=["?response_type="+e,"client_id="+f(n.clientId)];r&&t.push("resource="+f(r)),t.push("redirect_uri="+f(n.redirectUri)),t.push("state="+f(n.state)),g(n,"slice")&&t.push("slice="+f(n.slice)),g(n,"extraQueryParameter")&&t.push(n.extraQueryParameter);var o=n.correlationId||O();return t.push("client-request-id="+f(o)),t.join("&")}(e,n,r)};function Y(e){return document.getElementById(e)||(d.info("Add adal frame to document:"+e),document.body.insertAdjacentHTML("beforeEnd",'<iframe name="'+e+'" id="'+e+'" style="display:none"></iframe>'),window.frames&&window.frames[e])}return window._adalInstance={config:n,login:function(){if(u)d.info("Login in progress");else{u=!0;var e=O(),r=window.location.href;n.state=e,a=O(),d.verbose("Expected state: "+e+" startPage:"+r),_(t.LOGIN_REQUEST,r),_(t.LOGIN_ERROR,""),_(t.STATE_LOGIN,e,!0),_(t.NONCE_IDTOKEN,a,!0),_(t.ERROR,""),_(t.ERROR_DESCRIPTION,"");var o=G("id_token")+"&nonce="+f(a);n.displayCall?n.displayCall(o):n.popUp?(_(t.STATE_LOGIN,""),h.push(e),A(e,n.clientId,n.callback),C(o)):W(o)}},logout:function(){var e;if(function(){_(t.LOGIN_REQUEST,""),_(t.SESSION_STATE,""),_(t.STATE_LOGIN,""),_(t.STATE_RENEW,""),h=[],_(t.NONCE_IDTOKEN,""),_(t.IDTOKEN,""),_(t.ERROR,""),_(t.ERROR_DESCRIPTION,""),_(t.LOGIN_ERROR,""),_(t.LOGIN_ERROR,"");var e=N(t.TOKEN_KEYS);if(!T(e)){e=e.split("|");for(var n=0;n<e.length&&""!==e[n];n++)_(t.ACCESS_TOKEN_KEY+e[n],""),_(t.EXPIRATION_KEY+e[n],0)}_(t.TOKEN_KEYS,"")}(),o=null,n.logOutUri)e=n.logOutUri;else{var r="";n.postLogoutRedirectUri&&(r="post_logout_redirect_uri="+f(n.postLogoutRedirectUri)),e=n.instance+n.tenant+"/oauth2/logout?"+r}d.infoPii("Logout navigate to: "+e),W(e)},getUser:function(){if(!o){var e=N(t.IDTOKEN);e&&(o=q(e))}return o},registerCallback:A,acquireToken:function(e,r){if(!e){var a="resource is required";return d.warn(a),void r(a,null,a)}var l=function(e){if(R(e)){var r=N(t.ACCESS_TOKEN_KEY+e),o=N(t.EXPIRATION_KEY+e);if(o&&o>m()+n.expireOffsetSeconds)return r;_(t.ACCESS_TOKEN_KEY+e,""),_(t.EXPIRATION_KEY+e,0)}}(e);if(l)return d.info("Token is already in cache for resource:"+e),void r(null,l,null);if(!(o||n.extraQueryParameter&&-1!==n.extraQueryParameter.indexOf("login_hint"))){var u="User login is required";return d.warn(u),void r(u,null,u)}i[e]?A(i[e],e,r):(K=s.RENEW_TOKEN,e===n.clientId?o?(d.verbose("renewing idtoken"),x(r)):(d.verbose("renewing idtoken and access_token"),x(r,c.ID_TOKEN)):o?(d.verbose("renewing access_token"),P(e,r)):(d.verbose("renewing idtoken and access_token"),P(e,r,c.ID_TOKEN)))},acquireTokenPopup:function(e,r,t,a){if(function(e){var r;return e?o?w&&(r="Acquire token interactive is already in progress"):r="User login is required":r="Resource is required",r&&(d.warn(r),n.callback(r,null,r)),!r}(e)){var i=O()+"|"+e;n.state=i,h.push(i),K=s.RENEW_TOKEN,d.verbose("Renew token Expected state: "+i);var c=E(G("token",e),"prompt");if(c+="&prompt=select_account",r&&(c+=r),t){if(-1!==c.indexOf("&claims"))throw new Error("Claims cannot be passed as an extraQueryParameter");c+="&claims="+f(t)}c=L(c),w=!0,d.info("acquireToken interactive is called for the resource "+e),A(i,e,a),C(c,e,a)}},getRequestInfo:function(e){var n={valid:!1,parameters:{},stateMatch:!1,stateResponse:"",requestType:s.UNKNOWN},o=v(I(e));if(!o)return n;if(n.parameters=o,g(o,"error_description")||g(o,"access_token")||g(o,"id_token")){if(n.valid=!0,!g(o,"state"))return d.warn("No state returned"),n;if(d.verbose("State: "+o.state),n.stateResponse=o.state,function(e){var n=N(t.STATE_LOGIN);if(n)for(var o,a=r(n.split("||"));!(o=a()).done;)if(o.value===e.stateResponse)return e.requestType=s.LOGIN,e.stateMatch=!0,!0;var i=N(t.STATE_RENEW);if(i)for(var c,l=r(i.split("||"));!(c=l()).done;)if(c.value===e.stateResponse)return e.requestType=s.RENEW_TOKEN,e.stateMatch=!0,!0;return!1}(n))return n;if(!n.stateMatch&&window.parent){n.requestType=K;for(var a,i=r(h);!(a=i()).done;)if(a.value===n.stateResponse){n.stateMatch=!0;break}}}return n},saveTokenFromHash:function(e){d.info("State status:"+e.stateMatch+"; Request type:"+e.requestType),_(t.ERROR,""),_(t.ERROR_DESCRIPTION,"");var a,i=function(e){if(e){var n=e.indexOf("|");if(n>-1&&n+1<e.length)return e.substring(n+1)}return""}(e.stateResponse);if(g(e.parameters,"error_description"))d.infoPii("Error :"+e.parameters.error+"; Error description:"+e.parameters.error_description),_(t.ERROR,e.parameters.error),_(t.ERROR_DESCRIPTION,e.parameters.error_description),e.requestType===s.LOGIN&&(u=!1,_(t.LOGIN_ERROR,e.parameters.error_description));else if(e.stateMatch){var c;if(d.info("State is right"),g(e.parameters,"session_state")&&_(t.SESSION_STATE,e.parameters.session_state),g(e.parameters,"access_token")&&(d.info("Fragment has access token"),R(i)||(c=N(t.TOKEN_KEYS)||"",_(t.TOKEN_KEYS,c+i+"|")),_(t.ACCESS_TOKEN_KEY+i,e.parameters.access_token),_(t.EXPIRATION_KEY+i,((a=e.parameters.expires_in)||(a=3599),m()+parseInt(a,10)))),g(e.parameters,"id_token"))if(u=!1,(o=q(e.parameters.id_token))&&o.profile)!function(e){var n=N(t.NONCE_IDTOKEN);if(n)for(var o,a=r(n.split("||"));!(o=a()).done;)if(o.value===e.profile.nonce)return!0;return!1}(o)?(_(t.LOGIN_ERROR,"Nonce received: "+o.profile.nonce+" is not same as requested: "+N(t.NONCE_IDTOKEN)),o=null):(_(t.IDTOKEN,e.parameters.id_token),R(i=n.loginResource?n.loginResource:n.clientId)||(c=N(t.TOKEN_KEYS)||"",_(t.TOKEN_KEYS,c+i+"|")),_(t.ACCESS_TOKEN_KEY+i,e.parameters.id_token),_(t.EXPIRATION_KEY+i,o.profile.exp));else{var f="invalid id_token",p="Invalid id_token. id_token: "+e.parameters.id_token;e.parameters.error=f,e.parameters.error_description=p,_(t.ERROR,f),_(t.ERROR_DESCRIPTION,p)}}else{var E="Invalid_state. state: "+e.stateResponse;e.parameters.error="Invalid_state",e.parameters.error_description=E,_(t.ERROR,"Invalid_state"),_(t.ERROR_DESCRIPTION,E)}_(t.RENEW_STATUS+i,l.Completed)},loginInProgress:function(){return u},handleWindowCallback:D,_callBackMappedToRenewStates:k,_callBacksMappedToRenewStates:b}},exports.clearCacheForResource=function(e){_(t.STATE_RENEW,""),_(t.ERROR,""),_(t.ERROR_DESCRIPTION,""),R(e)&&(_(t.ACCESS_TOKEN_KEY+e,""),_(t.EXPIRATION_KEY+e,0))};
//# sourceMappingURL=adal.js.map
