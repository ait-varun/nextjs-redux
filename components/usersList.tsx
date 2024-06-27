"use client";

import { useGetUsersQuery } from "@/redux/features/usersSlice";
import { User } from "@/types/users";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import ImagesSkeleton from "./images-skelton";

export default function UsersList() {
  const [skip, setSkip] = useState<number>(0);
  const [combinedUsers, setCombinedUsers] = useState<User[]>([]);
  const [isInitialDataLoaded, setIsInitialDataLoaded] =
    useState<boolean>(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { data, isLoading, isError } = useGetUsersQuery({ skip });

  useEffect(() => {
    if (data) {
      setCombinedUsers((prevUsers) => [
        ...prevUsers,
        ...(data.users as User[]),
      ]);
      setIsInitialDataLoaded(true);
    }
  }, [data]);

  const loadMore = useCallback(() => {
    setSkip(combinedUsers.length);
  }, [combinedUsers.length]);

  useEffect(() => {
    if (isInitialDataLoaded) {
      const currentRef = scrollRef.current;

      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      });

      if (currentRef) {
        observer.observe(currentRef);
      }

      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    }
  }, [scrollRef, loadMore, isInitialDataLoaded]);

  if (isLoading)
    return (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {" "}
          {Array(12)
            .fill(0)
            .map((_, index) => (
              <ImagesSkeleton key={index} />
            ))}
        </div>
      </>
    );
  if (isError)
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        Error
      </div>
    );

  return (
    <>
      {" "}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {combinedUsers.map((user, index) => (
          <li
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <Link href={`/users/${user.id}`}>
              <div className="p-4">
                <Image
                  src={user.image}
                  alt={`${user.firstName} ${user.lastName}`}
                  sizes="(min-width: 808px) 25vw, 100vw"
                  width={640}
                  height={360}
                  className="w-full h-48 object-contain"
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
      <div ref={scrollRef} className="grid place-items-center mt-4">
        {!isLoading && combinedUsers.length !== data?.total && (
          <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-blue-600"></div>
        )}
      </div>
    </>
  );
}
