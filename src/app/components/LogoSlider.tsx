"use client"

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import type { EmblaCarouselType } from "embla-carousel"; // Import Embla type

import Logo1 from "@/assets/axon.svg";
import Logo2 from "@/assets/allitalia.svg";
import Log03 from "@/assets/quantas.svg";
import Log04 from "@/assets/expedia.svg";
import Log05 from "@/assets/jekstar.svg";

const logos = [
    { name: "Axon", src: Logo1 },
    { name: "Jetstar", src: Logo2 },
    { name: "Expedia", src: Log03 },
    { name: "Qantas", src: Log04 },
    { name: "Alitalia", src: Log05 },
    { name: "Axon", src: Logo1 },
    { name: "Jetstar", src: Logo2 },
    { name: "Expedia", src: Log03 },
    { name: "Qantas", src: Log04 },
    { name: "Alitalia", src: Log05 },
];

export default function LogoSlider() {
    const [api, setApi] = React.useState<EmblaCarouselType | undefined>(undefined); // Define a specific type for `api`

    React.useEffect(() => {
        if (!api) return;

        api.on("select", () => {
            console.log("Carousel updated.");
        });
    }, [api]);

    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    );

    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-12">
            <Carousel
                setApi={setApi}
                className="w-full"
                plugins={[plugin.current]}
                opts={{
                    align: "start",
                    loop: true,
                }}
            >
                <CarouselContent>
                    {logos.map((logo, index) => (
                        <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/5">
                            <Card className="border-none shadow-none">
                                <CardContent className="flex items-center justify-center p-6 overflow-hidden">
                                    <img src={logo.src.src} alt={logo.name} className="h-28 max-w-full" />
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
}
