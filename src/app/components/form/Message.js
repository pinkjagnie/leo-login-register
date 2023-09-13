const Message = ({ message, errorMsg }) => {
  return (
    <div className="w-[90%] py-4 mx-auto">
      <p
        className={`text-center font-medium text-lg ${
          message ? "text-teal-900" : "text-rose-900"
        }`}
      >
        {message || errorMsg}
      </p>
    </div>
  );
};

export default Message;
