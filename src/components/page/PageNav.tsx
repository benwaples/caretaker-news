import React from 'react';

export default function PageNav({
  setPage,
  page,
  totalPages,
}: {
  setPage: (page: number) => void;
  page: number;
  totalPages: number | undefined;
}): JSX.Element {
  return (
    <div id="page-nav">
      <button
        type="button"
        disabled={page <= 1}
        onClick={() => setPage(page - 1)}
      >
        Prev
      </button>
      <h3>
        Page: {page}/{totalPages}
      </h3>
      <button type="button" onClick={() => setPage(page + 1)}>
        Next
      </button>
    </div>
  );
}
