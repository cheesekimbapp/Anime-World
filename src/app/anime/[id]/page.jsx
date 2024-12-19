import VideoPlayer from "@/components/Utilities/VideoPlayer";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import ToggleDescriptionButton from "@/components/ToggleDescription/toggledescription"; // Impor komponen baru
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/libs/api-libs";

const Page = async ({ params: { id } }) => {
    const anime = await getAnimeResponse(`anime/${id}`);
    let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry");
    recommendedAnime = reproduce(recommendedAnime, 8);

    // Deskripsi pendek dan panjang
    const shortDescription = anime.data.synopsis.slice(0, 200) + "..."; // Menampilkan 200 karakter pertama
    const fullDescription = anime.data.synopsis;

    return (
        <>
            <div className="pt-4 px-10">
                <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
                <h3 className="text-2xl font-bold text-color-primary">{anime.data.title} - {anime.data.year}</h3>
            </div>
            <div className="pt-4 px-10 overflow-x-auto">
    <div className="flex gap-4 text-color-primary">
        <div className="w-20 sm:w-24 md:w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2 mb-4">
            <h3 className="font-bold text-xs sm:text-sm md:text-base">Rank</h3>
            <p className="text-xs sm:text-sm md:text-base">{anime.data.rank}</p>
        </div>
        <div className="w-20 sm:w-24 md:w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2 mb-4">
            <h3 className="font-bold text-xs sm:text-sm md:text-base">Season</h3>
            <p className="text-xs sm:text-sm md:text-base">{anime.data.season}</p>
        </div>
        <div className="w-20 sm:w-24 md:w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2 mb-4">
            <h3 className="font-bold text-xs sm:text-sm md:text-base">Episode</h3>
            <p className="text-xs sm:text-sm md:text-base">{anime.data.episodes}</p>
        </div>
        <div className="w-20 sm:w-24 md:w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2 mb-4">
            <h3 className="font-bold text-xs sm:text-sm md:text-base">Status</h3>
            <p className="text-xs sm:text-sm md:text-base">{anime.data.status}</p>
        </div>
    </div>
</div>


            {/* Deskripsi Anime */}
            <div className="pt-4 px-10 text-color-primary flex flex-col items-start">
                <ToggleDescriptionButton
                    shortDescription={shortDescription}
                    fullDescription={fullDescription}
                />
            </div>

            {/* Recommendations Section */}
            <section className="pt-6 px-1">
                <Header title="Recommendations" />
                <AnimeList api={recommendedAnime} />
            </section>

            {/* Footer Section */}
            <footer className="pt-6 px-10 pb-4 text-center text-color-primary bg-gray-200">
                <p>© {new Date().getFullYear()} Anime World. All rights reserved.</p>
            </footer>
        </>
    );
};

export default Page;
