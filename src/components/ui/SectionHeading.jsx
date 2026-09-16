const SectionHeading = ({ heading, secondHeading }) => (
  <div className="mb-12 max-sm:mb-8">
    <h2 className="text-4xl max-sm:text-3xl font-display font-bold text-gray-900 dark:text-white inline-flex items-center gap-3">
      {heading}
      <span className="h-[3px] w-12 bg-gradient-accent rounded-full inline-block" />
    </h2>
    {secondHeading && (
      <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-2xl">
        {secondHeading}
      </p>
    )}
  </div>
);

export default SectionHeading;
