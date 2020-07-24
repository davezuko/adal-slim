var e;!function(e){e.TOKEN_KEYS="adal.token.keys",e.ACCESS_TOKEN_KEY="adal.access.token.key",e.EXPIRATION_KEY="adal.expiration.key",e.STATE_LOGIN="adal.state.login",e.STATE_RENEW="adal.state.renew",e.NONCE_IDTOKEN="adal.nonce.idtoken",e.SESSION_STATE="adal.session.state",e.USERNAME="adal.username",e.IDTOKEN="adal.idtoken",e.ERROR="adal.error",e.ERROR_DESCRIPTION="adal.error.description",e.LOGIN_REQUEST="adal.login.request",e.LOGIN_ERROR="adal.login.error",e.RENEW_STATUS="adal.token.renew.status"}(e||(e={}));const t=(()=>{function e(e){const t=window[e];return!!t&&(t.setItem("__test__","__test__"),"__test__"===t.getItem("__test__")&&(t.removeItem("__test__"),!t.getItem("__test__")))}return e("localStorage")?localStorage:e("sessionStorage")?sessionStorage:{getItem(){},setItem(){}}})();var n;!function(e){e[e.Error=0]="Error",e[e.Warn=1]="Warn",e[e.Info=2]="Info",e[e.Verbose=3]="Verbose"}(n||(n={}));const r={[n.Error]:"ERROR",[n.Warn]:"WARNING",[n.Info]:"INFO",[n.Verbose]:"VERBOSE"},i={pii:!1,correlationId:void 0,level:n.Error,log(e,t,n,i=!1){if((!i||this.pii)&&e<=this.level){let i=(new Date).toUTCString()+":"+(this.correlationId?this.correlationId+"-":"")+r[e]+": "+t;n&&(i+="\nstack:\n"+n.stack),console.log(i)}},error(e,t){this.log(n.Error,e,t)},warn(e){this.log(n.Warn,e,null)},info(e){this.log(n.Info,e,null)},verbose(e){this.log(n.Verbose,e,null)},errorPii(e,t){this.log(n.Error,e,t,!0)},warnPii(e){this.log(n.Warn,e,null,!0)},infoPii(e){this.log(n.Info,e,null,!0)},verbosePii(e){this.log(n.Verbose,e,null,!0)}};var s,o,a;!function(e){e.LOGIN="LOGIN",e.RENEW_TOKEN="RENEW_TOKEN",e.UNKNOWN="UNKNOWN"}(s||(s={})),function(e){e.ID_TOKEN="id_token token",e.TOKEN="token"}(o||(o={})),function(e){e.Canceled="Canceled",e.Completed="Completed",e.InProgress="In Progress"}(a||(a={}));class c{constructor(t){if(this._activeRenewals={},this._loginInProgress=!1,this._acquireTokenInProgress=!1,this._renewStates=[],this._openedWindows=[],this._callBackMappedToRenewStates={},this._callBacksMappedToRenewStates={},this._requestType=s.LOGIN,this._urlContainsQueryStringParameter=function(e,t){return new RegExp("[\\?&]"+e+"=").test(t)},this._urlRemoveQueryStringParameter=function(e,t){var n=new RegExp("(\\&"+t+"=)[^&]+");return e=e.replace(n,""),n=new RegExp("("+t+"=)[^&]+&"),e=e.replace(n,""),n=new RegExp("("+t+"=)[^&]+"),e.replace(n,"")},this._loadFrameTimeout=function(t,n,r){l(e.RENEW_STATUS+r,a.InProgress),this._loadFrame(t,n),setTimeout(()=>{if(d(e.RENEW_STATUS+r)===a.InProgress){var t=this._activeRenewals[r];t&&this._callBackMappedToRenewStates[t]&&this._callBackMappedToRenewStates[t]("Token renewal operation failed due to timeout",null,"Token Renewal Failed"),l(e.RENEW_STATUS+r,a.Canceled)}},this.config.loadFrameTimeout)},this._addHintParameters=function(e){if(this._user&&this._user.profile)if(this._user.profile.sid&&-1!==e.indexOf("&prompt=none"))this._urlContainsQueryStringParameter("sid",e)||(e+="&sid="+encodeURIComponent(this._user.profile.sid));else if(this._user.profile.upn&&(this._urlContainsQueryStringParameter("login_hint",e)||(e+="&login_hint="+encodeURIComponent(this._user.profile.upn)),!this._urlContainsQueryStringParameter("domain_hint",e)&&this._user.profile.upn.indexOf("@")>-1)){var t=this._user.profile.upn.split("@");e+="&domain_hint="+encodeURIComponent(t[t.length-1])}return e},window._adalInstance)return window._adalInstance;this.config={popUp:!1,instance:"https://login.microsoftonline.com/",loginResource:t.clientId,laodFrameTimeout:6e3,expireOffsetSeconds:300,anonymousEndpoints:[],navigateToLoginRequestUrl:!0,tenant:"common",redirectUri:window.location.href.split("?")[0].split("#")[0],callback:()=>{},...t},window._adalInstance=this}login(){if(this._loginInProgress)return;this._loginInProgress=!0;const t=g(),n=window.location.href;this.config.state=t,this._idTokenNonce=g(),l(e.LOGIN_REQUEST,n),l(e.LOGIN_ERROR,""),l(e.STATE_LOGIN,t,!0),l(e.NONCE_IDTOKEN,this._idTokenNonce,!0),l(e.ERROR,""),l(e.ERROR_DESCRIPTION,"");var r=this._getNavigateUrl("id_token")+"&nonce="+encodeURIComponent(this._idTokenNonce);this.config.displayCall?this.config.displayCall(r):this.config.popUp?(l(e.STATE_LOGIN,""),this._renewStates.push(t),this.registerCallback(t,this.config.clientId,this.config.callback),this._loginPopup(r)):this.promptUser(r)}_openPopup(e,t,n,r){try{const i=window.innerWidth/2-n/2+window.screenX,s=window.innerHeight/2-r/2+window.screenY,o=window.open(e,t,"width="+n+", height="+r+", top="+s+", left="+i);return o.focus&&o.focus(),o}catch(e){return this._loginInProgress=!1,this._acquireTokenInProgress=!1,null}}_handlePopupError(t,n,r,i,s){l(e.ERROR,r),l(e.ERROR_DESCRIPTION,i),l(e.LOGIN_ERROR,s),n&&this._activeRenewals[n]&&(this._activeRenewals[n]=null),this._loginInProgress=!1,this._acquireTokenInProgress=!1,t&&t(i,null,r)}_loginPopup(e,t,n){var r=this._openPopup(e,"login",483,600),i=n||this.config.callback;if(!r){var s="Popup Window is null. This can happen if you are using IE";return void this._handlePopupError(i,t,"Error opening popup",s,s)}this._openedWindows.push(r);const o=this.config.redirectUri.split("#")[0];var a=setInterval(()=>{if(!r||r.closed||void 0===r.closed){var e="Popup Window closed by UI action/ Popup Window handle destroyed due to cross zone navigation in IE/Edge";return this._handlePopupError(i,t,"Popup Window closed",e,e),void clearInterval(a)}try{var n=r.location;if(-1!=encodeURI(n.href).indexOf(encodeURI(o)))return this.handleWindowCallback(n.hash),clearInterval(a),this._loginInProgress=!1,this._acquireTokenInProgress=!1,this._openedWindows=[],void r.close()}catch(e){}},1)}loginInProgress(){return this._loginInProgress}_hasResource(t){var n=d(e.TOKEN_KEYS);return!u(n)&&n.indexOf(t+"|")>-1}getCachedToken(t){if(!this._hasResource(t))return null;const n=d(e.ACCESS_TOKEN_KEY+t),r=d(e.EXPIRATION_KEY+t);return r&&r>E()+this.config.expireOffsetSeconds?n:(l(e.ACCESS_TOKEN_KEY+t,""),l(e.EXPIRATION_KEY+t,0),null)}getCachedUser(){if(this._user)return this._user;var t=d(e.IDTOKEN);return this._user=this._createUser(t),this._user}registerCallback(e,t,n){this._activeRenewals[t]=e,this._callBacksMappedToRenewStates[e]||(this._callBacksMappedToRenewStates[e]=[]),this._callBacksMappedToRenewStates[e].push(n),this._callBackMappedToRenewStates[e]||(this._callBackMappedToRenewStates[e]=(n,r,i,s)=>{this._activeRenewals[t]=null;for(var o=0;o<this._callBacksMappedToRenewStates[e].length;++o)try{this._callBacksMappedToRenewStates[e][o](n,r,i,s)}catch(i){}this._callBacksMappedToRenewStates[e]=null,this._callBackMappedToRenewStates[e]=null})}_renewToken(t,n,r="token"){var i=this._addAdalFrame("adalRenewFrame"+t),s=g()+"|"+t;this.config.state=s,this._renewStates.push(s);var a=this._urlRemoveQueryStringParameter(this._getNavigateUrl(r,t),"prompt");r===o.ID_TOKEN&&(this._idTokenNonce=g(),l(e.NONCE_IDTOKEN,this._idTokenNonce,!0),a+="&nonce="+encodeURIComponent(this._idTokenNonce)),a=this._addHintParameters(a+="&prompt=none"),this.registerCallback(s,t,n),i.src="about:blank",this._loadFrameTimeout(a,"adalRenewFrame"+t,t)}_renewIdToken(t,n){let r=this._addAdalFrame("adalIdTokenFrame"),i=g()+"|"+this.config.clientId;this._idTokenNonce=g(),l(e.NONCE_IDTOKEN,this._idTokenNonce,!0),this.config.state=i,this._renewStates.push(i);let s=n||this.config.clientId,o=this._urlRemoveQueryStringParameter(this._getNavigateUrl(n=n||"id_token",s),"prompt");o+="&prompt=none",o=this._addHintParameters(o),o+="&nonce="+encodeURIComponent(this._idTokenNonce),this.registerCallback(i,this.config.clientId,t),r.src="about:blank",this._loadFrameTimeout(o,"adalIdTokenFrame",this.config.clientId)}_loadFrame(e,t){setTimeout(()=>{var n=this._addAdalFrame(t);""!==n.src&&"about:blank"!==n.src||(n.src=e,this._loadFrame(e,t))},500)}acquireToken(e,t){if(e){var n=this.getCachedToken(e);if(n)t(null,n,null);else if(this._user||this.config.extraQueryParameter&&-1!==this.config.extraQueryParameter.indexOf("login_hint"))this._activeRenewals[e]?this.registerCallback(this._activeRenewals[e],e,t):(this._requestType=s.RENEW_TOKEN,e===this.config.clientId?this._user?this._renewIdToken(t):this._renewIdToken(t,o.ID_TOKEN):this._user?this._renewToken(e,t):this._renewToken(e,t,o.ID_TOKEN));else{const e="User login is required";t(e,null,e)}}else{const e="resource is required";t(e,null,e)}}acquireTokenPopup(e,t,n,r){if(this.ensureCanAcquireToken(e)){var i=g()+"|"+e;this.config.state=i,this._renewStates.push(i),this._requestType=s.RENEW_TOKEN;var o=this._urlRemoveQueryStringParameter(this._getNavigateUrl("token",e),"prompt");if(o+="&prompt=select_account",t&&(o+=t),n&&-1===o.indexOf("&claims"))o+="&claims="+encodeURIComponent(n);else if(n&&-1!==o.indexOf("&claims"))throw new Error("Claims cannot be passed as an extraQueryParameter");o=this._addHintParameters(o),this._acquireTokenInProgress=!0,this.registerCallback(i,e,r),this._loginPopup(o,e,r)}}acquireTokenRedirect(t,n,r){if(!this.ensureCanAcquireToken(t))return;const i=g()+"|"+t;this.config.state=i;var s=this._urlRemoveQueryStringParameter(this._getNavigateUrl("token",t),"prompt");if(s+="&prompt=select_account",n&&(s+=n),r&&-1===s.indexOf("&claims"))s+="&claims="+encodeURIComponent(r);else if(r&&-1!==s.indexOf("&claims"))throw new Error("Claims cannot be passed as an extraQueryParameter");s=this._addHintParameters(s),this._acquireTokenInProgress=!0,l(e.LOGIN_REQUEST,window.location.href),l(e.STATE_RENEW,i,!0),this.promptUser(s)}ensureCanAcquireToken(e){let t;return e?this._user?this._acquireTokenInProgress&&(t="Acquire token interactive is already in progress"):t="User login is required":t="Resource is required",!t||(this.config.callback(t,null,t),!1)}promptUser(e){e&&window.location.replace(e)}clearCache(){l(e.LOGIN_REQUEST,""),l(e.SESSION_STATE,""),l(e.STATE_LOGIN,""),l(e.STATE_RENEW,""),this._renewStates=[],l(e.NONCE_IDTOKEN,""),l(e.IDTOKEN,""),l(e.ERROR,""),l(e.ERROR_DESCRIPTION,""),l(e.LOGIN_ERROR,""),l(e.LOGIN_ERROR,"");var t=d(e.TOKEN_KEYS);if(!u(t)){t=t.split("|");for(var n=0;n<t.length&&""!==t[n];n++)l(e.ACCESS_TOKEN_KEY+t[n],""),l(e.EXPIRATION_KEY+t[n],0)}l(e.TOKEN_KEYS,"")}clearCacheForResource(t){l(e.STATE_RENEW,""),l(e.ERROR,""),l(e.ERROR_DESCRIPTION,""),this._hasResource(t)&&(l(e.ACCESS_TOKEN_KEY+t,""),l(e.EXPIRATION_KEY+t,0))}logOut(){let e;if(this.clearCache(),this._user=null,this.config.logOutUri)e=this.config.logOutUri;else{let t="";this.config.postLogoutRedirectUri&&(t="post_logout_redirect_uri="+encodeURIComponent(this.config.postLogoutRedirectUri)),e=this.config.instance+this.config.tenant+"/oauth2/logout?"+t}this.promptUser(e)}getUser(){if(this._user)return this._user;const t=d(e.IDTOKEN);return t?this._user=this._createUser(t):void 0}_createUser(e){const t=this._extractIdToken(e);if(p(t,"aud"))return t.aud.toLowerCase()===this.config.clientId.toLowerCase()?{userName:t.upn||t.email,profile:t}:void 0}getLoginError(){return d(e.LOGIN_ERROR)}getRequestInfo(e){const t={valid:!1,parameters:{},stateMatch:!1,stateResponse:"",requestType:s.UNKNOWN},n=h(_(e));if(!n)return t;if(t.parameters=n,p(n,"error_description")||p(n,"access_token")||p(n,"id_token")){if(t.valid=!0,!n.hasOwnProperty("state"))return t;if(t.stateResponse=n.state,this._matchState(t))return t;if(!t.stateMatch&&window.parent){t.requestType=this._requestType;for(const e of this._renewStates)if(e===t.stateResponse){t.stateMatch=!0;break}}}return t}_matchNonce(t){const n=d(e.NONCE_IDTOKEN);if(n)for(const e of n.split("||"))if(e===t.profile.nonce)return!0;return!1}_matchState(t){const n=d(e.STATE_LOGIN);if(n)for(const e of n.split("||"))if(e===t.stateResponse)return t.requestType=s.LOGIN,t.stateMatch=!0,!0;const r=d(e.STATE_RENEW);if(r)for(const e of r.split("||"))if(e===t.stateResponse)return t.requestType=s.RENEW_TOKEN,t.stateMatch=!0,!0;return!1}saveTokenFromHash(t){l(e.ERROR,""),l(e.ERROR_DESCRIPTION,"");var n,r=function(e){if(e){var t=e.indexOf("|");if(t>-1&&t+1<e.length)return e.substring(t+1)}return""}(t.stateResponse);t.parameters.hasOwnProperty("error_description")?(i.infoPii("Error :"+t.parameters.error+"; Error description:"+t.parameters.error_description),l(e.ERROR,t.parameters.error),l(e.ERROR_DESCRIPTION,t.parameters.error_description),t.requestType===s.LOGIN&&(this._loginInProgress=!1,l(e.LOGIN_ERROR,t.parameters.error_description))):t.stateMatch?(t.parameters.hasOwnProperty("session_state")&&l(e.SESSION_STATE,t.parameters.session_state),t.parameters.hasOwnProperty("access_token")&&(this._hasResource(r)||(n=d(e.TOKEN_KEYS)||"",l(e.TOKEN_KEYS,n+r+"|")),l(e.ACCESS_TOKEN_KEY+r,t.parameters.access_token),l(e.EXPIRATION_KEY+r,this._expiresIn(t.parameters.expires_in))),t.parameters.hasOwnProperty("id_token")&&(this._loginInProgress=!1,this._user=this._createUser(t.parameters.id_token),this._user&&this._user.profile?this._matchNonce(this._user)?(l(e.IDTOKEN,t.parameters.id_token),this._hasResource(r=this.config.loginResource?this.config.loginResource:this.config.clientId)||(n=d(e.TOKEN_KEYS)||"",l(e.TOKEN_KEYS,n+r+"|")),l(e.ACCESS_TOKEN_KEY+r,t.parameters.id_token),l(e.EXPIRATION_KEY+r,this._user.profile.exp)):(l(e.LOGIN_ERROR,"Nonce received: "+this._user.profile.nonce+" is not same as requested: "+d(e.NONCE_IDTOKEN)),this._user=null):(t.parameters.error="invalid id_token",t.parameters.error_description="Invalid id_token. id_token: "+t.parameters.id_token,l(e.ERROR,"invalid id_token"),l(e.ERROR_DESCRIPTION,"Invalid id_token. id_token: "+t.parameters.id_token)))):(t.parameters.error="Invalid_state",t.parameters.error_description="Invalid_state. state: "+t.stateResponse,l(e.ERROR,"Invalid_state"),l(e.ERROR_DESCRIPTION,"Invalid_state. state: "+t.stateResponse)),l(e.RENEW_STATUS+r,a.Completed)}getResourceForEndpoint(e){if(this.config&&this.config.anonymousEndpoints)for(var t=0;t<this.config.anonymousEndpoints.length;t++)if(e.indexOf(this.config.anonymousEndpoints[t])>-1)return null;if(this.config&&this.config.endpoints)for(var n in this.config.endpoints)if(e.indexOf(n)>-1)return this.config.endpoints[n];return e.indexOf("http://")>-1||e.indexOf("https://")>-1?this._getHostFromUri(e)===this._getHostFromUri(this.config.redirectUri)?this.config.loginResource:null:this.config.loginResource}_getHostFromUri(e){return String(e).replace(/^(https?:)\/\//,"").split("/")[0]}handleWindowCallback(t=window.location.hash){if(function(e){const t=h(_(e));return p(t,"error_description")||p(t,"access_token")||p(t,"id_token")}(t)){var n=null,r=!1;this._openedWindows.length>0&&this._openedWindows[this._openedWindows.length-1].opener&&this._openedWindows[this._openedWindows.length-1].opener._adalInstance?(n=this._openedWindows[this._openedWindows.length-1].opener._adalInstance,r=!0):window.parent&&window.parent._adalInstance&&(n=window.parent._adalInstance);let a,c,l,_=n.getRequestInfo(t);a=r||window.parent!==window?n._callBackMappedToRenewStates[_.stateResponse]:n.config.callback,n.saveTokenFromHash(_),_.requestType===s.RENEW_TOKEN&&window.parent?(c=_.parameters.access_token||_.parameters.id_token,l="access_token"):_.requestType===s.LOGIN&&(c=_.parameters.id_token,l="id_token");var i=_.parameters.error_description,o=_.parameters.error;try{a&&a(i,c,o,l)}catch(e){}window.parent!==window||r||(n.config.navigateToLoginRequestUrl?window.location.href=d(e.LOGIN_REQUEST):window.location.hash="")}}_getNavigateUrl(e,t){return this.config.instance+this.config.tenant+"/oauth2/authorize"+this._serialize(e,this.config,t)}_extractIdToken(e){var t=this._decodeJwt(e);if(t)try{var n=this._base64DecodeStringUrlSafe(t.JWSPayload);return n?JSON.parse(n):void 0}catch(e){}}_base64DecodeStringUrlSafe(e){return e=e.replace(/-/g,"+").replace(/_/g,"/"),decodeURIComponent(escape(window.atob(e)))}_decodeJwt(e){if(u(e))return null;var t=/^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/.exec(e);return!t||t.length<4?(i.warn("The returned id_token is not parseable."),null):{header:t[1],JWSPayload:t[2],JWSSig:t[3]}}_convertUrlSafeToRegularBase64EncodedString(e){return e.replace("-","+").replace("_","/")}_serialize(e,t,n){var r=[];if(null!==t){r.push("?response_type="+e),r.push("client_id="+encodeURIComponent(t.clientId)),n&&r.push("resource="+encodeURIComponent(n)),r.push("redirect_uri="+encodeURIComponent(t.redirectUri)),r.push("state="+encodeURIComponent(t.state)),t.hasOwnProperty("slice")&&r.push("slice="+encodeURIComponent(t.slice)),t.hasOwnProperty("extraQueryParameter")&&r.push(t.extraQueryParameter);var i=t.correlationId?t.correlationId:g();r.push("client-request-id="+encodeURIComponent(i))}return r.join("&")}_expiresIn(e){return e||(e=3599),E()+parseInt(e,10)}_addAdalFrame(e){if(e){var t=document.getElementById(e);if(!t){if(document.createElement&&document.documentElement&&(window.opera||-1===window.navigator.userAgent.indexOf("MSIE 5.0"))){var n=document.createElement("iframe");n.setAttribute("id",e),n.setAttribute("aria-hidden","true"),n.style.visibility="hidden",n.style.position="absolute",n.style.width=n.style.height=n.borderWidth="0px",t=document.getElementsByTagName("body")[0].appendChild(n)}else document.body&&document.body.insertAdjacentHTML&&document.body.insertAdjacentHTML("beforeEnd",'<iframe name="'+e+'" id="'+e+'" style="display:none"></iframe>');window.frames&&window.frames[e]&&(t=window.frames[e])}return t}}}function l(e,n,r=!1){if(r){const r=d(e)||"";t.setItem(e,r+n+"||")}else t.setItem(e,n)}function d(e){return t.getItem(e)}function _(e){return e.indexOf("#/")>-1?e=e.substring(e.indexOf("#/")+2):e.indexOf("#")>-1&&(e=e.substring(1)),e}function h(e){var t,n=/\+/g,r=/([^&=]+)=([^&]*)/g,i=e=>decodeURIComponent(e.replace(n," ")),s={};for(t=r.exec(e);t;)s[i(t[1])]=i(t[2]),t=r.exec(e);return s}function u(e){return void 0===e||!e||0===e.length}function p(e,t){return!!e&&Object.hasOwnProperty.call(e,t)}function E(){return Math.round(Date.now()/1e3)}function g(){var e=window.crypto||window.msCrypto,t=new Uint8Array(16);return e.getRandomValues(t),t[6]|=64,t[6]&=79,t[8]|=128,t[8]&=191,(t=t.map(e=>{let t=e.toString(16);for(;t.length<2;)t="0"+t;return t}))[0]+t[1]+t[2]+t[3]+"-"+t[4]+t[5]+"-"+t[6]+t[7]+"-"+t[8]+t[9]+"-"+t[10]+t[11]+t[12]+t[13]+t[14]+t[15]}export{c as Adal};
//# sourceMappingURL=adal.modern.js.map
