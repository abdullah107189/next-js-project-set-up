import { IUser } from "@/app/types/user";
import { baseApi } from "@/redux/baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query<IUser[], void>({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
      providesTags: ["User"],
    }),

    getUserById: builder.query<IUser, number>({
      query: (id) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "User", id }],
    }),

    createUser: builder.mutation<IUser, Partial<IUser>>({
      query: (data) => ({
        url: "/users",
        method: "POST",
        data,
      }),
      invalidatesTags: ["User"], 
    }),
  }),
});

// হুকগুলো অটো-জেনারেট হয়, সেগুলো এক্সপোর্ট করছি
export const {
  useGetAllUsersQuery,
  useGetUserByIdQuery,
  useCreateUserMutation,
} = userApi;
