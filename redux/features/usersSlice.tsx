import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User, Users } from "@/types/users";

interface GetUsersParams {
  skip?: number;
}

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<Users, GetUsersParams>({
      query: ({ skip }) => ({
        url: `/users?limit=12&skip=${skip}`,
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
