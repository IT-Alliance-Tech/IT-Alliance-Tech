import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '../../../lib/blogData';

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Calculate reading time (roughly 200 words per minute)
  const wordCount = post.content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200) + " min read";

  return (
    <main className="min-h-screen bg-[#F8FAFC] pt-12 pb-0">
      
      {/* Article Container */}
      <article className="w-full max-w-full px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Back navigation */}
        <div className="mb-8 flex items-center justify-between">
          <Link 
            href="/blog"
            className="group inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-full"
          >
            <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to All Blogs
          </Link>
          <div className="flex space-x-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 border border-gray-200 shadow-sm">
              AI & Marketing
            </span>
          </div>
        </div>

        {/* Premium Hero Section */}
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#001a33] leading-tight mb-6 tracking-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center text-gray-500 mb-8 gap-4 sm:gap-6 border-b border-gray-200 pb-8">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
                IT
              </div>
              <div className="ml-3">
                <p className="text-base font-bold text-gray-900">IT Alliance Team</p>
                <p className="text-sm">Expert Insights</p>
              </div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-gray-300"></div>
            <div className="flex items-center space-x-5 text-sm font-medium">
              <div className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                {post.date}
              </div>
              <div className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                {readingTime}
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-[400px] md:h-[450px] rounded-3xl overflow-hidden shadow-xl group border-[6px] border-white bg-white">
            <div className="absolute inset-0 bg-blue-900/5 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
            <Image 
              src={post.image} 
              alt={post.title} 
              fill 
              className="object-contain transform group-hover:scale-105 transition-transform duration-700 p-4"
              priority
            />
          </div>
        </header>

        {/* Post Content with Premium Typography Container */}
        <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8 md:p-12 lg:p-16 mb-16 relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full -z-0 opacity-70"></div>
          
          <div 
            className="relative z-10 prose prose-lg md:prose-xl max-w-none text-gray-700 
            prose-headings:text-[#001a33] prose-headings:font-bold prose-headings:tracking-tight
            prose-h2:text-3xl md:prose-h2:text-4xl prose-h2:mt-8 prose-h2:mb-6 prose-h2:pb-4 prose-h2:border-b prose-h2:border-gray-200
            prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-blue-900
            prose-p:leading-relaxed prose-p:mb-8
            prose-a:text-blue-600 hover:prose-a:text-blue-800 prose-a:font-semibold prose-a:underline-offset-4 prose-a:decoration-2
            prose-img:rounded-2xl prose-img:shadow-xl prose-img:my-10
            prose-li:mb-3 prose-ul:mb-8 prose-ul:list-disc prose-ul:pl-6
            prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-600 prose-blockquote:bg-blue-50/50 prose-blockquote:py-3 prose-blockquote:pr-4 prose-blockquote:rounded-r-xl prose-blockquote:my-8"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share/Action bottom */}
          <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between">
            <h3 className="text-xl font-bold text-[#001a33] mb-4 sm:mb-0">Connect with us</h3>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/ITalliancetechbnglr/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>
              </a>
              <a href="https://x.com/Italliance_tech" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-blue-50 text-gray-800 flex items-center justify-center hover:bg-gray-800 hover:text-white shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
              </a>
              <a href="https://www.youtube.com/@ITAllianceAISystems" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-blue-50 text-red-600 flex items-center justify-center hover:bg-red-600 hover:text-white shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </article>
      
      {/* Call to Action Section */}
      <section className="bg-gradient-to-br from-[#001a33] to-blue-900 py-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="w-full max-w-full px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Ready to Transform Your Business?</h2>
          <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
            Leverage AI and smart automation to skyrocket your ROI and build stronger customer relationships today.
          </p>
          <Link href="/contactUs" className="inline-block bg-white text-blue-900 font-bold py-4 px-10 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105">
            Book a Free Consultation
          </Link>
        </div>
      </section>

    </main>
  );
}
