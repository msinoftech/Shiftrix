
type PostBadgeProps = {
    date: string;
    published_at?: string;
  };
  
  export default function PostBadge({
    date,
    published_at,
  }: PostBadgeProps) {
    const publishedDate = new Date(date);
    const updatedDate = published_at
      ? new Date(published_at)
      : null;
  
    const now = new Date();
    const daysSincePublished = Math.floor(
      (now.getTime() - publishedDate.getTime()) /
        (1000 * 60 * 60 * 24)
    );
  
    const daysSinceUpdated = updatedDate
      ? Math.floor(
          (now.getTime() - updatedDate.getTime()) /
            (1000 * 60 * 60 * 24)
        )
      : Infinity;
  
    // Updated within the last 7 days,
    // and the post was actually modified.
    if (
      updatedDate &&
      updatedDate.getTime() > publishedDate.getTime() &&
      daysSinceUpdated >= 0 &&
      daysSinceUpdated <= 7
    ) {
      return (
        <span className="w-fit inline-flex rounded-md bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
          Updated
        </span>
      );
    }
  
    // Published within the last 7 days.
    if (daysSincePublished >= 0 && daysSincePublished <= 7) {
      return (
        <span className="w-fitinline-flex rounded-md px-2.5 py-1 text-xs bg-blue-100 font-semibold text-blue-700">
          Latest
        </span>
      );
    }
  
    // Published within the last 30 days.
    if (daysSincePublished >= 0 && daysSincePublished <= 30) {
      return (
        <span className="w-fit inline-flex rounded-md bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">
          Recent
        </span>
      );
    }
  
    return null;
  }  