import { Form, redirect } from "react-router-dom";
import '../Styles/SignUp.css';
import axios from 'axios';
// const bcrypt = require("bcryptjs")
// const saltRounds = 10;


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
                <button className="submit-button">Submit</button>
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
    

    if (submission.password !== submission.confirmPassword) {
        console.log("Passwords did not match, please try again")
    } else { 

        const headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        };
       
        const { username, email, password } = submission
        const viableData = {email, username, password}
        console.log(viableData)

    // bcrypt.hash(viableData.password, saltRounds, function(err, hash) {
    //     return viableData.password = hash;
    // })
    console.log(viableData)
    axios.post("http://localhost:3300/users", viableData, {headers})
        .then((response) => {   
            if (response.status === "500") {
                console.log("an error occured try again")
                console.log(response.body)
                console.log(response.status)
            } else {
                console.log("You have made an account!")
            }
        }) }

    //redirect user 
    return redirect('/')
}