const auth = useAuth();
console.log("Auth object:", auth); // Add this to debug

// Check if loginUser exists
const loginUser =
  auth.loginUser ||
  (() => {
    console.error("loginUser is not available");
    return Promise.reject("loginUser is not available");
  });

const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm<LoginFormsInputs>({ resolver: yupResolver(validation) });

const handleLogin = (form: LoginFormsInputs) => {
  loginUser(form.email, form.password);
};
