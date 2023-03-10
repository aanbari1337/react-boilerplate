function App() {
  return (
    <div className="w-screen h-screen overflow-hidden bg-tailwind-blue">
      <div className="w-4/6 mx-auto mt-10 text-white flex  justify-center h-80 ">
        <div className="m-10 text-center">
          <h3 className="font-bold text-6xl">
            Welcome to my React Boilerplate
          </h3>
          <p className="mt-8 text-gray-600">
            using{" "}
            <a
              href="https://webpack.js.org/"
              target="_blank"
              className="text-blue-500"
              rel="noreferrer"
            >
              Webpack
            </a>{" "}
            and{" "}
            <a
              href="https://tailwindui.com/"
              target="_blank"
              className="text-blue-500"
              rel="noreferrer"
            >
              Tailwindcss
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
