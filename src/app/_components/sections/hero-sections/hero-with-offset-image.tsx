import Button from "../base/Button";
import LinkButton from "../base/LinkButton";
import { AiComponentProps } from "../base/ai-component-props";
import OffsetImagePeople from "./offset-image-people.png";
import Image from "next/image";

export default function HeroWithOffsetImage({
  theme
}: AiComponentProps) {
  return (
    <div
      className={`${theme === "dark" ? "bg-ai-background-dark" : "bg-ai-background-regular"}`}
    >
      <div
        className={`relative isolate overflow-hidden bg-gradient-to-b ${
          theme === "gradient"
            ? "from-[#ff80b540] to-[#9089fc40]"
            : theme === "dark"
              ? "from-[#0C111C]"
              : "from-primary-100/20"
        }`}
      >
        <div
          className={`absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] ${
            theme === "dark"
              ? "bg-ai-background-dark"
              : "bg-ai-background-regular"
          } shadow-xl shadow-primary-600/10 ring-1 ${
            theme === "dark" ? "ring-primary-50/10" : "ring-primary-50"
          } sm:-mr-80 lg:-mr-96`}
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none grid-flow-col lg:gap-x-16 lg:gap-y-6 grid-rows-1 xl:gap-x-8">
            <h1
              className={`max-w-2xl text-4xl font-bold tracking-tight ${
                theme === "dark"
                  ? "text-ai-title-dark"
                  : "text-ai-title-regular"
              } sm:text-6xl lg:col-span-1 col-auto`}
            >
              Yay: Fuel Your Engineering Passion!
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0 col-end-1 row-start-1">
              <p
                className={`text-lg leading-8 ${
                  theme === "dark"
                    ? "text-ai-subtext-dark"
                    : "text-ai-subtext-regular"
                }`}
              >
                Dive into dynamic insights, ground-breaking innovations, and empowering stories from the world of engineering and development. Join the journey now!
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Button theme={theme}>
                  Get started
                </Button>
                <LinkButton theme={theme}>
                  Learn more
                </LinkButton>
              </div>
            </div>
            <Image
              src={OffsetImagePeople}
              alt=""
              className={`mt-10 aspect-[6/5] w-full object-cover sm:mt-16 lg:mt-0 lg:max-w-none row-span-2 row-end-2 ${
                theme === "neo-brutal"
                  ? "border-4 border-black rounded-full aspect-square shadow-neo-brutal-double"
                  : "rounded-2xl"
              }`}
            />
          </div>
        </div>
        <div
          className={`absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t ${theme === "dark" ? "from-gray-900" : "from-white"} sm:h-32`}
        />
      </div>
    </div>
  );
}
