import './styles/LaunchesItem.scss';
import { FC } from 'react';
import { spacexAPI } from 'services/api';
import { LaunchType } from 'types/LaunchType';

type PropsType = {
  launch: LaunchType
}

const LaunchesItem: FC<PropsType> = ({ launch }) => {
  const { data: rocket, error, isLoading } = spacexAPI.useFetchRocketImageQuery(launch.rocket);

  return (
    <div className="launches-item">
      <div className="launches-item__wrapper">
        <h3>
          {launch.name}
        </h3>
        <p>
          <b>Date: </b>
          {launch.date_utc.slice(0, 10)}
        </p>
        <p>
          <b>Details: </b>
          {launch.details}
        </p>
      </div>
      <div className="launches-item__image-wrapper">
        {isLoading && <h2>Loading...</h2>}
        {error && <p className="error">Error with image</p>}
        {rocket && <img src={rocket.flickr_images[0]} />}
        {rocket && <p><b>Rocket name: </b>{rocket.name}</p>}
      </div>
    </div>
  );
}

export default LaunchesItem;