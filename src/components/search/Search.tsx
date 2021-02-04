import React from 'react';

export default function Search({
  query,
  handleQuery,
}: {
  query: string;
  handleQuery: (e: {
    preventDefault: () => void;
    target: { value: React.SetStateAction<string> };
  }) => void;
}): JSX.Element {
  return (
    <div>
      <label htmlFor="search">
        Search Term
        <input
          id="search"
          type="search"
          name="search"
          value={query}
          onChange={handleQuery}
        />
      </label>
    </div>
  );
}
