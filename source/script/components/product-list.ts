export default (editor) => {
    editor.DomComponents.addType('product-list', {
        isComponent: el => (
            el.tagName === 'div' && el.classList.contains('product-list')
        ),

        model: {
            defaults: {
                droppable: false,
                editable: true,
                attributes: {
                    columns: 3,
                    class: 'grid grid-cols-3 gap-4'
                },
                traits: [
                    {
                        type: 'number',
                        name: 'columns',
                        label: 'Columns!',
                    }
                ],
                components: (model) => {
                    const cols = model.getAttributes().columns;
                    model.addClass(`grid-cols-${cols}`);
                    return new Array(cols).fill({
                        type: 'product'
                    });
                },
            },
            init() {
                this.on('change:attributes', this.handleChange);
            },
            handleChange() {
                this.setClass([
                    `grid-cols-${this.getAttributes().columns}`,
                    'grid',
                    'gap-4',
                ]);
            }
        },
    });
};