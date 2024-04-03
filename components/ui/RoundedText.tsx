interface InputProps {
  label: string;
}

const RoundedText: React.FC<InputProps> = ({ label }) => {
  return (
    <div className="dark:bg-gray-900 bg-gray-200 px-6 py-2 rounded-xl flex justify-center items-center text-wrap">
      <p>{label}</p>
    </div>
  );
};

export default RoundedText;
