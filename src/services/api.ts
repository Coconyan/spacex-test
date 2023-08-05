import {
  createApi,
  fetchBaseQuery
} from "@reduxjs/toolkit/dist/query/react";
import { LaunchesType } from "types/LaunchType";
import { RocketType } from "types/RocketType";

export const spacexAPI = createApi({
  reducerPath: 'spacexAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spacexdata.com/v4' }),
  endpoints: (build) => ({
    fetchAllLaunches: build.query<LaunchesType, string>({
      query: () => ({
        url: '/launches/past',
      }),
    }),
    fetchRocketImage: build.query<RocketType, string>({
      query: (id) => ({
        url: `/rockets/${id}`,
      }),
    })
  })
})