import React from 'react';

const Footer = () => {
    return (
       <div className="hero bg-gradient-to-r from-[#8b5cf6] via-[#c084fc] to-[#f5f3ff] min-h-screen text-[#4b0082]">
  <div className="hero-content flex-col lg:flex-row-reverse gap-16">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Join the HERO.IO Community</h1>
      <p className="py-6">
        Our platform empowers users with seamless digital experiences.
From innovative apps to reliable tools, HERO.IO is designed to make your workflow smarter, easier, and more enjoyable.
Sign in to get started and be part of our growing community.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input text-gray-600" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input text-gray-600" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </div>
    </div>
  </div>
</div>
    );
};

export default Footer;