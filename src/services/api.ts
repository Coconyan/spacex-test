import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { LaunchesType } from "types/launchType";


export const spacexAPI = createApi({
  reducerPath: 'spacexAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spacexdata.com/v4' }),
  endpoints: (build) => ({
    fetchAllLaunches: build.query<LaunchesType, string>({
      query: () => ({
        url: '/launches/past',
      }),
    }),
  })
})