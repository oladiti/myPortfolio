const PageLoader = () => (
  <div className="flex items-center justify-center py-20" role="status" aria-label="Loading section">
    <span className="relative flex h-4 w-4">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-500 opacity-60" />
      <span className="relative inline-flex h-4 w-4 rounded-full bg-gradient-accent" />
    </span>
  </div>
);

export default PageLoader;