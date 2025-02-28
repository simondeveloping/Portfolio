import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Overlay from "../components/overlay";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";
export default function Contact() {
  return (
    <div>
      <div className="dark:bg-blay ">
        <Overlay />
        <div className="w-full h-[20vh] flex justify-center items-center mb-20">
          <h1 className="text-blay dark:text-white text-8xl font-bold">
            Lorem
          </h1>
        </div>
        <div className="w-full flex justify-center">
          <div className="flex border-2 border-blay dark:border-white text-blay dark:text-white p-4 rounded-lg h-auto w-[80vw] shadow-3d">
            <div className="w-1/2 bg-cover bg-no-repeat overflow-hidden relative lg:flex justify-center items-center  flex-col gap-4 hidden">
              <div className="w-3/4 h-3/4 bg-blue-200 relative overflow-hidden rounded-xl">
                <Image
                  src="/test.jpg"
                  width={500}
                  height={500}
                  alt="Test"
                  className="lg:full lg:full lg:max-h-[1000px] lg:max-w-[1000px] max-h-[200px] max-w-[200px] object-cover hover:scale-110 transform transition-transform duration-300 "
                />
              </div>
            </div>
            <div className="w-1/2  flex justify-center items-start p-4 flex-col gap-5">
              <h1 className="text-4xl font-bold">Lorem ipsum</h1>
              <p className="text-xl">
                Quibusdam iusto harum eveniet. Id nulla et enim reiciendis et
                expedita. Rerum laudantium debitis aut nemo aut atque aliquam
                dicta.
              </p>
              <Link href="https://github.com/simondeveloping/Portfolio">
                <div className="text-4xl flex flex-row gap-5">
                  <FontAwesomeIcon icon={faGithub} className="p-3" />
                  <div className=" rounded-xl bg-blay dark:bg-white text-white dark:text-blay p-3 flex items-center justify-center hover:scale-105 duration-300 transform transition-transform">
                    <h1 className="text-xl">Visit Project</h1>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="h-auto w-full flex flex-row mt-20 justify-center">
          <div className="w-[80vw] flex justify-between">
            <div className="w-1/2 flex items-center ">
              <div className="h-auto w-[35vw] flex border-2 border-blay dark:border-white text-blay dark:text-white flex-col items-center p-6 rounded-xl">
                <div className="w-full h-[40vh] relative overflow-hidden rounded-xl">
                  <Image
                    src="/test.jpg"
                    width={500}
                    height={200}
                    alt="Test"
                    className="lg:full lg:full lg:max-h-[700px] lg:max-w-[700px] max-h-[200px] max-w-[200px] object-cover hover:scale-110 transform transition-transform duration-300 rounded-xl"
                  />
                </div>
                <div className="flex justify-start items-start pt-3 w-full flex-col gap-1">
                  <h1 className="text-xl text-teal-300">Next Js Template</h1>
                  <h1 className="text-2xl">Website</h1>
                  <div className="flex flex-row gap-3 p-2">
                    <FontAwesomeIcon icon={faGithub} className="text-2xl" />
                    <h1 className="rounded-xl dark:bg-white bg-blay text-white dark:text-blay pl-3 pr-3 flex items-center justify-center hover:scale-110 duration-300 transform transition-transform text-xl ">
                      Visit{" "}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 flex justify-end items-center">
              <div className="h-auto w-[35vw] flex border-2 border-blay dark:border-white text-blay dark:text-white flex-col items-center p-6 rounded-xl">
                <div className="w-full h-[40vh] relative overflow-hidden rounded-xl">
                  <Image
                    src="/test.jpg"
                    width={500}
                    height={200}
                    alt="Test"
                    className="lg:full lg:full lg:max-h-[700px] lg:max-w-[700px] max-h-[200px] max-w-[200px] object-cover hover:scale-110 transform transition-transform duration-300 rounded-xl"
                  />
                </div>
                <div className="flex justify-start items-start pt-3 w-full flex-col gap-1">
                  <h1 className="text-xl text-teal-300">
                    distinctio quibusdam et
                  </h1>
                  <h1 className="text-2xl">Website</h1>
                  <div className="flex flex-row gap-3 p-2">
                    <FontAwesomeIcon icon={faGithub} className="text-2xl" />
                    <h1 className="rounded-xl dark:bg-white bg-blay text-white dark:text-blay pl-3 pr-3 flex items-center justify-center hover:scale-110 duration-300 transform transition-transform text-xl ">
                      Visit{" "}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
