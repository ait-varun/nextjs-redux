"use client";

import { useGetUsersQuery } from "@/redux/features/usersSlice";
import Image from "next/image";
import Link from "next/link";

export default function UsersList() {
  const { data, isLoading, isError } = useGetUsersQuery();

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  if (isError)
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        Error
      </div>
    );

  return (
    <div className="container mx-auto py-8">
      <div className="mb-4 text-lg font-semibold">
        Total Users: {data?.total}
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {data?.users.map((user) => (
          <li
            key={user.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <Link href={`/users/${user.id}`}>
              <div className="p-4">
                <Image
                  src={user.image}
                  alt={`${user.firstName} ${user.lastName}`}
                  width={480}
                  height={480}
                  className="w-full h-48 object-cover"
                />
                <div className="mt-2">
                  <h3 className="text-lg font-semibold">
                    {user.firstName} {user.lastName}
                  </h3>
                  <p className="text-gray-600">{user.email}</p>
                  <p className="text-gray-600">{user.phone}</p>
                  <p className="text-gray-600">Age: {user.age}</p>
                  <p className="text-gray-600">Gender: {user.gender}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
