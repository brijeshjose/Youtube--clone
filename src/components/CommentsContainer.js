import React from "react";
import Comments from "./Comments";

const CommentsContainer = () => {
  const commentData = [
    {
      id: 1,
      name: "Sai Manikanta Andey",
      text: "Awesome",
      replies: [
        {
          id: 2,
          name: "SMK007",
          text: "SO beautiful so elegant",
          replies: [
            {
              id: 3,
              name: "SMK007",
              text: "Just looking like a wow",
              replies: [
                {
                  id: 8,
                  name: "SMK007",
                  text: "🚀",
                  replies: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 4,
      name: "Sai Manikanta Andey",
      text: "Sup",
      replies: [],
    },
    {
      id: 5,
      name: "Sai Manikanta Andey",
      text: "Good",
      replies: [],
    },
    { id: 6, name: "Sai Manikanta Andey", text: "Super", replies: [] },

    { id: 7, name: "Sai Manikanta Andey", text: "Nice one", replies: [] },
  ];
  return (
    <div className="flex flex-col gap-4 mt-4">
      <h2 className="text-xl font-bold">Comments</h2>
      {commentData.map((comment) => (
        <Comments data={comment} key={comment.id} />
      ))}
    </div>
  );
};

export default CommentsContainer;
