import { FaCheck } from "react-icons/fa";

interface CheckpointProps {
  checks: string[];
}

const Checkpoints: React.FC<CheckpointProps> = ({ checks = [] }) => {
  return (
    <>
      {checks.map((check, index) => (
        <span key={index} className="flex items-center text-left mb-2">
          <FaCheck className="mr-2" /> 
          {check}
        </span>
      ))}
    </>
  );
}

export default Checkpoints;