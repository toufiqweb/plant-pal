// components/Footer.tsx
import {   MailIcon, HeartIcon, LeafIcon } from 'lucide-react';
import Link from 'next/link';
import { BsInstagram, BsTwitterX } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-emerald-900  to-green-950 text-white pt-12 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-6 pt-10">
        <div className="footer flex justify-between flex-wrap footer-horizontal md:footer-horizontal lg:footer-horizontal grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Brand / Logo Section */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-emerald-500 rounded-2xl flex items-center justify-center">
                <LeafIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight">PlantPal</h2>
                <p className="text-emerald-300 text-sm">Keep your plants thriving</p>
              </div>
            </div>
            
            <p className="text-emerald-200 text-sm leading-relaxed max-w-xs">
              Never forget to water, fertilize, or care for your green friends again. 
              Built with love for plant parents 🌱
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-title text-emerald-100 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-emerald-200">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/timeline" className="hover:text-white transition-colors">Timeline</Link></li>
              <li><Link href="/stats" className="hover:text-white transition-colors">Analytics</Link></li>
              <li><Link href="/plants" className="hover:text-white transition-colors">My Plants</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="footer-title text-emerald-100 mb-4">Resources</h3>
            <ul className="space-y-2 text-emerald-200">
              <li><a href="#" className="hover:text-white transition-colors">Plant Care Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Common Issues</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="footer-title text-emerald-100 mb-4">Connect With Us</h3>
            
            <div className="flex gap-4 mb-6">
              <a href="#" className="hover:text-emerald-400 transition-colors">
                <BsInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                <BsTwitterX className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                <MailIcon className="w-6 h-6" />
              </a>
            </div>

            <div className="text-sm text-emerald-300">
              Made with <HeartIcon className="inline w-4 h-4 text-red-400 fill-red-400" /> for plant lovers
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-emerald-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-emerald-300">
          <div>
            © {new Date().getFullYear()} PlantPal. All rights reserved.
          </div>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center md:justify-end">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact Us</a>
          </div>

          <div className="text-xs flex items-center gap-1">
            Built with Next.js + DaisyUI + Tailwind
          </div>
        </div>
      </div>
    </footer>
  );
}