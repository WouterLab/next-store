import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>First Page</h1>
      <Link href='/products'><a>All Products</a></Link>
    </div>
  );
}
