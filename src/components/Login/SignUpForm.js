import React from "react";

const SignUpForm = (props) => {
    const { toggleUser, validation, submit, errors } = props;
    console.log(errors);

    return (
        <div className="loginPage-form login signup">
            <h3>Create an account</h3>

            <form onSubmit={submit}>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                        name="name"
                        onBlur={validation}
                    />
                    {errors.name.length > 0 && <p className="error-msg">{errors.name}</p>}
                </div>

                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email" name="email" onBlur={validation} />
                    {errors.email.length > 0 && <p className="error-msg">{errors.email}</p>}
                </div>

                <div className="form-group">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        onBlur={validation}
                    />
                    {errors.password.length > 0 && <p className="error-msg">{errors.password}</p>}
                </div>

                <div className="form-group">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        onBlur={validation}
                    />
                    {errors.confirmPassword.length > 0 && <p className="error-msg">{errors.confirmPassword}</p>}
                </div>

                <button type="submit" className="btn btn-warning loginPage-primary btn-block">
                    Create an account
				</button>
            </form>

            <div className="register-login">
                Already have an account?{" "}
                <button className="btn btn-logintoggle" onClick={toggleUser}>
                    Login
				</button>
            </div>
        </div>
    );
};

export default SignUpForm;