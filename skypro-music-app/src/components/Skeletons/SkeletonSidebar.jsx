import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonSidebar() {
  return (
    <SkeletonTheme highlightColor="#696969" baseColor="#272727">
      <Skeleton width={250} height={150} style={{ marginBottom: "30px" }} />
    </SkeletonTheme>
  );
}
export default SkeletonSidebar;
