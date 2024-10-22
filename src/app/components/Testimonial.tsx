"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import man from "@/assets/man.svg"

const testimonials = [
    {
        quote: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
        name: "Mike Taylor",
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
    const [currentIndex, setCurrentIndex] = React.useState(0)

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    }

    React.useEffect(() => {
        const interval = setInterval(nextTestimonial, 3000); // automatically progress every 3 seconds
        return () => clearInterval(interval); // cleanup on unmount
    }, []);

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
                        slidesToScroll: 1,
                    }}
                    className="h-[300px]"
                >
                    <CarouselContent className="-mt-1 h-[300px]">
                        <CarouselItem key={currentIndex} className="pt-1 md:basis-1/1">
                            <Card className="border-none shadow-none">
                                <CardContent className="flex items-start p-6">
                                    <Avatar className="w-12 h-12 mr-4">
                                        <AvatarImage src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} />
                                        <AvatarFallback>{testimonials[currentIndex].name[0]}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="text-lg mb-4">{testimonials[currentIndex].quote}</p>
                                        <h3 className="font-semibold">{testimonials[currentIndex].name}</h3>
                                        <p className="text-sm text-gray-500">{testimonials[currentIndex].location}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
                <div className="flex justify-center mt-4">
                    <button
                        onClick={prevTestimonial}
                        className="mr-2 bg-gray-200 p-2 rounded hover:bg-gray-300"
                    >
                        Previous
                    </button>
                    <button
                        onClick={nextTestimonial}
                        className="bg-gray-200 p-2 rounded hover:bg-gray-300"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}
