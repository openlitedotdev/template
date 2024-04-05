export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl p-8 pb-16">
      <h1 className="text-3xl font-semibold">About</h1>
      <div className="prose">
        <div>
          <p>
            Starter pack for building performant e-commerce experiences with&nbsp;
            <a href="https://github.com/saleor/saleor">Saleor</a>
            .
          </p>
        </div>
        <div><p><b>Codebase</b></p></div>
        <div>
          <ul>
            <li>
              <b>Next.js 13</b>
              : File-based routing, React 18, Fast Refresh, Image Optimization, and more.
            </li>
            <li>
              <b>App Router</b>
              : Uses React Server Components, Data Cache, and async components.
            </li>
            <li>
              <b>TypeScript</b>
              : Strongly typed codebase and GraphQL payloads with strict mode.
            </li>
            <li>
              <b>GraphQL best practices</b>
              : Uses GraphQL Codegen and&nbsp;TypedDocumentString&nbsp;to reduce boilerplate and bundle size.
            </li>
            <li>
              <b>Customizable CSS</b>
              : TailwindCSS can be extended or replaced with an alternative CSS solution.
            </li>
            <li>
              <b>Tooling included</b>
              : Comes with ESLint, Prettier, Husky, Lint Staged, and Codegen preconfigured.
            </li>
          </ul>
        </div>
        <div><p><b>Global:</b></p></div>
        <div>
          <ul>
            <li>Channel switcher and Geo detection (coming soon)</li>
            <li>Dynamic menu</li>
            <li>Hamburger menu</li>
            <li>SEO data</li>
          </ul>
        </div>
        <div><p><b>Checkout:</b></p></div>
        <div>
          <ul>
            <li>Single page checkout (including login)</li>
            <li>Portable to other frameworks (doesn&apos;t use Next.js components)</li>
            <li>Adyen integration</li>
            <li>Stripe integration</li>
            <li>Customer address book</li>
            <li>Vouchers and Gift Cards</li>
          </ul>
        </div>
        <div><p><b>Product Catalog:</b></p></div>
        <div>
          <ul>
            <li>Categories</li>
            <li>Variant selection</li>
            <li>Product attributes</li>
            <li>Image optimization</li>
          </ul>
        </div>
        <div><p><b>My Account:</b></p></div>
        <div>
          <ul>
            <li>Order history (coming soon)</li>
            <li>Order completion</li>
            <li>Order details</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
