import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import { lazy, Suspense } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import SEOManager from "./components/SEOManager";

const Builds = lazy(() => import("./pages/Builds"));
const Research = lazy(() => import("./pages/Research"));
const Wiki = lazy(() => import("./pages/Wiki"));

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Suspense fallback={<main role="status" aria-live="polite" className="flex min-h-screen items-center justify-center bg-background text-foreground">Loading page...</main>}>
      <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/builds"} component={Builds} />
      <Route path={"/research"} component={Research} />
      <Route path={"/wiki"} component={Wiki} />
      <Route path={"/wiki/:slug"} component={Wiki} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <SEOManager />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
