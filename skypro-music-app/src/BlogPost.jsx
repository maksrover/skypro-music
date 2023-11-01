import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";

function BlogPost(props) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 5 seconds
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => {
      clearTimeout(loadingTimeout); // Clean up the timeout if the component unmounts
    };
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>
          <h1>
            <Skeleton />
          </h1>
          <Skeleton count={10} />
        </div>
      ) : (
        <div>
          <h1>{props.title}</h1>
          {props.body}
        </div>
      )}
    </div>
  );
}

export default BlogPost;
