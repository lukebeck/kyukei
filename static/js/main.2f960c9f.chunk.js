(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(n){n.exports=[{question:"\u3042",answer:"a"},{question:"\u3044",answer:"i"},{question:"\u3046",answer:"u"},{question:"\u3048",answer:"e"},{question:"\u304a",answer:"o"},{question:"\u304b",answer:"ka"},{question:"\u304d",answer:"ki"},{question:"\u304f",answer:"ku"},{question:"\u3051",answer:"ke"},{question:"\u3053",answer:"ko"},{question:"\u3055",answer:"sa"},{question:"\u3057",answer:"shi"},{question:"\u3059",answer:"su"},{question:"\u305b",answer:"se"},{question:"\u305d",answer:"so"},{question:"\u305f",answer:"ta"},{question:"\u3061",answer:"chi"},{question:"\u3064",answer:"tsu"},{question:"\u3066",answer:"te"},{question:"\u3068",answer:"to"},{question:"\u306a",answer:"na"},{question:"\u306b",answer:"ni"},{question:"\u306c",answer:"nu"},{question:"\u306d",answer:"ne"},{question:"\u306e",answer:"no"},{question:"\u306f",answer:"ha"},{question:"\u3072",answer:"hi"},{question:"\u3075",answer:"fu"},{question:"\u3078",answer:"he"},{question:"\u307b",answer:"ho"},{question:"\u307e",answer:"ma"},{question:"\u307f",answer:"mi"},{question:"\u3080",answer:"mu"},{question:"\u3081",answer:"me"},{question:"\u3082",answer:"mo"},{question:"\u3084",answer:"ya"},{question:"\u3086",answer:"yu"},{question:"\u3088",answer:"yo"},{question:"\u3089",answer:"ra"},{question:"\u308a",answer:"ri"},{question:"\u308b",answer:"ru"},{question:"\u308c",answer:"re"},{question:"\u308d",answer:"ro"},{question:"\u308f",answer:"wa"},{question:"\u3092",answer:"wo"},{question:"\u3093",answer:"n"},{question:"\u304c",answer:"ga"},{question:"\u304e",answer:"gi"},{question:"\u3050",answer:"gu"},{question:"\u3052",answer:"ge"},{question:"\u3054",answer:"go"},{question:"\u3056",answer:"za"},{question:"\u3058",answer:"ji"},{question:"\u305a",answer:"zu"},{question:"\u305c",answer:"ze"},{question:"\u305e",answer:"zo"},{question:"\u3060",answer:"da"},{question:"\u3062",answer:"dji"},{question:"\u3065",answer:"dzu"},{question:"\u3067",answer:"de"},{question:"\u3069",answer:"do"},{question:"\u3070",answer:"ba"},{question:"\u3073",answer:"bi"},{question:"\u3076",answer:"bu"},{question:"\u3079",answer:"be"},{question:"\u307c",answer:"bo"},{question:"\u3071",answer:"pa"},{question:"\u3074",answer:"pi"},{question:"\u3077",answer:"pu"},{question:"\u307a",answer:"pe"},{question:"\u307d",answer:"po"}]},18:function(n,e,t){n.exports=t(30)},30:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),s=t(9),i=t.n(s),o=(t(24),t(4)),u=t(5),l=t(7),c=t(6),w=t(3),m=t(8),d=t(2),p=t(1),b=t(11),f=function(n){for(var e,t,a=n.length;a;)t=Math.floor(Math.random()*a--),e=n[a],n[a]=n[t],n[t]=e;return n};function h(){var n=Object(d.a)(["\n    background: ",";\n    color: ",";\n    font-size: 20px;\n    font-style: italic;\n    font-weight: 400;\n    border: none;\n    border-bottom: "," solid 3px;\n    padding: 10px;\n    margin: 10px;\n    width: 120px;\n    flex: none;\n    display: flex;\n    justify-content: center;\n    @media only screen and (min-width: 600px) {\n    :hover {\n        color: ",";\n        border-bottom: "," solid 3px;\n        outline: 0;\n    }\n    :visited{\n          color: black;\n    }\n    }\n"]);return h=function(){return n},n}var q=p.c.button(h(),function(n){return n.theme.bg},function(n){return n.theme.fg},function(n){return n.theme.fg},function(n){return n.theme.main},function(n){return n.theme.main});function g(){var n=Object(d.a)(["\n    height: 150px;\n    display: flex;\n    justify-content: space-evenly;\n    flex-wrap: wrap;\n"]);return g=function(){return n},n}var x=p.c.div(g()),v=function(n){function e(n){var t;return Object(o.a)(this,e),(t=Object(l.a)(this,Object(c.a)(e).call(this,n))).handleSubmit=t.handleSubmit.bind(Object(w.a)(t)),t}return Object(m.a)(e,n),Object(u.a)(e,[{key:"handleSubmit",value:function(n){this.props.onSubmit(n)}},{key:"render",value:function(){var n=this;return r.a.createElement(x,null,this.props.options.map(function(e){return r.a.createElement(q,{key:e,onClick:function(){return n.handleSubmit(e)}},e)}))}}]),e}(a.Component);function j(){var n=Object(d.a)(["\n  width: 220px;\n  text-align: left;\n  margin-top: 0;\n  font-size: 22px;\n  tr {\n      margin: 0;\n      padding: 0;\n      td {\n          margin-top: 5px;\n          padding: 5px 0;\n      }\n      .centred {\n          text-align: center;\n          text-decoration: none;\n          font-style: italic;\n      }\n  }\n"]);return j=function(){return n},n}var y=p.c.table(j()),E=function(n){function e(n){var t;return Object(o.a)(this,e),(t=Object(l.a)(this,Object(c.a)(e).call(this,n))).handleSubmit=t.handleSubmit.bind(Object(w.a)(t)),t}return Object(m.a)(e,n),Object(u.a)(e,[{key:"handleSubmit",value:function(n){this.props.onSubmit(n)}},{key:"render",value:function(){return r.a.createElement(x,null,r.a.createElement(y,null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("b",null,"Your answer:")),r.a.createElement("td",{className:"centred"},this.props.results)),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("b",null,"Correct answer:")),r.a.createElement("td",{className:"centred"},this.props.answer))),r.a.createElement(q,{onClick:this.handleSubmit},"Go again"))}}]),e}(a.Component);function O(){var n=Object(d.a)(["\n  position: absolute;\n  font-size: 60px;\n  margin: 0 30px;\n  transform: rotate(330deg);\n"]);return O=function(){return n},n}function S(){var n=Object(d.a)(["\n  background-color: ",";\n  color: ",";\n  flex: none;\n  height: 350px;\n  width: 300px;\n  margin-top: 100px;\n  padding: 30px 0;\n  border: solid 1px ",";\n  border-radius: 30px;\n  box-shadow: 3px 3px 3px rgb(30,30,30);\n  text-align: center;\n"]);return S=function(){return n},n}function k(){var n=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 10px;\n"]);return k=function(){return n},n}function z(){var n=Object(d.a)(['\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",\n    sans-serif;\n  background: ',";\n};\n\nh1 {\n  font-size: 100px;\n  margin: 3rem;\n}\n"]);return z=function(){return n},n}var C=function(n){var e=f(n).slice(0,4);return{question:e[0],answers:f(e).map(function(n){return n.answer})}},R=C(b),F={bg:"#fff",fg:"rgb(10,10,10)",main:"pink"},M=Object(p.b)(z(),function(n){return n.theme.main}),N=p.c.div(k()),B=p.c.div(S(),function(n){return n.theme.bg},function(n){return n.theme.fg},function(n){return n.theme.fg}),I=p.c.div(O()),J=function(n){function e(n){var t;return Object(o.a)(this,e),(t=Object(l.a)(this,Object(c.a)(e).call(this,n))).handleSubmit=t.handleSubmit.bind(Object(w.a)(t)),t.handleReplaySubmit=t.handleReplaySubmit.bind(Object(w.a)(t)),t.state={test:R.question,answers:R.answers,response:"",flipped:!1},t}return Object(m.a)(e,n),Object(u.a)(e,[{key:"handleSubmit",value:function(n){this.setState({answer:n,flipped:!0})}},{key:"handleReplaySubmit",value:function(n){var e=C(b);this.setState({test:e.question,answers:e.answers,response:"",flipped:!1})}},{key:"render",value:function(){var n=this.state.flipped;return r.a.createElement(N,null,r.a.createElement(p.a,{theme:F},r.a.createElement(a.Fragment,null,r.a.createElement(M,null),n?r.a.createElement(B,null,this.state.answer===this.state.test.answer&&r.a.createElement(I,null,r.a.createElement("span",{role:"img","aria-label":"white-flower"},"\ud83d\udcae")),r.a.createElement("h1",null,this.state.test.question),r.a.createElement(E,{answer:this.state.test.answer,results:this.state.answer,onSubmit:this.handleReplaySubmit})):r.a.createElement(p.a,{theme:F},r.a.createElement(B,null,r.a.createElement("h1",null,this.state.test.question),r.a.createElement(v,{options:this.state.answers,onSubmit:this.handleSubmit}))))))}}]),e}(a.Component);i.a.render(r.a.createElement(J,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.2f960c9f.chunk.js.map