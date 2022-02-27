import { FC } from 'react';

const Grid: FC<{
  title: string;
  items: {
    title: string;
    href: string;
    imageSrc: string;
    imageAlt: string;
  }[];
}> = ({ items, title }) => {
  return (
    <div id={title} className="bg-white">
      <div className="container py-16 sm:py-24">
        <h2 className="uppercase text-3xl sm:text-4xl md:text-5xl font-bold">
          {title}
        </h2>
        {/* <h3 className="text-l sm:text-2xl md:text-3xl">past</h3> */}
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {items.map(({ href, imageAlt, imageSrc, title }, id) => (
            <div key={title + id} className="group relative">
              <a target="_blank" data-key={title + id} href={href}>
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <p>{title}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Grid;
