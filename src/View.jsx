import React, { useState, useEffect } from 'react';

function View({data}) {
  const [element, setElement] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(data.pageURL);
      const html = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const pageElement = doc.getElementById(data.elementID);
      setElement(pageElement);
    }
    fetchData();
  }, [data]);

  return element ? (
    <div dangerouslySetInnerHTML={{ __html: element.outerHTML }} />
  ) : (
    <div>Loading...</div>
  );
}

export default View;
