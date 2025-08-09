import React from "react";
import { Link } from "react-router-dom";
import WhyChooseCard from "../components/UI/cards/WhyChooseCard";
import CourseCard from "../components/UI/cards/CourseCard";
import AnalyticsCard from "../components/UI/cards/AnalyticsCard";
import { useEffect, useState } from "react";


const testimonials = [
  {
    quote:
      "GIR Technologies made cybersecurity so easy to understand! The courses are hands-on, up-to-date, and the instructors are incredibly supportive. I landed my first internship thanks to this platform.",
    name: "Jenny Wilson",
    role: "Student",
    image: "/images/prof2.jpg",
  },
  {
    quote:
      "Thanks to GIR, I cracked my first job in cybersecurity. The learning path is well-structured and helped me build confidence.",
    name: "Jacob Jones",
    role: "Security Analyst",
    image: "/images/prof1.jpg",
  },
  {
    quote:
      "What a fantastic platform! It made complex topics simple and interesting. Highly recommended for beginners.",
    name: "Ava Martinez",
    role: "Beginner Learner",
    image: "/images/prof2.jpg",
  },
];


function Home() {

  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect to handle the automatic sliding
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000); // Change testimonial every 4 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <section
        id="hero-section"
        className="bg-[var(--clr-primary-800)] pt-40 pb-32"
      >
        <div className="sec-wrap">
          <div className="relative lg:flex lg:items-center gap-10">
            {/* Left: Text Content */}
            <div
              id="hero-content"
              className="flex-1 flex flex-col gap-y-6 text-white"
            >
              <h1 className="text-[var(--clr-accent-100)]">
                Empower Your Learning with GIR Technologies
              </h1>
              <p className="text-[var(--clr-primary-100)] leading-relaxed">
                Join us in shaping a brighter future by nurturing potential,
                empowering minds, and fostering growth through education and
                collaboration.
              </p>
              <div className="flex gap-x-4">
                <Link
                  to="courses"
                  className="w-42 h-10 rounded-lg bg-[var(--clr-accent-900)] flex justify-center items-center"
                >
                  Explore Courses
                </Link>
                <Link
                  to="courses"
                  className="w-42 h-10 rounded-lg border flex justify-center items-center"
                >
                  Enquiry Now
                </Link>
              </div>
            </div>

            {/* Right: Image */}
            <div
              id="hero-img"
              className="flex-1 absolute top-0 right-0 lg:static blur-xs opacity-60 lg:blur-none lg:opacity-100 flex justify-end"
            >
              <div className="w-72 sm:w-3/4 lg:w-[32rem]">
                <img
                  className="w-full h-auto object-contain"
                  src="/images/hero-img.svg"
                  alt="Hero"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="brand" className="bg-[var(--clr-accent-100)] py-12">
        <div className="text-[var(--clr-primary-900)] flex flex-col gap-y-4 justify-center items-center">
          <p className="text-h6">Trusted by leading organizations worldwide</p>

          {/* Container with max-width and centered */}
          <div className="relative w-full max-w-[1024px] mx-auto overflow-hidden px-4">
            <div className="marquee">
              {[...Array(2)].map((_, i) => (
                <div
                  key={i}
                  className="flex gap-x-8 sm:gap-x-16 max-w-[1024px]"
                >
                  <svg className="h-8">
                    <use href="/icons/brands.svg#Group2549" />
                  </svg>
                  <svg className="h-8">
                    <use href="/icons/brands.svg#Group2553" />
                  </svg>
                  <svg className="h-8">
                    <use href="/icons/brands.svg#Group2552" />
                  </svg>
                  <svg className="h-8">
                    <use href="/icons/brands.svg#Group2551" />
                  </svg>
                  <svg className="h-8">
                    <use href="/icons/brands.svg#Group2550" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="why-choose" className="mt-14 md:mt-22">
        <div className="sec-wrap flex flex-col gap-12 md:gap-18">
          <h2 className="text-center">Why Choose Gir Technologies?</h2>
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            <WhyChooseCard />
            <WhyChooseCard />
            <WhyChooseCard />
            <WhyChooseCard />
            <WhyChooseCard />
            <WhyChooseCard />
          </div>
        </div>
      </section>

      <section id="featured-cource" className="mt-16">
        <div className="sec-wrap">
          <div className="flex items-center justify-between">
            <div className="flex flex-col text-[var(--clr-primary-900)]">
              <h2>Featured Courses</h2>
              <p className="sm-title">Explore Our Popular Cources</p>
            </div>
            <div>
              <Link
                to="courses"
                className="bg-[var(--clr-accent-900)] py-3 px-4 rounded-lg flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="white"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12 gap-8">
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
        </div>
      </section>

      <section id="analytics" className="mt-16">
        <div className="sec-wrap">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            <AnalyticsCard />
            <AnalyticsCard />
            <AnalyticsCard />
            <AnalyticsCard />
          </div>
        </div>
      </section>

      <section id="testimonial" className="my-14 md:my-22">
      <div className="bg-[var(--clr-accent-100)] py-10 sm:py-16">
        <div className="sec-wrap">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-8 text-[var(--clr-primary-900)]">
            {/* Left Section */}
            <div className="flex flex-1 flex-col">
              <h2>What Our Learners Say</h2>
              <p className="mt-2">
                Honest feedback, real success stories, and trusted learning
                experiences.
              </p>
            </div>

            {/* Right Section (Carousel) */}
            <div className="flex flex-1 flex-col">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                  }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="flex-shrink-0 w-full">
                      <p>
                        <q>{testimonial.quote}</q>
                      </p>
                      <div className="flex justify-between mt-6 items-center">
                        {/* Profile Info */}
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-12 overflow-hidden rounded-full">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div>
                            <p className="m-0">{testimonial.name}</p>
                            <p className="m-0 text-[var(--clr-primary-400)] text-tag">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-between mt-6 items-center">
                {/* Dots */}
                <ul className="flex gap-x-2">
                  {testimonials.map((_, index) => (
                    <li key={index}>
                      <button
                        onClick={() => handleDotClick(index)}
                        className={`rounded-full transition-all duration-300 ${
                          index === currentIndex
                            ? "h-4.5 w-4.5 bg-[var(--clr-accent-900)]"
                            : "h-4 w-4 bg-[var(--clr-accent-400)]"
                        }`}
                      ></button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Home;
