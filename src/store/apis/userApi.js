import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const usersApi = createApi({
    reducerPath: 'user',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005'
    }),
    endpoints(builder) {
        return {
            // fetchUsers: builder.query({
            //     providesTags
            // })
            fetchUsers:builder.query({
                query:(user)=>{
                    return{
                        url: '/users',
                        params: {

                        },
                        method: 'GET'
                    }
                }
            }),
            addUser: builder.mutation({
                query: (user) => {
                    return {
                        method: 'POST',
                        url: '/uesrs',
                        body: {

                        }
                    }
                }
            }),
            removeUser: builder.mutation({
                query: (user) => {
                    return {
                        method: 'DELETE',
                        url: `/users/${user.id}`
                    }
                }
            })
        }
    }
});
export const {
    useFetchUsersQuery,
    useAddUserMutation,
    useRemoveUserMutation
} = usersApi;
export { usersApi }