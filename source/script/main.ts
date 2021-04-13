// Editor
import Grape from 'grapesjs';

// Managers
import blockManager from './manager/block';
import styleManager from './manager/style';

// Components
import productPlugin from './components/product';
import productListPlugin from './components/product-list';
import productInformationPlugin from './components/product-information';


const main = (components) => {
    const editor = Grape.init({
        components,

        plugins: [
            productPlugin,
            productListPlugin,
            productInformationPlugin,
        ],
        canvas: {
            styles: ['https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css']
        },

        blockManager: blockManager('#block-manager'),
        styleManager: styleManager('#style-manager'),
        traitManager: {
            appendTo: '#trait-manager'
        },
        // layerManager: {
        //     appendTo: '.layers-container'
        // },
        // selectorManager: {
        //     appendTo: '.styles-container'
        // },
        container: '#editor',
        fromElement: false,
        height: '100%',
        width: 'auto',
        storageManager: false,
        panels: {
            defaults: [],
        },

    });

    editor.addComponents({
        type: 'product-list',
    });
};

main(`
    <p>Text</p>
`);