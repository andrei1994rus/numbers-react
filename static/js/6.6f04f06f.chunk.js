(this["webpackJsonpnumbers-react"]=this["webpackJsonpnumbers-react"]||[]).push([[6],{130:function(e,t,n){"use strict";n.r(t);var a=n(93),r=n(0),s=n.n(r),c=n(102),i=n(129),o=n(1),u=n(2),d=n(4),l=n.n(d),b=n(6),m=n(47),j=s.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.variant,r=e.size,c=e.active,i=e.className,d=e.block,j=e.type,h=e.as,p=Object(u.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),x=Object(b.a)(n,"btn"),O=l()(i,x,c&&"active",a&&x+"-"+a,d&&x+"-block",r&&x+"-"+r);if(p.href)return s.a.createElement(m.a,Object(o.a)({},p,{as:h,ref:t,className:l()(O,p.disabled&&"disabled")}));t&&(p.ref=t),j?p.type=j:h||(p.type="button");var v=h||"button";return s.a.createElement(v,Object(o.a)({},p,{className:O}))}));j.displayName="Button",j.defaultProps={variant:"primary",active:!1,disabled:!1};var h=j,p=n(48),x=n(46),O=n(91),v=n(42),g=n(89),f=n(128),_=n(126),y=n(107),w=n(99),k=n.n(w),N=n(92),z=n(37);var C=n(3),S=function(e){var t=Object(r.useState)(!1),n=Object(g.a)(t,2),s=n[0],c=n[1],i=Object(p.c)((function(e){return e.array_redux.array_random})),o=Object(p.b)();Object(r.useEffect)((function(){var e;i&&(i.length>0&&((e=console).log.apply(e,["array from Redux:"].concat(Object(a.a)(i))),c(!0)))}),[i]);var u=function(){c(!1),o({type:z.b})};return k()(window).on("load",(function(){console.log("$(window).on(load) (for close modal)"),u()})),s?Object(C.jsxs)(f.a,{show:s,onHide:u,size:"md",centered:!0,children:[Object(C.jsx)(f.a.Header,{closeButton:!0,children:Object(C.jsx)(N.a,{children:Object(C.jsx)(f.a.Title,{id:"title",children:Object(v.a)("h1","Result!")})})}),Object(C.jsx)(f.a.Body,{children:Object(C.jsxs)(N.a,{children:[Object(C.jsxs)(_.a,{className:"first_row",children:[Object(C.jsx)(y.a,{size:"xs",children:"#"}),Object(C.jsx)(y.a,{xs:10,children:"random number"})]}),i&&i.map((function(e,t){return Object(C.jsxs)(_.a,{className:"other_row",children:[Object(C.jsx)(y.a,{size:"xs",children:t+1}),Object(C.jsx)(y.a,{xs:10,children:e})]},t)}))]})})]}):Object(C.jsx)("div",{})},R=n(31),T=Object(R.a)(S);t.default=function(){var e=Object(c.a)(),t=e.register,n=e.handleSubmit,r=e.errors,s=e.setValue,o=(0,e.watch)("has_def_value"),u=Object(p.b)(),d=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3,n=[],a=0;a<e;a++)n.push(Math.floor(Math.random()*(t-0)));return n};return Object(C.jsxs)(x.a,{children:[Object(C.jsx)("header",{children:Object(v.a)("h1","Random.")}),Object(C.jsx)("div",{className:"div_alert",children:r.input_random_count&&Object(C.jsx)(O.a,{message:r.input_random_count.message})}),Object(C.jsx)("div",{className:"div_alert",children:r.input_random_range&&Object(C.jsx)(O.a,{message:r.input_random_range.message})}),Object(C.jsx)("div",{children:Object(C.jsx)(T,{})}),Object(C.jsxs)(i.a,{className:"form",onSubmit:n((function(e){var t;console.group("onSubmit"),console.log(e);var n;n=o?d(e.input_random_count):d(e.input_random_count,e.input_random_range),s("input_random_count",""),o||s("input_random_range",""),(t=console).log.apply(t,["array:"].concat(Object(a.a)(n))),u(function(e){return{type:z.a,payload:e}}(Array.from(n))),console.groupEnd()})),children:[Object(C.jsx)(i.a.Control,{id:"random_count",type:"text",placeholder:"input count",name:"input_random_count",ref:t({required:"Count is required",max:{value:300,message:"Max value of count is 300"},pattern:{value:/^[1-9]{1}[0-9]*$/i,message:"Count must be only number >0 without chars and mustn't start with zero"}})}),Object(C.jsx)("div",{children:Object(C.jsx)(i.a.Check,{id:"chb",name:"has_def_value",label:"Default value 3000",ref:t})}),!o&&Object(C.jsx)(i.a.Control,{id:"random_range",type:"text",placeholder:"input range",name:"input_random_range",ref:t({required:"Range is required",maxLength:{value:21,message:"Length of range value must be not >21"},pattern:{value:/^[1-9]{1}[0-9]*$/i,message:"Range must be only number >0 without chars and mustn't start with zero"}})}),Object(C.jsx)("div",{children:Object(C.jsx)(h,{id:"submit",variant:"primary",type:"submit",children:"Submit"})}),Object(C.jsx)("div",{className:"div_hint",children:Object(C.jsx)(i.a.Text,{id:"hint_count",children:"Count: input only number >0 and <300 without chars. This number must not start with zero."})}),Object(C.jsx)("div",{className:"div_hint",children:Object(C.jsx)(i.a.Text,{id:"hint_range",children:"Range: input only number >0 without chars and with length not >21. \nThis number must not start with zero."})}),Object(C.jsx)("div",{className:"div_hint",children:Object(C.jsx)(i.a.Text,{id:"hint_chb",children:"If you don't need input range, click checkbox."})}),Object(C.jsx)("div",{className:"div_hint",children:Object(C.jsx)(i.a.Text,{id:"hint_submit",children:"After input data press button or click Enter on your keyboard."})})]})]})}},91:function(e,t,n){"use strict";var a=n(25),r=n(26),s=n(28),c=n(27),i=n(0),o=n(125),u=n(3),d=function(e){Object(s.a)(n,e);var t=Object(c.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={message:void 0},r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){console.log("componentDidMount"),this.setState({message:this.props.message})}},{key:"componentWillUpdate",value:function(e,t){console.group("componentWillUpdate"),e.message!==t.message?(console.log("nextProps.message!==nextState.message"),this.setState({message:this.props.message})):e.message===t.message&&console.log("nextProps.message===nextState.message"),console.groupEnd()}},{key:"render",value:function(){return Object(u.jsx)("div",{children:Object(u.jsx)(o.a,{variant:"danger",children:this.state.message})})}}]),n}(i.Component);t.a=d},92:function(e,t,n){"use strict";var a,r=n(10),s=n(11).a.div(a||(a=Object(r.a)(["\n\t.first_row\n\t{\n\t\tcolor:white;\n\t\tbackground:black;\n\t\tfont-size:16pt;\n\t\tfont-weight:900;\n\t}\n\n\t#title\n\t{\n\t\tcolor:red;\n\t}\n\n\t.other_row\n\t{\n\t\tbackground:#0033CC;\n\t\tcolor:white;\n\n\t\t","\n\t\t{\n\t\t\tfont-size:10pt;\n\t\t}\n\t}\n\n\n"])),"@media(max-width:1000px)");t.a=s}}]);
//# sourceMappingURL=6.6f04f06f.chunk.js.map