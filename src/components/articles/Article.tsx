import React from 'react';

export default function Article({
  webTitle,
  webUrl,
}: {
  webTitle: string;
  webUrl: string;
}): JSX.Element {
  return (
    <li>
      <h1>
        <a href={webUrl}>{webTitle}</a>
      </h1>
    </li>
  );
}
