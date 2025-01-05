import { useSelector, useDispatch } from "react-redux";

import { Error, Loader } from "../components";
import { genres } from "../assets/constants";

// NOTE: IMPORTING COMPONENTS
import SongCard from "../components/SongCard";

// NOTE: IMPORTING APIS
import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const Discover = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data, isFetching, error } = useGetTopChartsQuery();
  console.log(data);

  if (isFetching) return <Loader title="Loading Musics" />;
  if (error) return <Error />;

  const music = data.item;

  // TODO: functions

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">Discover</h2>

        {/* <select
          onChange={(e) => dispatch(selectGenreListId(e.target.value))}
          value={genreListId || "pop"}
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select> */}
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.chart_items.map((song, i) => (
          <SongCard
            key={song.item.id}
            song={song.item}
            isPlaying={isPlaying}
            activeSong={activeSong}
            i={i}
            data={data.chart_items}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;
