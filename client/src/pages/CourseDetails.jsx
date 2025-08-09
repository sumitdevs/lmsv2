import React, { useState } from "react";
// import { useLocation, useNavigate, useParams } from "react-router-dom";
import SidebarCard from "../components/UI/cards/SidebarCard";
import {
  Star,
  PlayCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

// Mock data to simulate a course coming from an API
const courseData = {
  id: 1,
  title: "The Complete Web Development Bootcamp",
  headline:
    "Learn to code and become a web developer. Master React, Node.js, and more in this all-in-one bootcamp.",
  rating: 4.7,
  reviewCount: 1354,
  students: "12,500",
  instructor: {
    name: "John Doe",
    title: "Lead Software Engineer",
    bio: "John has over 10 years of experience in the tech industry. He specializes in full-stack development and has taught thousands of students to code.\n\nI’m passionate about frontend development and UI/UX design. I’ve built projects using HTML, CSS, JavaScript, ReactJS, NodeJS, ExpressJS, MongoDB, and I also have skills in AI & ML, Python, and DSA in Java. ",
    image:
      "https://images.pexels.com/photos/15371442/pexels-photo-15371442.jpeg",
  },
  price: 199.99,
  discountPrice: 19.99,
  previewVideoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  features: [
    "24 hours on-demand video",
    "8 articles",
    "3 downloadable resources",
    "Full lifetime access",
    "Access on mobile and TV",
    "Certificate of completion",
  ],
  curriculum: [
    {
      title: "Introduction to Web Development",
      duration: "45 min",
      lessons: [
        { title: "What is Web Development?", duration: "5 min" },
        { title: "Setting up your environment", duration: "20 min" },
        { title: "Your first HTML page", duration: "20 min" },
      ],
    },
    {
      title: "Mastering HTML5 & CSS3",
      duration: "2 hours",
      lessons: [
        { title: "HTML5 Semantic Tags", duration: "30 min" },
        { title: "CSS Flexbox and Grid", duration: "50 min" },
        { title: "Responsive Design with Media Queries", duration: "40 min" },
      ],
    },
    {
      title: "JavaScript Essentials",
      duration: "3.5 hours",
      lessons: [
        { title: "Variables and Data Types", duration: "30 min" },
        { title: "Functions and Scope", duration: "60 min" },
        { title: "DOM Manipulation", duration: "2 hours" },
      ],
    },
    {
      title: "React.js Fundamentals",
      duration: "6 hours",
      lessons: [
        { title: "Introduction to React", duration: "1 hour" },
        { title: "React Components and Props", duration: "1.5 hours" },
        { title: "State and Lifecycle", duration: "2 hours" },
        { title: "Hooks: useState and useEffect", duration: "1.5 hours" },
      ],
    },
  ],
  reviews: [
    {
      name: "Alice M.",
      rating: 5,
      comment:
        "This course is fantastic! The instructor is clear and the pace is perfect. Highly recommend!",
      avatar: "https://placehold.co/50x50/A0A0A0/FFFFFF?text=AM",
    },
    {
      name: "Bob J.",
      rating: 5,
      comment:
        "I learned more here than in a college course. The content is practical and up-to-date.",
      avatar: "https://placehold.co/50x50/A0A0A0/FFFFFF?text=BJ",
    },
    {
      name: "Charlie T.",
      rating: 4,
      comment:
        "Great course, but I wish there were more exercises. Still, worth every penny.",
      avatar: "https://placehold.co/50x50/A0A0A0/FFFFFF?text=CT",
    },
  ],
};

function CourseDetails() {

  // const { user, isAuthenticated, cookieLogin } = useAuthStore();
  // const { addToCart } = useCartStore();
  // const [activeTab, setActiveTab] = useState("overview");
  // const [activeList, setActiveList] = useState(null);
  // const [cart, setCart] = useState(false);
  // const { courseID } = useParams();
  // const navigate = useNavigate();
  // const location = useLocation();
  // const {
  //   data: courseDetails,
  //   isLoading,
  //   isError,
  // } = useQuery({
  //   queryKey: ["courseDetails", courseID],
  //   queryFn: () => fetchCourseByID(courseID),
  //   staleTime: 1000 * 60 * 5,
  //   enabled: !!courseID,
  // });

  // const toggleList = (idx) => {
  //   setActiveList(activeList === idx ? null : idx);
  // };
  // const handleAuthNavigation = () => {
  //   if (!isAuthenticated) {
  //     navigate("/login", { state: { from: location.pathname } });
  //   }
  // };

  // const handleCart = () => {
  //   if (!cart) {
  //     addToCart();
  //     setCart(true);
  //   }
  // };


  // State for the curriculum accordion
  const [openSection, setOpenSection] = useState(null);
  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };


  return (
    <div className="bg-white text-gray-800 antialiased">
      <section
        id="breadcrumb"
        className="container h-14 mt-20 bg-[var(--clr-accent-100)]"
      >
        <nav aria-label="Breadcrumb" className="flex items-center h-full ">
          <ul className="flex gap-x-1 ">
            <li>
              <a href="/">Home</a>
            </li>
            <li aria-hidden="true">›</li>
            <li>
              <a className="" href="/courses">
                Courses
              </a>
            </li>
            <li aria-hidden="true">›</li>
            <li>
              <a className="text-[var(--clr-accent-900)]" href="/courses">
                Cyber security fundamental
              </a>
            </li>
          </ul>
        </nav>
      </section>
      <main className="sec-wrap pt-8 pb-16 sm:py-16">
        {/* Course Header and Details Card Section */}
        <div className="lg:flex lg:gap-8">
          <div className="lg:w-2/3">
            {/* Course Header Section */}
            <header className="bg-[var(--clr-primary-900)] text-white rounded-lg p-6 md:p-8">
              <h1 className="text-h2 text-white">{courseData.title}</h1>
              <p className="mt-4 mb-6 text-gray-300">{courseData.headline}</p>

              {/* Rating and Student Info */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                <div className="flex items-center">
                  <span className="text-yellow-400 font-bold text-h6 mr-2">
                    {courseData.rating}
                  </span>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        fill="currentColor"
                        strokeWidth={0}
                        className="mr-0.5"
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm md:text-base text-gray-300">
                    ({courseData.reviewCount} ratings)
                  </span>
                </div>
                <span className="text-sm md:text-base text-gray-300">
                  {courseData.students} students
                </span>
              </div>

              {/* Instructor Info */}
              <div className="flex items-center mt-4 space-x-4">
                <span className="text-gray-300">Created by</span>
                <a
                  href="#"
                  className="font-bold text-[var(--clr-accent-900)] hover:underline"
                >
                  {courseData.instructor.name}
                </a>
              </div>
            </header>

            {/* Sidebar Card Section */}
            <div className="hidden max-lg:block ">
              <SidebarCard courseData={courseData} />
            </div>

            {/* Course Curriculum Section */}
            <section className="mt-10">
              <h2 className="text-2xl md:text-3xl mb-4">Course content</h2>

              {/* Course info + Expand button */}
              <div className="flex flex-wrap gap-x-4 items-center justify-between">
                <p className="text-gray-600 text-sm my-2">
                  33 sections • 231 lectures • 79h 32m total length
                </p>
                <button
                  onClick={() => setOpenSection("all")} // You'll define the logic for expand all
                  className="sm:px-4 py-2 rounded-md text-[var(--clr-accent-900)] hover:bg-[var(--clr-primary-900)] hover:text-white transition-colors"
                >
                  Expand all sections
                </button>
              </div>

              {courseData.curriculum.map((section, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-md mb-2"
                >
                  <button
                    onClick={() => toggleSection(index)}
                    className="flex justify-between items-center w-full p-4 text-left font-bold bg-gray-100 hover:bg-gray-200 transition-colors rounded-t-md focus:outline-none"
                  >
                    <span>{section.title}</span>
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="mr-4 hidden sm:block">
                        {section.duration}
                      </span>
                      {openSection === index ? (
                        <ChevronUp size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </div>
                  </button>

                  {openSection === index && (
                    <ul className="p-4 bg-white transition-all duration-300 ease-in-out">
                      {section.lessons.map((lesson, lessonIndex) => (
                        <li
                          key={lessonIndex}
                          className="flex justify-between items-center py-2 px-2 sm:px-4 border-b last:border-b-0"
                        >
                          <span className="flex items-center text-md">
                            <PlayCircle
                              size={16}
                              className="text-gray-500 mr-2"
                            />
                            {lesson.title}
                          </span>
                          <span className="text-sm text-gray-500">
                            {lesson.duration}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {/* "20 more sections" button */}
              <div className="text-center mt-4">
                <button className="w-full px-6 py-2 border border-[var(--clr-accent-900)] text-[var(--clr-accent-900)] rounded-md font-bold hover:bg-[var(--clr-primary-900)] hover:text-white hover:border-[var(--clr-primary-900)] transition-colors">
                  20 more sections
                </button>
              </div>
            </section>

            {/* Instructor Section */}
            <section className="mt-10">
              <h2 className="text-2xl md:text-3xl mb-8">Instructor</h2>
              <div className="flex items-center mb-4">
                <img
                  src={courseData.instructor.image}
                  alt={courseData.instructor.name}
                  className="w-20 h-20 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="text-h5 text-[var(--clr-accent-900)]">
                    {courseData.instructor.name}
                  </h3>
                  <p className="text-[14px] text-gray-600">
                    {courseData.instructor.title}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 whitespace-pre-line">
                {courseData.instructor.bio}
              </p>
            </section>

            {/* Student Reviews Section */}
            <section className="mt-10">
              <h2 className="text-2xl md:text-3xl mb-8">Student feedback</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                {courseData.reviews.map((review, index) => (
                  <div key={index} className=" p-6 border-y-1 border-gray-400">
                    <div className="flex items-center mb-4">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                      />
                      <div>
                        <h5 className="">{review.name}</h5>
                        <div className="flex gap-2">
                          <div className="flex text-yellow-400 mt-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star
                                key={i}
                                size={14}
                                fill="currentColor"
                                strokeWidth={0}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-700 font-bold">
                            a month ago
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-[14px] text-gray-700 italic">
                      "{review.comment}"
                    </p>
                  </div>
                ))}
              </div>

              {/* See All Reviews Button */}
              <div className="mt-6 ">
                <button
                  onClick={() => alert("Redirect to all reviews page")}
                  className="px-6 py-2 bg-[var(--clr-accent-900)] text-white rounded-md hover:bg-[var(--clr-primary-900)] transition-colors"
                >
                  See all reviews
                </button>
              </div>
            </section>
          </div>

          {/* Sidebar Card Section */}
          <div className="hidden min-lg:block lg:w-1/3 ">
            <SidebarCard courseData={courseData} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default CourseDetails;
