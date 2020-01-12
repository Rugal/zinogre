import React from "react";

import PostTable from "../../component/postTable";
import { PostPage } from "../../openapi";

interface IProps {
  postPage: PostPage;
}

const Post: React.FC<IProps> = (p: IProps) => {
  return (
    <PostTable postPage={p.postPage} />
  );
};

export default Post;
