const isDOMReady = () => {
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined' &&
    document.head
  );
};

export default isDOMReady;
