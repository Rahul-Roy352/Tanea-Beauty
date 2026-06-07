import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Tanéa Beauty — Make up that loves you back" },
      { name: "description", content: "Luxe beauty that's bold, conscious, and unforgettable. Shop lip oils, lipsticks, highlighters and more." },
      { property: "og:title", content: "Tanéa Beauty — Make up that loves you back" },
      { property: "og:description", content: "Luxe beauty that's bold, conscious, and unforgettable. Shop lip oils, lipsticks, highlighters and more." },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Tanéa Beauty — Make up that loves you back" },
      { name: "twitter:description", content: "Luxe beauty that's bold, conscious, and unforgettable. Shop lip oils, lipsticks, highlighters and more." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/2f72a538-e33f-4f65-9d06-c13c63113e96/id-preview-8cd0b530--a011acfe-d335-49c7-be7e-0c73a935c220.lovable.app-1776968851268.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/2f72a538-e33f-4f65-9d06-c13c63113e96/id-preview-8cd0b530--a011acfe-d335-49c7-be7e-0c73a935c220.lovable.app-1776968851268.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <SiteHeader />
      <main><Outlet /></main>
      <SiteFooter />
    </>
  );
}
