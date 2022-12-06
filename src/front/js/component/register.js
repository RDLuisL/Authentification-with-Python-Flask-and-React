import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";

export const Register = () => {
    const { store, actions } = useContext(Context);
    const [signup_email, setEmail] = useState("");
    const [signup_password, setPassword] = useState("");

    return (
        <div class="container w-75 mt-5">

            <div className="row align-items-stretch">
                <div class="bg1 col position-relative">
                    <img class="img-fluid position-absolute top-0 end-0 bg2 r1" src="https://imagizer.imageshack.com/img922/2930/WomQBW.png" alt="Login image"></img>
                </div>
                <div className="bg2 col">
                    <form>
                        <h1>Create your account !!!</h1>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                onChange={(e) => setEmail(e.target.value)}
                                value={signup_email}
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="email@e-mail.com"
                            />
                            <div id="emailHelp" className="form-text">
                                We'll never share your email with anyone else.
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                onChange={(e) => setPassword(e.target.value)}
                                value={signup_password}
                                id="exampleInputPassword1"
                                placeholder="password"
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={() => {
                                actions.signup_func(signup_email, signup_password);
                            }}
                        >
                            Submit
                        </button>
                    </form>

                </div>

            </div>
        </div>
    );

};