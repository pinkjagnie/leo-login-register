const RegisterForm = () => {
  return (
    <form className="form-control w-[90%] md:w-[60%] p-6 mx-auto">
      <div className="pb-6">
        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="input-ghost w-[100%] border-b border-gray-900"
        />
      </div>
      <div className="pb-6">
        <label htmlFor="password" className="label">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="input-ghost w-[100%] border-b border-gray-900"
        />
      </div>
      <div className="pb-6 flex items-center justify-start">
        <input type="checkbox" id="selectCheckbox" className="checkbox" />
        <label
          htmlFor="selectCheckbox"
          className="label-text cursor-pointer pl-2"
        >
          I accept the terms of service
        </label>
      </div>
    </form>
  );
};

export default RegisterForm;
