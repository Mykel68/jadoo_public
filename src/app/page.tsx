import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Category from "./components/Category";
import TopDestination from "./components/TopDestination";
import TravelBooking from "./components/TravelBooking";
import VerticalTestimonialSlider from "./components/Testimonial";
import LogoSlider from "./components/LogoSlider";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>    <div className="flex flex-col md:px-24 px-2 ">
      <div className="realtive">
        <div className="absolute top-0 right-0  ">
          <svg xmlns="http://www.w3.org/2000/svg" width="704" height="724" viewBox="0 0 704 724" fill="none">
            <path d="M22.3069 222C-18.0931 153.2 5.4736 13.3333 22.3069 -48L701.807 -149L766.307 122.5L727.807 723.5C649.14 724.5 473.707 717 401.307 679C310.807 631.5 351.807 555 276.807 515C201.807 475 244.807 369.5 218.807 329.5C192.807 289.5 72.8069 308 22.3069 222Z" fill="#FFF1DA" />
          </svg>
        </div>
      </div>
      <Navbar />
      <Hero />
      <Category />
      <TopDestination />
      <TravelBooking />
      <VerticalTestimonialSlider />
      <LogoSlider />
    </div>
      <Footer />
    </>

  );
}
