(this["webpackJsonprevving-customer"]=this["webpackJsonprevving-customer"]||[]).push([[2],{211:function(e,t,a){"use strict";var n=a(4),o=a(37),i=a(9),r=a(2),c=(a(12),a(14)),l=a(140),s=a(186),d=a(23),p=a(654),u=r.forwardRef((function(e,t){var a=e.autoFocus,d=e.checked,u=e.checkedIcon,b=e.classes,m=e.className,v=e.defaultChecked,f=e.disabled,h=e.icon,g=e.id,x=e.inputProps,O=e.inputRef,y=e.name,j=e.onBlur,E=e.onChange,k=e.onFocus,C=e.readOnly,S=e.required,w=e.tabIndex,N=e.type,B=e.value,I=Object(i.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),z=Object(l.a)({controlled:d,default:Boolean(v),name:"SwitchBase",state:"checked"}),R=Object(o.a)(z,2),P=R[0],M=R[1],W=Object(s.a)(),T=f;W&&"undefined"===typeof T&&(T=W.disabled);var D="checkbox"===N||"radio"===N;return r.createElement(p.a,Object(n.a)({component:"span",className:Object(c.a)(b.root,m,P&&b.checked,T&&b.disabled),disabled:T,tabIndex:null,role:void 0,onFocus:function(e){k&&k(e),W&&W.onFocus&&W.onFocus(e)},onBlur:function(e){j&&j(e),W&&W.onBlur&&W.onBlur(e)},ref:t},I),r.createElement("input",Object(n.a)({autoFocus:a,checked:d,defaultChecked:v,className:b.input,disabled:T,id:D&&g,name:y,onChange:function(e){var t=e.target.checked;M(t),E&&E(e,t)},readOnly:C,ref:O,required:S,tabIndex:w,type:N,value:B},x)),P?u:h)}));t.a=Object(d.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(u)},652:function(e,t,a){"use strict";var n=a(4),o=a(9),i=a(2),r=(a(12),a(14)),c=a(23),l=a(684),s=a(156),d=a(30),p=a(240),u=a(16),b="undefined"===typeof window?i.useEffect:i.useLayoutEffect,m=i.forwardRef((function(e,t){var a=e.alignItems,c=void 0===a?"center":a,m=e.autoFocus,v=void 0!==m&&m,f=e.button,h=void 0!==f&&f,g=e.children,x=e.classes,O=e.className,y=e.component,j=e.ContainerComponent,E=void 0===j?"li":j,k=e.ContainerProps,C=(k=void 0===k?{}:k).className,S=Object(o.a)(k,["className"]),w=e.dense,N=void 0!==w&&w,B=e.disabled,I=void 0!==B&&B,z=e.disableGutters,R=void 0!==z&&z,P=e.divider,M=void 0!==P&&P,W=e.focusVisibleClassName,T=e.selected,D=void 0!==T&&T,F=Object(o.a)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),$=i.useContext(p.a),L={dense:N||$.dense||!1,alignItems:c},A=i.useRef(null);b((function(){v&&A.current&&A.current.focus()}),[v]);var H=i.Children.toArray(g),V=H.length&&Object(s.a)(H[H.length-1],["ListItemSecondaryAction"]),K=i.useCallback((function(e){A.current=u.findDOMNode(e)}),[]),G=Object(d.a)(K,t),Y=Object(n.a)({className:Object(r.a)(x.root,O,L.dense&&x.dense,!R&&x.gutters,M&&x.divider,I&&x.disabled,h&&x.button,"center"!==c&&x.alignItemsFlexStart,V&&x.secondaryAction,D&&x.selected),disabled:I},F),q=y||"li";return h&&(Y.component=y||"div",Y.focusVisibleClassName=Object(r.a)(x.focusVisible,W),q=l.a),V?(q=Y.component||y?q:"div","li"===E&&("li"===q?q="div":"li"===Y.component&&(Y.component="div")),i.createElement(p.a.Provider,{value:L},i.createElement(E,Object(n.a)({className:Object(r.a)(x.container,C),ref:G},S),i.createElement(q,Y,H),H.pop()))):i.createElement(p.a.Provider,{value:L},i.createElement(q,Object(n.a)({ref:G},Y),H))}));t.a=Object(c.a)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(m)},654:function(e,t,a){"use strict";var n=a(4),o=a(9),i=a(2),r=(a(12),a(14)),c=a(23),l=a(34),s=a(684),d=a(26),p=i.forwardRef((function(e,t){var a=e.edge,c=void 0!==a&&a,l=e.children,p=e.classes,u=e.className,b=e.color,m=void 0===b?"default":b,v=e.disabled,f=void 0!==v&&v,h=e.disableFocusRipple,g=void 0!==h&&h,x=e.size,O=void 0===x?"medium":x,y=Object(o.a)(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return i.createElement(s.a,Object(n.a)({className:Object(r.a)(p.root,u,"default"!==m&&p["color".concat(Object(d.a)(m))],f&&p.disabled,"small"===O&&p["size".concat(Object(d.a)(O))],{start:p.edgeStart,end:p.edgeEnd}[c]),centerRipple:!0,focusRipple:!g,disabled:f,ref:t},y),i.createElement("span",{className:p.label},l))}));t.a=Object(c.a)((function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:Object(l.c)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(l.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(l.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}}),{name:"MuiIconButton"})(p)},658:function(e,t,a){"use strict";var n=a(9),o=a(21),i=a(4),r=a(2),c=(a(12),a(14)),l=a(23),s=a(652),d=r.forwardRef((function(e,t){var a,o=e.classes,l=e.className,d=e.component,p=void 0===d?"li":d,u=e.disableGutters,b=void 0!==u&&u,m=e.ListItemClasses,v=e.role,f=void 0===v?"menuitem":v,h=e.selected,g=e.tabIndex,x=Object(n.a)(e,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);return e.disabled||(a=void 0!==g?g:-1),r.createElement(s.a,Object(i.a)({button:!0,role:f,tabIndex:a,component:p,selected:h,disableGutters:b,classes:Object(i.a)({dense:o.dense},m),className:Object(c.a)(o.root,l,h&&o.selected,!b&&o.gutters),ref:t},x))}));t.a=Object(l.a)((function(e){return{root:Object(i.a)({},e.typography.body1,Object(o.a)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:Object(i.a)({},e.typography.body2,{minHeight:"auto"})}}),{name:"MuiMenuItem"})(d)},659:function(e,t,a){"use strict";var n=a(4),o=a(9),i=a(2),r=(a(12),a(14)),c=a(23),l=a(125),s=i.forwardRef((function(e,t){var a=e.children,c=e.classes,s=e.className,d=e.disableTypography,p=void 0!==d&&d,u=Object(o.a)(e,["children","classes","className","disableTypography"]);return i.createElement("div",Object(n.a)({className:Object(r.a)(c.root,s),ref:t},u),p?a:i.createElement(l.a,{component:"h2",variant:"h6"},a))}));t.a=Object(c.a)({root:{margin:0,padding:"16px 24px",flex:"0 0 auto"}},{name:"MuiDialogTitle"})(s)},660:function(e,t,a){"use strict";var n=a(4),o=a(9),i=a(2),r=(a(12),a(14)),c=a(23),l=i.forwardRef((function(e,t){var a=e.classes,c=e.className,l=e.dividers,s=void 0!==l&&l,d=Object(o.a)(e,["classes","className","dividers"]);return i.createElement("div",Object(n.a)({className:Object(r.a)(a.root,c,s&&a.dividers),ref:t},d))}));t.a=Object(c.a)((function(e){return{root:{flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"8px 24px","&:first-child":{paddingTop:20}},dividers:{padding:"16px 24px",borderTop:"1px solid ".concat(e.palette.divider),borderBottom:"1px solid ".concat(e.palette.divider)}}}),{name:"MuiDialogContent"})(l)},661:function(e,t,a){"use strict";var n=a(4),o=a(2),i=(a(12),a(23)),r=a(125),c=o.forwardRef((function(e,t){return o.createElement(r.a,Object(n.a)({component:"p",variant:"body1",color:"textSecondary",ref:t},e))}));t.a=Object(i.a)({root:{marginBottom:12}},{name:"MuiDialogContentText"})(c)},662:function(e,t,a){"use strict";var n=a(4),o=a(9),i=a(2),r=(a(12),a(14)),c=a(125),l=a(23),s=a(209),d=i.forwardRef((function(e,t){var a=e.children,l=e.classes,d=e.className,p=e.component,u=void 0===p?"div":p,b=e.disablePointerEvents,m=void 0!==b&&b,v=e.disableTypography,f=void 0!==v&&v,h=e.position,g=e.variant,x=Object(o.a)(e,["children","classes","className","component","disablePointerEvents","disableTypography","position","variant"]),O=Object(s.b)()||{},y=g;return g&&O.variant,O&&!y&&(y=O.variant),i.createElement(s.a.Provider,{value:null},i.createElement(u,Object(n.a)({className:Object(r.a)(l.root,d,m&&l.disablePointerEvents,O.hiddenLabel&&l.hiddenLabel,"filled"===y&&l.filled,{start:l.positionStart,end:l.positionEnd}[h],"dense"===O.margin&&l.marginDense),ref:t},x),"string"!==typeof a||f?a:i.createElement(c.a,{color:"textSecondary"},a)))}));t.a=Object(l.a)({root:{display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap"},filled:{"&$positionStart:not($hiddenLabel)":{marginTop:16}},positionStart:{marginRight:8},positionEnd:{marginLeft:8},disablePointerEvents:{pointerEvents:"none"},hiddenLabel:{},marginDense:{}},{name:"MuiInputAdornment"})(d)},663:function(e,t,a){"use strict";var n=a(2),o=a(132);t.a=Object(o.a)(n.createElement("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility")},664:function(e,t,a){"use strict";var n=a(2),o=a(132);t.a=Object(o.a)(n.createElement("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff")},665:function(e,t,a){"use strict";var n=a(4),o=a(9),i=a(2),r=(a(12),a(14)),c=a(23),l=i.forwardRef((function(e,t){var a=e.disableSpacing,c=void 0!==a&&a,l=e.classes,s=e.className,d=Object(o.a)(e,["disableSpacing","classes","className"]);return i.createElement("div",Object(n.a)({className:Object(r.a)(l.root,s,!c&&l.spacing),ref:t},d))}));t.a=Object(c.a)({root:{display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiDialogActions"})(l)},686:function(e,t,a){"use strict";var n=a(4),o=a(9),i=a(2),r=(a(12),a(14)),c=a(211),l=a(132),s=Object(l.a)(i.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),d=Object(l.a)(i.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),p=a(34),u=Object(l.a)(i.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),b=a(26),m=a(23),v=i.createElement(d,null),f=i.createElement(s,null),h=i.createElement(u,null),g=i.forwardRef((function(e,t){var a=e.checkedIcon,l=void 0===a?v:a,s=e.classes,d=e.color,p=void 0===d?"secondary":d,u=e.icon,m=void 0===u?f:u,g=e.indeterminate,x=void 0!==g&&g,O=e.indeterminateIcon,y=void 0===O?h:O,j=e.inputProps,E=e.size,k=void 0===E?"medium":E,C=Object(o.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),S=x?y:m,w=x?y:l;return i.createElement(c.a,Object(n.a)({type:"checkbox",classes:{root:Object(r.a)(s.root,s["color".concat(Object(b.a)(p))],x&&s.indeterminate),checked:s.checked,disabled:s.disabled},color:p,inputProps:Object(n.a)({"data-indeterminate":x},j),icon:i.cloneElement(S,{fontSize:void 0===S.props.fontSize&&"small"===k?k:S.props.fontSize}),checkedIcon:i.cloneElement(w,{fontSize:void 0===w.props.fontSize&&"small"===k?k:w.props.fontSize}),ref:t},C))}));t.a=Object(m.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(p.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(p.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(g)},689:function(e,t,a){"use strict";var n=a(4),o=a(9),i=a(21),r=a(2),c=(a(12),a(14)),l=a(23),s=a(26),d=a(683),p=a(37),u=a(106),b=a(27),m=a(36),v=a(29),f=a(30),h={entering:{opacity:1},entered:{opacity:1}},g={enter:b.b.enteringScreen,exit:b.b.leavingScreen},x=r.forwardRef((function(e,t){var a=e.children,i=e.disableStrictModeCompat,c=void 0!==i&&i,l=e.in,s=e.onEnter,d=e.onEntered,b=e.onEntering,x=e.onExit,O=e.onExited,y=e.onExiting,j=e.style,E=e.TransitionComponent,k=void 0===E?u.a:E,C=e.timeout,S=void 0===C?g:C,w=Object(o.a)(e,["children","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","TransitionComponent","timeout"]),N=Object(m.a)(),B=N.unstable_strictMode&&!c,I=r.useRef(null),z=Object(f.a)(a.ref,t),R=Object(f.a)(B?I:void 0,z),P=function(e){return function(t,a){if(e){var n=B?[I.current,t]:[t,a],o=Object(p.a)(n,2),i=o[0],r=o[1];void 0===r?e(i):e(i,r)}}},M=P(b),W=P((function(e,t){Object(v.b)(e);var a=Object(v.a)({style:j,timeout:S},{mode:"enter"});e.style.webkitTransition=N.transitions.create("opacity",a),e.style.transition=N.transitions.create("opacity",a),s&&s(e,t)})),T=P(d),D=P(y),F=P((function(e){var t=Object(v.a)({style:j,timeout:S},{mode:"exit"});e.style.webkitTransition=N.transitions.create("opacity",t),e.style.transition=N.transitions.create("opacity",t),x&&x(e)})),$=P(O);return r.createElement(k,Object(n.a)({appear:!0,in:l,nodeRef:B?I:void 0,onEnter:W,onEntered:T,onEntering:M,onExit:F,onExited:$,onExiting:D,timeout:S},w),(function(e,t){return r.cloneElement(a,Object(n.a)({style:Object(n.a)({opacity:0,visibility:"exited"!==e||l?void 0:"hidden"},h[e],j,a.props.style),ref:R},t))}))})),O=r.forwardRef((function(e,t){var a=e.children,i=e.classes,l=e.className,s=e.invisible,d=void 0!==s&&s,p=e.open,u=e.transitionDuration,b=e.TransitionComponent,m=void 0===b?x:b,v=Object(o.a)(e,["children","classes","className","invisible","open","transitionDuration","TransitionComponent"]);return r.createElement(m,Object(n.a)({in:p,timeout:u},v),r.createElement("div",{className:Object(c.a)(i.root,l,d&&i.invisible),"aria-hidden":!0,ref:t},a))})),y=Object(l.a)({root:{zIndex:-1,position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},invisible:{backgroundColor:"transparent"}},{name:"MuiBackdrop"})(O),j=a(646),E={enter:b.b.enteringScreen,exit:b.b.leavingScreen},k=r.forwardRef((function(e,t){var a=e.BackdropProps,i=e.children,l=e.classes,p=e.className,u=e.disableBackdropClick,b=void 0!==u&&u,m=e.disableEscapeKeyDown,v=void 0!==m&&m,f=e.fullScreen,h=void 0!==f&&f,g=e.fullWidth,O=void 0!==g&&g,k=e.maxWidth,C=void 0===k?"sm":k,S=e.onBackdropClick,w=e.onClose,N=e.onEnter,B=e.onEntered,I=e.onEntering,z=e.onEscapeKeyDown,R=e.onExit,P=e.onExited,M=e.onExiting,W=e.open,T=e.PaperComponent,D=void 0===T?j.a:T,F=e.PaperProps,$=void 0===F?{}:F,L=e.scroll,A=void 0===L?"paper":L,H=e.TransitionComponent,V=void 0===H?x:H,K=e.transitionDuration,G=void 0===K?E:K,Y=e.TransitionProps,q=e["aria-describedby"],X=e["aria-labelledby"],J=Object(o.a)(e,["BackdropProps","children","classes","className","disableBackdropClick","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","onEnter","onEntered","onEntering","onEscapeKeyDown","onExit","onExited","onExiting","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps","aria-describedby","aria-labelledby"]),U=r.useRef();return r.createElement(d.a,Object(n.a)({className:Object(c.a)(l.root,p),BackdropComponent:y,BackdropProps:Object(n.a)({transitionDuration:G},a),closeAfterTransition:!0,disableBackdropClick:b,disableEscapeKeyDown:v,onEscapeKeyDown:z,onClose:w,open:W,ref:t},J),r.createElement(V,Object(n.a)({appear:!0,in:W,timeout:G,onEnter:N,onEntering:I,onEntered:B,onExit:R,onExiting:M,onExited:P,role:"none presentation"},Y),r.createElement("div",{className:Object(c.a)(l.container,l["scroll".concat(Object(s.a)(A))]),onMouseUp:function(e){e.target===e.currentTarget&&e.target===U.current&&(U.current=null,S&&S(e),!b&&w&&w(e,"backdropClick"))},onMouseDown:function(e){U.current=e.target}},r.createElement(D,Object(n.a)({elevation:24,role:"dialog","aria-describedby":q,"aria-labelledby":X},$,{className:Object(c.a)(l.paper,l["paperScroll".concat(Object(s.a)(A))],l["paperWidth".concat(Object(s.a)(String(C)))],$.className,h&&l.paperFullScreen,O&&l.paperFullWidth)}),i))))}));t.a=Object(l.a)((function(e){return{root:{"@media print":{position:"absolute !important"}},scrollPaper:{display:"flex",justifyContent:"center",alignItems:"center"},scrollBody:{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}},container:{height:"100%","@media print":{height:"auto"},outline:0},paper:{margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},paperScrollPaper:{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},paperScrollBody:{display:"inline-block",verticalAlign:"middle",textAlign:"left"},paperWidthFalse:{maxWidth:"calc(100% - 64px)"},paperWidthXs:{maxWidth:Math.max(e.breakpoints.values.xs,444),"&$paperScrollBody":Object(i.a)({},e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+64),{maxWidth:"calc(100% - 64px)"})},paperWidthSm:{maxWidth:e.breakpoints.values.sm,"&$paperScrollBody":Object(i.a)({},e.breakpoints.down(e.breakpoints.values.sm+64),{maxWidth:"calc(100% - 64px)"})},paperWidthMd:{maxWidth:e.breakpoints.values.md,"&$paperScrollBody":Object(i.a)({},e.breakpoints.down(e.breakpoints.values.md+64),{maxWidth:"calc(100% - 64px)"})},paperWidthLg:{maxWidth:e.breakpoints.values.lg,"&$paperScrollBody":Object(i.a)({},e.breakpoints.down(e.breakpoints.values.lg+64),{maxWidth:"calc(100% - 64px)"})},paperWidthXl:{maxWidth:e.breakpoints.values.xl,"&$paperScrollBody":Object(i.a)({},e.breakpoints.down(e.breakpoints.values.xl+64),{maxWidth:"calc(100% - 64px)"})},paperFullWidth:{width:"calc(100% - 64px)"},paperFullScreen:{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,"&$paperScrollBody":{margin:0,maxWidth:"100%"}}}}),{name:"MuiDialog"})(k)}}]);
//# sourceMappingURL=2.adfdef28.chunk.js.map