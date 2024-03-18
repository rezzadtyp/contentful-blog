import Image from "next/image";
import { getEntries } from "@/app/utils/contentful";

const Content = async () => {
  const blogs = await getEntries();

  const imageURL = "https:" + blogs.includes.Asset[0].fields.file.url;

  return (
    <div className="grid gap-4">
      <div className="grid grid-rows-1 gap-4 grid-cols-[60%_auto]">
        <div className="flex bg-teal-200 h-[480px]">
          {/* <Image src={} alt='background' /> */}
        </div>
        <div className="flex bg-red-200 h-[480px]"></div>
      </div>

      <div className="flex w-full h-96 justify-between gap-4">
        <div className="flex flex-col w-full gap-2 overflow-clip">
          <div className="w-full h-fit bg-slate-400 rounded-xl overflow-clip">
            <Image
              src={imageURL}
              alt="thumbnail"
              width={200}
              height={270}
            />
          </div>
          <h1 className="text-lg font-semibold px-2">
            {blogs.includes.Asset[0].fields.title}
          </h1>
          <p className="px-2 text-sm max-w-readable">
            {blogs.includes.Asset[0].fields.description}
          </p>
        </div>

        <div className="flex flex-col w-full gap-2 overflow-clip">
          <div className="w-full h-72 bg-slate-400 rounded-xl overflow-clip">
            <Image
              src={"https:" + blogs.includes.Asset[1].fields.file.url}
              alt="thumbnail"
              width={500}
              height={500}
              objectFit="fill"
            />
          </div>
          <h1 className="text-lg font-semibold px-2">
            {blogs.includes.Asset[1].fields.title}
          </h1>
          <p className="px-2 text-sm max-w-readable">
            {blogs.includes.Asset[1].fields.description}
          </p>
        </div>

        <div className="flex flex-col w-full gap-2 overflow-clip">
          <div className="w-full h-72 object-cover bg-slate-400 rounded-xl overflow-clip">
            <Image
              src={"https:" + blogs.includes.Asset[2].fields.file.url}
              alt="thumbnail"
              width={400}
              height={400}
              className="object-fill"
            />
          </div>
          <h1 className="text-lg font-semibold px-2">
            {blogs.includes.Asset[2].fields.title}
          </h1>
          <p className="px-2 text-sm max-w-readable">
            {blogs.includes.Asset[2].fields.description}
          </p>
        </div>

        <div className="flex flex-col w-full gap-2 overflow-clip">
          <div className="w-full h-72 object-cover bg-slate-400 rounded-xl overflow-clip">
            <Image
              src={"https:" + blogs.includes.Asset[3].fields.file.url}
              alt="thumbnail"
              width={400}
              height={400}
              className="object-fill"
            />
          </div>
          <h1 className="text-lg font-semibold px-2">
            {blogs.includes.Asset[3].fields.title}
          </h1>
          <p className="px-2 text-sm max-w-readable">
            {blogs.includes.Asset[3].fields.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
