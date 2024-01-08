import { MovieList } from '../components/feature';
import { HomeSlider } from '../components/ui/home';
import { useGetMovieByGenreQuery, useGetMovieTrenddingQuery } from '../services/movie.service';

type Props = {};

const Home = (props: Props) => {
    const { data: movieTrendding } = useGetMovieTrenddingQuery({});
    const { data: movieFantasy } = useGetMovieByGenreQuery(14);
    const { data: movieRomance } = useGetMovieByGenreQuery(10749);
    const { data: movieWar } = useGetMovieByGenreQuery(10752);
    const { data: movieFamily } = useGetMovieByGenreQuery(10751);

    return (
        <div className="p-[10px] z-10 md:p-5">
            <div className="mb-[50px]">
                <HomeSlider data={movieTrendding} />
            </div>
            <div className="border-b border-solid border-border-color mb-[25px]">
                <MovieList title="Phim Giả Tưởng" data={movieFantasy} />
            </div>
            <div className="border-b border-solid border-border-color mb-[25px]">
                <MovieList title="Phim Lãng Mạng" data={movieRomance} />
            </div>
            <div className="border-b border-solid border-border-color mb-[25px]">
                <MovieList title="Phim Chiến tranh" data={movieWar} />
            </div>
            <div className="mb-[25px]">
                <MovieList title="Phim Gia Đình" data={movieFamily} />
            </div>
            {/* <MovieNews /> */}
        </div>
    );
};

export default Home;
