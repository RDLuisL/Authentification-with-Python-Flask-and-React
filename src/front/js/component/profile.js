import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Profile = () => {
    const { store, actions } = useContext(Context);
    const [login_email, setEmail] = useState("");
    const [login_password, setPassword] = useState("");
    useEffect(() => {
        actions.private();
    }, []);

    return (
        <>
            <h1>Página Privada</h1>
            <p>Solo tienes acceso si haces login</p>
        </>
    );
};
