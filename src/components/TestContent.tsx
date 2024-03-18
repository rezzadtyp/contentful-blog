import React from 'react';
import { Asset } from "@/app/types/contentful.type";
import { getEntries } from "@/app/utils/contentful";
import { findAsset } from "@/app/utils/findAsset";
import Image from "next/image";
import Link from 'next/link';

const TestContent = async () => {
  const blogs = await getEntries();
  const assets: Asset[] = blogs.includes.Asset;
  const idsToFind: string[] = blogs.items.map(id => id.fields.thumbnail.sys.id);
  

  const matchedAssets = idsToFind.map(id => {
    const matchedAsset = findAsset(id, assets);
    return matchedAsset ? "https:" + matchedAsset.fields.file.url : null;
  });
  const validAssets = matchedAssets.filter(asset => asset !== null) as string[];

  return (
    <div className="grid gap-4">
      <div className="grid grid-rows-1 gap-4 grid-cols-[60%_auto]">
        <div className="flex bg-teal-200 h-[480px]">
        </div>
        <div className="flex bg-red-200 h-[480px]"></div>
      </div>

      <div className="grid grid-cols-4 w-full h-fit justify-between gap-4">
        {validAssets.map((imageUrl, index) => (
          <div key={index} className="flex flex-col w-full gap-2 overflow-hidden h-[450px]">
            <div className="relative h-72 overflow-clip rounded-lg">
              <Image src={imageUrl} alt={`Image ${index}`} layout="fill" objectFit="cover" />
            </div>
            <div className='flex flex-col gap-2'>
              <h1 className="text-xl font-semibold line-clamp-2">
                {blogs.items[index].fields.title}
              </h1>
              <p className="line-clamp-2">{blogs.items[index].fields.description}</p>
              <Link href={`/${blogs.items[index].fields.slug}`} className='font-medium'>
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestContent;
