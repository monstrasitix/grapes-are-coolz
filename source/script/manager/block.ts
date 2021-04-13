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

const slideshow = {
    id: 'slideshow',
    label: makeBlockLabel('image', 'Slideshow'),
    select: true,
    content: `
    <div class="fixed inset-0 bg-black bg-opacity-80" x-data="{activeTab: 1}">
    <div class="flex justify-center items-center h-screen w-screen">
      <dialog
        open
        class="rounded-2xl overflow-hidden p-0 w-auto max-w-7xl md:mx-auto md:w-2/3 shadow-lg m-8"
      >
        <div class="flex flex-col lg:flex-row">
          <div
            class="relative h-64 sm:h-80 w-full lg:h-auto lg:w-1/3 xl:w-2/5 flex-none"
          >
            <img
              src="https://placeimg.com/480/480/tech"
              alt=""
              class="absolute inset-0 h-full w-full object-cover"
            />
            <span
              class="absolute block inset-x-0 bottom-0 lg:hidden lg:inset-y-0 lg:right-auto bg-gradient-to-t lg:bg-gradient-to-r from-white to-transparent w-full h-16 lg:h-full lg:w-16"
            ></span>
            <div
              class="relative flex justify-end lg:justify-start flex-wrap text-white text-xl font-bold m-4"
            >
              <div class="bg-green-500 px-4 py-1 rounded">Special Offer</div>
            </div>
          </div>
          <div class="w-full">
            <div class="p-8">
              <div class="flex justify-between items-start">
                <h3 class="text-xl font-bold mb-8" onClick="test">
                  A Dummy Title
                </h3>
                <a href="#" class="text-gray-400 hover:text-gray-800 p-1">
                  <svg
                    class="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </a>
              </div>
              <!-- tabs -->
              <div class="relative">
                <header class="flex items-end text-sm">
                  <button
                    class="border border-b-0 px-3 py-1 text-sm focus:outline-none rounded-tl-md"
                    :class="activeTab===1 ? 'font-semibold' : ''"
                    @click="activeTab=1"
                  >
                    Description
                  </button>
                  <button
                    class="border border-b-0 px-3 py-1 focus:outline-none"
                    :class="activeTab===2 ? 'font-semibold' : ''"
                    @click="activeTab=2"
                  >
                    Terms
                  </button>
                  <button
                    class="border border-b-0 px-3 py-1 focus:outline-none rounded-tr-md"
                    :class="activeTab===3 ? 'font-semibold' : ''"
                    @click="activeTab=3"
                  >
                    Contact
                  </button>
                </header>
                <div
                  class="border p-2 h-48 overflow-y-auto rounded-b-xl rounded-tr-xl"
                  id="tabs-contents"
                >
                  <div x-show="activeTab===1">
                    <p class="text-xs text-gray-500 line-clamp-3">
                      This is the text for Tab1. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris nisi
                      ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                      proident, sunt in culpa qui officia deserunt mollit anim id
                      est laborum.
                    </p>
                  </div>
                  <div x-show="activeTab===2">
                    <p class="text-xs text-gray-500 line-clamp-3">
                      This is the text for Tab2. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                      proident, sunt in culpa qui officia deserunt mollit anim id
                      est laborum.
                    </p>
                  </div>
                  <div x-show="activeTab===3">
                    <p class="text-xs text-gray-500 line-clamp-3">
                      This is the text for Tab 3. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>
              <!-- action buttons -->
              <div
                class="flex justify-end items-center text-sm font-bold mt-8 gap-4"
              >
                <a
                  class="text-blue-700 border border-blue-300 hover:border-blue-700 px-4 py-1 rounded"
                  href="#"
                  >Website</a
                >
                <div class="text-red-500 font-normal text-xs px-4 py-1 rounded">
                  Report
                </div>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  </div>
    `,
    activate: true,
};

export default (appendTo: string) => ({
    appendTo,
    blocks: [
        secion,
        text,
        image,
        productInformation,
        slideshow,
    ],
});