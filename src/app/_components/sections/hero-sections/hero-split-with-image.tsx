import { AiComponentProps } from "../base/ai-component-props";
import ThemeOverlay from "../base/theme-overlay";
import Button from "../base/Button";
import LinkButton from "../base/LinkButton";
import Image1 from "./hero-split-with-image-1.jpeg";
import Image from "next/image";

export default function HeroSplitWithImage({
  theme
}: AiComponentProps) {
  return (
    <div
      className={`relative isolate ${
        theme === "dark"
          ? "bg-ai-background-dark"
          : theme === "neo-brutal"
            ? "bg-primary-600/20 overflow-hidden"
            : "bg-ai-background-regular"
      }`}
    >
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1
              className={`mt-24 text-4xl font-bold tracking-tight ${
                theme === "dark"
                  ? "text-ai-title-dark"
                  : "text-ai-title-regular"
              } sm:mt-10 sm:text-6xl`}
            >
              Data to enrich your online business
            </h1>
            <p
              className={`mt-6 text-lg leading-8 ${
                theme === "dark"
                  ? "text-ai-subtext-dark"
                  : "text-ai-subtext-regular"
              }`}
            >
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
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
          {theme === "neo-brutal" && (
            <div className="absolute w-80 h-80 -left-36 -bottom-56 border-8 border-primary-400 rounded-full" />
          )}
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <Image
            className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            src={Image1}
            alt=""
            unoptimized
          />
        </div>
      </div>
      <ThemeOverlay theme={theme} />
    </div>
  );
}
