import { Zap } from "lucide-react";

export default function DestinationCard({ image, alt, destination, price, duration }: { image: string, alt: string, destination: string, price: string, duration: string }) {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden w-[19rem]">
            <img src={image} alt={alt} className="w-full h-48 object-cover object-center" />
            <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-[#1a0b4b]">{destination}</h3>
                    <span className="text-lg font-bold text-[#1a0b4b]">{price}</span>
                </div>
                <div className="flex items-center text-gray-600">
                    <Zap className="w-4 h-4 mr-2" />
                    <span>{duration}</span>
                </div>
            </div>
        </div>
    )
}

