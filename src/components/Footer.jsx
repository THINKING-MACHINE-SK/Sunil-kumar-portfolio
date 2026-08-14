import { Link } from "react-router-dom";

import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className='footer font-poppins text-[#a89060]'>
      <hr className='border-[#c9a84c]/20' />

      <div className='footer-container'>
        <p>
          © 2026 <strong className='text-[#f0e6c8]'>Sunil Kumar</strong>. All
          rights reserved.
        </p>

        <div className='flex gap-3 justify-center items-center'>
          {socialLinks.map((link) =>
            link.link.startsWith("/") ? (
              <Link key={link.name} to={link.link}>
                <img
                  src={link.iconUrl}
                  alt={link.name}
                  className='w-6 h-6 object-contain opacity-70 hover:opacity-100 hover:drop-shadow-[0_0_6px_rgba(201,168,76,0.6)] transition-all'
                />
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.link}
                target={link.link.startsWith("http") ? "_blank" : undefined}
                rel='noopener noreferrer'
              >
                <img
                  src={link.iconUrl}
                  alt={link.name}
                  className='w-6 h-6 object-contain opacity-70 hover:opacity-100 hover:drop-shadow-[0_0_6px_rgba(201,168,76,0.6)] transition-all'
                />
              </a>
            )
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
