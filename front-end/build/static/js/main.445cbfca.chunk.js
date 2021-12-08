(this["webpackJsonpcall-app-react"]=this["webpackJsonpcall-app-react"]||[]).push([[0],{342:function(e,n,t){},344:function(e,n,t){"use strict";t.r(n);var i,c,r,a=t(1),o=t.n(a),s=t(32),l=t.n(s),d=t(49),j=t(24),b=t(28),x=t(5),u=Object(a.createContext)({}),h=function(e){var n=e.children,t=Object(a.useState)("customer"),i=Object(b.a)(t,2),c=i[0],r=i[1];return Object(x.jsx)(u.Provider,{value:{role:c,setRole:r},children:n})},m=t(108),p=t(350),g=t(349),O=t(104),f=t.n(O),v=t(165),w=Object(a.createContext)({}),y=function(e){var n=e.children,t=Object(a.useState)(!1),i=Object(b.a)(t,2),c=i[0],r=i[1],o=Object(v.useMediaQuery)({maxWidth:991});return Object(x.jsx)(w.Provider,{value:{open:c,toggleSidebar:o?r:null},children:n})},k=t(11),C=t(43),S=t(112),I=[{title:"Profile",href:"/profile"}],P=[{name:"Qu\u1ea3n l\xfd kh\xe1ch h\xe0ng",icon:Object(x.jsx)(C.d,{})},{name:"Qu\u1ea3n l\xfd t\xe0i kho\u1ea3n",icon:Object(x.jsx)(S.a,{})}],z=[{name:"Qu\u1ea3n l\xfd t\xe0i kho\u1ea3n",icon:Object(x.jsx)(S.a,{})},{name:"Qu\u1ea3n l\xfd ng\u01b0\u1eddi d\xf9ng",icon:Object(x.jsx)(S.a,{})}],N=[{name:"Qu\u1ea3n l\xfd Admin",icon:Object(x.jsx)(C.d,{})},{name:"Qu\u1ea3n l\xfd Admin",icon:Object(x.jsx)(C.d,{})}],L=t(19),F=k.d.div(i||(i=Object(L.a)(["\n  color: ",";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 300px;\n  min-width: 80px;\n  border-right: ",";\n  padding: 15px;\n  min-height: 500px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  z-index: 1;\n\n  background-color: ",";\n\n  @media (max-width: 991px) {\n    border: none;\n  }\n\n  @media (max-width: 575px) {\n    width: 50px;\n    min-width: 60px;\n    padding: 15px 5px;\n  }\n\n  .logo {\n    margin-bottom: 20px;\n  }\n  .list {\n    flex-grow: 1;\n  }\n"])),(function(e){return e.theme.theme.logo}),(function(e){return"1px solid ".concat(e.theme.theme.border)}),(function(e){return e.theme.theme.bg.main})),T=k.d.div(c||(c=Object(L.a)(["\n  width: 200px;\n  height: 35px;\n  border-radius: 4px;\n  background-color: ",";\n  transition: 0.2s;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  cursor: pointer;\n  margin: 15px 0;\n  ","\n\n  .img {\n    font-size: 16px;\n  }\n"])),(function(e){return e.active?e.theme.theme.bg.icon:"transparent"}),(function(e){return!e.active&&Object(k.c)(r||(r=Object(L.a)(["\n      &:hover {\n        background-color: ",";\n      }\n    "])),(function(e){return e.theme.theme.bg.hover}))})),B=t(57),Q=Object(a.createContext)({}),R=function(e){var n=e.children,t=Object(a.useState)(0),i=Object(b.a)(t,2),c=i[0],r=i[1];return Object(x.jsx)(Q.Provider,{value:{indexStaff:c,setIndexStaff:r},children:n})},A=Object(a.createContext)({}),q=function(e){var n=e.children,t=Object(a.useState)(0),i=Object(b.a)(t,2),c=i[0],r=i[1];return Object(x.jsx)(A.Provider,{value:{indexCustomer:c,setIndexCustomer:r},children:n})},E=Object(a.createContext)({}),G=function(e){var n=e.children,t=Object(a.useState)(0),i=Object(b.a)(t,2),c=i[0],r=i[1];return Object(x.jsx)(E.Provider,{value:{indexAdmin:c,setIndexAdmin:r},children:n})};function H(e){var n=e.role,t=Object(a.useContext)(k.a).theme,i=Object(a.useContext)(Q),c=i.indexStaff,r=i.setIndexStaff,o=Object(a.useContext)(A),s=o.indexCustomer,l=o.setIndexCustomer,d=Object(a.useContext)(E),j=d.indexAdmin,b=d.setIndexAdmin,u=Object(a.useContext)(w).toggleSidebar;return Object(x.jsxs)(F,{children:[Object(x.jsx)("div",{className:"logo",children:Object(x.jsx)(B.b,{size:30,color:t.logo})}),Object(x.jsx)("div",{className:"list",children:"staff"===n?P.map((function(e,n){return Object(x.jsx)(m.a,{placement:"right",title:"",children:Object(x.jsxs)(T,{active:c===n,onClick:function(){r(n),u&&u(!0)},children:[Object(x.jsx)("div",{className:"img",children:e.icon}),Object(x.jsx)("span",{children:e.name})]})})})):"customer"===n?z.map((function(e,n){return Object(x.jsx)(m.a,{placement:"right",title:"",children:Object(x.jsxs)(T,{active:s===n,onClick:function(){l(n),u&&u(!0)},children:[Object(x.jsx)("div",{className:"img",children:e.icon}),Object(x.jsx)("span",{children:e.name})]})})})):N.map((function(e,n){return Object(x.jsx)(m.a,{placement:"right",title:"",children:Object(x.jsxs)(T,{active:j===n,onClick:function(){b(n),u&&u(!0)},children:[Object(x.jsx)("div",{className:"img",children:e.icon}),Object(x.jsx)("span",{children:e.name})]})})}))}),Object(x.jsx)(p.a,{placement:"topRight",overlay:M(t),trigger:["click"],children:Object(x.jsx)(f.a,{style:{cursor:"pointer",marginTop:"15px"},size:40,src:"/images/avt-placeholder.png"})})]})}var D,U,W,M=function(e){return Object(x.jsxs)(g.a,{children:[I.map((function(e,n){return Object(x.jsx)(g.a.Item,{className:"dropdown_item",onClick:null===e||void 0===e?void 0:e.callback,children:(null===e||void 0===e?void 0:e.href)?Object(x.jsx)(d.b,{to:e.href,children:e.title}):null===e||void 0===e?void 0:e.title},n)})),Object(x.jsx)(g.a.Divider,{}),Object(x.jsx)(g.a.Item,{style:{color:e.badge},className:"dropdown_item logout",children:"Log out"},I.length)]})},V=k.d.div(D||(D=Object(L.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 5;\n"]))),_=k.d.div(U||(U=Object(L.a)(["\n  display: flex;\n  flex-direction: column;\n  max-height: 100%;\n\n  .top {\n    padding: 15px;\n    display: flex;\n    align-items: center;\n    .header {\n      color: ",";\n      font-size: 20px;\n      line-height: 24px;\n      font-weight: 600;\n      margin-bottom: 0;\n      display: flex;\n      & > svg {\n        display: none;\n        @media (max-width: 991px) {\n          display: block;\n          margin-right: 4px;\n          margin-top: 4px;\n        }\n      }\n    }\n    .icons {\n      margin-left: auto;\n      display: flex;\n      margin-right: -4px;\n      margin-bottom: -4px;\n    }\n  }\n\n  .search {\n    padding: 5px 15px;\n    .ant-input-search {\n      border-radius: 4px;\n      .ant-input {\n        background-color: transparent;\n        border-color: ",";\n        color: ",";\n      }\n    }\n  }\n"])),(function(e){return e.theme.theme.text.main}),(function(e){return e.theme.theme.border}),(function(e){return e.theme.theme.text.main}));function J(){var e=Object(a.useContext)(k.a).theme,n=Object(a.useContext)(w).toggleSidebar;return Object(x.jsx)(_,{children:Object(x.jsx)("div",{className:"top",children:Object(x.jsxs)("h3",{className:"header",onClick:function(){return n&&n(!1)},children:[Object(x.jsx)(C.c,{color:e.text.main,size:16}),"Qu\u1ea3n l\xfd t\xe0i kho\u1ea3n"]})})})}var K=k.d.div(W||(W=Object(L.a)(["\n  width: calc(100% - 200px);\n  height: 100%;\n  background-color: ",";\n  transition: 0.2s;\n\n  @media (max-width: 991px) {\n    position: fixed;\n    right: ",";\n    top: 0;\n    bottom: 0;\n    height: 100%;\n    z-index: 6;\n  }\n"])),(function(e){return e.theme.theme.bg.main}),(function(e){return e.open?"0px":"-300px"}));function X(){var e=Object(a.useContext)(A).indexCustomer,n=Object(a.useContext)(w),t=n.open,i=n.toggleSidebar,c=Object(j.g)();return Object(a.useEffect)((function(){i&&i(!1)}),[c,i]),Object(x.jsxs)(x.Fragment,{children:[t&&Object(x.jsx)(V,{onClick:function(){i&&i(!1)}}),Object(x.jsx)(K,{open:t,children:0===e&&Object(x.jsx)(J,{})})]})}var Y,Z,$=Object(a.createContext)({}),ee=function(e){var n=e.children,t=Object(a.useState)(0),i=Object(b.a)(t,2),c=i[0],r=i[1];return Object(x.jsx)($.Provider,{value:{index:c,setIndex:r},children:n})},ne=k.d.div(Y||(Y=Object(L.a)(["\n  display: flex;\n  flex-direction: column;\n  max-height: 100%;\n\n  .top {\n    padding: 15px;\n    display: flex;\n    align-items: center;\n    .header {\n      color: ",";\n      font-size: 20px;\n      line-height: 24px;\n      font-weight: 600;\n      margin-bottom: 0;\n      display: flex;\n      & > svg {\n        display: none;\n        @media (max-width: 991px) {\n          display: block;\n          margin-right: 4px;\n          margin-top: 4px;\n        }\n      }\n    }\n    .icons {\n      margin-left: auto;\n      display: flex;\n      margin-right: -4px;\n      margin-bottom: -4px;\n    }\n  }\n\n  .search {\n    padding: 5px 15px;\n    .ant-input-search {\n      border-radius: 4px;\n      .ant-input {\n        background-color: transparent;\n        border-color: ",";\n        color: ",";\n      }\n    }\n  }\n"])),(function(e){return e.theme.theme.text.main}),(function(e){return e.theme.theme.border}),(function(e){return e.theme.theme.text.main}));function te(){var e=Object(a.useContext)(k.a).theme,n=Object(a.useContext)(w).toggleSidebar;Object(a.useContext)($).setIndex;return Object(x.jsx)(ne,{children:Object(x.jsx)("div",{className:"top",children:Object(x.jsxs)("h3",{className:"header",onClick:function(){return n&&n(!1)},children:[Object(x.jsx)(C.c,{color:e.text.main,size:16}),"Qu\u1ea3n l\xfd kh\xe1ch h\xe0ng"]})})})}function ie(){var e=Object(a.useContext)(k.a).theme,n=Object(a.useContext)(w).toggleSidebar;return Object(x.jsx)(ne,{children:Object(x.jsx)("div",{className:"top",children:Object(x.jsxs)("h3",{className:"header",onClick:function(){return n&&n(!1)},children:[Object(x.jsx)(C.c,{color:e.text.main,size:16}),"Qu\u1ea3n l\xfd t\xe0i kho\u1ea3n"]})})})}var ce,re=k.d.div(Z||(Z=Object(L.a)(["\n  width: calc(100% - 200px);\n  height: 100%;\n  background-color: ",";\n  transition: 0.2s;\n\n  @media (max-width: 991px) {\n    position: fixed;\n    right: ",";\n    top: 0;\n    bottom: 0;\n    height: 100%;\n    z-index: 6;\n  }\n"])),(function(e){return e.theme.theme.bg.main}),(function(e){return e.open?"0px":"-300px"}));function ae(){var e=Object(a.useContext)(Q).indexStaff,n=Object(a.useContext)(w),t=n.open,i=n.toggleSidebar,c=Object(j.g)();return Object(a.useEffect)((function(){i&&i(!1)}),[c,i]),Object(x.jsxs)(x.Fragment,{children:[t&&Object(x.jsx)(V,{onClick:function(){i&&i(!1)}}),Object(x.jsxs)(re,{open:t,children:[0===e&&Object(x.jsx)(te,{}),1===e&&Object(x.jsx)(ie,{})]})]})}var oe,se,le=k.d.div(ce||(ce=Object(L.a)(["\n  width: 100vw;\n  height: 100vh;\n  background-color: ",";\n  display: flex;\n  min-height: 500px;\n"])),(function(e){return e.theme.theme.bg.main}));function de(){var e=Object(a.useContext)(u).role;return Object(x.jsxs)(le,{children:[Object(x.jsx)(H,{role:e}),"staff"===e?Object(x.jsx)(ae,{}):"customer"===e?Object(x.jsx)(X,{}):""]})}var je,be=k.d.div(oe||(oe=Object(L.a)(['\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-image: url("/images/bg-main.jpg");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  padding: 15px;\n\n  overflow-y: auto;\n\n  .wrapper {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    background-color: rgba(255, 255, 255, 0.7);\n    padding: 40px;\n    border-radius: 8px;\n    border: 1px solid #e6e6e5;\n    @media(max-width: 767px) {\n      padding: 20px;\n    }\n  }\n']))),xe=k.d.div(se||(se=Object(L.a)(["\n  width: 45px;\n  height: 45px;\n  border-radius: 8px;\n  background-color: #1890ff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 20px;\n"]))),ue=Object(k.d)(be)(je||(je=Object(L.a)([""]))),he=t(347),me=t(348),pe=t(82),ge=t(346),Oe=t(107),fe=t.n(Oe);function ve(){return Object(x.jsx)(ue,{children:Object(x.jsxs)("div",{className:"wrapper",children:[Object(x.jsx)(xe,{children:Object(x.jsx)(B.b,{size:25,color:"white"})}),Object(x.jsx)(fe.a,{level:4,children:"Login"}),Object(x.jsxs)(he.a,{name:"basic",layout:"vertical",initialValues:{remember:!0},onFinish:function(e){console.log("Success:",e)},onFinishFailed:function(e){console.log("Failed:",e)},autoComplete:"off",children:[Object(x.jsx)(he.a.Item,{style:{marginBottom:"15px"},label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:Object(x.jsx)(me.a,{})}),Object(x.jsx)(he.a.Item,{style:{marginBottom:"15px"},label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(x.jsx)(me.a.Password,{})}),Object(x.jsx)(he.a.Item,{style:{marginBottom:"10px"},children:Object(x.jsx)(pe.a,{block:!0,type:"primary",htmlType:"submit",children:"Login"})}),Object(x.jsxs)(ge.a,{plain:!0,children:["or ",Object(x.jsx)(d.b,{to:"/signup",children:Object(x.jsx)("span",{style:{fontWeight:600},children:"Register"})})]})]})]})})}var we,ye,ke,Ce,Se=t(173);function Ie(){return Object(x.jsx)(be,{children:Object(x.jsxs)("div",{className:"wrapper",children:[Object(x.jsx)(xe,{children:Object(x.jsx)(B.b,{size:25,color:"white"})}),Object(x.jsx)(fe.a,{level:4,children:"Register"}),Object(x.jsxs)(he.a,{name:"basic",layout:"vertical",initialValues:{remember:!0},onFinish:function(e){console.log("Success:",e),Se.b.success("Login success")},onFinishFailed:function(e){console.log("Failed:",e)},autoComplete:"off",children:[Object(x.jsx)(he.a.Item,{style:{marginBottom:"15px"},label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:Object(x.jsx)(me.a,{})}),Object(x.jsx)(he.a.Item,{style:{marginBottom:"15px"},label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"},{min:6,message:"Password must be at least 6 chars"}],children:Object(x.jsx)(me.a.Password,{})}),Object(x.jsx)(he.a.Item,{label:"Confirm password",name:"confirm_password",rules:[{required:!0,message:"Please input your password!"},{min:6,message:"Password must be at least 6 chars"},function(e){var n=e.getFieldValue;return{validator:function(e,t){return t&&n("password")!==t?Promise.reject(new Error("Passwords do not match!")):Promise.resolve()}}}],children:Object(x.jsx)(me.a.Password,{})}),Object(x.jsx)(he.a.Item,{style:{marginBottom:"10px"},children:Object(x.jsx)(pe.a,{block:!0,type:"primary",htmlType:"submit",children:"Register"})}),Object(x.jsxs)(ge.a,{plain:!0,children:["or ",Object(x.jsx)(d.b,{to:"/login",children:Object(x.jsx)("span",{style:{fontWeight:600},children:"Login"})})]})]})]})})}var Pe,ze=Object(k.c)(we||(we=Object(L.a)(["\n  display: flex !important;\n  justify-content: center;\n  align-items: center;\n"]))),Ne=(Object(k.c)(ye||(ye=Object(L.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n"]))),Object(k.c)(ke||(ke=Object(L.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]))),Object(k.c)(Ce||(Ce=Object(L.a)(["\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n"]))),k.d.div(Pe||(Pe=Object(L.a)(['\n  background-image: url("/images/bg-main.jpg");\n  width: 100vw;\n  height: 100vh;\n  ',";\n  background-size: cover;\n  background-position: center;\n  overflow: hidden;\n  flex-direction: column;\n  img {\n    border-radius: 10px;\n    width: 400px;\n  }\n  & > p {\n    font-weight: 700;\n    display: flex;\n    align-items: center;\n    margin-top: 27px;\n    font-size: 30px;\n    margin-bottom: 32px;\n    color: aqua;\n    text-transform: uppercase;\n    background: #f0f8ffd6;\n    padding: 15px;\n    border-radius: 10px;\n  }\n"])),ze));function Le(){return Object(x.jsxs)(Ne,{children:[Object(x.jsx)("img",{src:"/images/bank.png",alt:"video",width:250}),Object(x.jsx)("p",{children:"Bank branch manager"}),Object(x.jsx)(d.b,{to:"/login",children:Object(x.jsx)(pe.a,{type:"primary",children:"Login"})})]})}var Fe,Te,Be=Object(a.createContext)({isLoading:!1}),Qe=function(e){var n=e.children,t=Object(a.useState)(!1),i=Object(b.a)(t,2),c=i[0],r=i[1];return Object(x.jsx)(Be.Provider,{value:{isLoading:c,toggleLoading:r},children:n})};function Re(){return Object(a.useContext)(Be).isLoading?Object(x.jsx)(qe,{children:Object(x.jsx)("span",{className:"spinner",children:Object(x.jsx)(B.a,{size:30})})}):Object(x.jsx)(x.Fragment,{})}var Ae=Object(k.e)(Fe||(Fe=Object(L.a)(["\n  from {\n    transform: rotate(0);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),qe=k.d.div(Te||(Te=Object(L.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: ",";\n  .spinner {\n    width: 30px;\n    height: 30px;\n    animation: "," linear infinite 1s;\n    svg path {\n      fill: ",";\n    }\n  }\n"])),(function(e){return e.theme.theme.bg.main}),Ae,(function(e){return e.theme.theme.logo})),Ee=Object(a.createContext)({info:null});function Ge(e){var n=e.children,t=Object(a.useState)(null),i=Object(b.a)(t,2),c=i[0],r=i[1];return Object(x.jsx)(Ee.Provider,{value:{info:c,setInfo:r},children:n})}var He,De={light:{logo:"#1890ff",green:"#20c997",bg:{main:"white",sub:"rgba(0,123,255,.05)",dropdown:"white",Call:"#eaedf2",message:{send:"#1890ff",receive:"white"},hover:"#f2f0f0",icon:"#e6e6e6"},text:{message:{send:"white",receive:"black"},input:"#495057",main:"black",sub:"#828282"},border:"#ced4da",badge:"#e91e63",icon:{inactive:"#37474f",active:"#1890ff"}},dark:{logo:"#1890ff",green:"#20c997",bg:{main:"#263238",sub:"rgba(0,123,255,.05)",dropdown:"#455a64",Call:"#263238",message:{send:"#1890ff",receive:"#4c636e"},input:"#1a2236",hover:"#4b505c",icon:"#1890ff"},text:{message:{send:"white",receive:"#d3d4d5"},input:"#495057",main:"#d3d4d5",sub:"#828282"},border:"#37474f",badge:"#e91e63",icon:{inactive:"rgba(255, 255, 255, 0.7)",active:"rgba(255, 255, 255, 0.7)"}}};!function(e){e.LIGHT="light",e.DARK="dark"}(He||(He={}));var Ue=function(e){var n=e.children,t=Object(a.useState)(null),i=Object(b.a)(t,2),c=i[0],r=i[1];return Object(a.useEffect)((function(){var e=localStorage.getItem("theme");Object.values(He).includes(e)?r(e):(r(He.LIGHT),localStorage.setItem("theme",He.LIGHT))}),[]),c?Object(x.jsx)(k.b,{theme:{theme:De[c],setTheme:function(){var e=c===He.LIGHT?He.DARK:He.LIGHT;r(e),localStorage.setItem("theme",e)},themeType:c},children:n}):Object(x.jsx)(x.Fragment,{})},We=Object(a.createContext)({}),Me=function(e){var n=e.children,t=Object(a.useState)(null),i=Object(b.a)(t,2),c=i[0],r=i[1];return Object(x.jsx)(We.Provider,{value:{messageId:c,setMessageId:r},children:n})};function Ve(e){var n=e.children;return Object(x.jsx)(Ue,{children:Object(x.jsx)(Qe,{children:Object(x.jsx)(Ge,{children:Object(x.jsx)(h,{children:Object(x.jsx)(ee,{children:Object(x.jsx)(G,{children:Object(x.jsx)(R,{children:Object(x.jsx)(q,{children:Object(x.jsx)(y,{children:Object(x.jsx)(Me,{children:n})})})})})})})})})})}t(342),t(343);var _e,Je=k.d.div(_e||(_e=Object(L.a)(["\n  width: 100vw;\n  height: 100vh;\n  background-color: ",";\n  ",";\n  flex-direction: column;\n\n  .back {\n    position: fixed;\n    top: 40px;\n    left: 40px;\n    z-index: 5;\n    cursor: pointer;\n    @media(max-width: 991px) {\n      top: 20px;\n      left: 20px;\n      width: 20px;\n      height: 20px;\n    }\n  }\n\n  .name {\n    color: ",";\n    font-size: 20px;\n    font-weight: 600;\n    margin-top: 10px;\n    margin-bottom: 10px;\n  }\n  .avt {\n    cursor: pointer;\n    position: relative;\n    .icon {\n      position: absolute;\n      bottom: 0;\n      right: 0;\n    }\n  }\n"])),(function(e){return e.theme.theme.bg.main}),ze,(function(e){return e.theme.theme.text.main}));function Ke(){var e=Object(a.useContext)(k.a).theme,n=Object(j.f)(),t=Object(a.useState)(null),i=Object(b.a)(t,2),c=i[0],r=i[1];return Object(x.jsxs)(Je,{children:[Object(x.jsx)(C.a,{color:e.icon.inactive,className:"back",onClick:function(){return n.goBack()},size:30}),Object(x.jsxs)("label",{className:"avt",children:[Object(x.jsx)(f.a,{src:c||"/images/avt-placeholder.png",size:80}),Object(x.jsx)(C.b,{color:e.icon.inactive,className:"icon",size:20}),Object(x.jsx)("input",{type:"file",onChange:function(e){console.log(e.target.files);var n=URL.createObjectURL(e.target.files[0]);r(n)},accept:"image/png, image/jpeg",name:"avt",style:{display:"none"}})]}),Object(x.jsx)("div",{className:"name",children:"@sonht"}),Object(x.jsx)(pe.a,{style:{minWidth:"100px"},type:"primary",children:"Save"})]})}function Xe(){return Object(x.jsxs)(Ve,{children:[Object(x.jsx)(d.a,{children:Object(x.jsxs)(j.c,{children:[Object(x.jsx)(j.a,{path:"/",exact:!0,children:Object(x.jsx)(Le,{})}),Object(x.jsx)(j.a,{path:"/bank",exact:!0,children:Object(x.jsx)(de,{})}),Object(x.jsx)(j.a,{path:"/signup",exact:!0,children:Object(x.jsx)(Ie,{})}),Object(x.jsx)(j.a,{path:"/login",exact:!0,children:Object(x.jsx)(ve,{})}),Object(x.jsx)(j.a,{path:"/profile",exact:!0,children:Object(x.jsx)(Ke,{})})]})}),Object(x.jsx)(Re,{})]})}var Ye=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,351)).then((function(n){var t=n.getCLS,i=n.getFID,c=n.getFCP,r=n.getLCP,a=n.getTTFB;t(e),i(e),c(e),r(e),a(e)}))};l.a.render(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsx)(Xe,{})}),document.getElementById("root")),Ye()}},[[344,1,2]]]);
//# sourceMappingURL=main.445cbfca.chunk.js.map