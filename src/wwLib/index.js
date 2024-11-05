import emitter from 'tiny-emitter/instance';
import services from './services/index.js';

 /* wwFront:start */
// eslint-disable-next-line no-undef
import plugin_00d22f72_1a03_44f8_ad68_c593dc80b543 from '@/components/plugins/plugin-00d22f72-1a03-44f8-ad68-c593dc80b543/src/wwPlugin.js';
import plugin_75b9e021_a5fe_4ae9_8c6a_f4b3e65f2a24 from '@/components/plugins/plugin-75b9e021-a5fe-4ae9-8c6a-f4b3e65f2a24/src/wwPlugin.js';
import plugin_3a407b45_9c63_471d_b09b_15cf797e5566 from '@/components/plugins/plugin-3a407b45-9c63-471d-b09b-15cf797e5566/src/wwPlugin.js';
import plugin_69d4a5bb_09a3_4f3d_a94e_667c21c057eb from '@/components/plugins/plugin-69d4a5bb-09a3-4f3d-a94e-667c21c057eb/src/wwPlugin.js';
import plugin_1c5f5c0f_5609_4031_9e57_5bb4811be7b3 from '@/components/plugins/plugin-1c5f5c0f-5609-4031-9e57-5bb4811be7b3/src/wwPlugin.js';
import plugin_2adce8d5_2056_479d_a21a_068f55a8077f from '@/components/plugins/plugin-2adce8d5-2056-479d-a21a-068f55a8077f/src/wwPlugin.js';
import plugin_ee24f5ac_e15e_4ddd_baa4_0b4baedf90c9 from '@/components/plugins/plugin-ee24f5ac-e15e-4ddd-baa4-0b4baedf90c9/src/wwPlugin.js';
import plugin_615d0fde_2084_4ac2_a2a4_5eb7686446ce from '@/components/plugins/plugin-615d0fde-2084-4ac2-a2a4-5eb7686446ce/src/wwPlugin.js';
import plugin_60610cfd_fa28_4fc1_9e72_088b5c667e81 from '@/components/plugins/plugin-60610cfd-fa28-4fc1-9e72-088b5c667e81/src/wwPlugin.js';
import plugin_9c40819b_4a8f_468f_9ba5_4b9699f3361f from '@/components/plugins/plugin-9c40819b-4a8f-468f-9ba5-4b9699f3361f/src/wwPlugin.js';
import plugin_d66a250d_8468_469e_ad33_ee028f632398 from '@/components/plugins/plugin-d66a250d-8468-469e-ad33-ee028f632398/src/wwPlugin.js';
import plugin_f5856798_485d_47be_b433_d43d771c64e1 from '@/components/plugins/plugin-f5856798-485d-47be-b433-d43d771c64e1/src/wwPlugin.js';
import plugin_cd33cf33_e29f_4e8c_ac26_b997fe507ce7 from '@/components/plugins/plugin-cd33cf33-e29f-4e8c-ac26-b997fe507ce7/src/wwPlugin.js';
import plugin_2bd1c688_31c5_443e_ae25_59aa5b6431fb from '@/components/plugins/plugin-2bd1c688-31c5-443e-ae25-59aa5b6431fb/src/wwPlugin.js';
import plugin_36816525_6e0d_4217_b792_19f5d8682c46 from '@/components/plugins/plugin-36816525-6e0d-4217-b792-19f5d8682c46/src/wwPlugin.js';
import plugin_8bc1b5c9_29e4_4269_becb_a2e1a8de9127 from '@/components/plugins/plugin-8bc1b5c9-29e4-4269-becb-a2e1a8de9127/src/wwPlugin.js';
import plugin_832d6f7a_42c3_43f1_a3ce_9a678272f811 from '@/components/plugins/plugin-832d6f7a-42c3-43f1-a3ce-9a678272f811/src/wwPlugin.js';
/* wwFront:end */

import { computed, reactive } from 'vue';

