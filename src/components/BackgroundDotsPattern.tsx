export const BackgroundDotsPattern = () => {
  return (
    <svg
      className="absolute top-8 left-1/2 -ml-3"
      width={404}
      height={392}
      fill="none"
      viewBox="0 0 404 392">
      <defs>
        <pattern
          id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
          x={0}
          y={0}
          width={20}
          height={20}
          patternUnits="userSpaceOnUse">
          <rect
            x={0}
            y={0}
            width={4}
            height={4}
            className="text-gray-200"
            fill="currentColor"
          />
        </pattern>
      </defs>
      <rect
        width={404}
        height={392}
        fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
      />
    </svg>
  );
};
