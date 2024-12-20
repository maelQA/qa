export default {
    features: {
        auth: true,
    },
    editor: {
        settings: [
            {
                label: 'Configuration',
                icon: 'advanced',
                edit: () => import('./src/components/Configuration/SettingsEdit.vue'),
                summary: () => import('./src/components/Configuration/SettingsSummary.vue'),
                getIsValid(settings) {
                    const { loginEndpoint, getMeEndpoint, signupEndpoint, customDomain = '' } = settings.publicData;
                    const { apiKey, metaApiKey, instanceId, workspaceId } = settings.privateData;
                    return (
                        !!loginEndpoint &&
                        !!getMeEndpoint &&
                        !!signupEndpoint &&
                        (metaApiKey || apiKey) &&
                        !!instanceId &&
                        !!workspaceId &&
                        (!customDomain || !customDomain.includes('http'))
                    );
                },
                onSave: 'initManager',
            },
            {
                label: 'Data Source',
                edit: () => import('./src/components/DataSource/SettingsEdit.vue'),
                summary: () => import('./src/components/DataSource/SettingsSummary.vue'),
                getIsValid() {
                    return true;
                },
            },
            {
                label: 'Branching',
                edit: () => import('./src/components/Branching/SettingsEdit.vue'),
                summary: () => import('./src/components/Branching/SettingsSummary.vue'),
                getIsValid() {
                    return true;
                },
                onSave: 'updateBranch',
            },
            {
                label: 'Global Headers',
                edit: () => import('./src/components/GlobalHeaders/SettingsEdit.vue'),
                summary: () => import('./src/components/GlobalHeaders/SettingsSummary.vue'),
                getIsValid() {
                    return true;
                },
            },
        ],
        designSystemId: '9a1f106a-1397-4fb4-8b9a-369d744e6aa3',
    },
    variables: [
        { name: 'user', value: 'user', type: 'object', defaultValue: null },
        { name: 'isAuthenticated', value: 'isAuthenticated', type: 'boolean', defaultValue: false },
        { name: 'accessToken', value: 'token', type: 'string', defaultValue: null },
    ],
    actions: [
        {
            name: 'Sign Up',
            code: 'signUp',
            isAsync: true,
        },
        {
            name: 'Login',
            code: 'login',
            isAsync: true,
        },
        {
            name: 'Login Provider',
            code: 'loginProvider',
            isAsync: true,
        },
        {
            name: 'Fetch User',
            code: 'fetchUser',
            isAsync: true,
        },
        {
            name: 'Store Auth Token',
            code: 'storeAuthToken',
        },
        {
            name: 'Logout',
            code: 'logout',
        },
    ],
};
