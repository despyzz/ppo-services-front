'use client';

import Image from 'next/image';
import React, { useState } from 'react';
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
  file: FileInfo,
}

export default function DocumentsItem({
  id, title, file,
}: DocumentItemProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();

    try {
      setIsDownloading(true);

      // Создаем скрытую ссылку для скачивания
      const downloadUrl = `http://localhost:3000${file.url}`;
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = file.name; // Указываем имя файла для скачивания
      link.target = '_self'; // Убедимся, что открывается в текущей вкладке

      // Добавляем атрибуты для принудительного скачивания
      link.setAttribute('download', file.name);
      link.setAttribute('type', 'application/octet-stream');

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Ошибка при скачивании:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <Box onClick={handleDownload} className="flex w-full cursor-pointer gap-[8px] border-2 border-blue-600 p-4 lg:w-[calc(50%-8px)] lg:gap-[30px] lg:p-6">
      <div className="relative size-[24px] lg:size-[32px]">
        {isDownloading ? (
          <div className="size-5 animate-spin rounded-full border-b-2 border-blue-600" />
        ) : (
          <Image src="/icons/file_icon.svg" alt={`File icon ${id}`} fill />
        )}
      </div>
      <span className="mt-1">
        {title}
      </span>
    </Box>
  );
}
