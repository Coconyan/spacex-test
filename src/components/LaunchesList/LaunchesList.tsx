import { spacexAPI } from 'services/api';
import './styles/LaunchesList.scss';
import {
  DATE_END_UNIX,
  DATE_START_UNIX
} from 'const';
import { FC } from 'react';
import LaunchesItem from 'components/LaunchesItem/LaunchesItem';

type PropsType = {
  sort: boolean
}

const LaunchesList: FC<PropsType> = ({ sort }) => {
  const { data: launches, error, isLoading } = spacexAPI.useFetchAllLaunchesQuery('');

  return (
    <div className="launches-list">
      {isLoading && <h1>Loading...</h1>}
      {error && <h1 style={{ color: "red" }}>Error</h1>}
      {launches && launches
        .filter((launch) => (launch.date_unix > DATE_START_UNIX && launch.date_unix < DATE_END_UNIX && launch.success))
        .sort((launchPrev, launchNext) => {
          if (sort) {
            return launchNext.date_unix - launchPrev.date_unix
          }

          return launchPrev.date_unix - launchNext.date_unix
        })
        .map(launch => (
          <LaunchesItem key={launch.date_unix} launch={launch} />
        ))}
    </div>
  );
}

export default LaunchesList;