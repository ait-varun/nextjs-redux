"use client";

import { useGetUsersQuery } from "@/redux/features/usersSlice";
import { User } from "@/types/users";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function UsersList() {
  const [skip, setSkip] = useState<number>(0);
  const [combinedUsers, setCombinedUsers] = useState<User[]>([]);

  const { data, isLoading, isError } = useGetUsersQuery({ skip });

  useEffect(() => {
    if (data) {
      setCombinedUsers(data.users as User[]);
    }
  }, [data]);

  const loadMore = () => {
    setSkip(combinedUsers.length);
    if (data) {
      setCombinedUsers((prevUsers) => [
        ...prevUsers,
        ...(data.users as User[]),
      ]);
    }
  };

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
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {combinedUsers.map((user) => (
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
      {!isLoading && (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4"
          onClick={loadMore}>
          Load More
        </button>
      )}
    </div>
  );
}
