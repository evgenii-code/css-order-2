(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{554:function(t,e,n){},555:function(t,e,n){"use strict";n.r(e);n(18);var r=n(577),o={components:{KinesisContainer:r.a,KinesisElement:r.b},props:{parallax:{type:String,default:null,validator:function(t){return["info","about","benefits","premium","default"].includes(t)}},active:{type:Boolean,default:!1}},methods:{getImageUrl:function(t){return n(557)("./parallax-".concat(t,".png"))}}},l=(n(563),n(4)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("kinesis-container",{staticClass:"screen",attrs:{tag:"section",active:t.active}},[null!==t.parallax?n("kinesis-element",{class:["screen__parallax","screen__parallax_section_"+t.parallax],attrs:{tag:"img",strength:40,src:t.getImageUrl(t.parallax),alt:t.parallax+" parallax"}}):t._e(),t._v(" "),t._t("default")],2)}),[],!1,null,"7b05e611",null);e.default=component.exports},557:function(t,e,n){var map={"./parallax-about.png":558,"./parallax-benefits.png":559,"./parallax-default.png":560,"./parallax-info.png":561,"./parallax-premium.png":562};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=557},558:function(t,e,n){t.exports=n.p+"img/parallax-about.8a2d392.png"},559:function(t,e,n){t.exports=n.p+"img/parallax-benefits.abbdc2d.png"},560:function(t,e,n){t.exports=n.p+"img/parallax-default.eb2320b.png"},561:function(t,e,n){t.exports=n.p+"img/parallax-info.608fd83.png"},562:function(t,e,n){t.exports=n.p+"img/parallax-premium.2e40ce5.png"},563:function(t,e,n){"use strict";n(554)},576:function(t,e,n){"use strict";n.r(e);n(18),n(176),n(281),n(50);var r=n(85),o={model:{prop:"modelValue",event:"change"},props:{borderStyle:{type:String,required:!0,validator:function(t){return["hexagon","rhombus"].includes(t)}},value:{type:String,default:""},required:{type:Boolean,default:!1},modelValue:{type:[Boolean,Array],default:!1},trueValue:{type:Boolean,default:!0},falseValue:{type:Boolean,default:!1}},computed:{shouldBeChecked:function(){return Array.isArray(this.modelValue)?this.modelValue.includes(this.value):this.modelValue===this.trueValue}},methods:{updateInput:function(t){var e=t.target.checked;if(Array.isArray(this.modelValue)){var n=Object(r.a)(this.modelValue);e?n.push(this.value):n.splice(n.indexOf(this.value),1),this.$emit("change",n)}else this.$emit("change",e?this.trueValue:this.falseValue)}}},l=(n(604),n(4)),component=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("label",{class:["checkbox","checkbox_border-style_"+this.borderStyle]},[e("input",{staticClass:"checkbox__input",attrs:{type:"checkbox",required:this.required},domProps:{checked:this.shouldBeChecked,value:this.value},on:{change:this.updateInput}}),this._v(" "),e("span",{staticClass:"checkbox__icon"})])}),[],!1,null,"dd297a0e",null);e.default=component.exports},584:function(t,e,n){},586:function(t,e,n){"use strict";n.r(e);var r={},o=(n(731),n(4)),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"container"},[this._t("default")],2)}),[],!1,null,"f1a67d3a",null);e.default=component.exports},604:function(t,e,n){"use strict";n(584)},605:function(t,e,n){"use strict";n.r(e);n(18),n(114),n(15),n(21);var r={directives:{"number-only":{bind:function(t,e){e.value&&t.addEventListener("keypress",(function(t){if(t.target.value=t.target.value.replace(/[^0-9]/g,""),t.charCode>=48&&t.charCode<=57)return!0;t.preventDefault()}))}},"letter-only":{bind:function(t,e){e.value&&t.addEventListener("keypress",(function(t){return t.charCode>=48&&t.charCode<=57&&t.preventDefault(),!0}))}}},props:{rules:{type:String,required:!0},mode:{type:String,default:"aggressive",validator:function(t){return["aggressive","passive","lazy","eager"].includes(t)}},value:{type:String,default:""},id:{type:String,required:!0},numberOnly:{type:Boolean,default:!1},letterOnly:{type:Boolean,default:!1},type:{type:String,default:"text",validator:function(t){return["text","tel","select","email"].includes(t)}},title:{type:String,required:!0},max:{type:Number,default:void 0},min:{type:Number,default:void 0},maxlength:{type:Number,default:void 0},minlength:{type:Number,default:void 0},mask:{type:String,default:null,validator:function(t){return["creditcard"].includes(t)}},cloudpaymentsData:{type:String,default:null,validator:function(t){return["cardNumber","expDateMonth","expDateYear","cvv","name"].includes(t)}},autocomplete:{type:String,default:"on",validator:function(t){return["on","off"].includes(t)}}},data:function(){return{content:this.value,limitlength:this.maxlength}},methods:{handleInput:function(t){"creditcard"===this.mask&&this.maskCardNumber(t),this.$emit("input",{value:this.content,event:t})},maskCardNumber:function(t){this.content=t.target.value.replace(/\D/g,"");var e=this.content;(/^3[47]\d{0,13}$/.test(e)?(this.content=e.replace(/(\d{4})/,"$1 ").replace(/(\d{4}) (\d{6})/,"$1 $2 "),this.limitlength=17):/^3(?:0[0-5]|[68]\d)\d{0,11}$/.test(e)?(this.content=e.replace(/(\d{4})/,"$1 ").replace(/(\d{4}) (\d{6})/,"$1 $2 "),this.limitlength=16):/^\d{0,16}$/.test(e)?(this.content=e.replace(/(\d{4})/,"$1 ").replace(/(\d{4}) (\d{4})/,"$1 $2 ").replace(/(\d{4}) (\d{4}) (\d{4})/,"$1 $2 $3 "),this.limitlength=22):/^\d{17,19}$/.test(e)&&(this.content=e.replace(/(\d{5})/,"$1 ").replace(/(\d{5}) (\d{5})/,"$1 $2 ").replace(/(\d{5}) (\d{5}) (\d{5})/,"$1 $2 $3 "),this.limitlength=22),"deleteContentBackward"==t.inputType)&&(" "==this.content.substring(this.content.length,this.content.length-1)&&(this.content=this.content.substring(0,this.content.length-1)));t.target.value=this.content}}},o=(n(733),n(4)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ValidationProvider",{staticClass:"input",attrs:{name:t.title,rules:t.rules},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return["checkbox"===t.type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"},{name:"number-only",rawName:"v-number-only",value:t.numberOnly,expression:"numberOnly"},{name:"letter-only",rawName:"v-letter-only",value:t.letterOnly,expression:"letterOnly"}],staticClass:"input__field",attrs:{id:t.id,title:t.title,maxlength:t.limitlength,minlength:t.minlength,max:t.max,min:t.min,autocomplete:t.autocomplete,"data-card-field":"","data-cp":t.cloudpaymentsData,type:"checkbox"},domProps:{checked:Array.isArray(t.content)?t._i(t.content,null)>-1:t.content},on:{input:t.handleInput,change:function(e){var n=t.content,r=e.target,o=!!r.checked;if(Array.isArray(n)){var l=t._i(n,null);r.checked?l<0&&(t.content=n.concat([null])):l>-1&&(t.content=n.slice(0,l).concat(n.slice(l+1)))}else t.content=o}}}):"radio"===t.type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"},{name:"number-only",rawName:"v-number-only",value:t.numberOnly,expression:"numberOnly"},{name:"letter-only",rawName:"v-letter-only",value:t.letterOnly,expression:"letterOnly"}],staticClass:"input__field",attrs:{id:t.id,title:t.title,maxlength:t.limitlength,minlength:t.minlength,max:t.max,min:t.min,autocomplete:t.autocomplete,"data-card-field":"","data-cp":t.cloudpaymentsData,type:"radio"},domProps:{checked:t._q(t.content,null)},on:{input:t.handleInput,change:function(e){t.content=null}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"},{name:"number-only",rawName:"v-number-only",value:t.numberOnly,expression:"numberOnly"},{name:"letter-only",rawName:"v-letter-only",value:t.letterOnly,expression:"letterOnly"}],staticClass:"input__field",attrs:{id:t.id,title:t.title,maxlength:t.limitlength,minlength:t.minlength,max:t.max,min:t.min,autocomplete:t.autocomplete,"data-card-field":"","data-cp":t.cloudpaymentsData,type:t.type},domProps:{value:t.content},on:{input:[function(e){e.target.composing||(t.content=e.target.value)},t.handleInput]}}),t._v(" "),r[0]?n("span",{staticClass:"input__error"}):t._e()]}}])})}),[],!1,null,"1b8b9e40",null);e.default=component.exports},626:function(t,e,n){},627:function(t,e,n){},628:function(t,e,n){},629:function(t,e,n){},630:function(t,e,n){},631:function(t,e,n){},632:function(t,e,n){},633:function(t,e,n){},634:function(t,e,n){},648:function(t,e,n){"use strict";n.r(e);var r=n(92),o=n(37),l=n(661),c=n(662),d={components:{VLinkBlank:o.default,CheckoutEmailForm:l.default,CheckoutCardForm:c.default},mixins:[r.a],data:function(){return{isPaycardFormVisible:!1,email:""}},computed:{localeErrorMessages:function(){return this.$t("pages.payment.checkout.messages")}},methods:{handleSubmit:function(t){var e=this,n=t.email;this.email=n,this.isPaycardFormVisible=!0,this.$nextTick((function(){e.scrollToTheNextBlock()}))},scrollToTheNextBlock:function(){this.$refs.scrollHere.scrollIntoView({block:"center",behavior:"smooth"})},showSecureModal:function(){this.openModal("ModalSecure")},openModal:function(content){this.$store.dispatch("modal/openModal",{content:content})}}},m=(n(736),n(4)),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"checkout"},[n("h1",{staticClass:"checkout__title"},[t._v("\n        "+t._s(t.$t("pages.payment.checkout.title"))+"\n    ")]),t._v(" "),n("div",{staticClass:"checkout__content checkout__content_type_email"},[n("checkout-email-form",{staticClass:"checkout__form",on:{submit:t.handleSubmit}})],1),t._v(" "),t.isPaycardFormVisible?n("div",{ref:"scrollHere",staticClass:"checkout__content checkout__content_type_paycard"},[n("checkout-card-form",{staticClass:"checkout__form",attrs:{email:t.email}}),t._v(" "),n("p",{staticClass:"checkout__further"},[n("i18n",{attrs:{path:"pages.payment.checkout.furtherPayments",tag:!1},scopedSlots:t._u([{key:"break",fn:function(){return[n("br",{staticClass:"checkout__margin"})]},proxy:!0},{key:"action",fn:function(){return[n("v-link-blank",{staticClass:"checkout__link",attrs:{href:t.localePath("/oferta")}},[t._v("\n                        "+t._s(t.$t("pages.payment.checkout.annex"))+"\n                    ")])]},proxy:!0}],null,!1,24802807)})],1)],1):t._e()])}),[],!1,null,"06f147c5",null);e.default=component.exports;installComponents(component,{CheckoutEmailForm:n(661).default,CheckoutCardForm:n(662).default,VLinkBlank:n(37).default})},661:function(t,e,n){"use strict";n.r(e);var r=n(58),o=n(664),l=n(665),c=n(586),d={components:{VButton:r.default,VButtonApple:o.default,VButtonGoogle:l.default,CheckoutContainer:c.default},data:function(){return{email:""}},methods:{emitSubmit:function(){this.$emit("submit",{email:this.email})},handleInput:function(t){var e=t.event;this.email=e.target.value}}},m=(n(732),n(4)),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ValidationObserver",{ref:"emailObserver",staticClass:"form",attrs:{id:"emailForm",tag:"form",autocomplete:"off"},on:{submit:function(e){return e.preventDefault(),t.emitSubmit(e)}},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.invalid;return[n("checkout-container",{staticClass:"form__container"},[n("label",{staticClass:"form__item"},[n("span",{staticClass:"form__text"},[t._v("\n                "+t._s(t.$t("pages.payment.checkout.email"))+"\n            ")]),t._v(" "),n("checkout-input",{staticClass:"form__input",attrs:{id:"email",type:"text",title:"Email",autocomplete:"off",maxlength:22,rules:"required|email",mode:"eager"},on:{input:t.handleInput},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)]),t._v(" "),n("div",{staticClass:"form__buttons"},[n("client-only",[n("v-button-apple",{staticClass:"form__button form__button_method_apple",attrs:{disabled:r}})],1),t._v(" "),n("client-only",[n("v-button-google",{staticClass:"form__button form__button_method_google",attrs:{disabled:r}})],1),t._v(" "),n("v-button",{staticClass:"form__button form__button_method_card",attrs:{theme:"light",type:"submit",disabled:r}},[t._v("\n            "+t._s(t.$t("pages.payment.checkout.byCard"))+"\n        ")])],1)]}}])})}),[],!1,null,"767441e8",null);e.default=component.exports;installComponents(component,{CheckoutInput:n(605).default,CheckoutContainer:n(586).default,VButtonApple:n(664).default,VButtonGoogle:n(665).default,VButton:n(58).default})},662:function(t,e,n){"use strict";n.r(e);n(14);var r=n(92),o=n(37),l=n(58),c=n(576),d=n(586),m=n(605),h=n(666),f={components:{VLinkBlank:o.default,VButton:l.default,VCheckbox:c.default,CheckoutContainer:d.default,CheckoutInput:m.default,CheckoutSelect:h.default},mixins:[r.a],props:{email:{type:String,default:""}},data:function(){return{valueFields:{agreement:!0,cardName:"",cardNumber:"",cardMonth:null,cardYear:null,cardCvv:null},inputFields:{cardNumber:"v-card-number",cardName:"v-card-name",cardMonth:"v-card-month",cardYear:"v-card-year",cardCvv:"v-card-cvv"}}},computed:{localeErrorMessages:function(){return this.$t("pages.payment.checkout.messages")}},methods:{changeName:function(t){var e=t.event;this.valueFields.cardName=e.target.value,this.$emit("input-card-name",this.valueFields.cardName)},changeNumber:function(t){var e=t.event;this.valueFields.cardNumber=e.target.value,this.$emit("input-card-number",this.valueFields.cardNumber)},changeMonth:function(t){var e=t.event;this.valueFields.cardMonth=e.target.value,this.$emit("input-card-month",this.valueFields.cardMonth)},changeYear:function(t){var e=t.event;this.valueFields.cardYear=e.target.value,this.$emit("input-card-year",this.valueFields.cardYear)},changeCvv:function(t){var e=t.event;this.valueFields.cardCvv=e.target.value,this.$emit("input-card-cvv",this.valueFields.cardCvv)},showSecureModal:function(){this.openModal("ModalSecure")},openModal:function(content){this.$store.dispatch("modal/openModal",{content:content})},createCryptogram:function(){var t=new cp.Checkout("test_api_00000000000000000000001",document.getElementById("paymentForm")).createCryptogramPacket();return t.success?Promise.resolve(t.packet):Promise.reject(t.messages)},submitPaycard:function(){var t=this;this.createCryptogram().then((function(e){var n={subscription:t.$route.query.subscription,email:t.email,cryptogram:e};console.log("Сформирована криптограмма:",n),t.resetForm(),t.showSecureModal()})).catch((function(e){for(var n in e)return n in t.localeErrorMessages?t.sendError(t.localeErrorMessages[n]):t.sendError(t.localeErrorMessages.default)}))},resetForm:function(){this.valueFields.agreement=!0,this.valueFields.email="",this.valueFields.cardName="",this.valueFields.cardNumber="",this.valueFields.cardMonth=null,this.valueFields.cardYear=null,this.valueFields.cardCvv=null,this.$refs.paymentObserver.reset()}}},v=(n(735),n(4)),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ValidationObserver",{ref:"paymentObserver",staticClass:"form",attrs:{id:"paymentForm",tag:"form",autocomplete:"off"},on:{submit:function(e){return e.preventDefault(),t.submitPaycard(e)}},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.invalid;return[n("client-only",{attrs:{placeholder:"Loading..."}},[n("vue-paycard",{staticClass:"form__card",attrs:{"value-fields":t.valueFields,"is-card-number-masked":!1}})],1),t._v(" "),n("checkout-container",{staticClass:"form__container"},[n("label",{staticClass:"form__item form__item_type_number"},[n("span",{staticClass:"form__text"},[t._v("\n                "+t._s(t.$t("pages.payment.checkout.card"))+"\n            ")]),t._v(" "),n("checkout-input",{staticClass:"form__input",attrs:{id:t.inputFields.cardNumber,type:"tel",title:"Number",value:t.valueFields.cardNumber,autocomplete:"off",maxlength:22,"cloudpayments-data":"cardNumber",rules:"required|credit_card",mode:"eager",mask:"creditcard"},on:{input:t.changeNumber}})],1),t._v(" "),n("label",{staticClass:"form__item form__item_type_holder"},[n("span",{staticClass:"form__text"},[t._v("\n                "+t._s(t.$t("pages.payment.checkout.holder"))+"\n            ")]),t._v(" "),n("checkout-input",{staticClass:"form__input",attrs:{id:t.inputFields.cardName,"letter-only":!0,type:"text",title:"Name",value:t.valueFields.cardName,autocomplete:"off","cloudpayments-data":"name",rules:"required",mode:"eager"},on:{input:t.changeName}})],1),t._v(" "),n("label",{staticClass:"form__item form__item_type_month",attrs:{"aria-label":"Expiration Month"}},[n("span",{staticClass:"form__text"},[t._v("\n                "+t._s(t.$t("pages.payment.checkout.month"))+"\n            ")]),t._v(" "),n("checkout-select",{staticClass:"form__input",attrs:{id:t.inputFields.cardMonth,title:"Month",value:t.valueFields.cardMonth,"cloudpayments-data":"expDateMonth",rules:"required",mode:"eager"},on:{change:t.changeMonth}})],1),t._v(" "),n("label",{staticClass:"form__item form__item_type_year",attrs:{"aria-label":"Expiration Year"}},[n("span",{staticClass:"form__text"},[t._v("\n                "+t._s(t.$t("pages.payment.checkout.year"))+"\n            ")]),t._v(" "),n("checkout-select",{staticClass:"form__input",attrs:{id:t.inputFields.cardYear,title:"Year",value:t.valueFields.cardYear,"cloudpayments-data":"expDateYear",rules:"required",mode:"eager"},on:{change:t.changeYear}})],1),t._v(" "),n("label",{staticClass:"form__item form__item_type_cvv"},[n("span",{staticClass:"form__text"},[t._v("\n                "+t._s(t.$t("pages.payment.checkout.cvv"))+"\n            ")]),t._v(" "),n("checkout-input",{staticClass:"form__input",attrs:{id:t.inputFields.cardCvv,"number-only":!0,type:"tel",title:"CVV",maxlength:4,value:t.valueFields.cardCvv,autocomplete:"off","cloudpayments-data":"cvv",rules:"required|numeric|min:3|max:4",mode:"eager"},on:{input:t.changeCvv}})],1)]),t._v(" "),n("ValidationProvider",{staticClass:"form__consent",attrs:{slim:"",name:"Agreement",tag:"label",rules:{required:{allowFalse:!1}}}},[n("v-checkbox",{staticClass:"form__checkbox",attrs:{"border-style":"rhombus",required:!0},model:{value:t.valueFields.agreement,callback:function(e){t.$set(t.valueFields,"agreement",e)},expression:"valueFields.agreement"}}),t._v(" "),n("span",{staticClass:"form__agreement"},[n("i18n",{attrs:{path:"pages.payment.checkout.agreement",tag:!1},scopedSlots:t._u([{key:"action",fn:function(){return[n("v-link-blank",{staticClass:"form__link",attrs:{href:"/"}},[t._v("\n                        "+t._s(t.$t("pages.payment.checkout.offer"))+"\n                    ")])]},proxy:!0}],null,!0)})],1)],1),t._v(" "),n("v-button",{staticClass:"form__button",attrs:{theme:"light",type:"submit",disabled:r}},[t._v("\n        "+t._s(t.$t("pages.payment.checkout.send"))+"\n    ")])]}}])})}),[],!1,null,"286d70d0",null);e.default=component.exports;installComponents(component,{CheckoutInput:n(605).default,CheckoutSelect:n(666).default,CheckoutContainer:n(586).default,VCheckbox:n(576).default,VLinkBlank:n(37).default,VButton:n(58).default})},664:function(t,e,n){"use strict";n.r(e);var r=n(92),o={components:{VButton:n(58).default},mixins:[r.a],props:{disabled:{type:Boolean,required:!0}},computed:{showButton:function(){var t;try{t=window.ApplePaySession&&window.ApplePaySession.canMakePayments()}catch(e){t=!1,this.sendInfo(e)}return t}},methods:{onApplePaymentButtonClicked:function(){var t=this,e=new ApplePaySession(1,{countryCode:"RU",currencyCode:"RUB",supportedNetworks:["visa","masterCard"],merchantCapabilities:["supports3DS"],total:{label:"Your Merchant Name",amount:"0.01"}});e.onvalidatemerchant=function(n){var data={validationUrl:n.validationURL};t.$axios.post("/ApplePay/StartSession",data).then((function(t){e.completeMerchantValidation(t.Model)})).catch((function(e){console.log(e),t.sendInfo(e.message)}))},e.onpaymentauthorized=function(n){var data={cryptogram:JSON.stringify(n.payment.token)};t.$axios.post("/ApplePay/Pay",data).then((function(t){var n;n=t.Success?ApplePaySession.STATUS_SUCCESS:ApplePaySession.STATUS_FAILURE,e.completePayment(n)})).catch((function(e){console.log(e),t.sendInfo(e.message)}))},e.begin()}}},l=(n(729),n(4)),component=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return this.showButton?e("v-button",{staticClass:"button-apple",attrs:{theme:"pay",type:"button",disabled:this.disabled},on:{click:this.onApplePaymentButtonClicked}},[this._t("default",[this._v("Pay")])],2):this._e()}),[],!1,null,"7913e02c",null);e.default=component.exports;installComponents(component,{VButton:n(58).default})},665:function(t,e,n){"use strict";n.r(e);var r=n(92),o={components:{VButton:n(58).default},mixins:[r.a],props:{disabled:{type:Boolean,required:!0}},data:function(){return{showButton:!1,allowedPaymentMethods:["CARD","TOKENIZED_CARD"],allowedCardNetworks:["AMEX","DISCOVER","INTERAC","JCB","MASTERCARD","VISA"],tokenizationParameters:{tokenizationType:"PAYMENT_GATEWAY",parameters:{gateway:"cloudpayments",gatewayMerchantId:"pk_b9fa79f3d759c56a9b856d8ac59b1"}}}},mounted:function(){this.injectGooglePayScript()},methods:{injectGooglePayScript:function(){var t=this,e=document.createElement("script");e.setAttribute("src","https://pay.google.com/gp/p/js/pay.js"),e.setAttribute("async",!0),e.setAttribute("defer",!0),e.onload=function(){return t.onGooglePayLoaded()},document.head.appendChild(e)},getGooglePaymentsClient:function(){return new google.payments.api.PaymentsClient({environment:"PRODUCTION"})},onGooglePayLoaded:function(){var t=this;this.getGooglePaymentsClient().isReadyToPay({allowedPaymentMethods:this.allowedPaymentMethods}).then((function(e){e.result&&(t.showButton=!0)})).catch((function(e){console.log(e),t.sendInfo(e.message)}))},getGooglePaymentDataConfiguration:function(){return{merchantId:"04349806409183181471",paymentMethodTokenizationParameters:this.tokenizationParameters,allowedPaymentMethods:this.allowedPaymentMethods,cardRequirements:{allowedCardNetworks:this.allowedCardNetworks}}},getGoogleTransactionInfo:function(){return{currencyCode:"RUB",totalPriceStatus:"FINAL",totalPrice:"10.00"}},onGooglePaymentButtonClicked:function(){var t=this,e=this.getGooglePaymentDataConfiguration();e.transactionInfo=this.getGoogleTransactionInfo(),this.getGooglePaymentsClient().loadPaymentData(e).then((function(e){t.processPayment(e)})).catch((function(e){console.log(e),t.sendInfo(e.message)}))},processPayment:function(t){var e=this,data={cryptogram:JSON.stringify(t.paymentMethodToken.token)};console.log("cryptogram",data.cryptogram),this.$axios.post("/GooglePay/Pay",data).then((function(t){t.Success?e.sendInfo("оплата успешно завершена"):t.Model.PaReq?e.sendInfo("требуется 3-d secure"):e.sendInfo("оплата отклонена")})).catch((function(t){console.log(t),e.sendInfo(t.message)}))}}},l=(n(730),n(4)),component=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return this.showButton?e("v-button",{staticClass:"button-google",attrs:{theme:"pay",type:"button",disabled:this.disabled},on:{click:this.onGooglePaymentButtonClicked}},[this._t("default",[this._v("Pay")])],2):this._e()}),[],!1,null,"c082fc4e",null);e.default=component.exports;installComponents(component,{VButton:n(58).default})},666:function(t,e,n){"use strict";n.r(e);n(18);var r={props:{rules:{type:String,required:!0},mode:{type:String,default:"aggressive",validator:function(t){return["aggressive","passive","lazy","eager"].includes(t)}},value:{type:String,default:""},id:{type:String,required:!0},type:{type:String,default:"text",validator:function(t){return["text","tel","select","email"].includes(t)}},title:{type:String,required:!0,validator:function(t){return["Month","Year"].includes(t)}},cloudpaymentsData:{type:String,default:null,validator:function(t){return["cardNumber","expDateMonth","expDateYear","cvv","name"].includes(t)}}},data:function(){return{content:this.value,minCardYear:(new Date).getFullYear()}},computed:{minCardMonth:function(){return this.content===this.minCardYear?(new Date).getMonth()+1:1},maxMonth:function(){return"Month"===this.title?12:0},maxYear:function(){return"Year"===this.title?12:0}},watch:{cardYear:function(){this.content<this.minCardMonth&&(this.content="")}},methods:{handleChange:function(){this.$emit("change",{value:this.content,event:event})},generateMonthValue:function(t){return t<10?"0".concat(t):t}}},o=(n(734),n(4)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ValidationProvider",{staticClass:"select",attrs:{name:t.title,rules:t.rules},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[n("select",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"select__field",attrs:{id:t.id,title:t.title,"data-card-field":"","data-cp":t.cloudpaymentsData},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.content=e.target.multiple?n:n[0]},t.handleChange]}},[n("option",{attrs:{value:"",disabled:"",selected:""}},[t._v(t._s(t.title))]),t._v(" "),t._l(t.maxMonth,(function(e){return n("option",{key:e,attrs:{disabled:e<t.minCardMonth},domProps:{value:e<10?"0"+e:e}},[t._v("\n            "+t._s(t.generateMonthValue(e))+"\n        ")])})),t._v(" "),t._l(t.maxYear,(function(e,r){return n("option",{key:e,domProps:{value:r+t.minCardYear}},[t._v("\n            "+t._s(r+t.minCardYear)+"\n        ")])}))],2),t._v(" "),r[0]?n("span",{staticClass:"select__error"}):t._e()]}}])})}),[],!1,null,"6c02e2ce",null);e.default=component.exports},729:function(t,e,n){"use strict";n(626)},730:function(t,e,n){"use strict";n(627)},731:function(t,e,n){"use strict";n(628)},732:function(t,e,n){"use strict";n(629)},733:function(t,e,n){"use strict";n(630)},734:function(t,e,n){"use strict";n(631)},735:function(t,e,n){"use strict";n(632)},736:function(t,e,n){"use strict";n(633)},737:function(t,e,n){"use strict";n(634)},746:function(t,e,n){"use strict";n.r(e);var r={name:"Index",components:{Checkout:n(648).default},head:{script:[{src:"https://widget.cloudpayments.ru/bundles/checkout"}]}},o=(n(737),n(4)),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("main",{staticClass:"main"},[e("v-screen",{staticClass:"main__screen",attrs:{parallax:"benefits",active:!0}},[e("v-container",{staticClass:"main__container"},[e("Checkout",{staticClass:"main__content"})],1)],1)],1)}),[],!1,null,"2601a0da",null);e.default=component.exports;installComponents(component,{Checkout:n(648).default,VContainer:n(111).default,VScreen:n(555).default})}}]);