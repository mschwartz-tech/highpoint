export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg
                viewBox="0 0 32 32"
                className="w-7 h-7 flex-shrink-0"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 2C9.4 2 4 10 4 20c0 4 1.4 7.6 3.6 10C9 26.4 12.3 24 16 24s7 2.4 8.4 6C26.6 27.6 28 24 28 20 28 10 22.6 2 16 2z"
                  fill="#1B5E20"
                />
                <path
                  d="M16 24V30"
                  stroke="#4E342E"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <div>
                <div className="font-extrabold text-base leading-none tracking-tight">
                  HIGH POINT
                </div>
                <div className="text-white/50 text-xs font-semibold tracking-widest uppercase">
                  PROPERTIES
                </div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Premium landscaping and property services for the Twin Cities
              north metro. Locally owned, locally invested.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {["Services", "About", "Testimonials", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-white/60 hover:text-white text-sm transition-colors duration-200 cursor-pointer"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Contact Us
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:6512805768"
                className="flex items-center gap-2.5 text-white/60 hover:text-white text-sm transition-colors duration-200 cursor-pointer"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-accent flex-shrink-0" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                651-280-5768
              </a>
              <a
                href="mailto:hppropertiesmn@gmail.com"
                className="flex items-center gap-2.5 text-white/60 hover:text-white text-sm transition-colors duration-200 cursor-pointer"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-accent flex-shrink-0" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                hppropertiesmn@gmail.com
              </a>
              <div className="flex items-center gap-2.5 text-white/60 text-sm">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-accent flex-shrink-0" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                Serving the Twin Cities North Metro
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            &copy; 2024 High Point Properties. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            New Brighton, Minnesota
          </p>
        </div>
      </div>
    </footer>
  );
}
