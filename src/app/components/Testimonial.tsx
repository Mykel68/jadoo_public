"use client"

import * as React from "react"
import { ChevronUp, ChevronDown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import man from "@/assets/man.svg"

const testimonials = [
    {
        quote: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
        name: "Mike taylor",
        location: "Lahore, Pakistan",
        avatar: man,
    },
    {
        quote: "Excellent service and support. The team went above and beyond to meet our needs.",
        name: "Chris Thomas",
        location: "CEO of Red Button",
        avatar: "/placeholder.svg?height=50&width=50",
    },
    {
        quote: "Innovative solutions that have truly transformed our business processes.",
        name: "Sarah Johnson",
        location: "New York, USA",
        avatar: "/placeholder.svg?height=50&width=50",
    },
]

export default function VerticalTestimonialSlider() {
    const [currentIndex, setCurrentIndex] = React.useState(0) // Add state for currentIndex

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <h2 className="text-sm font-medium text-gray-500 mb-2">TESTIMONIALS</h2>
            <h1 className="text-3xl md:text-4xl font-bold text-[#1a0b4b] mb-8">
                What People Say<br />About Us.
            </h1>
            <div className="relative">
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    orientation="vertical"
                    className="h-[300px]"
                    setApi={() => {
                        nextTestimonial(); // Automatically progress the carousel
                    }}
                >
                    <CarouselContent className="-mt-1 h-[300px]">
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={index} className="pt-1 md:basis-1/1">
                                <Card className="border-none shadow-none">
                                    <CardContent className="flex items-start p-6">
                                        <Avatar className="w-12 h-12 mr-4">
                                            <AvatarImage src={testimonial.avatar.src} alt={testimonial.name} />
                                            <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="text-lg mb-4">{testimonial.quote}</p>
                                            <h3 className="font-semibold">{testimonial.name}</h3>
                                            <p className="text-sm text-gray-500">{testimonial.location}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious onClick={prevTestimonial} className="left-1/2 -translate-x-1/2 top-0 -translate-y-full">
                        <ChevronUp className="h-4 w-4" />
                    </CarouselPrevious>
                    <CarouselNext onClick={nextTestimonial} className="left-1/2 -translate-x-1/2 bottom-0 translate-y-full">
                        <ChevronDown className="h-4 w-4" />
                    </CarouselNext>
                </Carousel>
                <div className="flex justify-center mt-4">
                    {testimonials.map((_, index) => (
                        <div
                            key={index}
                            className={`h-2 w-2 rounded-full mx-1 ${index === currentIndex ? "bg-blue-500" : "bg-gray-300"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
