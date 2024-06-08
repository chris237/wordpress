import{k as d}from"./links.C7Z9vJvv.js";import{R as l,a as f}from"./RequiresUpdate.r_OS97xi.js";import{a as h}from"./addons.CFmx_7nM.js";import{C as g}from"./Index.BtYN_o8x.js";import{o,c as n,x,l as _,m as $,v}from"./vue.esm-bundler.CWQFYt9y.js";import{_ as e}from"./_plugin-vue_export-helper.BN1snXvA.js";import b from"./Redirects.Djmoeqh6.js";import"./default-i18n.Bd0Z306Z.js";import"./helpers.DkJd815A.js";import"./RequiresUpdate.BFVwZkce.js";import"./upperFirst.DnE5bcuK.js";import"./_stringToArray.DnK4tKcY.js";import"./toString.24fN1xMd.js";import"./license.QkKrD28L.js";import"./allowed.CZmS0DkB.js";/* empty css             */import"./params.B3T1WKlC.js";import"./Ellipse.DLIy0Fhb.js";import"./Caret.iRBf3wcH.js";import"./Header.D6vKDXKE.js";import"./ScrollAndHighlight.D63bIT5R.js";import"./LogoGear.BF23BIEd.js";import"./AnimatedNumber.D3vhSMTe.js";import"./numbers.zAmItkHM.js";import"./Logo.DoVR4qom.js";import"./index.B8uZtLiV.js";import"./Support.B-t20u3s.js";import"./Tabs.C3JBuhlY.js";import"./TruSeoScore.TjofuHRQ.js";import"./Information.CESrgQJV.js";import"./Slide.CRIn0kdn.js";import"./Url.KGrLSVBd.js";import"./Date.wJe5sKwv.js";import"./constants.DpuIWwJ9.js";import"./Exclamation.DKtT8kuH.js";import"./Gear.aQH8e4fl.js";import"./Redirects.Qw3OMoSK.js";import"./Index.JibUDaTl.js";import"./JsonValues.D25FTfEu.js";import"./strings.DHEzgTA5.js";import"./isString.DH_10e2z.js";import"./ProBadge.WwPkDor4.js";import"./External.Bfg4674G.js";import"./Checkbox.D2dfpbIi.js";import"./Checkmark.pCOnqh_g.js";import"./DatePicker.DwFXyUjL.js";import"./get.QVQdoK-Q.js";import"./isUndefined.KRoivnRl.js";import"./_getTag.gDb2R5l9.js";import"./debounce.DS72ZDl3.js";import"./toNumber.CT-toMIa.js";import"./_baseTrim.BYZhh0MR.js";import"./Tooltip.Jp05nfCy.js";import"./Plus.DrDYrwHh.js";import"./Blur.DNVDismY.js";import"./Card.CGaKNDqF.js";import"./Table._qU3COyQ.js";import"./Index.XNbBlAFo.js";import"./Row.CzuhYwfs.js";import"./RequiredPlans.5f41kq6X.js";import"./AddonConditions.DbcWzjSi.js";const S={};function y(t,r){return o(),n("div")}const R=e(S,[["render",y]]),A={};function w(t,r){return o(),n("div")}const B=e(A,[["render",w]]),C={};function k(t,r){return o(),n("div")}const E=e(C,[["render",k]]),L={};function T(t,r){return o(),n("div")}const U=e(L,[["render",T]]),q={};function M(t,r){return o(),n("div")}const N=e(q,[["render",M]]),D={setup(){return{redirectsStore:d()}},components:{CoreMain:g,FullSiteRedirect:R,ImportExport:B,Logs:E,Logs404:U,Redirects:b,Settings:N},mixins:[l,f],data(){return{strings:{pageName:this.$t.__("Redirects",this.$td)}}},computed:{showSaveButton(){return this.$route.name!=="redirects"&&this.$route.name!=="groups"&&this.$route.name!=="logs-404"&&this.$route.name!=="logs"&&this.$route.name!=="import-export"},excludeTabs(){var r,m,p,s,i,c,a,u;const t=h.isActive("aioseo-redirects")?this.getExcludedUpdateTabs("aioseo-redirects"):this.getExcludedActivationTabs("aioseo-redirects");return(p=(m=(r=this.redirectsStore.options)==null?void 0:r.logs)==null?void 0:m.log404)!=null&&p.enabled||t.push("logs-404"),(!((c=(i=(s=this.redirectsStore.options)==null?void 0:s.logs)==null?void 0:i.redirects)!=null&&c.enabled)||((u=(a=this.redirectsStore.options)==null?void 0:a.main)==null?void 0:u.method)==="server")&&t.push("logs"),t}}};function F(t,r,m,p,s,i){const c=x("core-main");return o(),_(c,{"page-name":s.strings.pageName,"show-save-button":i.showSaveButton,"exclude-tabs":i.excludeTabs},{default:$(()=>[(o(),_(v(t.$route.name)))]),_:1},8,["page-name","show-save-button","exclude-tabs"])}const Kt=e(D,[["render",F]]);export{Kt as default};
