export const STYLE_CONFIGURATION = {
    backgroundOrder: {
        label: 'Order',
        responsive: true,
        bindable: true,
        states: true,
        classes: true,
        category: 'background',
        bindingValidation: {
            type: 'string',
            markdown: 'background.order',
        },
    },
    backgroundColor: {
        label: 'Color',
        responsive: true,
        bindable: true,
        states: true,
        classes: true,
        category: 'background',
        bindingValidation: {
            markdown: 'background.color',
            type: 'string',
            cssSupports: 'color',
        },
    },
    backgroundGradient: {
        label: 'Gradient',
        responsive: true,
        bindable: true,
        states: true,
        classes: true,
        category: 'background',
        bindingValidation: {
            markdown: 'background',
            type: 'string',
            cssSupports: 'background',
        },
    },
    backgroundImage: {
        label: 'Image',
        responsive: true,
        bindable: true,
        states: true,
        classes: true,
        category: 'background',
        bindingValidation: {
            markdown: 'background.image',
            type: 'string',
            cssSupports: 'backgroundImage',
        },
    },
    backgroundSize: {
        label: 'Size',
        responsive: true,
        bindable: true,
        states: true,
        classes: true,
        category: 'background',
        bindingValidation: {
            markdown: 'background.size',
            type: 'string',
            cssSupports: 'backgroundSize',
        },
    },
    backgroundRepeat: {
        label: 'Repeat',
        responsive: true,
        bindable: true,
        states: true,
        classes: true,
        category: 'background',
        bindingValidation: {
            markdown: 'background.repeat',
            type: 'string',
            cssSupports: 'backgroundRepeat',
        },
    },
    backgroundAttachment: {
        label: 'Attachment',
        responsive: true,
        bindable: true,
        states: true,
        classes: true,
        category: 'background',
        bindingValidation: {
            markdown: 'background.attachment',
            type: 'string',
            cssSupports: 'backgroundAttachment',
        },
    },
    backgroundPositionX: {
        label: 'Position X',
        responsive: true,
        bindable: true,
        states: true,
        classes: true,
        category: 'background',
        bindingValidation: {
            markdown: 'background.position.x',
            type: 'string',
            cssSupports: 'backgroundPositionX',
        },
    },
    backgroundPositionY: {
        label: 'Position Y',
        responsive: true,
        bindable: true,
        states: true,
        classes: true,
        category: 'background',
        bindingValidation: {
            markdown: 'background.position.y',
            type: 'string',
            cssSupports: 'backgroundPositionY',
        },
    },
    backgroundVideo: {
        label: 'Video',
        responsive: true,
        bindable: true,
        states: true,
        classes: true,
        category: 'background',
        componentType: 'section',
        bindingValidation: {
            markdown: 'background.video',
            type: 'string',
        },
    },
    backgroundVideoPoster: {
        label: 'Poster',
        responsive: true,
        bindable: true,
        states: true,
        classes: true,
        category: 'background',
        componentType: 'section',
        bindingValidation: {
            markdown: 'background.video.poster',
            type: 'string',
        },
    },
    backgroundVideoSize: {
        label: 'Size',
        responsive: true,
        bindable: true,
        states: true,
        classes: true,
        category: 'background',
        componentType: 'section',
        bindingValidation: {
            markdown: 'background.video.size',
            type: 'string',
        },
    },
    backgroundVideoLoop: {
        label: 'Loop',
        responsive: true,
        bindable: true,
        states: true,
        classes: true,
        category: 'background',
        componentType: 'section',
        bindingValidation: {
            markdown: 'background.video.loop',
            type: 'boolean',
        },
    },
    backgroundVideoPreload: {
        label: 'Preload',
        responsive: true,
        bindable: true,
        states: true,
        classes: true,
        category: 'background',
        componentType: 'section',
        bindingValidation: {
            markdown: 'background.video.preload',
            type: 'boolean',
        },
    },
    align: {
        label: 'Alignement',
        category: 'display',
        responsive: true,
        bindable: true,
        states: true,
        classes: true,
        bindingValidation: {
            markdown: 'align',
            type: 'string',
            cssSupports: 'align',
        },
    },
    columnSpan: {
        label: 'Column span',
        category: 'display',
        responsive: true,
        bindable: true,
        states: true,
        classes: true,
        bindingValidation: {
            markdown: 'column-span',
            type: 'string',
            cssSupports: 'column-span',
        },
    },
    rowSpan: {
        label: 'Row span',
        category: 'display',
        responsive: true,
        bindable: true,
        states: true,
        classes: true,
        bindingValidation: {
            markdown: 'row-span',
            type: 'string',
            cssSupports: 'row-span',
        },
    },
    gridColumn: {
        label: 'Column position',
        category: 'display',
        responsive: true,
        bindable: true,
        states: true,
        classes: true,
        bindingValidation: {
            markdown: 'column-position',
            type: 'string',
            cssSupports: 'column-position',
        },
    },
    gridRow: {
        label: 'Row position',
        category: 'display',
        responsive: true,
        bindable: true,
        states: true,
        classes: true,
        bindingValidation: {
            markdown: 'row-position',
            type: 'string',
            cssSupports: 'row-position',
        },
    },
    zIndex: {
        label: 'Z index',
        responsive: true,
        category: 'advanced',
        bindable: true,
        states: true,
        classes: true,
        bindingValidation: {
            markdown: 'z-index',
            type: 'string',
            cssSupports: 'z-index',
        },
    },
    overflow: {
        label: 'Overflow',
        category: 'advanced',
        responsive: true,
        bindable: true,
        states: true,
        classes: true,
        bindingValidation: {
            markdown: 'overflow',
            type: 'string',
            cssSupports: 'overflow',
        },
    },
    position: {
        label: 'Position',
        category: 'advanced',
        responsive: true,
        states: true,
        classes: true,
        bindingValidation: {
            markdown: 'position',
            type: 'string',
            cssSupports: 'position',
        },
    },
    anchor: {
        label: 'Anchor',
        category: 'advanced',
        responsive: true,
        states: true,
        classes: true,
    },
    top: {
        label: 'Top',
        category: 'advanced',
        responsive: true,
        states: true,
        bindable: true,
        classes: true,
        bindingValidation: {
            markdown: 'top',
            type: 'string',
            cssSupports: 'top',
        },
    },
    bottom: {
        label: 'Bottom',
        category: 'advanced',
        responsive: true,
        states: true,
        bindable: true,
        classes: true,
        bindingValidation: {
            markdown: 'bottom',
            type: 'string',
            cssSupports: 'bottom',
        },
    },
    left: {
        label: 'Left',
        category: 'advanced',
        responsive: true,
        states: true,
        bindable: true,
        classes: true,
        bindingValidation: {
            markdown: 'left',
            type: 'string',
            cssSupports: 'left',
        },
    },
    right: {
        label: 'Right',
        category: 'advanced',
        responsive: true,
        states: true,
        bindable: true,
        classes: true,
        bindingValidation: {
            markdown: 'right',
            type: 'string',
            cssSupports: 'right',
        },
    },
    height: {
        label: 'Height',
        category: 'sizing',
        responsive: true,
        bindable: true,
        states: true,
        classes: true,
        bindingValidation: {
            markdown: 'height',
            type: 'string',
            cssSupports: 'height',
        },
    },
    aspectRatio: {
        label: 'Aspect ratio',
        responsive: true,
        bindable: true,
        states: true,
        classes: true,
        bindingValidation: {
            markdown: 'aspectRatio',
            type: 'string',
            cssSupports: 'aspect-ratio',
        },
    },
    minHeight: {
        label: 'Min height',
        responsive: true,
        bindable: true,
        states: true,
        classes: true,
        bindingValidation: {
            markdown: 'min-height',
            type: 'string',
            cssSupports: 'min-height',
        },
    },
    maxHeight: {
        label: 'Max height',
        category: 'sizing',
        responsive: true,
        bindable: true,
        states: true,
        classes: true,
        bindingValidation: {
            markdown: 'max-height',
            type: 'string',
            cssSupports: 'max-height',
        },
    },
    width: {
        label: 'Width',
        category: 'sizing',
        responsive: true,
        bindable: true,
        states: true,
        classes: true,
        bindingValidation: {
            markdown: 'width',
            type: 'string',
            cssSupports: 'width',
        },
    },
    minWidth: {
        label: 'Min width',
        category: 'sizing',
        responsive: true,
        bindable: true,
        states: true,
        classes: true,
        bindingValidation: {
            markdown: 'min-width',
            type: 'string',
            cssSupports: 'min-width',
        },
    },
    maxWidth: {
        label: 'Max width',
        category: 'sizing',
        responsive: true,
        bindable: true,
        states: true,
        classes: true,
        bindingValidation: {
            markdown: 'max-width',
            type: 'string',
            cssSupports: 'max-width',
        },
    },
    padding: {
        label: 'Padding',
        category: 'spacing',
        responsive: true,
        bindable: true,
        states: true,
        classes: true,
        bindingValidation: {
            markdown: 'padding',
            type: 'string',
            cssSupports: 'padding',
        },
    },
    margin: {
        label: 'Margin',
        category: 'spacing',
        responsive: true,
        bindable: true,
        states: true,
        classes: true,
        bindingValidation: {
            markdown: 'margin',
            type: 'string',
            cssSupports: 'margin',
        },
    },
    border: {
        label: 'Border',
        category: 'borders-shadows',
        responsive: true,
        bindable: true,
        states: true,
        classes: true,
        bindingValidation: {
            markdown: 'border',
            type: 'string',
            cssSupports: 'border',
        },
    },
    borderTop: {
        label: 'Border top',
        category: 'borders-shadows',
        bindable: true,
        responsive: true,
        states: true,
        classes: true,
        bindingValidation: {
            markdown: 'border-top',
            type: 'string',
            cssSupports: 'border-top',
        },
    },
    borderBottom: {
        label: 'Border bottom',
        category: 'borders-shadows',
        bindable: true,
        responsive: true,
        states: true,
        classes: true,
        bindingValidation: {
            markdown: 'border-bottom',
            type: 'string',
            cssSupports: 'border-bottom',
        },
    },
    borderRight: {
        label: 'Border right',
        category: 'borders-shadows',
        bindable: true,
        responsive: true,
        states: true,
        classes: true,
        bindingValidation: {
            markdown: 'border-right',
            type: 'string',
            cssSupports: 'border-right',
        },
    },
    borderLeft: {
        label: 'Border left',
        category: 'borders-shadows',
        bindable: true,
        responsive: true,
        states: true,
        classes: true,
        bindingValidation: {
            markdown: 'border-left',
            type: 'string',
            cssSupports: 'border-left',
        },
    },
    outline: {
        label: 'Outline',
        category: 'borders-outline',
        responsive: true,
        bindable: true,
        states: true,
        classes: true,
        bindingValidation: {
            markdown: 'outline',
            type: 'string',
            cssSupports: 'outline',
        },
    },
    outlineOffset: {
        label: 'Outline Offset',
        category: 'borders-outline',
        responsive: true,
        bindable: true,
        states: true,
        classes: true,
        bindingValidation: {
            markdown: 'outline-offset',
            type: 'string',
            cssSupports: 'outline-offset',
        },
    },
    borderRadius: {
        label: 'Border radius',
        category: 'borders-shadows',
        responsive: true,
        bindable: true,
        states: true,
        classes: true,
        bindingValidation: {
            markdown: 'border-radius',
            type: 'string',
            cssSupports: 'border-radius',
        },
    },
    boxShadow: {
        label: 'Shadow',
        category: 'borders-shadows',
        responsive: true,
        bindable: true,
        states: true,
        classes: true,
        bindingValidation: {
            markdown: 'box-shadow',
            type: 'string',
            cssSupports: 'box-shadow',
        },
    },
    cursor: {
        label: 'Cursor',
        category: 'advanced',
        responsive: true,
        bindable: true,
        states: true,
        classes: true,
        bindingValidation: {
            markdown: 'cursor',
            type: 'string',
            cssSupports: 'cursor',
        },
    },
    textAlign: {
        label: 'Text align',
        category: 'display',
        responsive: true,
        bindable: true,
        states: true,
        classes: true,
        bindingValidation: {
            markdown: 'text-align',
            type: 'string',
            cssSupports: 'text-align',
        },
    },
    display: {
        label: 'Display',
        category: 'display',
        responsive: true,
        bindable: true,
        states: true,
        classes: true,
        defaultUndefined: true,
        bindingValidation: {
            markdown: 'display',
            validations: [
                {
                    type: 'string',
                    cssSupports: 'display',
                },
                {
                    type: 'boolean',
                },
            ],
        },
    },
    customCss: {
        label: 'Custom CSS',
        category: 'custom-css',
        responsive: true,
        states: true,
        classes: true,
    },
    transform: {
        label: 'Transform',
        category: 'advanced',
        responsive: true,
        states: true,
        bindable: true,
        classes: true,
        bindingValidation: {
            markdown: 'transform',
            type: 'string',
            cssSupports: 'transform',
        },
    },
    perspective: {
        label: 'Perspective',
        category: 'advanced',
        responsive: true,
        states: true,
        bindable: true,
        classes: true,
        bindingValidation: {
            markdown: 'perspective',
            type: 'string',
            cssSupports: 'perspective',
        },
    },
    opacity: {
        label: 'Opacity',
        category: 'advanced',
        responsive: true,
        states: true,
        bindable: true,
        classes: true,
        bindingValidation: {
            markdown: 'opacity',
            type: 'number',
            cssSupports: 'opacity',
        },
    },
    transition: {
        label: 'Transition',
        category: 'advanced',
        responsive: true,
        states: true,
        bindable: true,
        classes: true,
        bindingValidation: {
            markdown: 'transition',
            type: 'string',
            cssSupports: 'transition',
        },
    },
    flex: {
        label: 'Flex',
        category: 'display',
        responsive: true,
        states: true,
        bindable: true,
        classes: true,
        bindingValidation: {
            markdown: 'flex',
            type: 'string',
            cssSupports: 'flex',
        },
    },
    animationDuration: {
        label: 'Duration',
        category: 'animation',
        responsive: true,
        states: true,
        bindable: true,
        classes: true,
        bindingValidation: {
            markdown: 'animation-duration',
            type: 'string',
            cssSupports: 'animation-duration',
        },
    },
    animationTimingFunction: {
        label: 'Transition',
        category: 'animation',
        responsive: true,
        states: true,
        bindable: true,
        classes: true,
        bindingValidation: {
            markdown: 'animation-timing-function',
            type: 'string',
            cssSupports: 'animation-timing-function',
        },
    },
    animationDelay: {
        label: 'Delay',
        category: 'animation',
        responsive: true,
        states: true,
        bindable: true,
        classes: true,
        bindingValidation: {
            markdown: 'animation-delay',
            type: 'string',
            cssSupports: 'animation-delay',
        },
    },
    animationIterationCount: {
        label: 'Iterations',
        category: 'animation',
        responsive: true,
        states: true,
        bindable: true,
        classes: true,
        bindingValidation: {
            markdown: 'animation-iteration-count',
            validations: [
                {
                    type: 'string',
                    cssSupports: 'animation-iteration-count',
                },
                {
                    type: 'number',
                    cssSupports: 'animation-iteration-count',
                },
            ],
        },
    },
    animationDirection: {
        label: 'Alternate',
        category: 'animation',
        responsive: true,
        states: true,
        bindable: true,
        classes: true,
        bindingValidation: {
            markdown: 'animation-direction',
            type: 'string',
            cssSupports: 'animation-direction',
        },
    },
    animationPlayState: {
        label: 'Run animation',
        category: 'animation',
        responsive: true,
        states: true,
        bindable: true,
        classes: true,
        bindingValidation: {
            markdown: 'animation-play-state',
            type: 'string',
            cssSupports: 'animation-play-state',
        },
    },
    animationFillMode: {
        label: 'Fill mode',
        category: 'animation',
        responsive: true,
        states: true,
        bindable: true,
        classes: true,
        bindingValidation: {
            markdown: 'animation-fill-mode',
            type: 'string',
            cssSupports: 'animation-fill-mode',
        },
    },
    animationKeyframes: {
        label: 'Keyframes',
        category: 'animation',
        responsive: true,
        states: true,
        bindable: true,
        classes: true,
        bindingValidation: {
            markdown: 'keyframes',
            type: 'string',
        },
    },
    conditionalRendering: {
        label: 'Conditional rendering',
        bindable: true,
        defaultUndefined: true,
        responsive: true,
        states: true,
        canReset: true,
        bindingValidation: {
            validations: [
                {
                    type: 'boolean',
                },
            ],
        },
    },
};

