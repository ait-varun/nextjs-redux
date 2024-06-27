export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <p className="text-gray-900 text-xl mb-4">Loading...</p>
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    </>
  );
}
