import React from "react";

import PostTable from "../../component/postTable";
import { PostPage as IPostPage } from "../../generated/graphql";

interface IProps {
  postPage: IPostPage;
}

const PostPage: React.FC<IProps> = (p: IProps) => {
  return (
    <PostTable />
  );
};

export default PostPage;
