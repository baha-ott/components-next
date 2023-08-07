"use client";

function convertStringToSpans(str: string) {
  return str.split("").map((c, i) => {
    console.log(c);
    if (c === "") {
      return (
        <span className="space mx-2" key={i}>
          space
        </span>
      );
    }
    return (
      <span key={i} className="">
        {c}
      </span>
    );
  });
}

function DynamicText() {
  return (
    <div className="w-full flex justify-between absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-24 items-center text-[#5f5f5f]">
      <div className="w-full text-7xl px-9 leading-snug ">
        <span className="block text-[18rem] absolute top-[-95%] left-20">
          ,,
        </span>
        {convertStringToSpans(`Majority of people can
run a 100 meter dash,
but only adozen can
do it in under 9.8
seconds`)}
      </div>
      <div className="progress w-full">
        <div className="progress h-60 bg-[#464646] w-1 ml-auto rounded-lg"></div>
      </div>
    </div>
  );
}

export default DynamicText;
