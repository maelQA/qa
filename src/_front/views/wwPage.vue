<template>
    <wwPageLoadProgress />
    <div :ww-page-id="page.id" class="website-wrapper">
        <!-- __WW_PAGE_MADE_WITH_WEWEB__ -->
        <div v-if="page && page.pageLoaded" class="sections-wrapper">
            <template v-for="(section, index) in sections" :key="section.uid">
                <!-- wwFront:start -->
                <div class="placeholder-section" :data-placeholder-section-uid="section.uid"></div>
                <!-- wwFront:end -->
                <wwSection
                    :uid="section.uid"
                    :section-index="index"
                    :index="index"
                    :ww-responsive="`ww-section-${index}`"
                />
            </template>
         </div>
        <!-- POPUPS -->
        <transition name="ww-front-popups" tag="div">
            <wwLinkPopup
                v-if="activeLinkPopup"
                :content="activeLinkPopup.content"
                :background="activeLinkPopup.background"
                :section-id="activeLinkPopup.sectionId"
            />
        </transition>
    </div>
</template>

<script>
import { computed, ref } from 'vue';
import { mapGetters, useStore } from 'vuex';
import wwPageLoadProgress from '@/_front/components/wwPageLoadProgress';
import { getBackgroundStyle } from '@/_front/helpers/wwBackgroungStyle';

/* wwFront:start */
import { useHead } from '@vueuse/head';
/* wwFront:end */

 
export default {
    components: {
        wwPageLoadProgress,
    },
    setup() {
        const store = useStore();
        const page = computed(() => store.getters['websiteData/getPage'] || { id: null, meta: {} });
        const designInfo = computed(() => store.getters['websiteData/getDesignInfo'] || {});

        /* wwFront:start */
        const loadAllSections = ref(false);
        const homePage = computed(
            () => store.getters['websiteData/getPageById'](designInfo.value.homePageId) || { id: null, meta: {} }
        );
        // TODO: not execute on first load
        useHead({
            title: computed(() => wwLib.wwLang.getText(page.value.title) || wwLib.wwLang.getText(homePage.value.title)),
            htmlAttrs: { lang: wwLib.wwLang.lang, amp: false },
        });
        /* wwFront:end */
        return {
            designInfo,
            page,
            mousePosition: {
                x: 0,
                y: 0,
            },
            /* wwFront:start */
            loadAllSections,
            sections: computed(() => {
                const sections = store.getters['websiteData/getSections'];
                if (!loadAllSections.value) return page.value.sections.map(({ uid }) => sections[uid]).slice(0, 4);
                return page.value.sections.map(({ uid }) => sections[uid]);
            }),
            /* wwFront:end */
         };
    },
    computed: {
        ...mapGetters({
            designInfo: 'websiteData/getDesignInfo',
            activeLinkPopup: 'front/getActiveLinkPopup',
            screen: 'front/getScreenSize',
            theme: 'front/getTheme',
         }),
        background() {
            return getBackgroundStyle(this.designInfo?.background || {});
        },
    },
    watch: {
        activeLinkPopup() {
            if (this.activeLinkPopup) {
                document.querySelector('html').classList.add('ww-link-popup-open');
            } else {
                document.querySelector('html').classList.remove('ww-link-popup-open');
            }
        },
         theme() {
            this.setTheme();
        },
        background() {
            this.setBackground();
        },
        page: {
            immediate: true,
            handler(newValue) {
                if (newValue.pageLoaded) {
                    setTimeout(() => {
                        this.loadAllSections = true;
                    }, 300);
                }
            },
        },
    },
    mounted() {
         this.setTheme();
        this.setBackground();
    },
     methods: {
        setTheme() {
            if (this.theme === 'dark') {
                wwLib.getFrontDocument().documentElement.classList.add('ww-app-theme-dark');
            } else {
                wwLib.getFrontDocument().documentElement.classList.remove('ww-app-theme-dark');
            }
        },
        setBackground() {
            wwLib.getFrontDocument().documentElement.style.background = this.background;
        },
        getTarget(section) {
            return `[data-placeholder-section-uid="${section.uid}"],[data-section-uid="${section.uid}"]`;
        },
     },
};
</script>

<style lang="scss">
html {
    overflow-x: hidden;
    width: 100%;

    &.ww-link-popup-open {
        overflow-y: hidden;
    }
}
 </style>

<style scoped lang="scss">
.website-wrapper {
    height: 100%;
    .placeholder-section {
        opacity: 0;
        height: 0;
        width: 0;
        overflow: hidden;
        pointer-events: none;
    }

    .sections-wrapper {
        position: relative;
        isolation: isolate;
     }
}
.ww-front-popups-enter-active,
.ww-front-popups-leave-active {
    transition: all 0.3s;
}
.ww-front-popups-enter-from, .ww-front-popups-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: scale(0.95);
}
</style>
