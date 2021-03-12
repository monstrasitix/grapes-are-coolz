// Core
import Grape from 'grapesjs';

// Managers
import styleManager from './manager/style';
import blockManager from './manager/block';

// Panels
import panelDefault from './panel/default';
import panelSetup from './panel/setup';
import panelCommands from './panel/commands';


export const appEditor = (components) => {
    const editor = Grape.init({
        components,

        layerManager: {
            appendTo: '.layers-container'
        },

        canvas: {
            styles: ['https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css']
        },

        selectorManager: {
            appendTo: '.styles-container'
        },
        blockManager: blockManager('#blocks'),
        styleManager: styleManager('.styles-container'),

        // Indicate where to init the editor. You can also pass an HTMLElement
        container: '#app',
        // Get the content for the canvas directly from the element
        // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
        fromElement: false,
        // Size of the editor
        height: '100%',
        width: 'auto',
        // Disable the storage manager for the moment
        storageManager: false,
        // Avoid any default panel
        panels: {
            defaults: panelDefault,
        },
    });

    panelSetup(editor);
    panelCommands(editor);

    return editor;
};
