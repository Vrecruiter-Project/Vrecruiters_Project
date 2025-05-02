
import { useEffect } from "react";

const BlogRedirect = () => {
  useEffect(() => {
    window.open("https://blog.vrecruiters.in/", "_blank");
    window.location.href = "/";
  }, []);

  return null;
};

export default BlogRedirect;
