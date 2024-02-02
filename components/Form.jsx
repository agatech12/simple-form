const Form = () => {
    return (
        <div className="h-full flex justify-center flex-col">
        <div className=" w-2/3 m-auto p-8 shadow-lg">
          <h1 className="text-4xl font-bold flex items-center">
          </h1>
          <form onSubmit className="flex flex-col">
            <div className="my-2 flex flex-col">
              <label htmlFor="name">Nama</label>
              <input
                className="border-2 p-2"
                type="text"
                id="name"
              />
            </div>
            <div className="my-2 flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                className="border-2 p-2"
                type="email"
                id="email"
              />
            </div>
            <div className="my-2 flex flex-col">
              <label htmlFor="message">Pesan</label>
              <textarea
                className="border-2 p-2"
                id="message"
              ></textarea>
            </div>
  
        
            <button
              className="mt-4 my-2 bg-blue-700 text-white w-full p-2 hover:bg-blue-900 transition-colors duration-200"
              >
                Kirim Disini
            </button>
          </form>
          <span>&copy; Copyright by Aga</span>
        </div>
      </div>
    );
  }

export default Form