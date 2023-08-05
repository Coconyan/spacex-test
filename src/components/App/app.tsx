import { spacexAPI } from 'services/api';
import './styles/index.scss';
import { DATE_END_UNIX, DATE_START_UNIX } from 'const';

function App() {
  const {data: posts, error, isLoading} =  spacexAPI.useFetchAllLaunchesQuery('')

  console.log(posts);

  return (
    <div style={{display: "flex", flexDirection: "column", padding: "10px", margin: "0 auto", maxWidth: "1440px"}}>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1 style={{color: "red"}}>Error</h1>}
      {posts && posts
        .filter((post) => (post.date_unix > DATE_START_UNIX && post.date_unix < DATE_END_UNIX && post.success))
        .map(post => (
        <div key={post.date_unix} style={{padding: "10px"}}>
          <h5 style={{color: `${post.success ? 'green' : 'red'}`}}>{post.name}</h5>
          <p>{post.date_utc}</p>
          <p>{post.details}</p>
        </div>
      ))}
    </div>
  );
}

export default App;