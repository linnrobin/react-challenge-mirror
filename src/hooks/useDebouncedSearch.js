import React, { useState, useConstant, useAsync } from "react";

const useDebouncedSearch = (searchFunction) => {
  const [inputText, setInputText] = useState("");

  const debouncedSearchFunction = useConstant(() =>
    AwesomeDebouncePromise(searchFunction, 300)
  );

  const searchResults = useAsync(async () => {
    if (inputText.length === 0) {
      return [];
    } else {
      return debouncedSearchFunction(inputText);
    }
  }, [debouncedSearchFunction, inputText]);

  return {
    inputText,
    setInputText,
    searchResults,
  };
};

export default useDebouncedSearch;
