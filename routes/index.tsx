import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hudak</title>
      </Head>
      <div class="bg-white dark:bg-black dark:text-white min-h-screen w-full">
        <div class="p-4 mx-auto max-w-screen-md">
          <nav>
            <a href="/">hudak.link</a>
          </nav>
          <main>
            <h1 class="text-5xl">Welcome to hudak.link</h1>
            <p>Explanation of what this is exactly is pending...</p>
          </main>
        </div>
      </div>
    </>
  );
}
