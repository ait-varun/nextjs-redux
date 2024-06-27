"use client";
import { useGetUserQuery } from "@/redux/features/usersSlice";
import { User } from "@/types/users";
import Image from "next/image";

export default function Page({ params }: { params: { id: number } }) {
  const { data, isLoading, isError } = useGetUserQuery(params.id);

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

  const user: User = data as User;

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-center mb-4">
          <Image
            src={user.image}
            alt={`${user.firstName} ${user.lastName}`}
            width={480}
            height={480}
            className="w-16 h-16 rounded-full mr-4"
          />
          <h2 className="text-2xl font-bold">
            {user.firstName} {user.lastName}
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600">
              <span className="font-semibold">Email:</span> {user.email}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Phone:</span> {user.phone}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Gender:</span> {user.gender}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Birth Date:</span>{" "}
              {user.birthDate}
            </p>
          </div>
          <div>
            <p className="text-gray-600">
              <span className="font-semibold">Height:</span> {user.height} cm
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Weight:</span> {user.weight} kg
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Eye Color:</span> {user.eyeColor}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Hair Color:</span>{" "}
              {user.hair.color}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
