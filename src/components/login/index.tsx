import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useAuth } from "../../providers/auth";

interface UserData {
  email: string;
  password: string;
}

function Login() {
  const formSchema = yup.object().shape({
    email: yup.string().required("*E-mail obrigatório"),
    password: yup.string().required("*Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({
    resolver: yupResolver(formSchema),
  });

  const { SignIn }: any = useAuth();

  return (
    <form className="form" onSubmit={handleSubmit(SignIn)}>
      <input placeholder="E-mail" {...register("email")} />
      <p>{errors.email?.message}</p>
      <input placeholder="Senha" type="password" {...register("password")} />
      <p>{errors.password?.message}</p>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
