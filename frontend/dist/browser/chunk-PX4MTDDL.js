import{D as a,qa as n,r as s,va as c,w as o}from"./chunk-CA32YO3K.js";var m=(()=>{let t=class t{constructor(){this.isConfirmed=a(!1),this.confirmationData=a([])}setIsConfirmed(r){this.isConfirmed.set(r)}getIsConfirmed(){return this.isConfirmed()}setConfirmationData(r){this.confirmationData.set(r)}getConfirmationData(){return this.confirmationData()}};t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=s({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();var u=(()=>{let t=class t{constructor(){this.userSettingsStorageKey="auth",this.marketPrefixesStorageKey="prefixes"}getUserSettings(){return localStorage.getItem(this.userSettingsStorageKey)}setUserSettings(r){localStorage.setItem(this.userSettingsStorageKey,JSON.stringify({userSettings:r}))}setMarketsPrefix(r){localStorage.setItem(this.marketPrefixesStorageKey,JSON.stringify(r))}getMarketsPrefix(){return localStorage.getItem(this.marketPrefixesStorageKey)}};t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=s({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();var k=(()=>{let t=class t{constructor(){this.loginApi="https://portal-api-test.epicentrk.ua/api",this.resetPassService=o(m),this.http=o(n),this.router=o(c),this.localStorageService=o(u)}login(r){return this.http.post(`${this.loginApi}/system/common/tokens/auth`,r).subscribe(e=>{this.localStorageService.setUserSettings(e),this.router.navigate(["/admin/dashboard"])},e=>{e.status,e.status})}signOut(){localStorage.clear(),this.router.navigate(["/admin/login"])}forgotPwRequest(r){return this.http.put(`${this.loginApi}/system/common/tokens/auth/password/reset/request`,r).subscribe(e=>{this.resetPassService.setIsConfirmed(!0),this.resetPassService.setConfirmationData(e)},e=>{e.status})}forgotPwConfirm(r){return this.http.put(`${this.loginApi}/system/common/tokens/auth/password/reset/confirm`,r).subscribe(e=>{this.router.navigate(["/admin/login"])},e=>{e.status})}};t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=s({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();export{u as a,m as b,k as c};
