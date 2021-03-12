// Editor
import Grape from 'grapesjs';

// Managers
import blockManager from './manager/block';
import styleManager from './manager/style';


const main = (components) => {
    const editor = Grape.init({
        components,

        canvas: {
            styles: ['https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css']
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
};


main(`
    <div>
        <section>
            <h1>Heading 1</h1>
            
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eum, recusandae. Quos quidem esse iure. Quod illo asperiores
                ipsam modi quae obcaecati ex animi, accusantium, sed doloremque
                deleniti hic cupiditate dolorum!
            </p>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eum, recusandae. Quos quidem esse iure. Quod illo asperiores
                ipsam modi quae obcaecati ex animi, accusantium, sed doloremque
                deleniti hic cupiditate dolorum!
            </p>
        </section>

        <section>
            <h1>Heading 1</h1>
            
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eum, recusandae. Quos quidem esse iure. Quod illo asperiores
                ipsam modi quae obcaecati ex animi, accusantium, sed doloremque
                deleniti hic cupiditate dolorum!
            </p>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eum, recusandae. Quos quidem esse iure. Quod illo asperiores
                ipsam modi quae obcaecati ex animi, accusantium, sed doloremque
                deleniti hic cupiditate dolorum!
            </p>
        </section>

        <section>
            <h1>Heading 1</h1>
            
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eum, recusandae. Quos quidem esse iure. Quod illo asperiores
                ipsam modi quae obcaecati ex animi, accusantium, sed doloremque
                deleniti hic cupiditate dolorum!
            </p>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eum, recusandae. Quos quidem esse iure. Quod illo asperiores
                ipsam modi quae obcaecati ex animi, accusantium, sed doloremque
                deleniti hic cupiditate dolorum!
            </p>
        </section>

        <section>
            <h1>Heading 1</h1>
            
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eum, recusandae. Quos quidem esse iure. Quod illo asperiores
                ipsam modi quae obcaecati ex animi, accusantium, sed doloremque
                deleniti hic cupiditate dolorum!
            </p>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eum, recusandae. Quos quidem esse iure. Quod illo asperiores
                ipsam modi quae obcaecati ex animi, accusantium, sed doloremque
                deleniti hic cupiditate dolorum!
            </p>
        </section>

        <section>
            <h1>Heading 1</h1>
            
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eum, recusandae. Quos quidem esse iure. Quod illo asperiores
                ipsam modi quae obcaecati ex animi, accusantium, sed doloremque
                deleniti hic cupiditate dolorum!
            </p>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eum, recusandae. Quos quidem esse iure. Quod illo asperiores
                ipsam modi quae obcaecati ex animi, accusantium, sed doloremque
                deleniti hic cupiditate dolorum!
            </p>
        </section>

        <section>
            <h1>Heading 1</h1>
            
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eum, recusandae. Quos quidem esse iure. Quod illo asperiores
                ipsam modi quae obcaecati ex animi, accusantium, sed doloremque
                deleniti hic cupiditate dolorum!
            </p>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eum, recusandae. Quos quidem esse iure. Quod illo asperiores
                ipsam modi quae obcaecati ex animi, accusantium, sed doloremque
                deleniti hic cupiditate dolorum!
            </p>
        </section>

        <section>
            <h1>Heading 1</h1>
            
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eum, recusandae. Quos quidem esse iure. Quod illo asperiores
                ipsam modi quae obcaecati ex animi, accusantium, sed doloremque
                deleniti hic cupiditate dolorum!
            </p>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eum, recusandae. Quos quidem esse iure. Quod illo asperiores
                ipsam modi quae obcaecati ex animi, accusantium, sed doloremque
                deleniti hic cupiditate dolorum!
            </p>
        </section>

        <section>
            <h1>Heading 1</h1>
            
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eum, recusandae. Quos quidem esse iure. Quod illo asperiores
                ipsam modi quae obcaecati ex animi, accusantium, sed doloremque
                deleniti hic cupiditate dolorum!
            </p>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eum, recusandae. Quos quidem esse iure. Quod illo asperiores
                ipsam modi quae obcaecati ex animi, accusantium, sed doloremque
                deleniti hic cupiditate dolorum!
            </p>
        </section>
    </div>
`);

// fetch('https://bucas.platform.aphix/')
//     .then(response => response.text())
//     .then(main)
//     .catch(console.error);