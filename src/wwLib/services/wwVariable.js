import { ref, readonly as setReadonly, computed, inject, unref } from 'vue';
import { checkVariableType } from '@/_common/helpers/updateVariable.js';
import { cloneDeep } from 'lodash';
import { useVariablesStore } from '@/pinia/variables.js';
import { storeToRefs } from 'pinia';

export default {
    /**
     * @PUBLIC_API
     */
    getValue(variableId) {
        const variablesStore = useVariablesStore(wwLib.$pinia);
        return variablesStore.values[variableId];
    },

    /**
     * @PUBLIC_API
     */
    updateValue(variableId, value, { path, index, arrayUpdateType, workflowContext } = {}) {
        const variablesStore = useVariablesStore(wwLib.$pinia);
        const variable = variablesStore.getConfiguration(variableId);
        try {
            if (!variable) {
                wwLib.logStore.error(`Try to set variable ${variableId} (not found)`, {
                    type: workflowContext ? 'action' : null,
                });
                throw new Error('variable not found');
            }

            if (value === undefined && !['delete', 'shift', 'pop'].includes(arrayUpdateType)) {
                return;
            }

            value = checkVariableType(variable, value, { path, arrayUpdateType });
            variablesStore.setValue(variableId, value, { path, index, arrayUpdateType, workflowContext });

            return value;
        } catch (error) {
            wwLib.wwLog.error(
                `Unable to update variable ${
                    variable ? `${variable.name} of type ${variable.type}` : ''
                } (${variableId}) : ${error.message} - got : `
            );
            wwLib.wwLog.error(value);
        }
    },

    /**
     * @PUBLIC_API
     */
    useComponentVariable({
        uid,
        name,
        defaultValue,
        componentType = 'element',
        type = 'any',
        readonly = false,
        resettable = false,
        onUpdate = () => {},
        labelOnly = null,
        preserveReference = false,
    }) {
        if (!uid) {
            wwLib.wwLog.error(`Missing uid for creating component variable ${name}`);
            return;
        }
        const variableId = ref(null);
        const bindingContext = inject('bindingContext', null);
        const libraryContext = inject('_wwLibraryComponentContext', null);
        const isInsideRepeat = computed(() => bindingContext !== null);
        const isInsideComponent = computed(() => libraryContext !== null);
        const sectionId = inject('sectionId');
        const variablesStore = useVariablesStore();

        if (!isInsideRepeat.value) {
            if (isInsideComponent.value) {
                variableId.value = registerLibraryComponentVariable({
                    uid,
                    name,
                    defaultValue,
                    componentType,
                    type,
                    readonly,
                    resettable,
                    sectionId,
                    labelOnly,
                    libraryContext,
                    preserveReference,
                });
            } else {
                variableId.value = wwLib.wwVariable.registerComponentVariable({
                    uid,
                    name,
                    defaultValue,
                    componentType,
                    type,
                    readonly,
                    resettable,
                    sectionId,
                    labelOnly,
                    preserveReference,
                });
            }
        }

        const wwElementState = inject('wwElementState');
        const propValue = computed(() => wwElementState.props[name]);
        const hasPropValue = computed(() => Object.keys(wwElementState.props).includes(name));

        // TODO: do we deepClone for Object and Array?
        const internalValue = ref(
            isInsideRepeat.value
                ? unref(defaultValue)
                : isInsideComponent.value
                ? libraryContext?.component?.variables[variableId.value]
                : variablesStore.values[variableId.value]
        );
        const currentValue = computed(() => {
            if (hasPropValue.value) {
                return propValue.value;
            }
            if (isInsideRepeat.value) {
                return internalValue.value;
            }
            if (isInsideComponent.value) {
                return libraryContext?.component?.variables[variableId.value];
            }
            return variablesStore.values[variableId.value];
        });

        const triggerElementEvent = inject('triggerElementEvent');
        function setValue(value) {
            const oldValue = _.cloneDeep(currentValue.value);
            if (hasPropValue.value) {
                triggerElementEvent({ type: `update:${name}`, value });
                return;
            }
            if (!isInsideRepeat.value) {
                let newValue;
                if (isInsideComponent.value) {
                    newValue = libraryContext?.component?.methods?.updateVariable(variableId.value, value);
                } else {
                    newValue = wwLib.wwVariable.updateValue(variableId.value, value);
                }
                if (newValue !== oldValue) onUpdate(newValue, oldValue);
            }
            internalValue.value = value;
        }

        return {
            value: setReadonly(currentValue),
            internalValue: setReadonly(internalValue),
            setValue,
        };
    },

    registerComponentVariable({
        uid,
        name,
        id,
        defaultValue,
        componentType,
        type,
        readonly,
        resettable,
        sectionId,
        labelOnly,
        initialValue,
        useInitialValue = false,
        preserveReference = false,
    }) {
        id = id || `${uid}-${name}`;
        const variablesStore = useVariablesStore(wwLib.$pinia);
        variablesStore.add('component', id, {
            componentUid: uid,
            id,
            name,
            defaultValue,
            componentType,
            type,
            readonly,
            resettable,
            sectionId,
            labelOnly,
            preserveReference,
        });
        variablesStore.values[id] = useInitialValue ? initialValue : cloneDeep(unref(defaultValue));

        return id;
    },
    registerLibraryComponentVariable,
 };

function registerLibraryComponentVariable({
    uid,
    id,
    name,
    defaultValue,
    componentType,
    type,
    readonly,
    resettable,
    sectionId,
    labelOnly,
    libraryContext,
    initialValue,
    useInitialValue = false,
}) {
    id = id || `${uid}-${name}`;
    libraryContext.component.componentVariablesConfiguration[id] = {
        componentUid: uid,
        id,
        name,
        defaultValue,
        componentType,
        type,
        readonly,
        resettable,
        sectionId,
        labelOnly,
    };

    // TODO: this is not necessary ?? Already done by the watch inside the component?
    libraryContext.component.variables[id] = useInitialValue ? initialValue : cloneDeep(unref(defaultValue));

    return id;
}