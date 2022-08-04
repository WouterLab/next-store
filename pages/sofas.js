import Link from 'next/link'

export default function Sofas() {
  return (
    <div>
      <h1>Sofas Page</h1>
      <Link href='/products'><a>All Products</a></Link>
    </div>
  );
}