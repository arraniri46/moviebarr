const Skeleton = () => {
  return (
    <>
      <div className="min-w-sm w-full h-full rounded-lg">
        <div className="animate-pulse">
          <div className="p-5 w-full text-terniary">
            <div className="w-full bg-slate-500 h-96 rounded-xl" />
            <div className="mb-2 text-md sm:text-2xl font-bold tracking-tight truncate bg-slate-500"></div>
            <div className="mb-3 bg-slate-500 h-6 w-full rounded-full"></div>
            <div className="mb-3 bg-slate-500 h-4 w-2/6 rounded-full"></div>
            <div className="mb-3 bg-slate-500 h-5 w-4/6 rounded-full"></div>
            <div className="mb-3 bg-slate-500 h-12 rounded-xl"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skeleton;
