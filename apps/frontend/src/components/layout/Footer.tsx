import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              ASleekGeek
            </h3>
            <p className="text-gray-400 text-sm">
              Empowering developers with cutting-edge insights and practical knowledge.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Content</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">Latest Articles</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Tutorials</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Industry News</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">Discord</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">GitHub</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Twitter</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">LinkedIn</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} ASleekGeek. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
