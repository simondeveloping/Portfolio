export default function Register() {
  return (
    <div
      className="bg-cover bg-no-repeat"
      style={{ backgroundImage: "url(/login.gif)" }}
    >
      <div className="h-screen flex justify-center items-center flex-col gap-5">
        <div className="border-2 border-blay dark:border-white bg-transparent backdrop-blur-md w-[60vw] h-[70vh] rounded-xl"></div>
        <div className="w-[60vw] flex justify-start">
          {" "}
          <div className=" w-auto border-2 border-blay dark:border-white bg-transparent backdrop-blur-md p-2 rounded-xl flex flex-row">
            <h1>Dont have an Account?</h1>
            <h1></h1>
          </div>
        </div>
      </div>
    </div>
  );
}
