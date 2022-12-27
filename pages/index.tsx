import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const IndexPage = () => {
  const route = useRouter();
  useEffect(() => {
    route.replace('/home');
  }, [route]);
  return <div />;
};

export default IndexPage;
