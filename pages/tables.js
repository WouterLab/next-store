import Link from 'next/link'

export default function Tables() {
  return (
    <div>
      <h1>Tables Page</h1>
      <Link href='/products'><a>All Products</a></Link>
    </div>
  );
}