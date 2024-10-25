import React from 'react';
import { footer } from '../constants';

const Footer: React.FC = () => {
    return (
      <footer className="bg-gray-900 text-gray-100 text-sm">
        <div className="flex flex-row py-4 justify-center px-12 lg:px-24">
          <p className="flex-1 text-left">&copy; {new Date().getFullYear()} {footer.company}, designed by {footer.designer}</p>
          {footer.email &&
            <p className="flex-1 text-right">Contact: {footer.email}</p>
          }
        </div>
      </footer>
    );
};

export default Footer;