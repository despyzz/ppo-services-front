import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export function CustomMarkdown({ children }: { children: string }) {
  return (
    <div
      className="
        prose
        max-w-none

        text-sm
        prose-p:my-2

        prose-p:leading-normal
        prose-a:text-inherit

        prose-a:underline
        hover:prose-a:opacity-80
        prose-strong:text-inherit
        prose-em:text-inherit

        prose-code:text-inherit

        prose-ol:list-decimal
        prose-ol:pl-5
        prose-ul:list-disc

        prose-ul:pl-5
        prose-li:my-1
        sm:text-base
      "
    >
      <Markdown remarkPlugins={[remarkGfm]}>
        {children}
      </Markdown>
    </div>
  );
}
