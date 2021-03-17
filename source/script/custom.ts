// Editor
import Grape from 'grapesjs';

// Managers
import blockManager from './manager/block';
import styleManager from './manager/style';


const productInformationPlugin = (editor) => {
    editor.DomComponents.addType('product-information', {
        isComponent: el => (
            el.tagName === 'div' && el.classList.contains('product-info')
        ),

        model: {
            defaults: {
                tagName: 'div',
                draggable: '*',
                droppable: false,
                attributes: {
                    class: 'something',
                },
                components: `
                    <div
                        class="product-info grid grid-cols-2 p-4"
                        data-gjs-droppable="false"
                        data-gjs-draggable="false"
                    >
                        <div
                            class="w-1/2 p-4"
                            data-gjs-droppable="false"
                            data-gjs-badgable="false"
                            data-gjs-draggable="false"
                            data-gjs-highlightable="false"
                            data-gjs-layerable="false"
                            data-gjs-hoverable="false"
                        >
                            <img
                                class="w-full h-60"
                                data-gjs-droppable="false"
                                data-gjs-badgable="false"
                                data-gjs-draggable="false"
                                src="https://via.placeholder.com/150"
                                alt="Some image"
                            />
                        </div>

                        <div
                            class="w-1/2"
                            data-gjs-droppable="false"
                            data-gjs-badgable="false"
                            data-gjs-draggable="false"
                            data-gjs-hoverable="false"
                            data-gjs-layerable="false"
                        >
                            <h3
                                class="text-xl"
                                data-gjs-droppable="false"
                                data-gjs-badgable="false"
                                data-gjs-draggable="false"
                            >
                                Heading
                            </h3>

                            <p
                                class="my-2"
                                data-gjs-droppable="false"
                                data-gjs-badgable="false"
                                data-gjs-draggable="false"
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Eum, recusandae. Quos quidem esse iure. Quod illo asperiores
                                ipsam modi quae obcaecati ex animi, accusantium, sed doloremque
                                deleniti hic cupiditate dolorum!
                            </p>
                        </div>
                    </div>
                `,
            }
        },
    });
};


const main = (components) => {
    const editor = Grape.init({
        components,

        plugins: [productInformationPlugin],
        canvas: {
            styles: ['https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css']
        },

        blockManager: blockManager('#block-manager'),
        styleManager: styleManager('#style-manager'),

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
        type: 'product-information',
    });
};

main(`
    <p>Text</p>
`);

// main(`
//     <div>
//         <section>
//             <h1>Heading 1</h1>

//             <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Eum, recusandae. Quos quidem esse iure. Quod illo asperiores
//                 ipsam modi quae obcaecati ex animi, accusantium, sed doloremque
//                 deleniti hic cupiditate dolorum!
//             </p>

//             <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Eum, recusandae. Quos quidem esse iure. Quod illo asperiores
//                 ipsam modi quae obcaecati ex animi, accusantium, sed doloremque
//                 deleniti hic cupiditate dolorum!
//             </p>
//         </section>

//         <section>
//             <h1>Heading 1</h1>

//             <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Eum, recusandae. Quos quidem esse iure. Quod illo asperiores
//                 ipsam modi quae obcaecati ex animi, accusantium, sed doloremque
//                 deleniti hic cupiditate dolorum!
//             </p>

//             <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Eum, recusandae. Quos quidem esse iure. Quod illo asperiores
//                 ipsam modi quae obcaecati ex animi, accusantium, sed doloremque
//                 deleniti hic cupiditate dolorum!
//             </p>
//         </section>

//         <section>
//             <h1>Heading 1</h1>

//             <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Eum, recusandae. Quos quidem esse iure. Quod illo asperiores
//                 ipsam modi quae obcaecati ex animi, accusantium, sed doloremque
//                 deleniti hic cupiditate dolorum!
//             </p>

//             <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Eum, recusandae. Quos quidem esse iure. Quod illo asperiores
//                 ipsam modi quae obcaecati ex animi, accusantium, sed doloremque
//                 deleniti hic cupiditate dolorum!
//             </p>
//         </section>

//         <section>
//             <h1>Heading 1</h1>

//             <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Eum, recusandae. Quos quidem esse iure. Quod illo asperiores
//                 ipsam modi quae obcaecati ex animi, accusantium, sed doloremque
//                 deleniti hic cupiditate dolorum!
//             </p>

//             <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Eum, recusandae. Quos quidem esse iure. Quod illo asperiores
//                 ipsam modi quae obcaecati ex animi, accusantium, sed doloremque
//                 deleniti hic cupiditate dolorum!
//             </p>
//         </section>

//         <section>
//             <h1>Heading 1</h1>

//             <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Eum, recusandae. Quos quidem esse iure. Quod illo asperiores
//                 ipsam modi quae obcaecati ex animi, accusantium, sed doloremque
//                 deleniti hic cupiditate dolorum!
//             </p>

//             <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Eum, recusandae. Quos quidem esse iure. Quod illo asperiores
//                 ipsam modi quae obcaecati ex animi, accusantium, sed doloremque
//                 deleniti hic cupiditate dolorum!
//             </p>
//         </section>

//         <section>
//             <h1>Heading 1</h1>

//             <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Eum, recusandae. Quos quidem esse iure. Quod illo asperiores
//                 ipsam modi quae obcaecati ex animi, accusantium, sed doloremque
//                 deleniti hic cupiditate dolorum!
//             </p>

//             <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Eum, recusandae. Quos quidem esse iure. Quod illo asperiores
//                 ipsam modi quae obcaecati ex animi, accusantium, sed doloremque
//                 deleniti hic cupiditate dolorum!
//             </p>
//         </section>

//         <section>
//             <h1>Heading 1</h1>

//             <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Eum, recusandae. Quos quidem esse iure. Quod illo asperiores
//                 ipsam modi quae obcaecati ex animi, accusantium, sed doloremque
//                 deleniti hic cupiditate dolorum!
//             </p>

//             <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Eum, recusandae. Quos quidem esse iure. Quod illo asperiores
//                 ipsam modi quae obcaecati ex animi, accusantium, sed doloremque
//                 deleniti hic cupiditate dolorum!
//             </p>
//         </section>

//         <section>
//             <h1>Heading 1</h1>

//             <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Eum, recusandae. Quos quidem esse iure. Quod illo asperiores
//                 ipsam modi quae obcaecati ex animi, accusantium, sed doloremque
//                 deleniti hic cupiditate dolorum!
//             </p>

//             <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Eum, recusandae. Quos quidem esse iure. Quod illo asperiores
//                 ipsam modi quae obcaecati ex animi, accusantium, sed doloremque
//                 deleniti hic cupiditate dolorum!
//             </p>
//         </section>
//     </div>
// `);

// fetch('https://bucas.platform.aphix/')
//     .then(response => response.text())
//     .then(main)
//     .catch(console.error);