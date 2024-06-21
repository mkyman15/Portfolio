import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
function Showcase({ showcaseTitle, direction }: any) {
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
            <div>
              <Image
                src="/DuckHunt.png"
                width="400"
                height="400"
                alt="person programming"
              />
            </div>{" "}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
export default function Home() {
  return (
    <>
      <section className="flex gap-5 justify-center items-center w-full h-full min-h-full mt-[32rem]">
        <div>
          <div>
            <Showcase showcaseTitle="College" direction="left" />
          </div>
          <div>College</div>
        </div>

        <h1 className="text-5xl font-bold">
          <Image
            src="/QCsignature.png"
            width="400"
            height="400"
            alt="signature"
          />
        </h1>

        <div>
          <div>
            <Showcase showcaseTitle="Projects" direction="right" />
          </div>
          <div>Projects</div>
        </div>
      </section>
    </>
  );
}