export default {
    ...services,
     $on(event, fn) {
        emitter.on(event, fn);
    },
    $once(event, fn) {
        emitter.once(event, fn);
    },
    $emit(event, ...args) {
        if (!event) {
            return;
        }
        emitter.emit(event, ...args);
    },
    $off(event, fn) {
        emitter.off(event, fn);
    },
     front: {},
    $focus: null,
    env: process.env.NODE_ENV,
    async initFront({ router, store }) {
 
        this.front.router = router;
        /* wwFront:start */
        this.$store = store;
        /* wwFront:end */

        //Init services
        this.wwLog.init();

 
        wwLib.logStore.verbose('Starting the application...');
        await this.wwWebsiteData.init();
        this.wwLang.init(router);

        /* wwFront:start */
        // eslint-disable-next-line no-undef
        wwLib.wwPluginHelper.registerPlugin('plugin-00d22f72-1a03-44f8-ad68-c593dc80b543', plugin_00d22f72_1a03_44f8_ad68_c593dc80b543);
wwLib.wwPluginHelper.registerPlugin('plugin-75b9e021-a5fe-4ae9-8c6a-f4b3e65f2a24', plugin_75b9e021_a5fe_4ae9_8c6a_f4b3e65f2a24);
wwLib.wwPluginHelper.registerPlugin('plugin-3a407b45-9c63-471d-b09b-15cf797e5566', plugin_3a407b45_9c63_471d_b09b_15cf797e5566);
wwLib.wwPluginHelper.registerPlugin('plugin-69d4a5bb-09a3-4f3d-a94e-667c21c057eb', plugin_69d4a5bb_09a3_4f3d_a94e_667c21c057eb);
wwLib.wwPluginHelper.registerPlugin('plugin-1c5f5c0f-5609-4031-9e57-5bb4811be7b3', plugin_1c5f5c0f_5609_4031_9e57_5bb4811be7b3);
wwLib.wwPluginHelper.registerPlugin('plugin-2adce8d5-2056-479d-a21a-068f55a8077f', plugin_2adce8d5_2056_479d_a21a_068f55a8077f);
wwLib.wwPluginHelper.registerPlugin('plugin-ee24f5ac-e15e-4ddd-baa4-0b4baedf90c9', plugin_ee24f5ac_e15e_4ddd_baa4_0b4baedf90c9);
wwLib.wwPluginHelper.registerPlugin('plugin-615d0fde-2084-4ac2-a2a4-5eb7686446ce', plugin_615d0fde_2084_4ac2_a2a4_5eb7686446ce);
wwLib.wwPluginHelper.registerPlugin('plugin-60610cfd-fa28-4fc1-9e72-088b5c667e81', plugin_60610cfd_fa28_4fc1_9e72_088b5c667e81);
wwLib.wwPluginHelper.registerPlugin('plugin-9c40819b-4a8f-468f-9ba5-4b9699f3361f', plugin_9c40819b_4a8f_468f_9ba5_4b9699f3361f);
wwLib.wwPluginHelper.registerPlugin('plugin-d66a250d-8468-469e-ad33-ee028f632398', plugin_d66a250d_8468_469e_ad33_ee028f632398);
wwLib.wwPluginHelper.registerPlugin('plugin-f5856798-485d-47be-b433-d43d771c64e1', plugin_f5856798_485d_47be_b433_d43d771c64e1);
wwLib.wwPluginHelper.registerPlugin('plugin-cd33cf33-e29f-4e8c-ac26-b997fe507ce7', plugin_cd33cf33_e29f_4e8c_ac26_b997fe507ce7);
wwLib.wwPluginHelper.registerPlugin('plugin-2bd1c688-31c5-443e-ae25-59aa5b6431fb', plugin_2bd1c688_31c5_443e_ae25_59aa5b6431fb);
wwLib.wwPluginHelper.registerPlugin('plugin-36816525-6e0d-4217-b792-19f5d8682c46', plugin_36816525_6e0d_4217_b792_19f5d8682c46);
wwLib.wwPluginHelper.registerPlugin('plugin-8bc1b5c9-29e4-4269-becb-a2e1a8de9127', plugin_8bc1b5c9_29e4_4269_becb_a2e1a8de9127);
wwLib.wwPluginHelper.registerPlugin('plugin-832d6f7a-42c3-43f1-a3ce-9a678272f811', plugin_832d6f7a_42c3_43f1_a3ce_9a678272f811);
        /* wwFront:end */

 
        services.scrollStore.start();
        services.keyboardEventStore.start();
    },
     // TODO: Verify with Alexis, still uses wwImageMultiLang
    getResponsiveStyleProp({ store, style, uid, states = [], prop }) {
        store = store || wwLib.getFrontWindow().wwLib.$store;
        if (!style && uid) {
            const wwObject = this.$store.getters['websiteData/getWwObjects'][uid];
            if (!wwObject) return '';
            style = (wwObject._state || {}).style || {};
        }

        const screenSizes = store.getters['front/getScreenSizes'];
        const screenSize = store.getters['front/getScreenSize'];

        let value = '';

        for (const media in screenSizes) {
            if (style[media] && typeof style[media][prop] !== 'undefined') {
                value = style[media][prop];
            }
            if (media === screenSize) {
                break;
            }
        }
        for (const state of states) {
            for (const media in screenSizes) {
                if (style[`${state}_${media}`] && style[`${state}_${media}`][prop]) {
                    value = style[`${state}_${media}`][prop];
                }
                if (media === screenSize) {
                    break;
                }
            }
        }

        return value;
    },
    globalContext: reactive({
        page: computed(() => {
            const page = wwLib.$store.getters['websiteData/getPage'];
            if (!page) return {};
            else if (!page.cmsDataSetPath) return { ...pageSanitizer(page) };
            return { ...pageSanitizer(page), data: wwLib.$store.getters['data/getPageCollectionData'] };
        }),
        pageParameters: computed(() => {
            const pageParameters = Object.values(wwLib.$store.getters['data/getPageParameterVariables']);
            const pageParametersValueMap = {};
            for (const pageParameter of pageParameters) pageParametersValueMap[pageParameter.id] = pageParameter.value;
            return pageParametersValueMap;
        }),
        pages: computed(() => {
            const pages = wwLib.$store.getters['websiteData/getPages'];
            const pagesValueMap = {};
            for (const page of pages) pagesValueMap[page.id] = pageSanitizer(page);
            return pagesValueMap;
        }),
        colors: computed(() => {
            const theme = wwLib.$store.getters['front/getTheme'];
             /* wwFront:start */
            // eslint-disable-next-line no-unreachable, no-undef
            return theme === 'dark' ? {"e9d5725b-9561-492e-9de7-61a25dd9e012":"#FF6384","2b86830c-b33d-4040-abf6-3a2fc225d528":"#FF9F40","a64520bb-4b87-489e-bf4f-74cae32a38c2":"#000000ad","fc64c672-fa22-4961-99c9-df3d78c1b5a5":"#000000","a26f056a-e19f-4711-800d-5d5356deaaa4":"#FFFFFF","473c3ed1-9c9e-42cc-8f5a-5056d7b5cf6b":"#d1d5db","b5d38025-e38c-4476-a6b8-fbe1cfce7871":"#000000","5771d55a-cdf7-4339-b77f-741ae8120631":"#000000","18f67748-1945-4dc3-989f-6b5db76ecd59":"#000000","9e1e5636-1b33-4ee5-bfbd-227adb150757":"#000000","6dd59229-7591-4379-812e-18908eb31176":"#FFFFFF"} : {"e9d5725b-9561-492e-9de7-61a25dd9e012":"#FF6384","2b86830c-b33d-4040-abf6-3a2fc225d528":"#FF9F40","a64520bb-4b87-489e-bf4f-74cae32a38c2":"#000000ad","fc64c672-fa22-4961-99c9-df3d78c1b5a5":"#000000","a26f056a-e19f-4711-800d-5d5356deaaa4":"#FFFFFF","473c3ed1-9c9e-42cc-8f5a-5056d7b5cf6b":"#d1d5db","b5d38025-e38c-4476-a6b8-fbe1cfce7871":"#000000","5771d55a-cdf7-4339-b77f-741ae8120631":"#000000","18f67748-1945-4dc3-989f-6b5db76ecd59":"#000000","9e1e5636-1b33-4ee5-bfbd-227adb150757":"#FFFFFF","6dd59229-7591-4379-812e-18908eb31176":"#000000"};
            /* wwFront:end */
        }),
        spacings:
         /* wwFront:start */
        // eslint-disable-next-line no-unreachable, no-undef
        {},
        /* wwFront:end */
        typographies:
         /* wwFront:start */
        // eslint-disable-next-line no-unreachable, no-undef
        {"2408500c-b5d9-45a2-ab67-fe588bec3eb5":"italic 600 20px/40px 'Inter', sans-serif"},
        /* wwFront:end */
        browser: computed(() => {
            const router = wwLib.manager ? wwLib.getEditorRouter() : wwLib.getFrontRouter();
            const currentRoute = router.currentRoute.value;
            let currentQueries = currentRoute.query;
             return {
                url: window.location.origin + currentRoute.fullPath,
                path: currentRoute.path,
                // verify if auth plugin
                 /* wwFront:start */
                // eslint-disable-next-line no-dupe-keys
                source: currentQueries._source,
                /* wwFront:end */
                query: currentQueries,
                domain: window.location.hostname,
                baseUrl: window.location.origin,
                breakpoint: wwLib.$store.getters['front/getScreenSize'],
                environment: wwLib.getEnvironment(),
                theme: wwLib.$store.getters['front/getTheme'],
            };
        }),
        screen: services.scrollStore.screen,
        componentPositionInfo: services.scrollStore.componentPositionInfo,
    }),

    pageData: computed(() => {
        const lang = wwLib.$store.getters['front/getLang'];
        const cmsDataSetPath = wwLib.$store.getters['websiteData/getPage'].cmsDataSetPath;
        if (!cmsDataSetPath) {
            return { lang };
        }

        return { lang, data: wwLib.$store.getters['data/getPageCollectionData'] };
    }),

    getEnvironment() {
        return wwLib.manager
            ? 'editor'
            : window.location.host.includes(
                  '-staging.' + (process.env.WW_ENV === 'staging' ? process.env.VUE_APP_PREVIEW_URL : '')
              )
            ? 'staging'
            : window.location.host.includes(process.env.VUE_APP_PREVIEW_URL)
            ? 'preview'
            : 'production';
    },

    useBaseTag() {
        return (
            wwLib.getEnvironment() === 'production' &&
            window.wwg_designInfo.baseTag &&
            window.wwg_designInfo.baseTag.href
        );
    },

    getBaseTag() {
        let baseTag = window.wwg_designInfo.baseTag?.href || '';
        if (!baseTag.startsWith('/')) {
            baseTag = '/' + baseTag;
        }
        if (!baseTag.endsWith('/')) {
            baseTag += '/';
        }
        return baseTag;
    },

    /**
     * @PUBLIC_API
     */
    getFrontWindow() {
        if (document.querySelector('.ww-manager-iframe')) {
            return document.querySelector('.ww-manager-iframe').contentWindow;
        }
        return window;
    },

    /**
     * @PUBLIC_API
     */
    getFrontDocument() {
        return this.getFrontWindow().document;
    },

    /**
     * @PUBLIC_API
     */
    getFrontRouter() {
        return this.front.router;
    },

    /**
     * @PUBLIC_API
     */
    getEditorWindow() {
         // eslint-disable-next-line no-unreachable
        return null;
    },

    /**
     * @PUBLIC_API
     */
    getEditorDocument() {
         // eslint-disable-next-line no-unreachable
        return null;
    },

    /**
     * @PUBLIC_API
     */
    getEditorRouter() {
        return this.editor.router;
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwApp.goTo
     */
    goTo(...args) {
         wwLib.wwLog.warn('wwLib.goTo is DEPRECATED, use wwLib.wwApp.goTo instead');
        wwLib.wwApp.goTo(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwUtils.getStyleFromToken
     */
    getStyleFromToken(...args) {
         // wwLib.wwLog.warn('wwLib.getStyleFromToken is DEPRECATED, use wwLib.wwUtils.getStyleFromToken instead');
        return wwLib.wwUtils.getStyleFromToken(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwUtils.getTypoFromToken
     */
    getTypoFromToken(...args) {
         // wwLib.wwLog.warn('wwLib.getTypoFromToken is DEPRECATED, use wwLib.wwUtils.getTypoFromToken instead');
        return wwLib.wwUtils.getTypoFromToken(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED
     */
    element(value) {
         wwLib.wwLog.warn('wwLib.element is DEPRECATED');
        if (typeof value === 'object') {
            return { isWwObject: true, ...value };
        } else {
            return { isWwObject: true, type: value };
        }
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwUtils.resolveObjectPropertyPath
     */
    resolveObjectPropertyPath(...args) {
         // wwLib.wwLog.warn(
        //     'wwLib.resolveObjectPropertyPath is DEPRECATED, use wwLib.wwUtils.resolveObjectPropertyPath instead'
        // );
        return wwLib.wwUtils.resolveObjectPropertyPath(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwutils.getTextStyleFromContent
     */
    getTextStyleFromContent(...args) {
         // wwLib.wwLog.warn(
        //     'wwLib.getTextStyleFromContent is DEPRECATED, use wwLib.wwUtils.getTextStyleFromContent instead'
        // );
        return wwLib.wwUtils.getTextStyleFromContent(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwWorkflow.executeGlobal
     */
    async executeWorkflow(...args) {
         wwLib.wwLog.warn('wwLib.executeWorkflow is DEPRECATED, use wwLib.wwWorkflow.executeGlobal instead');
        return wwLib.wwWorkflow.executeGlobal(...args);
    },

    /**
     * @PUBLIC_API
     * @EDITOR
     * @DEPRECATED wwLib.wwEditor.findParentUidByFlag
     */
    findParentUidByFlag(...args) {
         wwLib.wwLog.warn('wwLib.wwEditor.findParentUidByFlag is DEPRECATED, use wwLib.findParentUidByFlag instead');
        return wwLib.wwEditor.findParentUidByFlag(...args);
    },

    /**
     * @PUBLIC_API
     * @EDITOR
     * @DEPRECATED wwLib.wwEditor.selectParentByFlag
     */
    selectParentByFlag(...args) {
         wwLib.wwLog.warn('wwLib.wwEditor.selectParentByFlag is DEPRECATED, use wwLib.selectParentByFlag instead');
        return wwLib.wwEditor.selectParentByFlag(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwElement.useCreate
     */
    useCreateElement() {
         wwLib.wwLog.warn('wwLib.useCreateElement is DEPRECATED, use wwLib.wwElement.useCreate instead');
        return this.wwElement.useCreate();
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwElement.useLayoutStyle
     */
    useLayoutStyle() {
         wwLib.wwLog.warn('wwLib.useLayoutStyle is DEPRECATED, use wwLib.wwElement.useLayoutStyle instead');
        return wwLib.wwElement.useLayoutStyle();
    },
};

function pageSanitizer(page) {
    const keysToInclude = [
        'id',
        'name',
        'metaImage',
        'pageLoaded',
        'paths',
        'langs',
        'meta',
        'title',
        'sections',
        'pageUserGroups',
    ];

    const _page = {};
    keysToInclude.forEach(key => {
        _page[key] = page[key];
    });

    _page.meta && delete _page.meta.__typename;
    for (const section of _page.sections || []) {
        delete section.__typename;
    }

    const lang = wwLib.$store.getters['front/getLang'];
    if (_page.paths) _page.path = _page.paths[lang] || _page.paths.default;
    else _page.path = null;

    _page.lang = lang;

    return _page;
}
