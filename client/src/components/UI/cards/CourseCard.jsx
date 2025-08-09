// src/components/CourseCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';

function CourseCard({ title, princing, instructor, _id, thumbnail, rating = 4.9 }) {
  // Use a default thumbnail if none is provided
  const courseImage = thumbnail || '/images/img2.jpg';
  // Use a default instructor image if none is provided
  const instructorImage = instructor?.user?.image || '/images/prof1.jpg';
  const instructorName = instructor?.user?.name || 'Unknown Instructor';

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
      {/* Course Image and Rating */}
      <div className="relative">
        <div className="h-48 overflow-hidden">
          <img className="w-full h-full object-cover" src={courseImage} alt={`Thumbnail for ${title}`} />
        </div>
        <div className='absolute bg-[var(--clr-accent-900)] text-white rounded-lg px-3 py-1 flex items-center -bottom-3 right-4 shadow-md'>
          <img className='h-4 w-4 mr-1' src="/icons/star.svg" alt="Star rating icon" />
          <span className="text-sm font-semibold">{rating}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5">
        {/* Instructor Info */}
        <div className='flex items-center gap-x-3 mb-4'>
          <div className='h-10 w-10 overflow-hidden rounded-full border-2 border-gray-200'>
            <img className='h-full w-full object-cover' src={instructorImage} alt={`Profile of ${instructorName}`} />
          </div>
          <p className='text-sm text-[var(--clr-primary-400)] font-medium'>{instructorName}</p>
        </div>

        {/* Course Title */}
        <h5 className="text-xl font-bold text-[var(--clr-primary-900)] mb-3">{title}</h5>

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
            <span className='line-through text-gray-400 mr-2'>${Math.round(princing)}</span>
            <span className='text-green-500'>Free</span>
          </p>
          <Link to={`/courses/${_id}`} className='text-[var(--clr-accent-900)] font-semibold transition-colors hover:text-[var(--clr-primary-900)]'>
            View More &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;