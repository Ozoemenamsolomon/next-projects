const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
];

export default function Example() {
  return (
    <div className="bg-white">
      <div className="container py-16 sm:py-24">
        <h2 className="tracking-tight text-gray-900 uppercase text-3xl sm:text-4xl md:text-5xl font-bold">
          Events{' '}
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Facilis nobis, eveniet aliquam sunt explicabo quos eius ad
                asperiores, delectus temporibus animi maiores consequatur
                reiciendis?
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
