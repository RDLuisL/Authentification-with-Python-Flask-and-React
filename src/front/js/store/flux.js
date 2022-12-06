// Objeto getState
const getState = ({ getStore, getActions, setStore }) => {
	return {

		store: {
			message: null,
			resultado_login: [],
			resultado_signup: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white",
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white",
				},
			],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(
						"https://3001-luisluna-authenticat-h39v287anee.ws-us75.gitpod.io" +
						"/api/hello"
					);
					const data = await resp.json();
					setStore({ message: data.message });
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error);
				}
			},

			/*Login function following*/
			// User's info to login array
			login_func: (login_email, login_password) => {

				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					email: "caracas@mail.cl",
					password: "13945173",
				});
				// Fetch POST user info
				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow",
				};

				fetch(
					"https://3001-luisluna-authenticat-h39v287anee.ws-us75.gitpod.io/login",
					requestOptions
				)
					.then((response) => response.json())
					.then((result) => {
						console.log(result);
						localStorage.setItem("token", result.token);
						/**Local */
					})
					.catch((error) => console.log("error", error));
			},
			// Register signup (email, password) info array
			signup_func: (signup_email, signup_password) => {

				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				let request_body = JSON.stringify({
					email: signup_email,
					password: signup_password,
				});
				// Fetch POST signup (email, password) info array 
				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: request_body,
					redirect: "follow",
				};
				//   Fetch register checkout 
				fetch(
					"https://3001-luisluna-authenticat-h39v287anee.ws-us75.gitpod.io/signup",
					requestOptions
				)
					.then((response) => response.json())
					.then((result) => {
						console.log(result);
						if (result.registro == "ok") {
							alert("Register succeded");
							window.location.href = "/";
						} else {
							alert("Register fail");
						}
					})
					.catch((error) => console.log("error", error));
			},
			// Token caling autorization
			private: () => {
				console.log("calling privated function");
				var myHeaders = new Headers();
				var token1 = localStorage.getItem("token");
				let autorizacion = "Bearer " + token1;

				myHeaders.append("Authorization", autorizacion);

				var requestOptions = {
					method: "GET",
					headers: myHeaders,
					redirect: "follow",
				};
				//   Fetch GET autentification 
				fetch(
					"https://3001-luisluna-authenticat-h39v287anee.ws-us75.gitpod.io/private",
					requestOptions
				)
					.then((response) => response.json())
					.then((result) => {
						if (result.success == "ok") {
							console.log(result);
						} else {
							console.log("NOT");
							window.location.href = "/";
						}
					})
					.catch((error) => console.log("error", error));
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
		},
	};
};

export default getState;
