import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <div className="flex flex-col items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-red-200 flex items-center justify-center mb-6">
            <svg
              className="w-16 h-16 text-red-600"
              fill="currentColor"
              viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-4">Oops! Page Not Found</h2>
          <p className="text-gray-600 mb-8 text-center">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
          <Link
            href="/"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

