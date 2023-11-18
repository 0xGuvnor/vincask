const Comparison = () => {
  return (
    <section className="grid grid-cols-1 gap-10 lg:grid-cols-3">
      <p className="whitespace-pre-line text-xl">
        {`With Port Ellen poised to reopen in 2024, there will be great fanfare for the distillery in the near future. 
        
        It will be well beyond 2070 before another similar aged Port Ellen can be created. Even then, these old 70s distillates will be impossible to replicate and will be even more sought after by collectors and connoisseurs alike.`}
      </p>

      <div className="relative col-span-2 flex flex-col justify-center gap-6 text-sm lg:text-base">
        {/* <div className="absolute inset-y-0 left-0 z-10 h-full w-1 bg-neutral"></div> */}
        <div className="relative flex h-8 w-[90%] items-center justify-start rounded bg-neutral">
          <p className="pl-2 lg:pl-4">50 YO Glenfiddich Simultaneous Time</p>

          <p className="absolute inset-y-0 -right-16 flex items-center">
            $58,800
          </p>
        </div>
        <div className="relative flex h-8 w-[80%] items-center justify-start rounded bg-neutral">
          <p className="pl-2 lg:pl-4">50 YO Balvenie</p>

          <p className="absolute inset-y-0 -right-16 flex items-center">
            $55,477
          </p>
        </div>
        <div className="relative flex h-8 w-[65%] items-center justify-start rounded bg-neutral">
          <p className="pl-2 lg:pl-4">50 YO Highland Park 2020</p>
          <p className="absolute inset-y-0 -right-16 flex items-center">
            $34,860
          </p>
        </div>
        <div className="relative flex h-8 w-[50%] items-center justify-start rounded bg-neutral">
          <p className="pl-2 lg:pl-4">50 YO Glengoyne</p>

          <p className="absolute inset-y-0 -right-16 flex items-center">
            $33,736
          </p>
        </div>
        <div className="relative flex h-8 w-[45%] items-center justify-start rounded bg-neutral">
          <p className="pl-2 lg:pl-4">47 YO Balvenie 1971 Cask 2855</p>

          <p className="absolute inset-y-0 -right-16 flex items-center">
            $32748
          </p>
        </div>
        <div className="relative flex h-8 w-[30%] items-center justify-start rounded bg-primary">
          <p className="pl-2 text-primary-content lg:pl-4">
            50 YO Port Ellen Cask P5X2
          </p>

          <p className="absolute inset-y-0 -right-16 flex items-center">
            $19,880
          </p>
        </div>
      </div>
    </section>
  );
};
export default Comparison;
