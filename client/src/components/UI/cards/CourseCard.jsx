// src/components/CourseCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';

function CourseCard({ courseInfo, pricing, lifecycle, metadata, metrics}) {
  // Use a default thumbnail if none is provided
  const instructorImage = '/images/prof1.jpg';
  const instructorName =  'Unknown Instructor';

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
      {/* Course Image and Rating */}
      <div className="relative">
        <div className="h-48 overflow-hidden">
          <img className="w-full h-full object-cover" src={metadata?.thumbnailUrl} alt={`Thumbnail for ${courseInfo?.title}`} />
        </div>
        <div className='absolute bg-[var(--clr-accent-900)] text-white rounded-lg px-3 py-1 flex items-center -bottom-3 right-4 shadow-md'>
          <img className='h-4 w-4 mr-1' src="/icons/star.svg" alt="Star rating icon" />
          <span className="text-sm font-semibold">{metrics?.avgRating || 4}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5">
        {/* Instructor Info */}
        <div className='flex items-center gap-x-3 mb-4'>
          <div className='h-10 w-10 overflow-hidden rounded-full border-2 border-gray-200'>
            <img className='h-full w-full object-cover' src={instructorImage} alt={`Profile of ${instructorName}`} />
          </div>
          <p className='text-sm text-[var(--clr-primary-400)] font-medium'>{courseInfo?.instructor}</p>
        </div>

        {/* Course Title */}
        <h5 className="text-xl font-bold text-[var(--clr-primary-900)] mb-3">{courseInfo?.title}</h5>

        {/* Course Details */}
        <div className="flex justify-between items-center text-sm text-[var(--clr-primary-400)] mb-6">
          <div className='flex items-center gap-x-2'>
            <svg className="icon w-5 h-5 fill-current">
              <use href="/icons/videoicons.svg#iconvid1"></use>
            </svg>
            <span>4 weeks</span>
          </div>
          <div className='flex items-center gap-x-2'>
            <svg className="icon w-5 h-5 fill-current">
              <use href="/icons/videoicons.svg#iconvid2"></use>
            </svg>
            <span>20 videos</span>
          </div>
          <div className='flex items-center gap-x-2'>
            <svg className="icon w-5 h-5 fill-current">
              <use href="/icons/videoicons.svg#iconvid3"></use>
            </svg>
            <span>1900 students</span>
          </div>
        </div>

        {/* Price and Link */}
        <div className='flex justify-between items-center pt-4 border-t border-gray-200'>
          <p className='text-lg font-bold text-[var(--clr-primary-900)]'>
            <span className='line-through text-gray-400 mr-2'>${Math.round(pricing?.price)}</span>
            <span className='text-green-500'>{ pricing?.isFree ? 'free' : 'paid' }</span>
          </p>
          <Link to={`/courses/${metadata?.slug}`} className='text-[var(--clr-accent-900)] font-semibold transition-colors hover:text-[var(--clr-primary-900)]'>
            View More &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;