import { TargetAudienceEnum } from '@/lib/models';
import Image from 'next/image';
import React from 'react';
import { Box } from '@mui/material';

interface FileInfo {
  name: string,
  mime_type: string,
  url: string,
  size: number
}

interface DocumentItemProps {
  id: number,
  title: string,
  target: TargetAudienceEnum,
  file: FileInfo,
  created_at: Date,
  updated_at: Date,
}

export default function DocumentsItem({
  id, title, file,
}: DocumentItemProps) {
  const handleDownload = () => {
    console.log('download', file);
  };

  return (
    <Box onClick={handleDownload} className="flex gap-[30px]">
      <div className="relative size-[16px] lg:size-[32px]">
        <Image src="/icons/file_icon.svg" alt={`File icon ${id}`} fill />
      </div>
      <div>
        {title}
      </div>
    </Box>
  );
}
