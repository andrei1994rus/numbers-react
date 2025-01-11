(this["webpackJsonpnumbers-react"]=this["webpackJsonpnumbers-react"]||[]).push([[8],{131:function(t,e,n){"use strict";n.r(e);var a=n(13),r=n(0),s=n.n(r),o=n(93),i=n(130),c=n(5),d=n(8),l=n(10),u=n.n(l),b=n(11),m=n(95),h=s.a.forwardRef((function(t,e){var n=t.bsPrefix,a=t.variant,r=t.size,o=t.active,i=t.className,l=t.block,h=t.type,j=t.as,f=Object(d.a)(t,["bsPrefix","variant","size","active","className","block","type","as"]),p=Object(b.a)(n,"btn"),x=u()(i,p,o&&"active",a&&p+"-"+a,l&&p+"-block",r&&p+"-"+r);if(f.href)return s.a.createElement(m.a,Object(c.a)({},f,{as:j,ref:e,className:u()(x,f.disabled&&"disabled")}));e&&(f.ref=e),h?f.type=h:j||(f.type="button");var v=j||"button";return s.a.createElement(v,Object(c.a)({},f,{className:x}))}));h.displayName="Button",h.defaultProps={variant:"primary",active:!1,disabled:!1};var j=h,f=n(52),p=n(98),x=n(99),v=n(87),g=n.n(v),O=n(51),_=n(88),w=n(46),y=n(6),z=n(129),k=n(127),N=n(105),C=n(91),S=n(42);var T=n(4),E=function(){var t=Object(r.useState)(!1),e=Object(y.a)(t,2),n=e[0],s=e[1],o=Object(f.c)((function(t){return t.array_redux.array_random})),i=Object(f.b)();Object(r.useEffect)((function(){var t;o&&(o.length>0&&((t=console).log.apply(t,["array from Redux:"].concat(Object(a.a)(o))),s(!0)))}),[o]);var c=function(){s(!1),i({type:S.b})};return g()(window).on("load",(function(){console.log("$(window).on(load) (for close modal)"),c()})),n?Object(T.jsxs)(z.a,{show:n,onHide:c,size:"lg",centered:!0,children:[Object(T.jsx)(z.a.Header,{closeButton:!0,children:Object(T.jsx)(C.a,{children:Object(T.jsx)(z.a.Title,{id:"title",children:Object(w.a)("Result!")})})}),Object(T.jsx)(z.a.Body,{children:Object(T.jsxs)(C.a,{children:[Object(T.jsxs)(k.a,{className:"first_row",children:[Object(T.jsx)(N.a,{size:"xs",children:"#"}),Object(T.jsx)(N.a,{xs:9,children:"random number"})]}),o&&o.map((function(t,e){return Object(T.jsxs)(k.a,{className:"other_row",children:[Object(T.jsx)(N.a,{size:"xs",children:e+1}),Object(T.jsx)(N.a,{xs:9,children:t})]},e)}))]})})]}):Object(T.jsx)("div",{})},R=n(34),U=Object(R.a)(E);e.default=function(){var t=Object(o.a)(),e=t.register,n=t.handleSubmit,s=t.errors,c=t.setValue,d=(0,t.watch)("has_def_value"),l=Object(f.b)(),u=function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3,n=[],a=0;a<t;a++)n.push(Math.floor(Math.random()*(e-0)));return n};Object(r.useEffect)((function(){g()("#btnUp").fadeOut(0),g()(window).scroll((function(){0!==g()(window).scrollTop()?g()("#btnUp").fadeIn(0):g()("#btnUp").fadeOut(0)})),g()("#btnUp").click((function(){g()("html").animate({scrollTop:0},0)}))}),[]);return Object(T.jsxs)(O.a,{children:[Object(T.jsx)("header",{children:Object(w.a)("Random.")}),Object(T.jsx)("div",{className:"div_alert",children:s.input_random_count&&Object(T.jsx)(_.a,{message:s.input_random_count.message})}),Object(T.jsx)("div",{className:"div_alert",children:s.input_random_range&&Object(T.jsx)(_.a,{message:s.input_random_range.message})}),Object(T.jsx)("div",{children:Object(T.jsx)(U,{})}),Object(T.jsxs)(i.a,{className:"form",onSubmit:n((function(t){var e;console.group("onSubmit"),console.log(t);var n;n=d?u(t.input_random_count):u(t.input_random_count,t.input_random_range),c("input_random_count",""),d||c("input_random_range",""),(e=console).log.apply(e,["array:"].concat(Object(a.a)(n))),l(function(t){return{type:S.a,payload:t}}(Array.from(n))),console.groupEnd()})),children:[Object(T.jsx)(i.a.Control,{id:"random_count",type:"text",placeholder:"input count",name:"input_random_count",ref:e({required:"Count is required",max:{value:300,message:"Max value of count is 300"},pattern:{value:/^[1-9]{1}[0-9]*$/i,message:"Count must be only number >0 without chars and mustn't start with zero"}})}),Object(T.jsx)("div",{children:Object(T.jsx)(i.a.Check,{id:"chb",name:"has_def_value",label:"Default value 3000",ref:e})}),!d&&Object(T.jsx)(i.a.Control,{id:"random_range",type:"text",placeholder:"input range",name:"input_random_range",ref:e({required:"Range is required",maxLength:{value:21,message:"Length of range value must be not >21"},pattern:{value:/^[1-9]{1}[0-9]*$/i,message:"Range must be only number >0 without chars and mustn't start with zero"}})}),Object(T.jsx)("div",{children:Object(T.jsx)(j,{id:"submit",variant:"primary",type:"submit",children:"Submit"})}),Object(T.jsx)("div",{className:"div_hint",children:Object(T.jsx)(i.a.Text,{id:"hint_count",children:"Count: input only number >0 and not > 300 without chars. This number must not start with zero."})}),Object(T.jsx)("div",{className:"div_hint",children:Object(T.jsx)(i.a.Text,{id:"hint_range",children:"Range: input only number >0 without chars and with length not >21. \nThis number must not start with zero."})}),Object(T.jsx)("div",{className:"div_hint",children:Object(T.jsx)(i.a.Text,{id:"hint_chb",children:"If you don't need input range, click checkbox."})}),Object(T.jsx)("div",{className:"div_hint",children:Object(T.jsx)(i.a.Text,{id:"hint_submit",children:"After input data press button or click Enter on your keyboard."})}),Object(T.jsx)("button",{id:"btnUp",type:"button",children:Object(T.jsx)(p.a,{icon:x.a,size:"sm",className:"fas fa-arrow-up"})})]})]})}},88:function(t,e,n){"use strict";var a=n(12),r=n(18),s=n(19),o=n(0),i=n(126),c=n(4),d=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(t){var r;return Object(a.a)(this,n),(r=e.call(this,t)).componentDidMount=function(){console.log("componentDidMount"),r.setState({message:r.props.message})},r.componentWillUpdate=function(t,e){console.group("componentWillUpdate"),t.message!==e.message?(console.log("nextProps.message!==nextState.message"),r.setState({message:r.props.message})):t.message===e.message&&console.log("nextProps.message===nextState.message"),console.groupEnd()},r.render=function(){var t=r.state.message;return Object(c.jsx)("div",{children:Object(c.jsx)(i.a,{variant:"danger",children:t})})},r.state={message:void 0},r}return n}(o.Component);e.a=d},91:function(t,e,n){"use strict";var a,r=n(14),s="@media(max-width:1023px)",o="@media(max-width:319px)",i=n(15).a.div(a||(a=Object(r.a)(["\n\t.first_row\n\t{\n\t\tcolor:white;\n\t\tbackground:black;\n\t\tfont-weight:900;\n\t\tfont-size:8vh;\n\t\tborder:1px solid white;\n\n\t\t","\n\t\t{\n\t\t\tfont-weight:500;\n\t\t\tfont-size:6vh;\n\t\t}\n\n\t\t","\n\t\t{\n\t\t\tfont-weight:100;\n\t\t\tfont-size:4.5vh;\n\t\t}\n\t}\n\n\t.first_row_fact\n\t{\n\t\tcolor:white;\n\t\tbackground:black;\n\t\tfont-weight:900;\n\t\tfont-size:8vh;\n\t\tborder:1px solid white;\n\n\t\t","\n\t\t{\n\t\t\tfont-weight:500;\n\t\t\tfont-size:6vh;\n\t\t}\n\n\t\t","\n\t\t{\n\t\t\tfont-weight:100;\n\t\t\tfont-size:4.5vh;\n\t\t}\n\t}\n\n\t#title\n\t{\n\t\tcolor:red;\n\t}\n\n\t.other_row\n\t{\n\t\tbackground:#0033CC;\n\t\tcolor:white;\n\t\tfont-size:3vmax;\n\t\tborder:1px solid black;\n\n\t\t","\n\t\t{\n\t\t\tfont-size:2.4vmax;\n\t\t}\n\n\t\t","\n\t\t{\n\t\t\tfont-size:4.3vw;\n\t\t}\n\t}\n\n\t.other_row_fact\n\t{\n\t\tbackground:#0033CC;\n\t\tcolor:white;\n\t\tborder:1px solid black;\n\t\tfont-size:3vmax;\n\n\t\t","\n\t\t{\n\t\t\tfont-size:3.5vw;\n\t\t}\n\n\t\t","\n\t\t{\n\t\t\tfont-size:4.2vw;\n\t\t}\n\t}\n"])),s,o,s,o,s,o,s,o);e.a=i}}]);
//# sourceMappingURL=8.1692832c.chunk.js.map