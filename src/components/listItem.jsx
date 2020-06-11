import React from "react";

export const ListItem = ({ post: { title, body } }) => {
  return (
    <li>
      <div>
        <b>Title:</b> {title}
      </div>
      <div>
        <b>Content:</b> {body}
      </div>
    </li>
  );
};
