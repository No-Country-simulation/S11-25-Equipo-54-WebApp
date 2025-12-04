const Login = () => {
  return (
    <div className="w-2xl h-96 flex justify-center items-center bg-black">
      <form className="w-96 h-80 flex flex-col justify-evenly items-center  bg-header-blue text-black rounded-2xl">
        <h2 className="text-2xl">Ingresa tus datos</h2>
        <label htmlFor="name">Escribe tu nombre</label>
        <input
          id="name"
          type="text"
          placeholder="Nombre"
          className="w-52 h-7 placeholder:pl-3 rounded-sm bg-primary-white"
        />
        <label htmlFor="email">Escribe tu email</label>
        <input
          id="email"
          type="text"
          placeholder="Email"
          className="w-52 h-7 placeholder:pl-3 rounded-sm bg-primary-white"
        />
        <button className="w-52 h-9 rounded-md bg-primary-green">
          Ingresar
        </button>
      </form>
    </div>
  );
};
export default Login;
