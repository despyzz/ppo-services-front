import Image from 'next/image';
import React from 'react';

interface NewsItemProps {
  id: number,
  title: string,
  date: string,
  image_src: string,
}

export default function NewsItem({
  id, title, date, image_src,
}: NewsItemProps) {
  return (
    <div className="flex min-w-[273px] max-w-[557px] flex-1 flex-col">
      <div className="relative h-[100px] w-full overflow-hidden md:h-[150px] lg:h-[350px]">
        <Image
          src={`http://localhost:3000${image_src}`}
          alt={`Новость ${id}: ${title}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <p className="text-[24px] font-bold lg:text-[50px]">
        {title}
      </p>
      <p className="text-[14px] font-normal lg:text-[26px]">
        {date.replace(/-/g, '.')}
      </p>
    </div>
  );
}
