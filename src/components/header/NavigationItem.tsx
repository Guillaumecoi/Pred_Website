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
      className={`block relative text-white hover:text-color-1 transition-colors
        px-6 py-3 lg:py-4 lg:text-lg lg:leading-5 xl:px-10
        ${item.url === pathname ? "lg:text-color-1" : ""}`}
    >
      {item.title}
    </a>
  );
};

export default NavigationItem;