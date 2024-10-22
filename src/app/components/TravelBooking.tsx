import { MapPin, CreditCard, Plane, Users, Heart } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import Step from "./Step"
import Woman from "@/assets/woman.svg"

export default function Component() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            <div className="flex justify-between items-center">
                <div className="space-y-6">
                    <div>
                        <h1 className="text-sm font-medium text-gray-500 mb-2">Easy and Fast</h1>
                        <p className="text-3xl md:text-4xl font-bold text-[#1a0b4b] mb-4">
                            Book Your Next Trip<br />In 3 Easy Steps
                        </p>
                    </div>
                    <div className="space-y-5">
                        <Step
                            icon={<MapPin className="h-6 w-6 text-white" />}
                            color="bg-yellow-500"
                            title="Choose Destination"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."
                        />
                        <Step
                            icon={<CreditCard className="h-6 w-6 text-white" />}
                            color="bg-red-500"
                            title="Make Payment"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."
                        />
                        <Step
                            icon={<Plane className="h-6 w-6 text-white" />}
                            color="bg-blue-500"
                            title="Reach Airport on Selected Date"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."
                        />
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="relative rounded-2xl ">
                        <img
                            src={Woman.src}
                            alt="Woman overlooking Santorini"
                            className="w-full h-auto object-cover"
                        />
                        <div className="absolute -bottom-20 -right-24 bg-white rounded-xl border-2 border-gray-200 p-4 shadow-lg">
                            <h3 className="font-semibold text-lg mb-2">Trip To Greece</h3>
                            <p className="text-gray-600 mb-2">14-29 June | by Robbin joseph</p>
                            <div className="flex space-x-2 mb-2">
                                <span className="bg-gray-200 rounded-full px-2 py-1 text-xs">🍃</span>
                                <span className="bg-gray-200 rounded-full px-2 py-1 text-xs">🏛️</span>
                                <span className="bg-gray-200 rounded-full px-2 py-1 text-xs">✈️</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <Users className="h-4 w-4 text-gray-500" />
                                    <span className="text-sm text-gray-600">24 people going</span>
                                </div>
                                <Heart className="h-5 w-5 text-red-500" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-4 shadow-lg">
                        <div className="flex items-center space-x-4 mb-4">
                            <Avatar>
                                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@user" />
                                <AvatarFallback>RJ</AvatarFallback>
                            </Avatar>
                            <div>
                                <h4 className="font-semibold">Ongoing</h4>
                                <p className="text-sm text-gray-600">Trip to rome</p>
                            </div>
                            <div className="ml-auto text-right">
                                <p className="font-semibold">40%</p>
                                <p className="text-sm text-gray-600">completed</p>
                            </div>
                        </div>
                        <Progress value={40} className="h-2 bg-gray-200" />
                    </div>
                </div>
            </div>
        </div>
    )
}

