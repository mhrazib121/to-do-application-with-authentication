const Button = ({ label }) => {
  return (
    <button
      type="submit"
      className="w-full sm:w-auto   text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-2 sm:mb-0"
    >
      {label}
    </button>
  );
};

export default Button;
