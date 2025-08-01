export default function games() {
  return (
    <div>
      <div className="h-screen w-screen flex bg-orange-200 items-center justify-center gap-10">
        <a
          href="/games/rps"
          className="h-[20%] w-[40%] bg-white rounded-xl hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center text-2xl font-bold text-gray-800 hover:bg-gray-100 shadow-lg transform hover:shadow-xl active:scale-95 active:shadow-sm"
        >
          <h1>Rock Paper Scissor</h1>
        </a>
        <a
          href="/games/rps"
          className="h-[20%] w-[40%] bg-white rounded-xl hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center text-2xl font-bold text-gray-800 hover:bg-gray-100 shadow-lg transform hover:shadow-xl active:scale-95 active:shadow-sm"
        >
          Tic Tac Toe
        </a>{" "}
      </div>
    </div>
  );
}
