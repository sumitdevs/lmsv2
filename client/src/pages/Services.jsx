import React from "react";

// Our Organisation Section Card Data
const services = [
  {
    icon: "ri-shield-check-line",
    title: "Endpoint Security",
  },
  {
    icon: "ri-global-line",
    title: "Network Security",
  },
  {
    icon: "ri-bug-line",
    title: "VAPT",
  },
  {
    icon: "ri-eye-line",
    title: "SOC Operations",
  },
  {
    icon: "ri-git-branch-line",
    title: "DevOps",
  },
  {
    icon: "ri-code-line",
    title: "Web & App Dev",
  },
];

const ServiceCard = ({ icon, title }) => (
  <div className="group bg-white text-[var(--clr-primary-900)] p-8 border border-[var(--clr-accent-900)]/20 rounded-xl transition-all duration-500 hover:shadow-lg hover:bg-[var(--clr-accent-900)]">
    <div className="w-12 h-12 mb-6 rounded-lg flex items-center justify-center bg-[var(--clr-accent-900)]/10 transition-colors duration-500 group-hover:bg-white/20">
      <i
        className={`${icon} text-2xl text-[var(--clr-accent-900)] transition-colors duration-500 group-hover:text-white`}
      ></i>
    </div>
    <h5 className="mb-4 transition-colors duration-500 group-hover:text-white">
      {title}
    </h5>
    <p className="text-gray-600 transition-colors duration-500 group-hover:text-white">
      We provide tailored solutions to enhance educational and government
      sectors.
    </p>
  </div>
);

// Our Institute Section Card Data
const cards = [
  {
    image: "./images/workshop_img.jpg",
    title: "Workshops",
    description:
      "Engaging and hands-on learning provide in-depth knowledge on industry-relevant topics applications.",
    tags: ["CyberWorkshops", "SkillUpCyber", "SecureLearning"],
  },
  {
    image: "./images/cs_club_img.jpg",
    title: "CS Club",
    description:
      "We help establish and guide computer is also completely free of cost if an MOU is signed.",
    tags: ["CSClubLaunch", "TechCommunity", "EmpowerFutureTech"],
  },
  {
    image: "./images/heckathon_img.jpg",
    title: "Hackathon",
    description:
      "Coding competitions that promote innovation, teamwork, and problem-solving with mentorship.",
    tags: ["CodeChallenge", "InnovateAndSolve", "CyberHackathon"],
  },
  {
    image: "./images/faculty_img.jpg",
    title: "Faculty Development Programs",
    description:
      "Our FDPs, conducted once a year over five days, enhance faculty members skills and knowledge in emerging technologies.",
    tags: ["FacultyGrowth", "TechForTeachers", "EdTechDevelopment"],
  },
  {
    image: "./images/bootcam_img.jpg",
    title: "Bootcamps",
    description:
      "Short-term boot camps develop industry skills through real-world projects and learning.",
    tags: ["TechBootcamp", "SkillReady", "RealWorldTech"],
  },
  {
    image: "./images/seminar_img.jpg",
    title: "Seminars",
    description:
      "Industry-led seminars share trends, innovations, and bridge academic-industry gaps.",
    tags: ["CyberSeminars", "IndustryInsights", "LearnFromExperts"],
  },
];

