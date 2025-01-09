/* eslint-disable react/no-unescaped-entities */
import card1 from '../assets/card1.webp';
import card2 from '../assets/card2.webp';
import card3 from '../assets/card3.webp';
import card4 from '../assets/card4.webp';
import clean4 from '../assets/clean4.jpg';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="bg-gradient-to-b from-primary-light to-neutral-white min-h-screen px-5 py-10 sm:px-10">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-primary-dark mb-4">
          Myrtle Beach's Most Trusted Cleaning Service
        </h1>
        <p className="text-lg sm:text-xl text-neutral-charcoal max-w-md sm:max-w-3xl mx-auto mb-6">
          We specialize in cleaning homes, condos, and apartments to perfection. Let us handle the cleaning while you enjoy more of what you love.
        </p>
        <Link
          to="/schedule"
          className="px-6 sm:px-8 py-3 bg-primary-dark text-neutral-white rounded-lg hover:bg-primary-light hover:text-primary-dark transition duration-300"
        >
          Schedule Your Cleaning
        </Link>
      </section>

      {/* Who We Are */}
      <section className="mb-16 text-center sm:text-left">
        <h2 className="text-2xl sm:text-4xl font-bold text-primary-dark mb-4 sm:mb-6">Who We Are</h2>
        <p className="text-base sm:text-xl text-neutral-charcoal leading-8 sm:leading-10 max-w-lg sm:max-w-3xl mx-auto sm:mx-0">
          MB Ultra Clean has been a trusted name in professional cleaning services throughout the Myrtle Beach area for over a decade. With more than 10 years of experience, we take pride in delivering superior cleaning solutions designed to meet your unique needs.
        </p>
      </section>

      {/* Our Services */}
         {/* Our Services */}
         <section className="mb-16">
        <h2 className="text-2xl sm:text-4xl font-bold text-primary-dark mb-4 sm:mb-6 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {[
            { img: card2, title: 'House Cleaning', desc: 'Routine or deep cleaning to keep your home spotless.', route: '/house-cleaning' },
            { img: card3, title: 'Apartment Cleaning', desc: 'Efficient cleaning for small living spaces.', route: '/apartment-cleaning' },
            { img: card1, title: 'Move-In/Out Cleaning', desc: 'Thorough cleaning to prepare for new beginnings.', route: '/move-in-out-cleaning' },
            { img: card4, title: 'Deep Cleaning', desc: 'Comprehensive cleaning for every nook and cranny.', route: '/deep-cleaning' },
          ].map(({ img, title, desc, route }, idx) => (
            <Link
              key={idx}
              to={route}
              className="flex flex-col items-center text-center hover:shadow-xl transition duration-300"
            >
              <img src={img} alt={title} className="w-full h-auto object-cover rounded-lg shadow-lg mb-4" />
              <h3 className="text-lg sm:text-2xl font-bold text-primary-dark">{title}</h3>
              <p className="text-sm sm:text-base text-neutral-charcoal">{desc}</p>
            </Link>
          ))}
        </div>
      </section>


      {/* Why Choose Us */}
      <section className="mb-16 flex flex-col md:flex-row items-center gap-6 sm:gap-8">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src={clean4}
            alt="Why Choose Us Image"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2">
          <h2 className="text-2xl sm:text-4xl font-bold text-primary-dark mb-4 sm:mb-6">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-neutral-charcoal text-sm sm:text-lg space-y-3 sm:space-y-4">
            <li>Eco-friendly cleaning products safe for your family and pets.</li>
            <li>Flexible scheduling to fit your busy lifestyle.</li>
            <li>Fully insured and trusted by Myrtle Beach residents.</li>
            <li>100% satisfaction guaranteed – we’re not happy until you are.</li>
          </ul>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="mb-16">
        <h2 className="text-2xl sm:text-4xl font-bold text-primary-dark mb-4 sm:mb-6 text-center">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-neutral-white p-6 rounded-lg shadow-lg">
            <p className="text-sm sm:text-base text-neutral-charcoal italic">
              "MB Ultra Clean transformed my apartment! I was amazed at how thorough they were. Highly recommend!" - Sarah P.
            </p>
          </div>
          <div className="bg-neutral-white p-6 rounded-lg shadow-lg">
            <p className="text-sm sm:text-base text-neutral-charcoal italic">
              "The team was professional, punctual, and left my house sparkling clean. I couldn't ask for more!" - James T.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="text-center">
        <h2 className="text-2xl sm:text-4xl font-bold text-primary-dark mb-4 sm:mb-6">
          Ready to Experience the MB Ultra Clean Difference?
        </h2>
        <p className="text-sm sm:text-lg text-neutral-charcoal mb-6 sm:mb-8">
          Let us make your space shine. Schedule your first cleaning today and see why we’re the best in Myrtle Beach.
        </p>
        <Link
          to="/schedule"
          className="px-6 sm:px-8 py-3 bg-primary-dark text-neutral-white rounded-lg hover:bg-primary-light hover:text-primary-dark transition duration-300"
        >
          Book Now
        </Link>
      </section>
    </div>
  );
}

export default Home;
