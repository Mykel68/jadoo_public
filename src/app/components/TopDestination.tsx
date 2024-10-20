import Rome from "@/assets/rome.svg"
import London from "@/assets/london.svg"
import Europe from "@/assets/europe.svg"
import DestinationCard from "./DestinationCard"

export default function Component() {
    return (
        <section className="py-12 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-sm uppercase tracking-wide text-gray-500 mb-2">Top Selling</h2>
                <h1 className="text-3xl md:text-4xl font-bold text-[#1a0b4b]">Top Destinations</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <DestinationCard
                    image={Rome.src}
                    alt="Rome Colosseum"
                    destination="Rome, Italy"
                    price="$5,42k"
                    duration="10 Days Trip"
                />
                <DestinationCard
                    image={London.src}
                    alt="London Big Ben"
                    destination="London, UK"
                    price="$4.2k"
                    duration="12 Days Trip"
                />
                <DestinationCard
                    image={Europe.src}
                    alt="Full Europe"
                    destination="Full Europe"
                    price="$15k"
                    duration="28 Days Trip"
                />

            </div>
        </section>
    )
}

