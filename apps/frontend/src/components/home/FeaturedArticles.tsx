'use client'

import { featuredArticles } from '@/data/articles';
import { ChevronRight } from 'lucide-react';

export default function FeaturedArticles() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Articles</h2>
          <p className="text-xl text-gray-400">Latest insights from industry experts</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {featuredArticles.map((article, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden hover:border-transparent hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2">
                <div className={`h-2 bg-gradient-to-r ${article.gradient}`}></div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${article.gradient} text-white`}>
                      {article.category}
                    </span>
                    <span className="text-gray-400 text-sm">{article.readTime} read</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-blue-300 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-400 font-semibold group-hover:text-blue-300 transition-colors">
                      Read More
                    </span>
                    <ChevronRight className="w-5 h-5 text-blue-400 group-hover:text-blue-300 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
}
