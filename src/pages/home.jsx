import React, { useState } from 'react'

function Home() {

  //*registration functionality
  const [isRegistered, setIsRegistered] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform further actions here, like sending the form data to the server
    console.log(formData);
    setIsRegistered(true);
  };



  //*login page functionality
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here...
    console.log('Email:', email);
    console.log('Password:', password);
    if (formData.email===email && formData.password===password) {
      alert("login successfull")
    }
   
    // Example: You can make an API call to authenticate the user
  };

  return (
    <>

    {/* REGISTRAION PAGE */}
    <div className={`p-10 ${isRegistered ? 'hidden' : ''}`}>
      <h1 className="mb-8 font-extrabold text-4xl">Register</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <form onSubmit={handleSubmit}>
          <div>
            <label className="block font-semibold" htmlFor="name">Name</label>
            <input
              className="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full"
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              autoFocus
            />
          </div>

          <div className="mt-4">
            <label className="block font-semibold" htmlFor="email">Email</label>
            <input
              className="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full"
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mt-4">
            <label className="block font-semibold" htmlFor="password">Password</label>
            <input
              className="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full"
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              autoComplete="new-password"
            />
          </div>
          <div className='my-5'>
            <label  className="block font-semibold" >upload photo</label>
            <input type="file" />
          </div>
          <div className="flex items-center justify-between mt-8">
            <button
              type="submit"
              className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
            >
              Register
            </button>
            <a className="font-semibold" href="#!" onClick={()=> setIsRegistered(true)}>
              Already registered?
            </a>
          </div>
        </form>

        <aside className="">
          <div className="bg-gray-100 p-8 rounded">
            <h2 className="font-bold text-2xl">Instructions</h2>
            <ul className="list-disc mt-4 list-inside">
              <li>All users must provide a valid email address and password to create an account.</li>
              <li>Users must not use offensive, vulgar, or otherwise inappropriate language in their username or profile information</li>
              <li>Users must not create multiple accounts for the same person.</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  {/* REGISTRAION PAGE END HERE*/}


{/* LOGIN PAGE */}
<div className={`bg-gradient-to-br from-purple-700 to-pink-500 min-h-screen flex flex-col justify-center items-center ${isRegistered ? '' : 'hidden'}`}>
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md">
        <h1 className="text-4xl font-bold text-center text-purple-700 mb-8">Welcome to My Website</h1>
        <form className="space-y-6" onSubmit={handleLogin} >
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-400"
              required
            />
          </div>
          
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-400"
              required
            />
          <div>
             <button type="submit" className="w-full bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded-lg">
              Log In
            </button>
          </div>
          <a href="" onClick={()=> setIsRegistered(true)} className="mt-3">Create an account?</a>
        </form>
      </div>
    </div>
    {/* LOGIN PAGE END HERE*/}
    </>
  )
}

export default Home