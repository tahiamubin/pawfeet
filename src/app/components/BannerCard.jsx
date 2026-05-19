import React from 'react';

const BannerCard = () => {
    return (
        <div className='mb-20'>
        <div className="mt-20 ">
        {/* <div className=" justify-center items-center  badge badge-soft badge-success bg-[#EBF3EE]">Why Pawfeet Home</div> */}
        <h1 className="text-5xl font-bold text-center">
          Everything you need to adopt with confidence
        </h1>
        <p className="text-center mt-10 text-xl text-gray-500">We make the adoption journey simple, <br /> transparent, and joyful — from first browse to forever home.</p>
      </div>
      <div className="container mx-auto  gap-4 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        <div className="card bg-[#FBF8F3] rounded-2xl  shadow-sm  hover:border border-[#C8714A] transition-all duration-300  hover:-translate-y-1 cursor-pointer">
          <div className="card-body p-6">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-xl mb-4">
              🔍
            </div>
            <h2 className="card-title text-lg font-bold text-[#1B2D1F] mb-2">
              Smart Pet Matching
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              Tell us your lifestyle, home size & preferences. Our algorithm
              finds pets that truly fit your life.
            </p>
            <div className="card-actions mt-4">
              <span className="text-sm font-semibold text-[#3D6B4F] hover:text-[#52B788] cursor-pointer">
                Explore matching →
              </span>
            </div>
          </div>
        </div>
        <div className="card bg-[#FBF8F3] rounded-2xl  shadow-sm  hover:border border-[#C8714A] transition-all duration-300  hover:-translate-y-1 cursor-pointer">
          <div className="card-body p-6">
            <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center text-xl mb-4">
              📋
            </div>
            <h2 className="card-title text-lg font-bold text-[#1B2D1F] mb-2">
              One-Click Applications
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              Apply to multiple shelters with a single profile. Track all your
              requests from one dashboard.
            </p>
            <div className="card-actions mt-4">
              <span className="text-sm font-semibold text-[#3D6B4F] hover:text-[#52B788] cursor-pointer">
                See dashboard →
              </span>
            </div>
          </div>
        </div>

        <div className="card bg-[#FBF8F3] rounded-2xl  shadow-sm  hover:border border-[#C8714A] transition-all duration-300  hover:-translate-y-1 cursor-pointer">
          <div className="card-body p-6">
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-xl mb-4">
              🏥
            </div>
            <h2 className="card-title text-lg font-bold text-[#3D6B4F] mb-2">
              Vet-Verified Profiles
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              Every pet listing includes health records, vaccination status, and
              a behaviour assessment.
            </p>
            <div className="card-actions mt-4">
              <span className="text-sm font-semibold text-[#3D6B4F] hover:text-[#52B788] cursor-pointer">
                Learn more →
              </span>
            </div>
          </div>
        </div>

        <div className="card bg-[#FBF8F3] rounded-2xl  shadow-sm  hover:border border-[#C8714A] transition-all duration-300  hover:-translate-y-1 cursor-pointer">
          <div className="card-body p-6">
            <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-xl mb-4">
              💬
            </div>
            <h2 className="card-title text-lg font-bold text-[#1B2D1F] mb-2">
              Post-Adoption Care
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              Access expert guides, a 24/7 vet helpline, and a community of new
              pet owners for free.
            </p>
            <div className="card-actions mt-4">
              <span className="text-sm font-semibold text-[#3D6B4F] hover:text-[#52B788] cursor-pointer">
                Join community →
              </span>
            </div>
          </div>
        </div>
      </div>

      
      </div>
    );
};

export default BannerCard;