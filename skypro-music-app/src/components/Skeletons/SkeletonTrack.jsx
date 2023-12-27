import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonTrack() {
  return (
    <SkeletonTheme highlightColor="#696969" baseColor="#272727">
      <Skeleton
        width={1080}
        height={20}
        count={29}
        style={{ marginBottom: "25px", inline: "false" }}
      />
    </SkeletonTheme>
  );
}
export default SkeletonTrack;
