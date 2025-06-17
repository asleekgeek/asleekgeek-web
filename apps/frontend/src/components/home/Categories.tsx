"use client";

import { categories } from '@/data/categories';

export default function Categories() {
  return (
    <section className="py-16 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Explore by Category</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="group cursor-pointer">
                <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 text-center hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1">
                  <Icon className="w-8 h-8 mx-auto mb-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
                  <p className="text-gray-400 text-sm">{category.count} articles</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
