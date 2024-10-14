import type { NextPage } from 'next';
import Link from 'next/link';

const Page: NextPage = () => {
  return (
    <div>
      <header>
        <div className="breadcrumbs text-sm">
          <ul>
            <li>
              <Link className="btn btn-link" href="/">
                Home
              </Link>
            </li>
            <li>ipc-example</li>
          </ul>
        </div>
      </header>
      <main>
        <div>hello</div>
      </main>
    </div>
  );
};
export default Page;
