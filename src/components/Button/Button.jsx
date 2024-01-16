const Button = ({ label, onClick }) => {
  return (
    <div
      className="bg-zinc-700 bg-opacity-40 dark:text-white rounded-sm grid place-items-center font-extrabold text-xl cursor-pointer"
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default Button;
