import { Suspense, lazy, useEffect } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SEOHead } from "@/components/seo/SEOHead";
import { StructuredData } from "@/components/seo/StructuredData";
import { pageSeo } from "@/seo/pageSeo";
import {
  buildBreadcrumbSchema,
  buildOrganizationSchema,
  buildPersonSchema,
  buildWebsiteSchema,
} from "@/seo/schema";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";

const HomeRoute = lazy(() => import("@/app/routes/HomeRoute"));
const ProjectsRoute = lazy(() => import("@/app/routes/ProjectsRoute"));
const ExperienceRoute = lazy(() => import("@/app/routes/ExperienceRoute"));
const CertificationsRoute = lazy(() => import("@/app/routes/CertificationsRoute"));
const ContactRoute = lazy(() => import("@/app/routes/ContactRoute"));
const BlogRoute = lazy(() => import("@/app/routes/BlogRoute"));

function AppLayout() {
  const location = useLocation();
  const seo = pageSeo[location.pathname] ?? pageSeo["/"];
  const baseSchemas = [buildPersonSchema(), buildWebsiteSchema(), buildOrganizationSchema()];
  const routeSchemas = [buildBreadcrumbSchema(location.pathname)];

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, location.hash]);

  return (
    <>
      <SEOHead config={seo} />
      <StructuredData schemas={[...baseSchemas, ...routeSchemas]} />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-gold focus:px-4 focus:py-2 focus:text-black"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Suspense
          fallback={
            <div className="container-shell py-20 text-center text-sm text-zinc-400">
              Loading page content...
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

function NotFoundRoute() {
  return (
    <section className="container-shell py-20 text-center">
      <h1 className="font-heading text-4xl text-white">Page Not Found</h1>
      <p className="mt-3 text-zinc-300">The requested page does not exist in this portfolio.</p>
    </section>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomeRoute />} />
        <Route path="projects" element={<ProjectsRoute />} />
        <Route path="experience" element={<ExperienceRoute />} />
        <Route path="certifications" element={<CertificationsRoute />} />
        <Route path="contact" element={<ContactRoute />} />
        <Route path="blog" element={<BlogRoute />} />
        <Route path="*" element={<NotFoundRoute />} />
      </Route>
    </Routes>
  );
}
