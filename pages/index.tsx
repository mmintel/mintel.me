import Image from "next/image";
import { Container } from "../components/Container";
import { Tile } from "../components/Tile";

interface Technology {
  label: string;
  fileName: string;
  color: string;
  primary?: boolean;
}

const technologies: Technology[] = [
  {
    label: "Typescript",
    fileName: "typescript.svg",
    color: "#3178c6",
    primary: true,
  },
  {
    label: "React",
    fileName: "react.svg",
    color: "#86e0f9",
    primary: true,
  },
  {
    label: "Graphql",
    fileName: "graphql.svg",
    color: "#86e0f9",
    primary: true,
  },
  {
    label: "Tailwind",
    fileName: "tailwind.svg",
    color: "#07b6d5",
    primary: true,
  },
  {
    label: "Storybook",
    fileName: "storybook.svg",
    color: "#ff4785",
    primary: true,
  },
  {
    label: "Solidity",
    fileName: "solidity.svg",
    color: "#16191a",
    primary: true,
  },
  {
    label: "Nodejs",
    fileName: "nodejs.svg",
    color: "#83cd29",
    primary: true,
  },
  {
    label: "Nextjs",
    fileName: "nextjs.svg",
    color: "#fff",
    primary: true,
  },
  {
    label: "Javascript",
    fileName: "javascript.svg",
    color: "#fff",
  },
  {
    label: "HTML",
    fileName: "html.svg",
    color: "#fff",
  },
  {
    label: "CSS",
    fileName: "css.svg",
    color: "#fff",
  },
  {
    label: "Vue",
    fileName: "vuejs.svg",
    color: "#fff",
  },
  {
    label: "Nuxt",
    fileName: "nuxt.svg",
    color: "#fff",
  },
  {
    label: "Nestjs",
    fileName: "nestjs.svg",
    color: "#fff",
  },
  {
    label: "Webpack",
    fileName: "webpack.svg",
    color: "#fff",
  },
  {
    label: "Firebase",
    fileName: "firebase.svg",
    color: "#fff",
  },
  {
    label: "jQuery",
    fileName: "jquery.svg",
    color: "#fff",
  },
  {
    label: "SCSS",
    fileName: "scss.svg",
    color: "#cd6799",
  },
  {
    label: "Gatsby",
    fileName: "gatsby.svg",
    color: "#663399",
  },
  {
    label: "CSharp",
    fileName: "csharp.svg",
    color: "#6a1577",
  },
  {
    label: "Twig",
    fileName: "twig.svg",
    color: "#6a1577",
  },
];

export default function Home() {
  return (
    <Container>
      <div className="grid grid-cols-6 gap-8 my-12">
        <Tile className="w-20 md:w-auto !rounded-full aspect-square overflow-hidden lg:aspect-auto lg:overflow-auto lg:!rounded-2xl lg:col-span-3 xl:col-span-2">
          <Image
            src={require("assets/avatar.jpg")}
            alt="Photo of Marc Mintel"
            className="object-cover w-full h-full"
            sizes="(max-width: 768px) 300px,
              (max-width: 1200px) 768px,
              1024px"
          />
        </Tile>
        <Tile
          className="col-span-6 lg:col-span-3 xl:col-span-4 text-white"
          background="bg-gradient-to-br from-blue-light-500 to-blue-light-600"
        >
          <Tile.Content>
            <h1 className="mt-1 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl xl:text-4xl max-w-[30ch]">
              Hi, I&apos;m Marc, a Frontend Developer with{" "}
              {new Date().getFullYear() - 2011} years professional experience
            </h1>
            <p className="mt-5 text-xl text-gray-500 max-w-[50ch]">
              I build websites using React and Typescript with a strong
              background in design and UX. I think in reusable components and
              bring consistency to any website.
            </p>
            <p className="hidden lg:block mt-5 text-xl text-gray-500 max-w-[50ch]">
              I&apos;m also very interested in crypto, whether it&apos;s trading
              or the technology behind it or even coding custom smart contracts.
            </p>
          </Tile.Content>
          <Tile.Content>
            <div className="grid grid-cols-6 lg:grid-cols-4 xl:grid-cols-6 gap-2 xl:gap-6">
              {technologies
                .filter((t) => !!t.primary)
                .map((t) => (
                  <Tile title={t.label} key={t.fileName} background="bg-white">
                    <Tile.Content className={`bg-[${t.color}]/20`}>
                      <Image
                        src={require(`assets/logos/${t.fileName}`)}
                        alt={`${t.label} Logo`}
                        className="aspect-square w-full flex-shrink-0"
                      />
                    </Tile.Content>
                  </Tile>
                ))}
            </div>
          </Tile.Content>
        </Tile>
        <Tile className="col-span-6">
          <Tile.Content>
            <h1 className="mt-1 text-2xl text-center font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
              Technology Graveyard
            </h1>
            <p className="mt-5 text-xl text-gray-500 text-center">
              Buried in this graveyard are technologies that I have used in the
              past, but are no longer worth talking about.
            </p>
          </Tile.Content>
          <Tile.Content>
            <div className="grid grid-cols-6 lg:grid-cols-8 gap-2 xl:gap-6">
              {technologies
                .filter((t) => !t.primary)
                .map((t) => (
                  <Tile title={t.label} key={t.fileName} background="bg-white">
                    <Tile.Content className={`bg-[${t.color}]/20`}>
                      <Image
                        src={require(`assets/logos/${t.fileName}`)}
                        alt={`${t.label} Logo`}
                        className="aspect-square w-full flex-shrink-0"
                      />
                    </Tile.Content>
                  </Tile>
                ))}
            </div>
          </Tile.Content>
        </Tile>
      </div>
    </Container>
  );
}
