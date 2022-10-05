function Button({ title, handleEvent }) {
  return (
    <button
      type="button"
      onClick={() => handleEvent()}
      className="button-gradient py-3 px-3 sm:px-6 
      text-white w-auto sm:w-320 text-center mt-10 mb-10"
    >
      {title}
    </button>
  );
}
export default Button;
