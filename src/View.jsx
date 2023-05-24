import React, { useState, useEffect } from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

function View({data}) {
  const [element, setElement] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await fetch(data.pageURL);
        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const pageElement = doc.getElementById(data.elementID);
        setElement(pageElement);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [data]);

  if (isLoading) {
    return <Segment>
      <Dimmer active inverted>
        <Loader inverted>Loading</Loader>
      </Dimmer>
    </Segment>;  // Or replace with your loading indicator
  }

  return element ? (
    <div dangerouslySetInnerHTML={{ __html: element.outerHTML }} />
  ) : (
    <></>
  );
}

export default View;
