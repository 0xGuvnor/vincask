const Faucet = () => {
  return (
    <div className="absolute inset-x-0 flex items-center justify-center -bottom-12">
      <button
        type="button"
        className="self-center px-4 py-2 font-semibold text-black transition duration-300 ease-in-out rounded-full bg-emerald-500 hover:bg-emerald-600"
      >
        Mint 1 million ERC20Mock
      </button>
    </div>
  );
};
export default Faucet;
