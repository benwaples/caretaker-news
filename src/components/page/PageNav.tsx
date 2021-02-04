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
    <div>
      <button
        type="button"
        disabled={page <= 1}
        onClick={() => setPage(page - 1)}
      >
        Prev
      </button>
      <button type="button" onClick={() => setPage(page + 1)}>
        Next
      </button>
      <h3>
        {page}/{totalPages}
      </h3>
    </div>
  );
}
