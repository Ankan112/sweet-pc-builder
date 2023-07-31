import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  // return getLayout(
  //   <SessionProvider session={session}>
  //     <Component {...pageProps} />
  //   </SessionProvider>
  // );
  return (
    <SessionProvider session={session}>
      {getLayout(<Component {...pageProps} />)}
    </SessionProvider>
  );
}
