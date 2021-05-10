import React from "react";

const Signin = () => {
  return (
    <div className="container">
      <div className="py-4">
        <form>
          <div class="form-group w-50">
          <h2>Signin Form</h2>
          <hr/>
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              class="form-control"
              id="email"
              autoComplete="off"
              required
              aria-describedby="emailHelp"
            />
          </div>
          <div class="form-group w-50">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control"
              id="Password"
            />
            <hr/>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default Signin;