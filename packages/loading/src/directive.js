import Vue from 'vue';

import Loading from './loading';
const Mask = Vue.extend(Loading);

import {
    getStyle,
    addClass,
    removeClass
} from '../../utils/dom.js';

const loadingText = 'b-loading-text';
const loadingColor = 'b-loading-color';
const loadingBackground = 'b-loading-background';
const loadingIcon = 'b-loading-icon';

const positionParentAttr = 'b-loading-parent--position';
const overflowParentAttr = 'b-loading-parent--overflow';

const insertDom = function(parent, el, binding) {
    if (getStyle(parent, 'display') !== 'none' && getStyle(parent, 'visibility') !== 'hidden') {
        let originalPosition = getStyle(parent, 'position');
        if (originalPosition !== 'absolute' && originalPosition !== 'fixed') {
            addClass(parent, positionParentAttr);
        }
        if (binding.modifiers && binding.modifiers.lock) {
            addClass(parent, overflowParentAttr);
        }
        el.domVisible = true;
        parent.appendChild(el.mask);
        Vue.nextTick(() => {
            el.instance.visible = true;
        });
    }
    if (!binding.value) {
        removeClass(el, positionParentAttr);
        removeClass(el, overflowParentAttr);
        Vue.nextTick(() => {
            el.instance.visible = false;
        });
    }
}

const LoadingDirective = {
    install: function(Vue) {
        Vue.directive('b-loading', {
            bind: function(el, binding, vNode) {
                const textAttr = el.getAttribute(loadingText);
                const colorAttr = el.getAttribute(loadingColor);
                const backgroundAttr = el.getAttribute(loadingBackground);
                const iconAttr = el.getAttribute(loadingIcon);
                const vm = vNode.context;
                const mask = new Mask({
                    el: document.createElement('div'),
                    data: {
                        text: vm && vm[textAttr] || textAttr,
                        color: vm && vm[colorAttr] || colorAttr,
                        background: vm && vm[backgroundAttr] || backgroundAttr,
                        icon: vm && vm[iconAttr] || iconAttr,
                    }
                });
                el.instance = mask;
                el.mask = mask.$el;
                binding.value && insertDom(el, el, binding);
            },
            update: function(el, binding) {
                el.instance.change('text', el.getAttribute(loadingText));
                el.instance.change('color', el.getAttribute(loadingColor));
                el.instance.change('background', el.getAttribute(loadingBackground));
                el.instance.change('icon', el.getAttribute(loadingIcon));
                binding.oldValue !== binding.value && insertDom(el, el, binding);
            },
            unbind: function(el) {
                if (el.domVisible) {
                    el.mask && el.mask.parentNode && el.mask.parentNode.removeChild(el.mask);
                }
                el.instance && el.instance.$destroy();
            }
        })
    }
}

export default LoadingDirective;