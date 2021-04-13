export default (editor) => {
    editor.DomComponents.addType('product', {
        isComponent: el => (
            el.tagName === 'div' && el.classList.contains('product')
        ),

        model: {
            defaults: {
                tagName: 'div',
                draggable: '*',
                droppable: false,
                components: `
                    <div class="product bg-white shadow-md m-5 rounded-md overflow-hidden">
                        <img class="w-full h-60 block" src="https://via.placeholder.com/150" />
                        <div class="p-4">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum beatae quis quo soluta enim, qui, numquam quos vel, consectetur ab voluptate delectus?</p>
                        </div>
                        <div class="flex">
                            <button class="p-2 w-10 bg-gray-300 border-green-100">-</button>
                            <input placeholder="Qty" class="flex-grow text-center outline-none border-solid border border-gray" />
                            <button class="p-2 w-10 bg-gray-300">+</button>
                        </div>
                    </div>
                `,
            }
        },
    });
};