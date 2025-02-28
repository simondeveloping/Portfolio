export default function error404() {
  return (
    <div className="h-screen flex justify-center items-center flex-col gap-5 dark:bg-blay bg-white">
      <div className="text-blay dark:text-white text-4xl">
        404 - This page could not be found.
      </div>
      <div className="text-blue-400 text-3xl">Maybe touch some grass?</div>
    </div>
  );
}
