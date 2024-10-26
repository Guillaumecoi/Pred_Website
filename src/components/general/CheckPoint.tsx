import { FaCheck } from "react-icons/fa";

interface CheckpointProps {
  check: string;
  key: string;
}

const Checkpoint: React.FC<CheckpointProps> = ({ check, key }) => {
  return (
    <span key={key} className="flex items-center mb-2">
      <FaCheck className="mr-2" /> 
      {check}
    </span>
  );
}

export default Checkpoint;