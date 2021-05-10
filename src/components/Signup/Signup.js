import React from "react";

const Signup = () => {
  return (
    <div className="container ">
      <div className="py-4">
        
        <form action="" className="container-white">
        
       <div class="form-group w-50">
       <h2>Signup Form</h2>
        <hr/>
            <label for="username">Username</label>
            <input
              type="username"
              name="username"
              class="form-control "
              id="username"
              autoComplete="off"
            />
          </div>
          <div class="form-group w-50 ">
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              class="form-control"
              id="email"
              autoComplete="off"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="form-group w-50 ">
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
export default Signup;