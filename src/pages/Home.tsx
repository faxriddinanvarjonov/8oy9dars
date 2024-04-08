import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mx-auto max-w-[1150px]">
      <div className="bg-base-100 p-5 rounded-lg my-2 flex justify-between">
        <Link className="text-white font-bold" to={"/"}>
          🏠Home
        </Link>
        {!localStorage.getItem("token") ? (
          <div className="flex gap-6 text-white font-semibold tracking-wider">
            <Link to={"/login"}>Login</Link>
            <Link to={"/register"}>Register</Link>
          </div>
        ) : (
          <div className="text-white">
            You are{" "}
            <span className="text-red-500 uppercase">
              {localStorage.getItem("token")}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
