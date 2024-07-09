export function IndicatorSize() {
  if (process.env.NEXT_PUBLIC_ENVIRONTMENT === "production") return null;

  return (
    <button className="fixed bottom-5 left-3 z-50 flex h-6 w-6 items-center btn justify-center animate-pulse rounded-full bg-[#fafafa] p-3 font-mono text-xs text-primary border-violet-600 shadow-none hover:bg-primary hover:text-white">
      <div className="block sm:hidden">xs</div>
      <div className="hidden sm:block md:hidden">sm</div>
      <div className="hidden md:block lg:hidden">md</div>
      <div className="hidden lg:block xl:hidden">lg</div>
      <div className="hidden xl:block 2xl:hidden">xl</div>
      <div className="hidden 2xl:block">2xl</div>
    </button>
  );
}
