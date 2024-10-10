interface CallToActionProps {
  url: string;
  title: string;
  className?: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ url, title, className="" }) => {
  return (
    <a href={url} className={`w-72 rounded-2xl shadow-md shadow-black/50 flex justify-center text-center 
        transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-black/70
        ${className}`}
    >
      {title}
    </a>
  );
};

export default CallToAction;