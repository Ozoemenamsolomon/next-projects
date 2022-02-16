import React from 'react';
import UIGirl from './UIGirl';

const TwoCols = () => {
  return (
    <section className="bg-white py-8">
      <div className="container">
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-5/6 sm:w-1/2 p-6">
            <p className="mt-3 tracking-tight sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0 text-3xl sm:text-4xl md:text-5xl">
              Gain access to strategic partnerships, co-learning experiences and
              a cross-discplinary network of the world’s largest community
              organization of African rehabilitation professionals.{' '}
              <a
                className="text-[#0151fe] hover:underline text-l sm:text-2xl md:text-3xl"
                href="https://chat.whatsapp.com/IkocP2W4Eu8Gat4bl3VpNw"
              >
                Join us.
              </a>
            </p>
          </div>
          <div className="w-full sm:w-1/2 p-6">
            <UIGirl />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoCols;
