import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User, Users } from "@/types/users";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<Users, void>({
      query: () => ({
        url: "/users?limit=12&skip=0",
      }),
    }),

    getUser: builder.query<User, number>({
      query: (id) => ({
        url: `/users/${id}`,
      }),
    }),
  }),
});

export const { useGetUsersQuery, useGetUserQuery } = usersApi;
