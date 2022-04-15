/* This example requires Tailwind CSS v2.0+ */

export default function Example() {
  return (
    <div className="relative pt-14 bg-black text-white overflow-hidden">
      <div className="container">
        <div className="relative z-10 pb-8 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <section className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <p className="mt-3 tracking-tight  sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0 text-3xl sm:text-4xl md:text-5xl">
                We&#39;re a commitment to medical rehabilitation across Africa
                with keen focus on the rehabilitaion professional.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="https://chat.whatsapp.com/IkocP2W4Eu8Gat4bl3VpNw"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#0151fe] hover:bg-[#14395e] md:py-4 md:text-lg md:px-10"
                  >
                    Join us
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt=""
        />
      </div>
    </div>
  );
}
