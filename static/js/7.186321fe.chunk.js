(this["webpackJsonpnumbers-react"]=this["webpackJsonpnumbers-react"]||[]).push([[7],{117:function(e,t,a){"use strict";a.r(t);var o=a(78),n=a(94),s=a(0),r=a(122),c=a(36),i=a(80),l=a(41),u=a(26),g=a(2),m=Object(s.lazy)((function(){return Promise.all([a.e(1),a.e(8)]).then(a.bind(null,106))})),d=Object(u.a)(m);t.default=function(){var e=function e(t){return 1===t?1:t*e(t-1)},t=Object(n.a)(),a=t.register,u=t.handleSubmit,m=t.errors,f=t.setValue,p=Object(s.useState)(!1),b=Object(o.a)(p,2),h=b[0],j=b[1],O=Object(s.useMemo)((function(){return console.group("memoShowModal=useMemo"),!h&&localStorage.getItem("array_factorial")?(console.log("isLoading:"+h),console.log("localStorage.getItem(array_factorial):"+localStorage.getItem("array_factorial")),console.groupEnd(),!0):(console.log("localStorage.getItem(array_factorial):"+localStorage.getItem("array_factorial")),console.log("isLoading:"+h),console.groupEnd(),!1)}),[h]);return Object(g.jsxs)(l.a,{children:[Object(g.jsx)("header",{children:Object(c.a)("h1","Find Factorial.")}),m.factorial&&Object(g.jsx)("div",{className:"div_alert",children:Object(g.jsx)(i.a,{message:m.factorial.message})}),Object(g.jsx)("div",{children:O&&Object(g.jsx)(d,{})}),Object(g.jsxs)(r.a,{className:"form",onSubmit:u((function(t){console.group("onSubmit"),j(!0),console.log("isLoading:".concat(h)),console.log(t),function(t){var a;console.group("find_fact");for(var o=[],n=1;n<=t;n++){var s={f:n,num:e(n)};o.push(s)}(a=console).log.apply(a,["array:"].concat(o)),localStorage.setItem("array_factorial",JSON.stringify(o)),console.groupEnd()}(t.factorial),f("factorial",""),j(!1),console.log("isLoading:".concat(h)),console.groupEnd()})),children:[Object(g.jsx)(r.a.Control,{id:"factorial_count",type:"text",placeholder:"input number to find factorial",name:"factorial",ref:a({required:"Input is required",max:{value:170,message:"Max value must be >170 because that factorial of >170 is infinity"},pattern:{value:/^[1-9]{1}[0-9]*$/i,message:"Input only number >0 without chars and mustn't start with zero"}})}),Object(g.jsx)("div",{className:"div_hint",children:Object(g.jsx)(r.a.Text,{id:"hint_fact",children:"Input only number >0 and <171 without chars. This number must not start with zero. \nAfter input press Enter on your keyboard."})})]})]})}},80:function(e,t,a){"use strict";var o=a(22),n=a(23),s=a(25),r=a(24),c=a(0),i=a(118),l=a(2),u=function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={message:void 0},n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){console.log("componentDidMount"),this.setState({message:this.props.message})}},{key:"componentWillUpdate",value:function(e,t){console.group("componentWillUpdate"),e.message!==t.message?(console.log("nextProps.message!==nextState.message"),this.setState({message:this.props.message})):e.message===t.message&&console.log("nextProps.message===nextState.message"),console.groupEnd()}},{key:"render",value:function(){return Object(l.jsx)("div",{children:Object(l.jsx)(i.a,{variant:"danger",children:this.state.message})})}}]),a}(c.Component);t.a=u}}]);
//# sourceMappingURL=7.186321fe.chunk.js.map