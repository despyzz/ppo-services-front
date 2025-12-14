import React from 'react';
import Markdown, { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';

const markdownComponents: Components = {
  ul: ({ children: content }) => (
    <ul className="not-prose m-0 list-none p-0">
      {content}
    </ul>
  ),
  li: ({ children: content }) => (
    <li className="relative my-2 pl-6">
      <span className="absolute left-0">—</span>
      {content}
    </li>
  ),
};

export function CustomMarkdown({ children }: { children: string }) {
  return (
    <div
      className="
        prose
        max-w-none
        text-base
        leading-relaxed
        prose-h1:mt-6
        prose-h1:font-semibold
        prose-h1:text-inherit
        prose-h2:mt-6
        prose-h2:font-semibold
        prose-h2:text-inherit
        prose-h3:mt-4
        prose-h3:font-semibold
        prose-h3:text-inherit
        prose-p:my-4
        prose-a:text-blue-500
        prose-a:no-underline
        hover:prose-a:underline
        prose-strong:text-inherit
        prose-em:text-inherit
        prose-ul:list-none
        prose-ul:pl-0
        prose-li:relative
        prose-li:my-1
        prose-li:pl-5
        sm:text-lg
        lg:text-xl
      "
    >
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={markdownComponents}
      >
        {children}
      </Markdown>
    </div>
  );
}
