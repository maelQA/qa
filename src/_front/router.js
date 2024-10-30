import { createRouter, createWebHistory } from 'vue-router';

import wwPage from './views/wwPage.vue';

import { initializeData, initializePlugins, onPageUnload } from '@/_common/helpers/data';

let router;
const routes = [];

function scrollBehavior(to) {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth',
        };
    } else {
        return { top: 0 };
    }
}

 
/* wwFront:start */
import pluginsSettings from '../../plugins-settings.json';

// eslint-disable-next-line no-undef
window.wwg_designInfo = {"id":"9662a424-3623-4fd3-a930-94f5b09a6599","homePageId":"08fb841b-57f0-43ca-adc5-2c7f6566176d","authPluginId":"f5856798-485d-47be-b433-d43d771c64e1","baseTag":null,"defaultTheme":"light","langs":[{"lang":"en","default":true},{"lang":"fr","default":false,"isDefaultPath":false}],"background":{},"workflows":[{"id":"378c1c8f-dc42-407b-b9f8-72378de75cdc","actions":{"acace836-7dc6-43ca-afd6-23b4633ca5da":{"id":"acace836-7dc6-43ca-afd6-23b4633ca5da","type":"variable","varId":"2b958bad-5e55-449e-aca8-89cc68a10e93","varValue":false}},"trigger":"before-collection-fetch-app","isTrusted":true,"firstAction":"acace836-7dc6-43ca-afd6-23b4633ca5da"},{"id":"2f1d9f4f-9742-4754-ac93-7e824948a179","actions":{"dbf89aa6-10fa-4282-bd1f-5547050c81fd":{"id":"dbf89aa6-10fa-4282-bd1f-5547050c81fd","code":"console.log() fdsfdsfdsf","type":"custom-js"}},"trigger":"onload-app","firstAction":"dbf89aa6-10fa-4282-bd1f-5547050c81fd"}],"pages":[{"id":"5fa10ee1-68ef-4450-ab3d-32b22d272a3b","linkId":"5fa10ee1-68ef-4450-ab3d-32b22d272a3b","name":"login with redirect","paths":{"en":"login_with_redirect","fr":"login_with_redirect","default":"login_with_redirect"},"langs":["en"],"cmsDataSetPath":null,"sections":[],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":null},{"id":"c81cfef6-0fa9-4c3c-a32e-7272b5a19f79","linkId":"c81cfef6-0fa9-4c3c-a32e-7272b5a19f79","name":"private","paths":{"en":"private","default":"private"},"langs":["en","fr"],"cmsDataSetPath":null,"sections":[{"uid":"fef87f66-05f9-4748-8426-7e3a0f0a2705","sectionTitle":"Section","linkId":"4561fcc4-a5dc-4233-b74c-3107130a6147"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":null},{"id":"7fc82bb6-d2be-40dc-9f72-9b421dafbe62","linkId":"7fc82bb6-d2be-40dc-9f72-9b421dafbe62","name":"qa","paths":{"en":"qa","default":"qa"},"langs":["fr"],"cmsDataSetPath":null,"sections":[{"uid":"636ca4cf-2c43-45ef-b3e8-f5c037f0325f","sectionTitle":"Section","linkId":"638cf49d-722f-4072-860d-c6b34ee29c47"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":null},{"id":"8ae53a09-f967-47fd-bd7a-ef9d9fd38d7e","linkId":"8ae53a09-f967-47fd-bd7a-ef9d9fd38d7e","name":"static","paths":{"en":"static","default":"static"},"langs":["en","fr"],"cmsDataSetPath":null,"sections":[{"uid":"73ab2901-ebac-4094-8e9f-dc7da3f6b182","sectionTitle":"Section","linkId":"516db5b6-8b41-4682-a728-0d5e173deb25"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":null},{"id":"16116db9-2a38-49bd-b3c1-1e5641839e8d","linkId":"16116db9-2a38-49bd-b3c1-1e5641839e8d","name":"profile","paths":{"en":"profile","default":"profile"},"langs":["en","fr"],"cmsDataSetPath":null,"sections":[{"uid":"06c3077f-22c6-4da8-bbc7-a9f19d20e9ab","sectionTitle":"Section","linkId":"7d770514-f94c-452a-b20c-c950c2243472"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":null},{"id":"c7f1c2ee-ca21-4a62-8647-0ddce6298168","linkId":"c7f1c2ee-ca21-4a62-8647-0ddce6298168","name":"redirect","paths":{"en":"redirect","default":"redirect"},"langs":["en","fr"],"cmsDataSetPath":null,"sections":[],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":null},{"id":"b4d2490f-87d1-408e-bf60-7d103ebbf19a","linkId":"b4d2490f-87d1-408e-bf60-7d103ebbf19a","name":"map","paths":{"en":"map","default":"map"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"dcdd8b90-0507-456b-a6da-93b4f4e451d8","sectionTitle":"Section","linkId":"03c6168f-962d-4b4e-ad2c-a4e4063f3fa8"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":null},{"id":"666fc1cc-8c34-4891-93b0-1ffbb3a43585","linkId":"666fc1cc-8c34-4891-93b0-1ffbb3a43585","name":"404","paths":{"en":"404","fr":"404/{{param|}}","default":"404"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"86640b9b-d8eb-47fa-ad56-051286e86bb9","sectionTitle":"Section","linkId":"894e0bbd-0258-457c-8185-2d405dc04647"},{"uid":"9d627379-8883-44cb-9819-ed10ed646c6e","sectionTitle":"modal test","linkId":"f3093b4e-3de4-44a1-a58f-bf75d5ed5f0e"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":null},{"id":"93dceb3d-1714-42d2-9797-daa67ad72b62","linkId":"93dceb3d-1714-42d2-9797-daa67ad72b62","name":"test navigate to","paths":{"en":"test_navigate_to","default":"test_navigate_to"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"7117d486-7521-48e0-aa17-26fad08ac4bb","sectionTitle":"Section","linkId":"377ae050-9964-48b9-948a-527690aefa8b"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":null},{"id":"54eb9565-0112-44cf-93b7-2d16d67c2bf2","linkId":"54eb9565-0112-44cf-93b7-2d16d67c2bf2","name":"kanban","paths":{"en":"kanban","fr":"kanban","default":"kanban"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"4de82040-c5a4-49af-872a-d2498a885f84","sectionTitle":"test2","linkId":"a664bd63-6dac-48d7-9a94-03861f252cc9"},{"uid":"3aa78e71-cfc0-4bb5-a0c8-03818d65d658","sectionTitle":"Section","linkId":"0a999d64-fd2f-4159-b6c7-e0498fb248f1"},{"uid":"15b250ca-14fe-4741-b443-b1ee227b2345","sectionTitle":"bonjour","linkId":"a21a8e1f-9f1b-4f09-8480-7ed4ec46dc9e"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{}},"metaImage":null},{"id":"8e4e72bc-0424-4da5-9c69-3e634aaeb4ab","linkId":"8e4e72bc-0424-4da5-9c69-3e634aaeb4ab","name":"login","paths":{"en":"login","default":"login"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"58e832eb-3f60-4a3f-8e4f-07579f417456","sectionTitle":"Section","linkId":"a941571c-711d-4fb0-8011-1a475223c8d8"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":null},{"id":"c7932b5a-2263-4abf-93ad-77b82cea8e79","linkId":"c7932b5a-2263-4abf-93ad-77b82cea8e79","name":"Stripe","paths":{"en":"stripe","default":"stripe"},"langs":["fr"],"cmsDataSetPath":null,"sections":[{"uid":"6ff1cf46-d687-49eb-976a-181fb2d9e9b7","sectionTitle":"Section","linkId":"c0ef3dca-b4c8-4596-a086-df133b1ea9a3"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":null},{"id":"08fb841b-57f0-43ca-adc5-2c7f6566176d","linkId":"08fb841b-57f0-43ca-adc5-2c7f6566176d","name":"Home","paths":{"en":"home","default":"home"},"langs":["en","fr"],"cmsDataSetPath":null,"sections":[{"uid":"40add193-d5a4-4c83-8052-a03a620559a5","sectionTitle":"Section","linkId":"4842cd76-d371-4524-a16b-e3ba037b7c70"},{"uid":"fc9e8238-1b19-48ac-89be-9f43cc1da546","sectionTitle":"Section","linkId":"70c2cca8-0acf-4bf1-9995-43ee0c3988ed"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":null},{"id":"92e54ca6-2359-4dd3-ba0a-e725793d3cbd","linkId":"92e54ca6-2359-4dd3-ba0a-e725793d3cbd","name":"french","paths":{"en":"french","default":"french"},"langs":["fr"],"cmsDataSetPath":null,"sections":[{"uid":"f32649a3-21c3-469b-a305-cfddb9e270ae","sectionTitle":"Section","linkId":"d1c552da-bc34-452c-90a7-0c6b05451e93"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":null}],"plugins":[{"id":"00d22f72-1a03-44f8-ad68-c593dc80b543","name":"Stripe","namespace":"stripe"},{"id":"75b9e021-a5fe-4ae9-8c6a-f4b3e65f2a24","name":"Vimeo","namespace":"vimeo"},{"id":"69d4a5bb-09a3-4f3d-a94e-667c21c057eb","name":"NPM","namespace":"npm"},{"id":"3a407b45-9c63-471d-b09b-15cf797e5566","name":"Sound","namespace":"sound"},{"id":"1c5f5c0f-5609-4031-9e57-5bb4811be7b3","name":"Youtube","namespace":"youtube"},{"id":"2adce8d5-2056-479d-a21a-068f55a8077f","name":"Mapbox","namespace":"mapbox"},{"id":"ee24f5ac-e15e-4ddd-baa4-0b4baedf90c9","name":"CSV","namespace":"csv"},{"id":"615d0fde-2084-4ac2-a2a4-5eb7686446ce","name":"RSS Feed","namespace":"fluxRSS"},{"id":"60610cfd-fa28-4fc1-9e72-088b5c667e81","name":"Calendly","namespace":"calendly"},{"id":"9c40819b-4a8f-468f-9ba5-4b9699f3361f","name":"Charts","namespace":"chartjs"},{"id":"d66a250d-8468-469e-ad33-ee028f632398","name":"OpenAI","namespace":"openai"},{"id":"f5856798-485d-47be-b433-d43d771c64e1","name":"Xano Auth","namespace":"xanoAuth"},{"id":"cd33cf33-e29f-4e8c-ac26-b997fe507ce7","name":"Xano","namespace":"xano"},{"id":"2bd1c688-31c5-443e-ae25-59aa5b6431fb","name":"REST API","namespace":"restApi"},{"id":"36816525-6e0d-4217-b792-19f5d8682c46","name":"GraphQL","namespace":"graphql"},{"id":"8bc1b5c9-29e4-4269-becb-a2e1a8de9127","name":"WeWeb Email","namespace":"wewebEmail"},{"id":"832d6f7a-42c3-43f1-a3ce-9a678272f811","name":"Date","namespace":"dayjs"}]};
// eslint-disable-next-line no-undef
window.wwg_cacheVersion = 169;
// eslint-disable-next-line no-undef
window.wwg_pluginsSettings = pluginsSettings;
// eslint-disable-next-line no-undef
window.wwg_disableManifest = false;

const defaultLang = window.wwg_designInfo.langs.find(({ default: isDefault }) => isDefault) || {};

const registerRoute = (page, lang, forcedPath) => {
    const langSlug = !lang.default || lang.isDefaultPath ? `/${lang.lang}` : '';
    let path =
        forcedPath ||
        (page.id === window.wwg_designInfo.homePageId ? '/' : `/${page.paths[lang.lang] || page.paths.default}`);

    //Replace params
    path = path.replace(/{{([\w]+)\|([^/]+)?}}/g, ':$1');

    routes.push({
        path: langSlug + path,
        component: wwPage,
        name: `page-${page.id}-${lang.lang}`,
        meta: {
            pageId: page.id,
            lang,
            isPrivate: !!page.pageUserGroups?.length,
        },
        async beforeEnter(to, from) {
            if (to.name === from.name) return;
            //Set page lang
            wwLib.wwLang.defaultLang = defaultLang.lang;
            wwLib.$store.dispatch('front/setLang', lang.lang);

            //Init plugins
            await initializePlugins();

            //Check if private page
            if (page.pageUserGroups?.length) {
                // cancel navigation if no plugin
                if (!wwLib.wwAuth.plugin) {
                    return false;
                }

                await wwLib.wwAuth.init();

                // Redirect to not sign in page if not logged
                if (!wwLib.wwAuth.getIsAuthenticated()) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthenticatedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }

                //Check roles are required
                if (
                    page.pageUserGroups.length > 1 &&
                    !wwLib.wwAuth.matchUserGroups(page.pageUserGroups.map(({ userGroup }) => userGroup))
                ) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthorizedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }
            }

            try {
                await import(`@/pages/${page.id.split('_')[0]}.js`);
                await wwLib.wwWebsiteData.fetchPage(page.id);

                //Scroll to section or on top after page change
                if (to.hash) {
                    const targetElement = document.getElementById(to.hash.replace('#', ''));
                    if (targetElement) targetElement.scrollIntoView();
                } else {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                }

                return;
            } catch (err) {
                wwLib.$store.dispatch('front/showPageLoadProgress', false);

                if (err.redirectUrl) {
                    return { path: err.redirectUrl || '404' };
                } else {
                    //Any other error: go to target page using window.location
                    window.location = to.fullPath;
                }
            }
        },
    });
};

for (const page of window.wwg_designInfo.pages) {
    for (const lang of window.wwg_designInfo.langs) {
        if (!page.langs.includes(lang.lang)) continue;
        registerRoute(page, lang);
    }
}

const page404 = window.wwg_designInfo.pages.find(page => page.paths.default === '404');
if (page404) {
    for (const lang of window.wwg_designInfo.langs) {
        // Create routes /:lang/:pathMatch(.*)* etc for all langs of the 404 page
        if (!page404.langs.includes(lang.lang)) continue;
        registerRoute(
            page404,
            {
                default: false,
                lang: lang.lang,
            },
            '/:pathMatch(.*)*'
        );
    }
    // Create route /:pathMatch(.*)* using default project lang
    registerRoute(page404, { default: true, isDefaultPath: false, lang: defaultLang.lang }, '/:pathMatch(.*)*');
} else {
    routes.push({
        path: '/:pathMatch(.*)*',
        async beforeEnter() {
            window.location.href = '/404';
        },
    });
}

let routerOptions = {};

const isProd =
    !window.location.host.includes(
        '-staging.' + (process.env.WW_ENV === 'staging' ? process.env.VUE_APP_PREVIEW_URL : '')
    ) && !window.location.host.includes(process.env.VUE_APP_PREVIEW_URL);

if (isProd && window.wwg_designInfo.baseTag?.href) {
    let baseTag = window.wwg_designInfo.baseTag.href;
    if (!baseTag.startsWith('/')) {
        baseTag = '/' + baseTag;
    }
    if (!baseTag.endsWith('/')) {
        baseTag += '/';
    }

    routerOptions = {
        base: baseTag,
        history: createWebHistory(baseTag),
        routes,
    };
} else {
    routerOptions = {
        history: createWebHistory(),
        routes,
    };
}

router = createRouter({
    ...routerOptions,
    scrollBehavior,
});

//Trigger on page unload
let isFirstNavigation = true;
router.beforeEach(async (to, from) => {
    if (to.name === from.name) return;
    if (!isFirstNavigation) await onPageUnload();
    isFirstNavigation = false;
    wwLib.globalVariables._navigationId++;
    return;
});

//Init page
router.afterEach((to, from, failure) => {
    wwLib.$store.dispatch('front/showPageLoadProgress', false);
    let fromPath = from.path;
    let toPath = to.path;
    if (!fromPath.endsWith('/')) fromPath = fromPath + '/';
    if (!toPath.endsWith('/')) toPath = toPath + '/';
    if (failure || (from.name && toPath === fromPath)) return;
    initializeData(to);
});
/* wwFront:end */

export default router;
