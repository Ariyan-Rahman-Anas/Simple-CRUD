import './App.css'

function App() {
  const handleSubmit=(e) => {
    e.preventDefault();
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const aUser = { name, email }
    console.log(aUser)
}
  return (
    <div className="flex items-center justify-center w-full h-[80vh]">
      <div className='w-full'>
        <h1 className='text-5xl font-light mb-8'>Simple CRUD system is here for You!</h1>
        <div className="border- bg-gray-300 rounded-md w-full ">
          <form onSubmit={handleSubmit} className="w-full p-5">
            <input type="text" name='name' required className="w-full border rounded-md p-2" /> <br />
            <input type="email" name='email' required className="w-full border my-4 rounded-md p-2 " /> <br />
            <input
              type="submit"
              value="Add the user"
              className="bg-white p-3 rounded-md cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
export default App
