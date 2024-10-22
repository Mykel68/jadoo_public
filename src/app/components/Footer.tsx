import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Send, Twitter } from "lucide-react"
import Google from "@/assets/Google Play.svg"
import Apple from "@/assets/Play Store.svg"

export default function Footer() {
    return (
        <footer className="bg-gray-50">
            <div className="container mx-auto px-4 py-12">
                <div className="bg-purple-50 rounded-lg p-20 mb-12 relative">
                    <div className="absolute top-4 right-4">
                        <Send className="text-purple-500 w-8 h-8" />
                    </div>
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
                        Subscribe to get information, latest news and other interesting offers about Jadoo
                    </h2>
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <Input
                            type="email"
                            placeholder="Your email"
                            className="w-full sm:w-64"
                        />
                        <Button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white">
                            Subscribe
                        </Button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold mb-4">Jadoo.</h3>
                        <p className="text-gray-600 mb-4">Book your trip in minute, get full Control for much longer.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Careers</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Mobile</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Contact</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Help/FAQ</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Press</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Affiliates</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">More</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Airlinefees</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Airline</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900">Low fare tips</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-600 text-sm mb-4 md:mb-0">All rights reserved@jadoo.co</p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-600 hover:text-gray-900">
                            <Twitter className="w-6 h-6" />
                        </a>
                        {/* Add more social icons here */}
                    </div>
                    <div className="mt-4 md:mt-0">
                        <h5 className="font-semibold mb-2">Discover our app</h5>
                        <div className="flex space-x-2">
                            <a href="#" className="block">
                                <img src={Google.src} alt="Google Play" className="h-10" />
                            </a>
                            <a href="#" className="block">
                                <img src={Apple.src} alt="App Store" className="h-10" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}