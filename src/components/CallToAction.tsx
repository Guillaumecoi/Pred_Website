interface CallToActionProps {
  url: string;
  title: string;
  className?: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ url, title, className="" }) => {
  return (
    <a href={url} className={`w-72 rounded-2xl shadow-md shadow-black/50 flex justify-center items-center text-center ${className}`}>
      {title}
    </a>
  );
};

export default CallToAction;