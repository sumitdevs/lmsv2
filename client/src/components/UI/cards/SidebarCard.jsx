import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const SidebarCard = ({ courseData }) => {

  // State for the preview video modal
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="lg:sticky lg:top-8 bg-white lg:shadow-xl rounded-lg overflow-hidden border border-gray-200">
        {/* Thumbnail with Play Button */}
        <div className="relative p-1">
          <img
            src="https://img-c.udemycdn.com/course/750x422/6035102_7d1a.jpg"
            alt="Course thumbnail"
            className="w-full h-auto"
          />
          <button
            onClick={() => setShowVideo(true)}
            className="absolute inset-0 flex items-center justify-center text-white bg-opacity-50 hover:bg-opacity-70 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              width={74}
            >
              <path
                fill="#ececec"
                opacity="1"
                d="M64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM240 232C240 223.3 244.7 215.3 252.3 211.1C259.9 206.9 269.1 207 276.6 211.6L420.6 299.6C427.7 304 432.1 311.7 432.1 320.1C432.1 328.5 427.7 336.2 420.6 340.6L276.6 428.6C269.2 433.1 259.9 433.3 252.3 429.1C244.7 424.9 240 416.7 240 408L240 232z"
              />
              <path
                fill="#595c73"
                d="M276.5 211.5C269.1 207 259.8 206.8 252.2 211C244.6 215.2 240 223.3 240 232L240 408C240 416.7 244.7 424.7 252.3 428.9C259.9 433.1 269.1 433 276.6 428.4L420.6 340.4C427.7 336 432.1 328.3 432.1 319.9C432.1 311.5 427.7 303.8 420.6 299.4L276.6 211.4z"
              />
            </svg>
          </button>
        </div>

        {/* Video Modal */}
        {showVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
            <div className="relative w-full max-w-4xl rounded-lg overflow-hidden">
              <button
                onClick={() => setShowVideo(false)}
                className="absolute -top-10 right-0 text-white text-3xl z-50"
              >
                &times;
              </button>
              <iframe
                width="100%"
                height="500"
                src={courseData.previewVideoUrl}
                title="Course Preview Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        )}

        {/* Card Content */}
        <div className="p-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            ${courseData.discountPrice}
            <span className="text-xl text-gray-400 line-through ml-2">
              ${courseData.price}
            </span>
          </h2>
          <button className="w-full py-3 bg-[var(--clr-accent-900)] text-white font-bold rounded-md hover:bg-[var(--clr-primary-900)] transition-colors shadow-md">
            Add to cart
          </button>
          <button className="w-full py-3 mt-2 border border-[var(--clr-accent-900)] text-[var(--clr-accent-900)] font-bold rounded-md hover:bg-purple-50 transition-colors">
            Buy now
          </button>

          <p className="text-center text-xs text-gray-500 mt-3">
            30-Day Money-Back Guarantee
          </p>

          <h6 className="text-lg font-bold mt-6 mb-2">
            This course includes:
          </h6>
          <ul className="space-y-2 text-sm text-gray-700">
            {courseData.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle2
                  size={16}
                  className="text-[var(--clr-accent-900)] mr-2 flex-shrink-0"
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
  );
};

export default SidebarCard;
