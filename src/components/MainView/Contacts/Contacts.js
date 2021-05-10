import React from "react";

const Contacts = () => {
  return (
    <div className="container">
      <div className="py-4 ">
        <form>
          <div class="form-group w-50">
          <h2>Contact Us</h2>
          <hr/>
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group w-50">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <br/><div class="form-group form-check w-50">
            <label class="form-check-label" for="exampleCheck1">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />Check me out
            </label>
            <hr/>
          <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
