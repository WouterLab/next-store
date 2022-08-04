import Link from 'next/link'

export default function Chairs() {
  return (
    <div>
      <h1>Chairs Page</h1>
      <Link href='/products'><a>All Products</a></Link>
    </div>
  );
}