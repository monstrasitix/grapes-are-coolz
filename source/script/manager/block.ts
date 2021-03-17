const makeBlockLabel = (icon, text) => (`
    <div class="block-element">
        <i class="fa fa-${icon} block-element__icon"></i>
        <div class="block-element__text">${text}</div>
    </div>
`);



const secion = {
    id: 'section',
    label: makeBlockLabel('bars', 'Section'),
    attributes: { class: 'gjs-block-section' },
    content: `
        <section>
            <h1>This is a simple title</h1>
            <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
        </section>
    `,
};


const text = {
    id: 'text',
    label: makeBlockLabel('info', 'Text'),
    content: `
        <div data-gjs-type="text">Insert your text here</div>
    `,
};

const image = {
    id: 'image',
    label: makeBlockLabel('image', 'Image'),
    select: true,
    content: { type: 'image' },
    activate: true,
};

const productInformation = {
    id: 'product-information',
    label: makeBlockLabel('store', 'Product'),
    content: {
        type: 'product-information'
    }
};

export default (appendTo: string) => ({
    appendTo,
    blocks: [
        secion,
        text,
        image,
        productInformation,
    ],
});