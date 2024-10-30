import { FaCheck } from "react-icons/fa";

interface CheckpointProps {
  checks: string[];
}

const Checkpoints: React.FC<CheckpointProps> = ({ checks = [] }) => {
  return (
    <>
      {checks.map((check, index) => (
        <span key={index} className="flex items-center mb-2">
          <FaCheck className="mr-2 flex-shrink-0" size={16} />
          <div className="text-left">{check}</div>
        </span>
      ))}
    </>
  );
}

export default Checkpoints;