export const STATE_CONFIGURATION = {
    id: {
        label: 'Id',
        bindable: true,
        category: 'attributes',
    },
    class: {
        label: 'Class',
        bindable: true,
        classes: true,
        category: 'attributes',
    },
    attributes: {
        label: 'Attributes',
        type: 'Array',
        category: 'attributes',
        options: {
            item: {
                type: 'Object',
                defaultValue: { name: '', value: '' },
                options: {
                    item: {
                        name: {
                            type: 'Text',
                            options: { placeholder: 'Name', prevent: [/ /g] },
                            bindable: true,
                        },
                        value: {
                            type: 'Text',
                            options: { placeholder: 'Value' },
                            bindable: true,
                        },
                    },
                },
            },
        },
        bindable: true,
        classes: true,
    },
    link: {
        type: 'Object',
        options: {
            item: {
                type: {},
                pageId: { bindable: true },
                parameters: { bindable: true },
                sectionId: { bindable: true },
                href: { bindable: true },
                file: { bindable: true },
                targetBlank: { bindable: true },
                background: { bindable: true },
                content: {},
                query: {
                    type: 'Array',
                    options: {
                        item: {
                            type: 'Object',
                            options: {
                                item: {
                                    name: { type: 'Text', options: { placeholder: 'Name' } },
                                    value: {
                                        type: 'Text',
                                        bindable: true,
                                        options: { placeholder: 'Value' },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
        bindable: true,
    },
    watchScrollPosition: {
        category: 'advancedInteractions',
    },
    interactions: {
        noRootMerge: true,
    },
    hydrate: {},
    forceRendering: {
        editorOnly: true,
    },
    states: {
        noRootMerge: true,
    },
    libraryComponentInjected: {
        noRootMerge: true,
    },
    dropzoneContext: {
        noRootMerge: true,
        bindable: true,
    },
 };
