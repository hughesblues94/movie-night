import { Form, redirect } from "react-router-dom";

export default function SignUp() {
    return (
        <div>
            <Form method="post" action="" >
                <label>
                    <span>Your Name:</span>
                    <input type="name" name="name" required></input>
                </label>
                <label>
                    <span>Your e-mail:</span>
                    <input type="name" name="email" required></input>
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
        email: data.get('email')
    }
    console.log(submission)

    // send post request

    //redirect user 
    return redirect('/')
}