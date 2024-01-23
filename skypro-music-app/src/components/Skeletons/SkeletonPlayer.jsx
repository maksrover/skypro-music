import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonPlayer() {
  return (
    <SkeletonTheme highlightColor="#696969" baseColor="#272727">
      <Skeleton width={100} height={20} />
    </SkeletonTheme>
  );
}
export default SkeletonPlayer;
