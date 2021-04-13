export default (editor) => {
    editor.DomComponents.addType('product-information', {
        isComponent: el => (
            el.tagName === 'div' && el.classList.contains('product-info')
        ),

        model: {
            defaults: {
                tagName: 'div',
                draggable: '*',
                droppable: false,
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
