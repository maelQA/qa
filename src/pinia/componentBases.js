import { defineStore } from 'pinia';
import { getInheritedConfiguration } from '@/_common/helpers/configuration/configuration';
 
export const useComponentBasesStore = defineStore('componentBases', () => {
    let configurations;
    /* wwFront:start */
    // eslint-disable-next-line no-undef
    configurations = {'plugin-00d22f72-1a03-44f8-ad68-c593dc80b543': getInheritedConfiguration({ ...require('@/components/plugins/plugin-00d22f72-1a03-44f8-ad68-c593dc80b543/ww-config.js').default, name: 'plugin-00d22f72-1a03-44f8-ad68-c593dc80b543' }),
'plugin-75b9e021-a5fe-4ae9-8c6a-f4b3e65f2a24': getInheritedConfiguration({ ...require('@/components/plugins/plugin-75b9e021-a5fe-4ae9-8c6a-f4b3e65f2a24/ww-config.js').default, name: 'plugin-75b9e021-a5fe-4ae9-8c6a-f4b3e65f2a24' }),
'plugin-3a407b45-9c63-471d-b09b-15cf797e5566': getInheritedConfiguration({ ...require('@/components/plugins/plugin-3a407b45-9c63-471d-b09b-15cf797e5566/ww-config.js').default, name: 'plugin-3a407b45-9c63-471d-b09b-15cf797e5566' }),
'plugin-69d4a5bb-09a3-4f3d-a94e-667c21c057eb': getInheritedConfiguration({ ...require('@/components/plugins/plugin-69d4a5bb-09a3-4f3d-a94e-667c21c057eb/ww-config.js').default, name: 'plugin-69d4a5bb-09a3-4f3d-a94e-667c21c057eb' }),
'plugin-1c5f5c0f-5609-4031-9e57-5bb4811be7b3': getInheritedConfiguration({ ...require('@/components/plugins/plugin-1c5f5c0f-5609-4031-9e57-5bb4811be7b3/ww-config.js').default, name: 'plugin-1c5f5c0f-5609-4031-9e57-5bb4811be7b3' }),
'plugin-2adce8d5-2056-479d-a21a-068f55a8077f': getInheritedConfiguration({ ...require('@/components/plugins/plugin-2adce8d5-2056-479d-a21a-068f55a8077f/ww-config.js').default, name: 'plugin-2adce8d5-2056-479d-a21a-068f55a8077f' }),
'plugin-ee24f5ac-e15e-4ddd-baa4-0b4baedf90c9': getInheritedConfiguration({ ...require('@/components/plugins/plugin-ee24f5ac-e15e-4ddd-baa4-0b4baedf90c9/ww-config.js').default, name: 'plugin-ee24f5ac-e15e-4ddd-baa4-0b4baedf90c9' }),
'plugin-615d0fde-2084-4ac2-a2a4-5eb7686446ce': getInheritedConfiguration({ ...require('@/components/plugins/plugin-615d0fde-2084-4ac2-a2a4-5eb7686446ce/ww-config.js').default, name: 'plugin-615d0fde-2084-4ac2-a2a4-5eb7686446ce' }),
'plugin-60610cfd-fa28-4fc1-9e72-088b5c667e81': getInheritedConfiguration({ ...require('@/components/plugins/plugin-60610cfd-fa28-4fc1-9e72-088b5c667e81/ww-config.js').default, name: 'plugin-60610cfd-fa28-4fc1-9e72-088b5c667e81' }),
'plugin-9c40819b-4a8f-468f-9ba5-4b9699f3361f': getInheritedConfiguration({ ...require('@/components/plugins/plugin-9c40819b-4a8f-468f-9ba5-4b9699f3361f/ww-config.js').default, name: 'plugin-9c40819b-4a8f-468f-9ba5-4b9699f3361f' }),
'plugin-d66a250d-8468-469e-ad33-ee028f632398': getInheritedConfiguration({ ...require('@/components/plugins/plugin-d66a250d-8468-469e-ad33-ee028f632398/ww-config.js').default, name: 'plugin-d66a250d-8468-469e-ad33-ee028f632398' }),
'plugin-f5856798-485d-47be-b433-d43d771c64e1': getInheritedConfiguration({ ...require('@/components/plugins/plugin-f5856798-485d-47be-b433-d43d771c64e1/ww-config.js').default, name: 'plugin-f5856798-485d-47be-b433-d43d771c64e1' }),
'plugin-cd33cf33-e29f-4e8c-ac26-b997fe507ce7': getInheritedConfiguration({ ...require('@/components/plugins/plugin-cd33cf33-e29f-4e8c-ac26-b997fe507ce7/ww-config.js').default, name: 'plugin-cd33cf33-e29f-4e8c-ac26-b997fe507ce7' }),
'plugin-2bd1c688-31c5-443e-ae25-59aa5b6431fb': getInheritedConfiguration({ ...require('@/components/plugins/plugin-2bd1c688-31c5-443e-ae25-59aa5b6431fb/ww-config.js').default, name: 'plugin-2bd1c688-31c5-443e-ae25-59aa5b6431fb' }),
'plugin-36816525-6e0d-4217-b792-19f5d8682c46': getInheritedConfiguration({ ...require('@/components/plugins/plugin-36816525-6e0d-4217-b792-19f5d8682c46/ww-config.js').default, name: 'plugin-36816525-6e0d-4217-b792-19f5d8682c46' }),
'plugin-8bc1b5c9-29e4-4269-becb-a2e1a8de9127': getInheritedConfiguration({ ...require('@/components/plugins/plugin-8bc1b5c9-29e4-4269-becb-a2e1a8de9127/ww-config.js').default, name: 'plugin-8bc1b5c9-29e4-4269-becb-a2e1a8de9127' }),
'plugin-832d6f7a-42c3-43f1-a3ce-9a678272f811': getInheritedConfiguration({ ...require('@/components/plugins/plugin-832d6f7a-42c3-43f1-a3ce-9a678272f811/ww-config.js').default, name: 'plugin-832d6f7a-42c3-43f1-a3ce-9a678272f811' }),
'section-ef0ecc71-9a59-4eab-94b0-b36d66d3d61d': getInheritedConfiguration({ ...require('@/components/sections/section-ef0ecc71-9a59-4eab-94b0-b36d66d3d61d/ww-config.js').default, name: 'section-ef0ecc71-9a59-4eab-94b0-b36d66d3d61d' }),
'section-99586bd3-2b15-4d6b-a025-6a50d07ca845': getInheritedConfiguration({ ...require('@/components/sections/section-99586bd3-2b15-4d6b-a025-6a50d07ca845/ww-config.js').default, name: 'section-99586bd3-2b15-4d6b-a025-6a50d07ca845' }),
'wwobject-6ba133b6-a444-414f-93a5-25cd237dd398': getInheritedConfiguration({ ...require('@/components/elements/element-6ba133b6-a444-414f-93a5-25cd237dd398/ww-config.js').default, name: 'wwobject-6ba133b6-a444-414f-93a5-25cd237dd398' }),
'wwobject-b783dc65-d528-4f74-8c14-e27c934c39b1': getInheritedConfiguration({ ...require('@/components/elements/element-b783dc65-d528-4f74-8c14-e27c934c39b1/ww-config.js').default, name: 'wwobject-b783dc65-d528-4f74-8c14-e27c934c39b1' }),
'wwobject-deb10a01-5eef-4aa1-9017-1b51c2ad6fd0': getInheritedConfiguration({ ...require('@/components/elements/element-deb10a01-5eef-4aa1-9017-1b51c2ad6fd0/ww-config.js').default, name: 'wwobject-deb10a01-5eef-4aa1-9017-1b51c2ad6fd0' }),
'wwobject-fd8c482f-532c-4aeb-a7ae-6904a6b62a1b': getInheritedConfiguration({ ...require('@/components/elements/element-fd8c482f-532c-4aeb-a7ae-6904a6b62a1b/ww-config.js').default, name: 'wwobject-fd8c482f-532c-4aeb-a7ae-6904a6b62a1b' }),
'wwobject-1d0468f8-4d33-46fb-9c58-b3742aa7d55a': getInheritedConfiguration({ ...require('@/components/elements/element-1d0468f8-4d33-46fb-9c58-b3742aa7d55a/ww-config.js').default, name: 'wwobject-1d0468f8-4d33-46fb-9c58-b3742aa7d55a' }),
'wwobject-2d18ef4c-e9e5-4dc6-a29d-01d9f797be5e': getInheritedConfiguration({ ...require('@/components/elements/element-2d18ef4c-e9e5-4dc6-a29d-01d9f797be5e/ww-config.js').default, name: 'wwobject-2d18ef4c-e9e5-4dc6-a29d-01d9f797be5e' }),
'wwobject-aa27b26f-0686-4c29-98c5-8217044045b7': getInheritedConfiguration({ ...require('@/components/elements/element-aa27b26f-0686-4c29-98c5-8217044045b7/ww-config.js').default, name: 'wwobject-aa27b26f-0686-4c29-98c5-8217044045b7' }),
'wwobject-83d890fb-84f9-4386-b459-fb4be89a8e15': getInheritedConfiguration({ ...require('@/components/elements/element-83d890fb-84f9-4386-b459-fb4be89a8e15/ww-config.js').default, name: 'wwobject-83d890fb-84f9-4386-b459-fb4be89a8e15' }),
'wwobject-69d0b3ef-b265-494c-8cd1-874da4aa1834': getInheritedConfiguration({ ...require('@/components/elements/element-69d0b3ef-b265-494c-8cd1-874da4aa1834/ww-config.js').default, name: 'wwobject-69d0b3ef-b265-494c-8cd1-874da4aa1834' }),
'wwobject-af811adf-94d9-49dd-ab22-e2f29ae30299': getInheritedConfiguration({ ...require('@/components/elements/element-af811adf-94d9-49dd-ab22-e2f29ae30299/ww-config.js').default, name: 'wwobject-af811adf-94d9-49dd-ab22-e2f29ae30299' }),
'wwobject-d7904e9d-fc9a-4d80-9e32-728e097879ad': getInheritedConfiguration({ ...require('@/components/elements/element-d7904e9d-fc9a-4d80-9e32-728e097879ad/ww-config.js').default, name: 'wwobject-d7904e9d-fc9a-4d80-9e32-728e097879ad' }),
'wwobject-6f8796b1-8273-498d-95fc-7013b7c63214': getInheritedConfiguration({ ...require('@/components/elements/element-6f8796b1-8273-498d-95fc-7013b7c63214/ww-config.js').default, name: 'wwobject-6f8796b1-8273-498d-95fc-7013b7c63214' }),
'wwobject-0d3e75d1-9e77-44cb-a272-8b0825fbc5da': getInheritedConfiguration({ ...require('@/components/elements/element-0d3e75d1-9e77-44cb-a272-8b0825fbc5da/ww-config.js').default, name: 'wwobject-0d3e75d1-9e77-44cb-a272-8b0825fbc5da' })};
    /* wwFront:end */
 
    return {
        configurations,
     };
});
