import React from 'react';

interface NavigationItemProps {
  item: {
    id: string;
    url: string;
    title: string;
  };
  pathname: string;
}

const NavigationItem: React.FC<NavigationItemProps> = ({ item, pathname }) => {
  return (
    <a
      key={item.id}
      href={item.url}
      className={`block relative font-code font-bold text-2xl text-n-1 hover:text-color-1 transition-colors
        px-6 py-3 md:py-4 lg:text-base lg:font-semibold lg:leading-5 xl:px-12
        ${item.url === pathname ? "lg:text-color-1" : ""}`}
    >
      {item.title}
    </a>
  );
};

export default NavigationItem;