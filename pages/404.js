import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from 'next/link';

const PageNotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);

  return (
    <div>
      <h1>Error 404</h1>
      <h2>Page not Found</h2>
      <p>Redirection to <Link href='/'><a style={{textDecoration: "underline"}}>Home Page</a></Link> in 5 seconds...</p>
    </div>
  );
};

export default PageNotFound;
