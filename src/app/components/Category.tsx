import { Cloud, Plane, Mic, Cog } from "lucide-react"
import ServiceCard from "./ServiceCard"

export default function Component() {
    return (
        <section className="py-12 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-sm uppercase tracking-wide text-gray-500 mb-2">CATEGORY</h2>
                <h1 className="text-3xl md:text-4xl font-bold text-[#1a0b4b]">We Offer Best Services</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <ServiceCard
                    icon={<Cloud className="w-12 h-12 text-blue-500" />}
                    title="Calculated Weather"
                    description="Built Wicket longer admire do barton vanity itself do in it."
                />
                <ServiceCard
                    icon={<Plane className="w-12 h-12 text-blue-500" />}
                    title="Best Flights"
                    description="Engrossed listening. Park gate sell they west hard for the."
                />
                <ServiceCard
                    icon={<Mic className="w-12 h-12 text-blue-500" />}
                    title="Local Events"
                    description="Barton vanity itself do in it. Preferd to men it engrossed listening."
                />
                <ServiceCard
                    icon={<Cog className="w-12 h-12 text-blue-500" />}
                    title="Customization"
                    description="We deliver outsourced aviation services for military customers"
                />
            </div>
        </section>
    )
}

