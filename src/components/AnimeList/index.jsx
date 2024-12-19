import Image from "next/image"
import Link from "next/link"

const AnimeList = ({api}) => {
    return (
        <div className="grid md:grid-cols-8 sm:grid-cols-3 grid-cols-2 gap-4 ml-10 mr-10">
            {api.data?.map((anime, index) => {
                return (
                    <Link href={`/anime/${anime.mal_id}`} className="cursor-pointer text-color-primary 
                    hover:text-color-secondary transition-all" key={index} >
                        <div className="flex flex-col items-center">
                            <Image 
                                src={anime.images.webp.image_url} 
                                alt={anime.title} 
                                width={300}  // Ukuran gambar lebih kecil
                                height={350}  // Ukuran gambar lebih kecil
                                className="w-full object-cover rounded-xl"  // Menambahkan rounded corners dan memastikan gambar terpotong dengan rapi
                            />
                            <h3 className="font-semibold text-sm md:text-base p-2 text-center">{anime.title}</h3>  {/* Ukuran teks disesuaikan */}
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default AnimeList
