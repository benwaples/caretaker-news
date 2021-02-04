import React from 'react';

export default function Search({
  query,
  handleChange,
  handleSubmit,
}: {
  query: string;
  handleChange: (e: {
    preventDefault: () => void;
    target: { value: React.SetStateAction<string> };
  }) => void;
  handleSubmit: () => void;
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
          onChange={handleChange}
        />
      </label>
      <button onClick={() => handleSubmit()} type="button">
        Submit
      </button>
    </div>
  );
}
