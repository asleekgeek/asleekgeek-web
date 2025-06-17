export default function Newsletter() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900/20 to-violet-900/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="text-xl text-gray-300 mb-8">
          Get the latest articles and insights delivered to your inbox
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button className="bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
