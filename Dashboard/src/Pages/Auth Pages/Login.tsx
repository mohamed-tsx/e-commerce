const Login = () => {
  return (
    <form className="flex justify-center items-center h-screen">
      <div className="bg-green-300 p-8 rounded w-1/3">
        <div className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="username"
              className=" rounded-md w-full p-2"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="password"
              className="w-full p-2 rounded-md"
            />
          </div>
          <div className="mt-10">
            <button className="bg-black w-full p-2 flex justify-center items-center text-white rounded-md">
              Login
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
