(this["webpackJsonplena-quiz"]=this["webpackJsonplena-quiz"]||[]).push([[0],[,,,,,function(e,t,n){e.exports={finished:"Finished_finished__2lnrr",i:"Finished_i__2qS5B",success:"Finished_success__UyMgx",error:"Finished_error__1Wc4t"}},,function(e,t,n){e.exports={quize:"Quize_quize__8iKXR",text:"Quize_text__2JI_1",active:"Quize_active__VpRhn"}},,,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(0),s=n.n(i),a=n(9),r=n.n(a),u=(n(15),n(1)),c=n(2),l=n(4),o=n(3),d=(n(16),function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return s.a.createElement("div",{className:"layout"},s.a.createElement("main",{className:"LayoutMain"},this.props.children))}}]),n}(s.a.Component)),m=n(6),h=n(7),w=n.n(h),x=(n(17),n(18),n(19),function(e){var t=["AnswerItem","answeritem"];return e.state&&t.push(e.state),s.a.createElement("li",{className:t.join(" "),onClick:function(){return e.onAnswerClick(e.answer.id)}},e.answer.text)}),f=function(e){return s.a.createElement("ul",{className:"answerslist"},e.answers.map((function(t,n){return s.a.createElement(x,{key:n,answer:t,onAnswerClick:e.onAnswerClick,state:e.state?e.state[t.id]:null})})))},v=function(e){return s.a.createElement("div",{className:"activequize"},s.a.createElement("p",{className:"question"},s.a.createElement("span",null,s.a.createElement("strong",null,e.answerNumber,"."),"\xa0 ",e.question),s.a.createElement("small",null,e.answerNumber," \u0438\u0437 ",e.quizLength)),s.a.createElement(f,{state:e.state,answers:e.answers,onAnswerClick:e.onAnswerClick}))},q=n(5),E=n.n(q),p=function(e){var t=Object.keys(e.results).reduce((function(t,n){return"success"===e.results[n]&&t++,t}),0);return s.a.createElement("div",{className:E.a.finished},s.a.createElement("ul",null,e.quiz.map((function(t,n){var i=["fa","error"===e.results[t.id]?"fa-times":"fa-check",E.a[e.results[t.id]]];return s.a.createElement("li",{key:n},s.a.createElement("strong",null,n+1),". \xa0",t.question," \xa0",s.a.createElement("i",{className:i.join(" ")}))}))),s.a.createElement("p",null,"\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e ",t," \u0438\u0437 ",e.quiz.length),s.a.createElement("div",null,s.a.createElement("button",{className:E.a.fini},"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c"),s.a.createElement("button",{className:E.a.fini},"\u041f\u0440\u043e\u0439\u0442\u0438 \u0435\u0449\u0451 \u0440\u0430\u0437")))},b=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(u.a)(this,n);for(var i=arguments.length,s=new Array(i),a=0;a<i;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={results:{},isFinished:!1,activeQuestion:0,answerState:null,quiz:[{question:"\u041a\u0430\u043a\u043e\u0433\u043e \u0446\u0432\u0435\u0442\u0430 \u043d\u0435\u0431\u043e?",rightAnswerId:2,id:0,answers:[{text:"\u0427\u0435\u0440\u043d\u044b\u0439",id:1},{text:"\u0421\u0438\u043d\u0438\u0439",id:2},{text:"\u041a\u0440\u0430\u0441\u043d\u044b\u0439",id:3},{text:"\u0417\u0435\u043b\u0435\u043d\u044b\u0439",id:4}]},{question:"\u0412 \u043a\u0430\u043a\u043e\u043c \u0433\u043e\u0434\u0443 \u043e\u0441\u043d\u043e\u0432\u0430\u043b\u0438 \u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433?",rightAnswerId:3,id:1,answers:[{text:"1700",id:1},{text:"1702",id:2},{text:"1703",id:3},{text:"1803",id:4}]},{question:"\u041a\u043e\u0433\u0434\u0430 \u0432\u0441\u0451 \u043d\u0430\u0447\u0430\u043b\u043e\u0441\u044c?",rightAnswerId:1,id:2,answers:[{text:"2017",id:1},{text:"2020",id:2},{text:"2016",id:3},{text:"2015",id:4}]},{question:"\u041a\u0430\u043a \u043c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442?",rightAnswerId:4,id:3,answers:[{text:"\u0410\u043b\u0451\u043d\u0430",id:1},{text:"\u041c\u0438\u0448\u0430",id:2},{text:"\u041a\u043b\u0430\u0432\u0430",id:3},{text:"\u0428\u0430\u0440\u0438\u043a",id:4}]},{question:"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 xPON?",rightAnswerId:2,id:4,answers:[{text:"Fiber to the Building",id:1},{text:"Passive optical network",id:2},{text:"\u0430\u043a\u0442\u0438\u0432\u043d\u0430\u044f \u043e\u043f\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0435\u0442\u044c",id:3},{text:"\u043c\u0435\u0441\u0442\u043d\u0430\u044f \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u0430\u044f \u0441\u0435\u0442\u044c",id:4}]},{question:"\u0414\u0438\u0430\u043f\u0430\u0437\u043e\u043d \u043f\u043e\u043a\u0440\u044b\u0442\u0438\u044f \u0441\u0435\u0442\u0438 xPON ?",rightAnswerId:3,id:5,answers:[{text:"100 \u043a\u043c",id:1},{text:"5 \u043a\u043c",id:2},{text:"\u0434\u043e 20 \u043a\u043c",id:3},{text:"\u043e\u0442 20 \u0434\u043e 50 \u043a\u043c",id:4}]},{question:"\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0430\u0431\u043e\u043d\u0435\u043d\u0442\u043e\u0432 \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043d\u0430 \u043e\u0434\u0438\u043d \u043f\u043e\u0440\u0442 OLT ?",rightAnswerId:1,id:6,answers:[{text:"64",id:1},{text:"48",id:2},{text:"16",id:3},{text:"4",id:4}]},{question:"\u041a\u0430\u043a\u043e\u0435 \u0437\u0430\u0442\u0443\u0445\u0430\u043d\u0438\u0435 \u0432\u043d\u043e\u0441\u0438\u0442 \u0441\u043f\u043b\u0438\u0442\u0442\u0435\u0440 1:4 ?",rightAnswerId:4,id:7,answers:[{text:"2dB \u043a\u043c",id:1},{text:"7Mb",id:2},{text:"20 dB",id:3},{text:"7,4 dB",id:4}]},{question:"\u0427\u0442\u043e \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442 \u043c\u0430\u0440\u043a\u0438\u0440\u043e\u0432\u043a\u0430 \u041f\u0430\u0442\u0447-\u043a\u043e\u0440\u0434 \u043e\u043f\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 SC/UPC \u2013 SC/UPC Simplex 5\u043c?",rightAnswerId:2,id:8,answers:[{text:"\u0427\u0442\u043e \u0443 \u043d\u0435\u0433\u043e \u0432 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0438 \u0435\u0441\u0442\u044c \u0447\u0435\u0442\u044b\u0440\u0435 \u0431\u0443\u043a\u0432\u044b",id:1},{text:"\u041f\u0430\u0447\u043a\u043e\u0440\u0434, \u0441\u043e\u0441\u0442\u043e\u044f\u0449\u0438\u0439 \u0438\u0437 \u043e\u0434\u043d\u043e\u0439 \u0436\u0438\u043b\u044b \u043e\u043f\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0438\u043b\u0438 \u043f\u043b\u0430\u0441\u0442\u0438\u043a\u043e\u0432\u043e\u0433\u043e \u0432\u043e\u043b\u043e\u043a\u043d\u0430 \u0438 \u043d\u0430\u0440\u0443\u0436\u043d\u043e\u0439 \u043e\u0431\u043e\u043b\u043e\u0447\u043a\u0438.\u0422\u0438\u043f \u043a\u043e\u043d\u043d\u0435\u043a\u0442\u043e\u0440\u0430- SC, \u0442\u0438\u043f \u043f\u043e\u043b\u0438\u0440\u043e\u0432\u043a\u0438- UPC, \u0434\u043b\u0438\u043d\u0430 5\u043c",id:2},{text:"\u0447\u0442\u043e \u044d\u0442\u043e \u0434\u0435\u043b\u0438\u0442\u0435\u043b\u044c \u043e\u043f\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043f\u043e\u0442\u043e\u043a\u0430",id:3},{text:"\u0447\u0442\u043e \u0440\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u043e\u0442 \u043c\u043e\u0434\u0435\u043c\u0430 \u0434\u043e \u041f\u041a \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c 5\u043c",id:4}]}]},e.onAnswerClickHandler=function(t){if(e.state.answerState){var n=Object.keys(e.state.answerState)[0];if("success"===e.state.answerState[n])return}var i=e.state.quiz[e.state.activeQuestion],s=e.state.results;i.rightAnswerId===t?(s[e.state.activeQuestion]||(s[e.state.activeQuestion]="success"),e.setState({answerState:Object(m.a)({},t,"success"),results:s}),setTimeout((function(){e.isQuizFinished()?e.setState({isFinished:!0}):e.setState({activeQuestion:e.state.activeQuestion+1,answerState:null})}),1e3)):(s[e.state.activeQuestion]="error",e.setState({answerState:Object(m.a)({},t,"error"),results:s}),setTimeout((function(){e.setState({answerState:null})}),1e3))},e}return Object(c.a)(n,[{key:"isQuizFinished",value:function(){return this.state.activeQuestion+1===this.state.quiz.length}},{key:"render",value:function(){return s.a.createElement("div",{className:w.a.quize+" "+w.a.error},s.a.createElement("div",{className:"active"},s.a.createElement("h1",{className:"text"},"\u041e\u0442\u0432\u0435\u0442\u044c\u0442\u0435 \u043d\u0430 \u0432\u0441\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b \u0442\u0435\u0441\u0442\u0430 \u0438 \u0441\u0442\u0430\u043d\u044c\u0442\u0435 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u043e\u043c"),this.state.isFinished?s.a.createElement(p,{results:this.state.results,quiz:this.state.quiz}):s.a.createElement(v,{question:this.state.quiz[this.state.activeQuestion].question,answers:this.state.quiz[this.state.activeQuestion].answers,onAnswerClick:this.onAnswerClickHandler,quizLength:this.state.quiz.length,answerNumber:this.state.activeQuestion+1,state:this.state.answerState})))}}]),n}(s.a.Component),g=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return s.a.createElement(d,null,s.a.createElement(b,null))}}]),n}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.c7be0227.chunk.js.map