import Fuse from 'fuse.js';
import Vue from 'vue';

var Translate = {};

/**
 * Provides a Translation directive (v-t) and extension($t()).
 * To simplify, this is just given the english strings from the html markup and then
 * uses that to search for the relevant locale version of that string.
 *
 * We make use of fuse.js to do this super fast, but also allow us to do a fuzzy match
 * so that if the english is changed a tiny bit, it'll still work.
 *
 * @see https://fusejs.io/
 *
 * @param {Vue} Vue The Vue instance
 * @param {object} options Pass in the 2-letter iso-code for the locale, or set dynamically later.
 */
Translate.install = function (Vue, options) {
    let watchers = [];
    let fuse = null;
    let missingList = [];
    let msgHash = [];
    let previousLocale = null;
    let locale = options.locale ? options.locale : 'en';
    const EVENT_BUS = new Vue();

    const messages = {
        en: {
            home_0: 'Apply for New Jersey social services',
            home_1: 'Already started an application?',
            home_2: 'Sign In',
            home_3: 'Get food or cash assistance through one application',
            login_1: 'Password must be 8 to 15 characters long, contain at least one letter and one number. No special characters or spaces are allowed.'
        },
        es: {
            home_0: 'Solicitar servicios sociales de Nueva Jersey',
            home_1: '¿Ya comenzó una aplicación?',
            home_2: 'Iniciar sesión',
            home_3: 'Obtenga asistencia alimentaria o en efectivo a través de una solicitud.',
            login_1: 'La contraseña debe tener de 8 a 15 caracteres, contener al menos una letra y un número. No se permiten caracteres especiales ni espacios.'
        }
    };

    // Create hashmap for fast searching
    msgHash = [];
    for (let key in messages.en) {
        msgHash.push({
            txt: messages.en[key],
            locale: 'en',
            key: key
        });
    }

    console.log(msgHash);

    // Create indexed string lookup
    const opts = {
        keys: ['txt'],
        includeScore: true,
        shouldSort: true,
        // threshold: At what point does the match algorithm give up. A threshold of 0.0 requires
        // a perfect match (of both letters and location), a threshold of 1.0 would match anything.
        threshold: 0.1,
        sortFn: (a, b) => {
            return a.score > b.score ? -1 : 1;
        }
    };

    let index = Fuse.createIndex(opts.keys, msgHash);

    // TODO: can load a pre-generated index if we have it!!!
    // @see https://fusejs.io/api/indexing.html
    //const fuseIndex = await require('fuse-index.json')
    //const myIndex = Fuse.parseIndex(fuseIndex)
    fuse = new Fuse(msgHash, opts, index);

    // ///////////////////////////////////////////////////////////////////////////////////////

    EVENT_BUS.$on('translate:change-locale', () => {
        for (let i = 0; i < watchers.length; i += 1) {
            //console.log(`Changed locale to ${locale} for div ${i}`);
            let el = watchers[i];
            _translateElement(el);
        }
    });

    // ///////////////////////////////////////////////////////////////////////////////////////

    const _findMessage = function (val) {
        let matches = fuse.search(val);

        if (matches && matches.length > 0) {
            
            //console.log(`MATCH: "${val}"`, matches);

            return matches[0].item;
        }

        return null;
    };

    // ///////////////////////////////////////////////////////////////////////////////////////

    const _translateElement = function (el, depth) {
        if (!depth) {
            depth = 0;
        }

        // Get the div text, but only for the parent but ignore child nodes
        let val = el.firstChild ? el.firstChild.data : null;
        let key = el.dataset.translateKey;

        //console.log(`[${depth}] element txt = "${val}"`);

        if (!key && val) {
            let match = _findMessage(val);
            key = match ? match.key : 'no-match';
            el.dataset.translateKey = key;
            // Start watching this element and update
            watchers.push(el);
        } else if (!val) {
            key = 'no-data';
            el.dataset.translateKey = key;
        }

        if (key != 'no-match' && key != 'no-data') {
            el.firstChild.data = messages[locale][key];
        } else {
            console.warn(`No match for "${val}"`);
        }

        /*
        EVENT_BUS.$on('translate:change-locale', () => {
            console.log(`Changed locale to ${locale} for div ${key}`);
            if (el.dataset.translateKey != 'no-match') {
                //el.firstChild.data.replace(val, messages[locale][key]);
                el.firstChild.data = messages[locale][key];
            }
        });
        */

        // Step through the child elements, if there are any, and translate them as well

        var children = el.children;
        for (var i = 0; i < children.length; i++) {
            // Translate the child element, unless it has a translate directive on it already!
            if (!children[i].attributes['data-translate-key']) {
                //console.log(`[${depth}] Child ${children[i].className} ${i}`, children[i].attributes);
                _translateElement(children[i], depth + 1);
            }
        }
    };

    // ///////////////////////////////////////////////////////////////////////////////////////

    Vue.directive('t', {
        bind(el, binding, vnode) {
            if (binding.value == 0) {
                return;
            }
            _translateElement(el);
        },
        update(el, binding, vnode) {
            return vnode.context.key;
            // do something based on the updated value
            // this will also be called for the initial value
        },
        unbind() {
            //watchers.push(el);
            // do clean up work
            // e.g. remove event listeners added in bind()
        }
    });

    // ///////////////////////////////////////////////////////////////////////////////////////

    Vue.t = Vue.prototype.$t = function (val) {
        let match = _findMessage(val);
        let key = match ? match.key : 'no-match';

        if (key != 'no-match') {
            return messages[locale][key];
        }

        return val;
    };

    // ///////////////////////////////////////////////////////////////////////////////////////

    Vue.setLocale = Vue.prototype.$setLocale = (newLocale) => {
        //console.log(`Setting locale from ${locale} to ${newLocale}`)
        previousLocale = locale;
        locale = newLocale;
        EVENT_BUS.$emit('translate:change-locale');
    };

    // ///////////////////////////////////////////////////////////////////////////////////////

    Vue.getLocale = Vue.prototype.$getLocale = () => {
        return locale;
    };
};

export default Translate;
