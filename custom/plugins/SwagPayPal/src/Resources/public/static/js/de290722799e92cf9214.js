(window["webpackJsonpPluginswag-pay-pal"]=window["webpackJsonpPluginswag-pay-pal"]||[]).push([[701],{935:function(){},2701:function(e,t,n){"use strict";n.r(t),n(257);let{Component:i,Utils:s}=Shopware;i.override("sw-settings-shipping-detail",{template:'{% block sw_settings_shipping_detail_tax_cost %}\n\n    {% block sw_settings_shipping_detail_paypal_default_carrier %}\n    <sw-card\n        v-if="isPayPalEnabled"\n        class="swag-paypal-settings-shipping-carrier"\n        position-identifier="swag-paypal-settings-shipping-carrier"\n    >\n        {% block sw_settings_shipping_detail_paypal_default_carrier_title %}\n        <template #title>\n            <div class="sw-card__title">\n                {{ $tc(\'swag-paypal-settings-shipping-carrier.cardTitle\') }}\n                <sw-help-text :text="$tc(\'swag-paypal-settings-shipping-carrier.cardHelpText\')"></sw-help-text>\n            </div>\n        </template>\n        {% endblock %}\n\n        {% block sw_settings_shipping_detail_paypal_default_carrier_description %}\n            <div\n                v-html="$tc(\'swag-paypal-settings-shipping-carrier.description\')"\n                class="swag-paypal-settings-shipping-carrier__description"\n            ></div>\n        {% endblock %}\n\n        {% block sw_settings_shipping_detail_paypal_default_carrier_input %}\n        <sw-text-field\n            v-model:value="payPalDefaultCarrier"\n            :label="$tc(\'swag-paypal-settings-shipping-carrier.inputLabel\')"\n            :placeholder="$tc(\'swag-paypal-settings-shipping-carrier.inputPlaceholder\')"\n        ></sw-text-field>\n        {% endblock %}\n\n    </sw-card>\n    {% endblock %}\n\n    {% parent %}\n{% endblock %}\n',inject:["SwagPayPalApiCredentialsService"],data(){return{isPayPalEnabled:!1}},computed:{shippingMethodCustomFields(){return this.shippingMethod.customFields?this.shippingMethod.customFields:s.object.get(this.shippingMethod,"translated.customFields",null)},payPalDefaultCarrier:{get(){return null===this.shippingMethodCustomFields?"":this.shippingMethodCustomFields.swag_paypal_carrier||""},set(e){s.object.set(this.shippingMethod,"customFields.swag_paypal_carrier",e)}}},methods:{createdComponent(){this.$super("createdComponent"),this.fetchMerchantIntegrations()},fetchMerchantIntegrations(){this.SwagPayPalApiCredentialsService.getMerchantInformation().then(e=>{this.isPayPalEnabled=e.hasOwnProperty("merchantIntegrations")&&null!==e.merchantIntegrations})}}})},257:function(e,t,n){var i=n(935);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals),n(5346).Z("db6838c6",i,!0,{})},5346:function(e,t,n){"use strict";function i(e,t){for(var n=[],i={},s=0;s<t.length;s++){var a=t[s],r=a[0],p={id:e+":"+s,css:a[1],media:a[2],sourceMap:a[3]};i[r]?i[r].parts.push(p):n.push(i[r]={id:r,parts:[p]})}return n}n.d(t,{Z:function(){return g}});var s="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!s)throw Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a={},r=s&&(document.head||document.getElementsByTagName("head")[0]),p=null,l=0,o=!1,d=function(){},c=null,u="data-vue-ssr-id",h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function g(e,t,n,s){o=n,c=s||{};var r=i(e,t);return f(r),function(t){for(var n=[],s=0;s<r.length;s++){var p=a[r[s].id];p.refs--,n.push(p)}t?f(r=i(e,t)):r=[];for(var s=0;s<n.length;s++){var p=n[s];if(0===p.refs){for(var l=0;l<p.parts.length;l++)p.parts[l]();delete a[p.id]}}}}function f(e){for(var t=0;t<e.length;t++){var n=e[t],i=a[n.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](n.parts[s]);for(;s<n.parts.length;s++)i.parts.push(m(n.parts[s]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var r=[],s=0;s<n.parts.length;s++)r.push(m(n.parts[s]));a[n.id]={id:n.id,refs:1,parts:r}}}}function v(){var e=document.createElement("style");return e.type="text/css",r.appendChild(e),e}function m(e){var t,n,i=document.querySelector("style["+u+'~="'+e.id+'"]');if(i){if(o)return d;i.parentNode.removeChild(i)}if(h){var s=l++;t=y.bind(null,i=p||(p=v()),s,!1),n=y.bind(null,i,s,!0)}else t=w.bind(null,i=v()),n=function(){i.parentNode.removeChild(i)};return t(e),function(i){i?(i.css!==e.css||i.media!==e.media||i.sourceMap!==e.sourceMap)&&t(e=i):n()}}var _=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function y(e,t,n,i){var s=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=_(t,s);else{var a=document.createTextNode(s),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(a,r[t]):e.appendChild(a)}}function w(e,t){var n=t.css,i=t.media,s=t.sourceMap;if(i&&e.setAttribute("media",i),c.ssrId&&e.setAttribute(u,t.id),s&&(n+="\n/*# sourceURL="+s.sources[0]+" */\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}}]);