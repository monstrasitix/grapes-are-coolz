export const elementGetter = selector => editor => (
    editor
        .getContainer()
        .closest('.editor-row')
        .querySelector(selector)
);


export const togglePanel = (selector) => {
    const getter = elementGetter(selector);

    return {
        run(editor) {
            getter(editor).style.display = '';
        },
        stop(editor) {
            getter(editor).style.display = 'none';
        },
    };
};


export default (editor) => {
    editor.Commands.add('show-layers', togglePanel('.layers-container'));
    editor.Commands.add('show-styles', togglePanel('.styles-container'));
};