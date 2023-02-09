const NotFound = () => {
  return (
    <>
      <div className="flex flex-col h-screen text-terniary items-center justify-center">
        <div className="bg-red-500 px-6 py-3 border-8 border-secondary">
          <h1 className="text-2xl font-semibold">Status Code: 204</h1>
          <h1 className="text-6xl font-semibold">No Result Found</h1>
        </div>
      </div>
    </>
  );
};

export default NotFound;
