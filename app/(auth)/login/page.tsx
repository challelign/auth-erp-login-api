import LoginForm from "@/components/auth/login-form";
import LoginFormAPI from "@/components/auth/login-form-api";

const LoginPage = () => {
	return <LoginForm />;
	// return <LoginFormAPI />; // with out page refresh username is not visible
};

export default LoginPage;
