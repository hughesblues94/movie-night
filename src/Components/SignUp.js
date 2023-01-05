import { Form, redirect } from "react-router-dom";
import '../Styles/SignUp.css'

export default function SignUp() {


    return (
        <div>
            <h1>Sign Up</h1>
            <Form className="form" method="post" action="" >
                <label>
                    <span>Your Name:</span>
                    <input type="name" name="name" required placeholder="e.g. Marlon Brando"></input>
                </label>
                <label>
                    <span>Your e-mail:</span>
                    <input type="email" name="email" required></input>
                </label>
                <label>
                    <span>Password (minimum 6 characters, must contain a letter and a number)</span>
                    <input
                        type="password"
                        name="password"
                        required pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$"
                    ></input>
                </label>
                <label>
                    <span>Confirm Password:</span>
                    <input
                        type="password"
                        name="confirmPassword"
                        required pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$"
                    ></input>
                </label>
                <button>Submit</button>
            </Form>
        </div>
    );
}
export const userSignUp = async ({ request }) => {

    const data = await request.formData()

    const submission = {
        username: data.get('name'),
        email: data.get('email'),
        password: data.get('password'),
        confirmPassword: data.get('confirmPassword')
    }
    console.log(submission)

    if (submission.password !== submission.confirmPassword) {
        console.log("Passwords did not match, please try again")
    }

    // send post request

    //redirect user 
    return redirect('/')
}