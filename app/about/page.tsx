import Image from "next/image";
export default function AboutPage() {
  return (
    <>
      <main className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">About</h1>

        <p className="my-10 text-3xl flex font-bold ">Learned Languages</p>
        <div className="flex gap-64">
          {langs.map((item: any) => {
            return (
              <div
                className="flex flex-col justify-center gap-2 items-center"
                key={item.title}
              >
                <Image
                  src={item.imageSrc}
                  width="200"
                  height="200"
                  alt={item.title}
                />
                <p className="font-bold text-xl ">{item.title}</p>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
const langs = [
  {
    title: "C++",
    imageSrc: "/C++.png",
  },
  {
    title: "JavaScript",
    imageSrc: "/Js.png",
  },
  {
    title: "Python",
    imageSrc: "/py.png",
  },
];
