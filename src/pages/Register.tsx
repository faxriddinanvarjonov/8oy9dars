import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  let Username = useRef<HTMLInputElement>(null);
  let Email = useRef<HTMLInputElement>(null);
  let Password = useRef<HTMLInputElement>(null);

  let [boolean, setBoolean] = useState<boolean>(false);

  let navigate = useNavigate();

  useEffect(() => {
    localStorage.getItem("token") && navigate("/");
  });

  function handleSubmit(e: any) {
    e.preventDefault();
    interface card {
      username: string | undefined;
      email: string | undefined;
      password: string | undefined;
    }
    let card: card = {
      username: Username?.current?.value,
      email: Email?.current?.value,
      password: Password?.current?.value,
    };
    console.log(card);
    setBoolean(true);

    fetch("https://auth-rg69.onrender.com/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(card),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        data.message == "User registered successfully!" && navigate("/login");
      })
      .catch((err) => alert(err))
      .finally(() => {
        setBoolean(false);
      });
  }

  return (
    <div className="container mx-auto max-w-[1150px]">
      <div className="bg-base-100 p-5 rounded-lg my-2 flex justify-between">
        <Link className="text-white font-bold" to={"/"}>
          🏠Home
        </Link>
        <div className="flex gap-6 text-white font-semibold tracking-wider">
          <Link to={"/login"}>Login</Link>
          <Link to={"/register"}>Register</Link>
        </div>
      </div>
      <div className="hero mt-14">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left text-blue-950">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="username"
                  className="input input-bordered"
                  ref={Username}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  ref={Email}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  ref={Password}
                  required
                />
              </div>
              <div className="form-control mt-6">
                {boolean == false ? (
                  <button className="btn btn-primary">Login</button>
                ) : (
                  <button disabled className="btn btn-accent">
                    Loading...
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
