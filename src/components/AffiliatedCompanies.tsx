const AffiliatedCompanies = () => {
  return (
    <section className="mt-12">
      <div className="mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative z-10 md:py-16">
            <div className="relative h-64 sm:h-80 md:h-full">
              <img
                alt="House"
                src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="absolute inset-0 object-cover w-full h-full rounded-t-lg shadow-xl md:rounded-lg"
              />
            </div>
          </div>

          <div className="relative flex items-center bg-[#721121] rounded-b-lg md:rounded-bl-none md:rounded-r-lg md:shadow-2xl">
            <span className="hidden md:absolute md:inset-y-0 md:-start-16 md:block md:w-16 md:bg-[#721121] md:rounded-l-lg"></span>

            <div className="p-8 sm:p-16 md:p-24">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Vincask, a wholly owned subsidiary of Seng Lee Tobacco Factory
                Pte Ltd.
              </h2>

              <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid, molestiae! Quidem est esse numquam odio deleniti,
                beatae, magni dolores provident quaerat totam eos, aperiam
                architecto eius quis quibusdam fugiat dicta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AffiliatedCompanies;
