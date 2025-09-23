const SectionDivider = () => {
  return (
    <div className="relative py-12">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-border/30"></div>
      </div>
      <div className="relative flex justify-center">
        <div className="bg-background px-4">
          <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default SectionDivider;