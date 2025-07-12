import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Homiedelich" },
    { name: "description", content: "Welcome to homiedelich" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-96 items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <header className="flex flex-col items-center gap-9">
          <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
            Welcome to <span className="sr-only">Homiedelich</span>
          </h1>
          <div className="h-[120px] w-[434px]">
            <img
              src="/homiedelich.jpg"
              alt="Homie Delich"
              className="hidden w-full dark:block"
            />
            <img
              src="/homiedelich.jpg"
              alt="Homie Delich"
              className="block w-full dark:hidden"
            />
          </div>
        </header>
      </div>
    </div>
  );
}

