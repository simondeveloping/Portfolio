import Navbar from "@/app/components/navbar";
import PrivateRoute from "../../../PrivateRoute";
export default function Pinguin() {
  return (
    <PrivateRoute>
      <div>
        <div className="fixed inset-0 opacity-0 visibility-hidden">
          <Navbar />
        </div>
        <div className="bg-amber-200 z-500 fixed inset-0">
          <div className="h-screen w-full flex justify-center items-center flex-col">
            <div className="text-4xl text-black dark:text-white">
              Will you go out with me?
            </div>
            <img
              src="/GoOutWithMe.jpg"
              className="max-w-[200px] max-h-[200px]"
            ></img>
          </div>
        </div>
      </div>
    </PrivateRoute>
  );
}
