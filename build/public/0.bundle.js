webpackJsonp([0],{229:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(0)),u=r(38),c=n(r(94)),i=n(r(95)),a=n(r(234)),l=n(r(96)),f=n(r(91)),s=r(20),p=r(92),d=r(231),h=r(233),v={searchRepos:p.searchRepos,push:s.push},y=(0,c.default)((0,f.default)("RepoList"),(0,l.default)("needs",[p.searchRepos]),(0,u.connect)(function(e,t){return{repos:(0,d.getRepos)(e),firstRender:(0,h.getFirstRender)(e)}},v),(0,a.default)({onItemClick:function(e){return function(t){var r=t.owner,n=t.repo;return e.push("/"+r+"/"+n)}}}),(0,i.default)({componentDidMount:function(){var e=this.props,t=e.firstRender,r=e.searchRepos;t||r({})}}));t.default=y(function(e){var t=e.repos,r=e.onItemClick;return o.default.createElement("div",null,o.default.createElement("h2",null,"Top 10 Repos"),o.default.createElement("ul",null,t.map(function(e){var t=e.id,n=e.name,u=e.owner;return o.default.createElement("li",{key:t,onClick:r.bind(null,{owner:u.login,repo:n})},n)})))})},231:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getSelectedRepo=t.getRepos=void 0;var n=r(232),o=r(39),u=r(93),c=function(e){return e.repo.repoEntities},i=function(e){return e.repo.ownerEntities},a=(0,n.createSelector)([c,i,function(e){return e.repo.repoIds}],function(e,t,r){return(0,o.denormalize)(r,[u.repo],{owners:t,repos:e})}),l=(0,n.createSelector)([c,i,function(e){return e.repo.selectedRepo}],function(e,t,r){return(0,o.denormalize)(r,u.repo,{owners:t,repos:e})});t.getRepos=a,t.getSelectedRepo=l},232:function(e,t,r){"use strict";function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e,t){return e===t},r=null,n=null;return function(){return function(e,t,r){if(null===t||null===r||t.length!==r.length)return!1;for(var n=t.length,o=0;o<n;o++)if(!e(t[o],r[o]))return!1;return!0}(t,r,arguments)||(n=e.apply(null,arguments)),r=arguments,n}}function o(e){for(var t=arguments.length,r=Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];return function(){for(var t=arguments.length,o=Array(t),u=0;u<t;u++)o[u]=arguments[u];var c=0,i=o.pop(),a=function(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every(function(e){return"function"==typeof e})){var r=t.map(function(e){return typeof e}).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+r+"]")}return t}(o),l=e.apply(void 0,[function(){return c++,i.apply(null,arguments)}].concat(r)),f=n(function(){for(var e=[],t=a.length,r=0;r<t;r++)e.push(a[r].apply(null,arguments));return l.apply(null,e)});return f.resultFunc=i,f.recomputations=function(){return c},f.resetRecomputations=function(){return c=0},f}}t.__esModule=!0,t.defaultMemoize=n,t.createSelectorCreator=o,t.createStructuredSelector=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u;if("object"!=typeof e)throw new Error("createStructuredSelector expects first argument to be an object where each property is a selector, instead received a "+typeof e);var r=Object.keys(e);return t(r.map(function(t){return e[t]}),function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(function(e,t,n){return e[r[n]]=t,e},{})})};var u=t.createSelector=o(n)},233:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.getFirstRender=function(e){return e.app.firstRender}},234:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}t.__esModule=!0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c=r(0),i=(n(r(91)),n(r(97)),n(r(235)));t.default=function(e){return function(t){var r=(0,c.createFactory)(t),n=function(e){function t(){var r,n,u;!function(e,r){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this);for(var c=arguments.length,i=Array(c),l=0;l<c;l++)i[l]=arguments[l];return r=n=o(this,e.call.apply(e,[this].concat(i))),a.call(n),u=r,o(n,u)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentWillReceiveProps=function(){this.cachedHandlers={}},t.prototype.render=function(){return r(u({},this.props,this.handlers))},t}(c.Component),a=function(){var t=this;this.cachedHandlers={},this.handlers=(0,i.default)("function"==typeof e?e(this.props):e,function(e,r){return function(){var n=t.cachedHandlers[r];if(n)return n.apply(void 0,arguments);var o=e(t.props);return t.cachedHandlers[r]=o,o.apply(void 0,arguments)}})};return n}}},235:function(e,t,r){"use strict";t.__esModule=!0;t.default=function(e,t){var r={};for(var n in e)e.hasOwnProperty(n)&&(r[n]=t(e[n],n));return r}}});
//# sourceMappingURL=0.bundle.js.map