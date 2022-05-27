import { Navigate } from "react-router-dom";

const Auth = (Component:any) => {
    return (props:any) => {

        const authToken = localStorage.getItem('auth-token');
        console.log("auth-token", authToken);
        console.log("Auth props", props);

        if (authToken) {
            return <Component {...props}/>
        } else {
            return <Navigate to="/login" />
        }

    }
}

export default Auth;