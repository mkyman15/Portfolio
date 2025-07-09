import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Description } from "@radix-ui/react-dialog";
import Link from "next/link";

const projectData: any = [
  {
    title: "Duck Hunt Webapp",
    description:
      "This duckhunt is a project trying to replicate Duck Hunt by using replit. I used many languages such as JavaScript, Html, Canvas Api for images, css, and object orienting programing.",
    imageSrc: "/DuckHunt.png",
    linkUrl: "https://replit.com/@mkyman15/Duck-Hunt#scripts/platformer.js",
  },
  {
    title: "News Sentiment Analysis",
    description:
      "Using replit and mutiple existing libraries such as beautiful soup and textblob I developed a webscarper that performed sentiment analysis including bias checking. ",
    imageSrc: "/fine.png",
    linkUrl: "https://replit.com/@Ahljennetics/NewsSentimentAnalysis",
  },
  {
    title: "Your Fortune",
    description:
      "More of a side project I tried practicing using files to store data for each user that interacted with the site. That way when given a fortune you only get one a day.",
    imageSrc: "/fortune.jpg",
    linkUrl: "https://replit.com/@mkyman15/Your-Fortune",
  },
];

const collegeData: any = [];

function Showcase({ showcaseTitle, direction, showcaseData }: any) {
  return (
    <Sheet>
      <SheetTrigger className="cursor-pointer hover:opacity-50 transition-all duration-200">
        <Image
          src="/ComputerProgrammer.jpg"
          width="400"
          height="400"
          alt="person programming"
        />
      </SheetTrigger>
      <SheetContent className="!max-w-[800px] w-[800px]" side={direction}>
        <SheetHeader>
          <SheetTitle>{showcaseTitle}</SheetTitle>
          <SheetDescription>
            <section className="flex flex-col gap-10 justify-between content-between h-full">
              {showcaseData.map((item: any) => {
                return (
                  <div className="flex gap-5" key={item.title}>
                    {/* Left section */}
                    <div>
                      <Link href={item.linkUrl}>
                        <Image
                          src={item.imageSrc}
                          width="400"
                          height="400"
                          alt="person programming"
                        />
                      </Link>
                      <p className="text-xl font-bold">{item.title}</p>
                    </div>

                    {/* Right section */}
                    <div className="w-[200px]">
                      <p>{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </section>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

/*export default function Home() {
  return (
    <>
      <section className="flex gap-5 justify-center items-center w-full h-full min-h-full mt-[32rem]">
        <div>
          <div>
            <Showcase
              showcaseTitle="college"
              direction="left"
              showcaseData={collegeData}
            />
          </div>
          <div>College</div>
        </div>

        <h1 className="text-5xl font-bold">
          <Link href="/about">
            <Image
              src="/QCsignature.png"
              width="400"
              height="400"
              alt="signature"
            />
          </Link>
        </h1>

        <div>
          <div>
            <Showcase
              showcaseTitle="Projects"
              direction="right"
              showcaseData={projectData}
            />
          </div>
          <div>Projects</div>
        </div>
      </section>
    </>
  );
}*/
/*export default function Home() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: "url('/BlackBG.jpg')" }}
    >
      <section className="flex gap-5 justify-center items-center w-full h-full min-h-full mt-[32rem]">
        <div>
          <div>
            <Showcase
              showcaseTitle="college"
              direction="left"
              showcaseData={collegeData}
            />
          </div>
          <div>College</div>
        </div>

        <h1 className="text-5xl font-bold">
          <Link href="/about">
            <Image
              src="/QCsignature.png"
              width="400"
              height="400"
              alt="signature"
            />
          </Link>
        </h1>

        <div>
          <div>
            <Showcase
              showcaseTitle="Projects"
              direction="right"
              showcaseData={projectData}
            />
          </div>
          <div>Projects</div>
        </div>
      </section>
    </div>
  );
}*/
export default function Home() {
  return (
    <div
      className="min-h-screen bg-black"
      style={{
        backgroundImage: "url('/BlackBG.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Top-right navigation with text buttons */}
      <nav className="flex justify-end p-6 space-x-10">
        <TextShowcase
          showcaseTitle="College"
          direction="left"
          showcaseData={collegeData}
          className="mx-3"
        />
        <TextShowcase
          showcaseTitle="Projects"
          direction="right"
          showcaseData={projectData}
          className="mx-3"
        />
      </nav>

      {/* Centered signature */}
      <section className="flex justify-center items-center min-h-[80vh]">
        <h1 className="text-5xl font-bold">
          <Link href="/about">
            <Image
              src="/QCsignature.png"
              width="400"
              height="400"
              alt="signature"
              className="hover:opacity-80 transition-opacity"
            />
          </Link>
        </h1>
      </section>
    </div>
  );
}

// New TextShowcase component (replace the image with text)
function TextShowcase({ showcaseTitle, direction, showcaseData }: any) {
  return (
    <Sheet>
      <SheetTrigger className="text-white hover:text-gray-300 text-lg font-medium transition-colors px-4 py-2 ${className}">
        {showcaseTitle}
      </SheetTrigger>
      <SheetContent className="!max-w-[800px] w-[800px]" side={direction}>
        <SheetHeader>
          <SheetTitle>{showcaseTitle}</SheetTitle>
          <SheetDescription>
            <section className="flex flex-col gap-10 justify-between content-between h-full">
              {showcaseData.map((item: any) => (
                <div className="flex gap-5" key={item.title}>
                  <div>
                    <Link href={item.linkUrl} className="block mb-2">
                      <Image
                        src={item.imageSrc}
                        width="400"
                        height="400"
                        alt={item.title}
                        className="hover:opacity-80 transition-opacity"
                      />
                    </Link>
                    <p className="text-xl font-bold">{item.title}</p>
                  </div>
                  <div className="w-[200px]">
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </section>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
