import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'
import { Github, Twitter, Linkedin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <Logo width="100px" className="text-white" />
            </Link>
            <p className="text-sm text-gray-400 mt-4">
              Empowering developers with cutting-edge tools and resources.
            </p>
            <div className="flex mt-6 space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              {['Features', 'Pricing', 'Affiliate Program', 'Press Kit'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-gray-400 hover:text-white transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Support</h3>
            <ul className="space-y-2">
              {['Account', 'Help', 'Contact Us', 'Customer Support'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-gray-400 hover:text-white transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-2">
              {['Terms & Conditions', 'Privacy Policy', 'Licensing'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-gray-400 hover:text-white transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} DevUI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer