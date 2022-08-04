import Link from 'next/link'

export default function Lights() {
  return (
    <div>
      <h1>Lights Page</h1>
      <Link href='/products'><a>All Products</a></Link>
    </div>
  );
}