const Card = ({ image, title, description, tags }) => (
  <div className="font-satoshi font-medium bg-gray-100 rounded-lg shadow p-6 flex max-[500px]:flex-col gap-5">
    <div className="max-[500px]:w-full w-36 max-[500px]:h-48 h-auto shrink-0 overflow-hidden rounded-md">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div>
      <h5 className="mb-3">{title}</h5>
      <p className="text-lg text-gray-600 mb-6">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="bg-[var(--clr-accent-900)] text-white text-sm px-2 py-1 rounded-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

function Services() {
  return (
    <>
      <section id="breadcrumb" className="h-14 mt-20 bg-[var(--clr-accent-100)]">
        <nav
          aria-label="Breadcrumb"
          className="container flex items-center h-full text-[var(--clr-primary-900)]"
        >
          <ol className="flex gap-x-1 ">
            <li>
              <a href="/">Home</a>
            </li>
            <li aria-hidden="true">›</li>
            <li>
              <a className="text-[var(--clr-accent-900)]" href="/services">
                Services
              </a>
            </li>
          </ol>
        </nav>
      </section>

      {/* Banner Section */}
      <section className="bg-[#455CE9] text-white overflow-hidden">
        <div className="sec-wrap max-sm:pt-8 max-sm:pb-4">
          <div className="relative flex items-center justify-between">
            <div className="flex-1 z-1">
              <h1 className="text-white mb-3">
                Our Services
              </h1>
              <p className="">
                Empowering institutions and organizations with essential
                cybersecurity knowledge and skills.
              </p>
            </div>
            <div className="flex-1 absolute inset-0 flex items-center justify-center blur-md sm:static sm:mx-auto sm:flex sm:blur-md sm:justify-center sm:items-center opacity-70 sm:opacity-100">
              <svg
                width="200"
                height="200"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M200 64V199H65V190.196H132.5C164.917 190.196 191.196 163.917 191.196 131.5C191.196 99.0833 164.917 72.8044 132.5 72.8044H65V64H200ZM135 136H0V1L135 1.00001V9.80436H67.5C35.083 9.80435 8.804 36.0833 8.804 68.5C8.804 100.917 35.083 127.196 67.5 127.196H135V136Z"
                  fill="#9FAAD7"
                />
              </svg>
            </div>
            <div className="flex-1 hidden lg:block ">
              <svg
                width="360"
                height="250"
                viewBox="0 0 432 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-auto"
              >
                <g clip-path="url(#clip0_411_2251)">
                  <path
                    d="M269.197 58.5715C272.487 46.5632 245.95 36.2659 238.982 45.9362C238.013 44.5613 234.432 43.7262 232.789 44.148C231.146 44.5697 229.764 45.6241 228.416 46.6447C226.562 48.0702 224.641 49.5463 223.504 51.5959C222.358 53.6371 222.181 56.4206 223.723 58.1919C224.945 59.6005 228.551 60.5115 230.388 60.8826C231.668 61.1441 232.747 61.355 233.674 61.5068C234.499 60.3006 234.921 58.8077 234.769 57.3485C236.016 58.175 236.859 59.5921 236.993 61.0935C237.019 61.4056 226.638 99.6405 226.638 99.6405C227.708 100.273 229.031 100.864 230.556 101.403C233.143 97.498 235.266 92.8926 236.665 88.0764C236.985 91.0539 236.934 94.2844 236.547 97.5655C236.345 99.3115 236.041 101.066 235.654 102.82C247.989 105.486 266.542 104.609 274.614 93.2722C274.616 93.2253 274.617 93.1784 274.618 93.1314C274.676 91.0102 277.567 90.4831 278.341 92.4587C278.537 92.9589 278.717 93.3918 278.878 93.7361C281.228 85.3182 278.187 75.576 269.197 58.5715Z"
                    fill="#2F2E41"
                  />
                  <path
                    d="M101.525 153.797C104.443 157.262 109.615 157.703 113.077 154.781C113.412 154.498 113.724 154.188 114.01 153.855L152.965 166.207L159.027 156.26L112.653 141.929C109.014 139.242 103.889 140.016 101.204 143.658C98.9581 146.706 99.0906 150.897 101.525 153.797Z"
                    fill="#FFB6B6"
                  />
                  <path
                    d="M239.484 122.932C239.484 122.932 222.233 103.507 214.719 111.758C207.204 120.01 183.76 156.167 183.76 156.167L129.032 144.609L123.74 159.067L185.88 179.225C190.552 180.741 195.671 179.169 198.691 175.293L239.484 122.932Z"
                    fill="#DADADA"
                  />
                  <path
                    d="M202.016 300H287.58L287.658 299.331L287.708 298.885L288.443 292.644L289.484 283.756L289.885 280.34C289.913 280.167 289.941 280 289.963 279.827C290.313 277.604 290.514 275.369 290.586 273.14C290.692 270.075 290.553 267.016 290.224 263.995V263.979C290.046 262.346 289.818 260.73 289.534 259.131C289.178 257.074 288.749 255.052 288.254 253.073C287.686 250.777 287.04 248.543 286.333 246.386C285.521 243.862 284.63 241.443 283.712 239.158C283.611 238.913 283.511 238.668 283.416 238.428L283.411 238.423C278.568 226.603 273.068 218.529 273.068 218.529H210.733C210.733 218.529 207.85 231.195 206.419 241.655C206.191 243.31 206.002 244.904 205.863 246.386C205.612 249.122 205.54 251.474 205.757 253.073C205.89 254.065 206.135 254.767 206.514 255.091C209.943 258.022 206.018 264.241 206.018 264.241C206.018 264.241 203.079 268.738 205.64 271.268C206.146 271.769 206.436 272.416 206.575 273.14C206.798 274.338 206.603 275.731 206.297 276.963C205.991 278.2 205.568 279.276 205.334 279.827C205.228 280.072 205.161 280.212 205.161 280.212L204.727 283.65L204.304 286.96L203.586 292.644L203.369 293.647L202.25 298.885L202.155 299.331L202.016 300Z"
                    fill="#2F2E41"
                  />
                  <path
                    d="M245.236 96.3569L271.398 98.6895L276.22 113.711L281.474 114.472C290.454 115.774 295.798 125.202 292.309 133.586L287.686 144.698C287.686 144.698 294.477 165.683 286.136 174.5L282.586 213.334L290.593 238.935L197 241.96L212.943 209.848L213.415 189.909C213.415 189.909 203.228 153.87 212.673 142.407L216.358 109.802L235.557 106.919L245.236 96.3569Z"
                    fill="#DADADA"
                  />
                  <path
                    d="M227.522 77.0853C224.827 65.445 232.067 53.8209 243.695 51.1221C255.323 48.4233 266.934 55.6718 269.63 67.3121C272.326 78.9524 265.086 90.5765 253.458 93.2753C241.83 95.974 230.218 88.7255 227.522 77.0853Z"
                    fill="#FFB6B6"
                  />
                  <path
                    d="M280.993 60.2585C284.284 48.2502 257.747 37.9529 250.779 47.6232C249.81 46.2483 246.229 45.4133 244.586 45.835C242.943 46.2567 241.561 47.3111 240.213 48.3317C238.359 49.7572 236.438 51.2333 235.301 53.2829C234.155 55.3241 233.978 58.1077 235.52 59.8789C236.741 61.2875 240.348 62.1985 242.184 62.5696C243.465 62.8311 244.544 63.042 245.47 63.1938C246.296 61.9876 246.718 60.4947 246.566 59.0355C247.813 59.8621 248.655 61.2791 248.79 62.7805C248.816 63.0926 238.435 101.327 238.435 101.327C239.505 101.96 240.828 102.551 242.353 103.09C244.94 99.185 247.063 94.5797 248.462 89.7634C248.782 92.7409 248.731 95.9714 248.344 99.2525C248.141 100.999 247.838 102.753 247.451 104.507C259.786 107.173 278.339 106.296 286.411 94.9592C286.413 94.9123 286.414 94.8654 286.415 94.8184C286.473 92.6972 289.364 92.1701 290.138 94.1457C290.334 94.6459 290.514 95.0788 290.675 95.4231C293.025 87.0052 289.984 77.263 280.993 60.2585Z"
                    fill="#2F2E41"
                  />
                  <path
                    d="M96.244 299.331H386.821L431.91 299.888L115.692 280.989C105.144 280.359 96.244 288.753 96.244 299.331Z"
                    fill="#3F3D56"
                  />
                  <path
                    d="M25.0813 298.885V300H432V0H430.887V298.885H25.0813Z"
                    fill="white"
                  />
                  <path
                    d="M68.6227 69.3892H142.687C144.395 69.3892 145.785 68.003 145.785 66.2995C145.785 64.5959 144.395 63.2104 142.687 63.2104H68.6227C66.9147 63.2104 65.5256 64.5959 65.5256 66.2995C65.5256 68.003 66.9147 69.3892 68.6227 69.3892Z"
                    fill="#DADADA"
                  />
                  <path
                    d="M105.681 79.3535C105.958 78.6705 106.914 78.6706 107.19 79.3537C109.122 84.1193 111.871 89.4563 114.861 93.5349C115.34 94.1879 114.68 95.0604 113.919 94.7849L107.509 92.4633V132.187H105.363V92.4633L98.9505 94.7852C98.1896 95.0607 97.5296 94.1881 98.0084 93.5351C100.999 89.4565 103.748 84.1193 105.681 79.3535Z"
                    fill="#3F3D56"
                  />
                  <path
                    d="M1.90775 92.0964H47.5707C48.6237 92.0964 49.4805 91.2419 49.4805 90.1916C49.4805 89.1413 48.6237 88.2871 47.5707 88.2871H1.90775C0.854759 88.2871 -0.00162125 89.1413 -0.00162125 90.1916C-0.00162125 91.2419 0.854763 92.0964 1.90775 92.0964Z"
                    fill="#F2F2F2"
                  />
                  <path
                    d="M24.7595 98.2396C24.9303 97.8185 25.5197 97.8186 25.6903 98.2397C26.8809 101.178 28.5758 104.468 30.4194 106.983C30.7146 107.385 30.3077 107.923 29.8386 107.753L25.8866 106.322V130.813H24.5636V106.322L20.6101 107.754C20.141 107.924 19.7342 107.386 20.0293 106.983C21.873 104.468 23.5682 101.178 24.7595 98.2396Z"
                    fill="#F2F2F2"
                  />
                  <path
                    d="M24.7339 154.444C19.254 154.444 14.8116 149.997 14.8116 144.511C14.8116 139.025 19.254 134.578 24.7339 134.578C30.2139 134.578 34.6562 139.025 34.6562 144.511C34.6562 149.997 30.2139 154.444 24.7339 154.444Z"
                    fill="#F2F2F2"
                  />
                  <path
                    d="M148.31 35.8137H193.973C195.026 35.8137 195.883 34.9592 195.883 33.9089C195.883 32.8586 195.026 32.0044 193.973 32.0044H148.31C147.257 32.0044 146.401 32.8586 146.401 33.9089C146.401 34.9592 147.257 35.8137 148.31 35.8137Z"
                    fill="#F2F2F2"
                  />
                  <path
                    d="M171.158 41.9569C171.329 41.5358 171.918 41.5359 172.089 41.957C173.279 44.8951 174.974 48.1855 176.818 50.7001C177.113 51.1027 176.706 51.6406 176.237 51.4708L172.285 50.0395V74.5301H170.962V50.0394L167.009 51.4709C166.539 51.6408 166.133 51.1028 166.428 50.7002C168.271 48.1856 169.967 44.8951 171.158 41.9569Z"
                    fill="#F2F2F2"
                  />
                  <path
                    d="M171.136 98.1608C165.656 98.1608 161.214 93.7137 161.214 88.2279C161.214 82.7421 165.656 78.2949 171.136 78.2949C176.616 78.2949 181.059 82.7421 181.059 88.2279C181.059 93.7137 176.616 98.1608 171.136 98.1608Z"
                    fill="#F2F2F2"
                  />
                  <path
                    d="M286.174 280.695C283.833 276.816 285.076 271.771 288.952 269.427C289.327 269.2 289.72 269.003 290.127 268.839L290.949 227.941L302.305 225.387L300.974 273.955C302.348 278.267 299.97 282.878 295.662 284.254C292.058 285.405 288.135 283.934 286.174 280.695Z"
                    fill="#FFB6B6"
                  />
                  <path
                    d="M278.273 119.337C278.273 119.337 292.189 115.993 296.642 125.466C301.096 134.94 301.475 176.164 301.475 176.164L303.879 259.766L286.226 258.987L272.149 156.116L278.273 119.337Z"
                    fill="#DADADA"
                  />
                  <path
                    d="M284.521 293.031C284.207 293.425 283.732 293.653 283.229 293.65H192.861C191.943 293.649 191.199 292.903 191.2 291.983C191.2 291.869 191.212 291.756 191.236 291.644L192.638 284.974C192.756 284.421 193.146 283.966 193.674 283.764C193.862 283.69 194.062 283.653 194.264 283.653H281.832C282.034 283.653 282.234 283.69 282.422 283.764C282.95 283.966 283.339 284.421 283.457 284.974L284.86 291.644C284.961 292.134 284.837 292.644 284.521 293.031Z"
                    fill="#CCCCCC"
                  />
                  <path
                    d="M319.117 143.708V248.061C319.115 250.83 316.873 253.074 314.107 253.076H159.634C156.868 253.074 154.626 250.83 154.624 248.061V143.708C154.631 140.942 156.871 138.702 159.634 138.699H314.107C316.871 138.702 319.111 140.942 319.117 143.708Z"
                    fill="#E6E6E6"
                  />
                  <path
                    d="M217.552 230.761C217.736 230.699 217.93 230.671 218.125 230.671H254.264C255.327 230.671 256.195 231.535 256.195 232.6V289.752H216.199V232.6C216.199 231.758 216.745 231.011 217.552 230.761ZM232.047 258.869C232.058 261.231 233.979 263.137 236.339 263.126C238.683 263.109 240.575 261.215 240.587 258.869V252.237C240.564 249.88 238.633 247.985 236.278 248.008C233.951 248.03 232.07 249.914 232.047 252.237V258.869Z"
                    fill="#CCCCCC"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_411_2251">
                    <rect
                      width="432"
                      height="300"
                      fill="white"
                      transform="matrix(-1 0 0 1 432 0)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* our Organisation */}
      <section className="py-8 sm:py-16 font-satoshi font-medium">
        <div className="sec-wrap">
          <div className="mb-13 pb-8 border-b-2 border-[var(--clr-accent-200)]">
            <div className="mb-4 ">
              <span className="sm-title">Our Organizations &rarr;</span>
            </div>
            <div className="grid lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <h2 className=" mb-4">
                  Empowering Institutions for a Smarter Future
                </h2>
              </div>
              <div>
                <p className=" text-gray-600 leading-relaxed">
                  We provide tailored solutions to enhance operational
                  efficiency and foster sustainable growth in educational and
                  government sectors. We provide tailored solutions and
                  government sectors.
                </p>
              </div>
            </div>
          </div>
          <div className="">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* our institute */}
      <section className="pt-8 pb-16 md:py-16 font-satoshi font-medium ">
        <div className="sec-wrap">
          <div className="mb-13 pb-8 border-b-2 border-[var(--clr-accent-200)]">
            <div className="mb-4 ">
              <span className="sm-title text-lg">Our Institutions &rarr;</span>
            </div>
            <div className="grid lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <h2 className=" mb-4">
                  Empowering Institutions for a Smarter Future
                </h2>
              </div>
              <div>
                <p className=" text-gray-600 text-lg leading-relaxed">
                  We provide tailored solutions to enhance operational
                  efficiency and foster sustainable growth in educational and
                  government sectors. We provide tailored solutions and
                  government sectors.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-screen">
            {cards.map((card, idx) => (
              <Card key={idx} {...card} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
