import React from 'react';

const WorkInProgress = () => {
  const phoneNumber = "+880 1776-380593"; 
  const whatsappNumber = "8801776380593"; 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-br from-[#f0f4f5] to-[#A98547] text-gray-100 p-6">
      <div className="w-full max-w-xl text-center space-y-8">
        
      
        <div className="flex flex-col items-center justify-center space-y-3">
          {/* Replace this SVG with your actual <img> logo */}
          <div>
            <img src="" alt="" />
          </div>
          <h2 className="text-4xl cantarell-bold tracking-normal text-[#A98547] uppercase font-bold">
            Triple A <br />Bath & Beauty
          </h2>
        </div>
        
        {/* Headings with Animation */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            
            {/* Spinning Gear Animation */}
            <svg className="w-10 h-10 text-gray-700 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            
            <h1 className="text-4xl text-gray-700 md:text-4xl cantarell-bold tracking-tight flex items-end">
              Work in Progress
              {/* Bouncing Dots Animation */}
              <span className="flex space-x-1 ml-2 mb-2">
                <span className="w-2.5 h-2.5 bg-gray-700 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                <span className="w-2.5 h-2.5 bg-gray-700 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                <span className="w-2.5 h-2.5 bg-gray-700 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
              </span>
            </h1>
          </div>
          
          <p className="text-gray-800 text-xl px-4 cantarell-regular">
            Our website is currently under development. In the meantime, feel free to reach out to us directly for any inquiries!
          </p>
        </div>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          
          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3 bg-[#25D366] hover:bg-[#1ebd5a] text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.115.548 4.17 1.586 5.981L.062 24l6.15-1.586c1.748.962 3.733 1.47 5.819 1.47 6.646 0 12.031-5.385 12.031-12.031S18.677 0 12.031 0zm3.896 17.156c-.167.473-.967.896-1.344.938-.376.042-.853.125-2.736-.626-2.257-.9-3.708-3.23-3.812-3.375-.104-.146-.916-1.218-.916-2.322 0-1.104.583-1.646.792-1.875.208-.229.458-.291.604-.291.146 0 .292 0 .416.01.125.01.292-.041.458.354.167.396.562 1.375.604 1.458.042.083.062.188 0 .313-.062.125-.104.188-.208.313-.104.125-.229.271-.312.354-.104.104-.208.229-.083.438.125.208.562.916 1.208 1.479.833.729 1.542.958 1.75 1.062.208.104.333.083.458-.062.125-.146.542-.625.688-.833.146-.208.292-.167.479-.104.188.062 1.188.562 1.396.666.208.104.312.146.354.229.042.083.042.479-.125.952z" />
            </svg>
            WhatsApp Us
          </a>

          {/* Phone Call Button */}
          <a
            href={`tel:${phoneNumber}`}
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {phoneNumber}
          </a>
          
        </div>
        
      </div>
    </div>
  );
};

export default WorkInProgress;