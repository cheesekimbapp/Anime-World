// src/pages/YourPageFile.js (ganti dengan nama file Anda)
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import Jumbotron from "@/components/Jumbotron/Jumbotron"; // Mengimpor komponen Jumbotron
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "../libs/api-libs";

const Page = async () => {
    const topAnime = await getAnimeResponse("top/anime", "limit=8");
    const topManga = await getAnimeResponse("top/manga", "limit=8");
    const topReviews = await getAnimeResponse("top/characters", "limit=8");
    let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry");
    recommendedAnime = reproduce(recommendedAnime, 8);

    return (
        <>
            {/* Memanggil komponen Jumbotron */}
            <Jumbotron />

            {/* Section Most Popular */}
            <section id="Hot">
                <Header title="Most Popular" linkTitle="View All" linkHref="/popular" />
                <AnimeList api={topAnime} />
            </section>

            {/* Section Recommendations */}
            <section id="Foryou">
                <Header title="Recommendations" />
                <AnimeList api={recommendedAnime} />
            </section>

            {/* Section Recommendations */}
            <section id="Most Search">
                <Header title="Top Manga" />
                <AnimeList api={topManga} />
            </section>

            {/* Section Recommendations */}
            <section id="Trending">
                <Header title="Trending" />
                <AnimeList api={topReviews} />
            </section>

            {/* Footer Section */}
            <footer className="bg-gray-800 text-color-primary py-8 mt-12">
                <div className="container mx-auto text-center">
                    <p className="text-white">Made With Love ❤</p>
                    <p className="text-white">&copy; 2024 AnimeWorld. All rights reserved.</p>
                    <div className="mt-4">
                        <a href="/privacy-policy" className="text-color-primary hover:text-gray-400">Privacy Policy</a> | 
                        <a href="/terms-of-service" className="text-color-primary hover:text-gray-400"> Terms of Service</a>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Page;