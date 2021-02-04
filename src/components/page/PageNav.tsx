import React from 'react';

export default function PageNav({
  setPage,
  page,
}: {
  setPage: (page: number) => void;
  page: number;
}): JSX.Element {
  return (
    <div>
      <button
        type="button"
        disabled={page <= 0}
        onClick={() => setPage(page - 1)}
      >
        Prev
      </button>
      <button type="button" onClick={() => setPage(page + 1)}>
        Next
      </button>
    </div>
  );
}
