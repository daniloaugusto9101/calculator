const Button = ({ label, onClick }) => {
  const regexOperador = /^[+\-*/]+$/;

  const btnColor = regexOperador.test(label)
    ? "bg-pink-600"
    : "bg-zinc-700 bg-opacity-40";

  return (
    <button
      className={`${btnColor}  dark:text-white rounded-sm grid place-items-center font-extrabold text-xl cursor-pointer`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
