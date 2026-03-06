export default function LoadingSkeleton({ height = "h-96" }: { height?: string }) {
  return (
    <div className={`${height} bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded-lg`} />
  );
}
