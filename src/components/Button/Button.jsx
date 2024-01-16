const Button = ({ label, onClick }) => {
  return (
    <button
      className="bg-zinc-700 bg-opacity-40 dark:text-white rounded-sm grid place-items-center font-extrabold text-xl cursor-pointer"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
