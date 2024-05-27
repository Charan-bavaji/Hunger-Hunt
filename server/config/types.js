const zod = require('zod');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const RegisterUser = zod.object({
    name: zod.string(),
    email: zod.string().email({message: "Invalid email"}).refine((email) => emailRegex.test(email), {message: "Invalid email domain"}),
    password: zod.string().min(8, {message: "Password must be atleast 8 characters"}).refine((pass) => passwordRegex.test(pass), {message: "Password must contain at least one uppercase, one number and one special character"})
})

const LoginUser = zod.object({
    email: zod.string(),
    password: zod.string()
})


module.exports = {
    RegisterUser,
    LoginUser
}