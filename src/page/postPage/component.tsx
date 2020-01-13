import React from "react";

import PostTable from "../../component/postTable";
import { PostPageDto } from "../../openapi";

interface IProps {
  postPage: PostPageDto;
}

const PostPage: React.FC<IProps> = (p: IProps) => {
  return (
    <PostTable postPage={p.postPage} />
  );
};

export default PostPage;
