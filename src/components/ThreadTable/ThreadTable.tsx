import React from "react";
import ThreadComponent from "../Thread/Thread";
import { ThreadProps } from "../Thread/Thread";

interface ThreadTableProps {
  threads: ThreadProps[];
}

const ThreadTable: React.FC<ThreadTableProps> = ({ threads }) => {
  return (
    <div>
      {threads.map((thread, index) => {
        return (
          <>
            <ThreadComponent
              key={index}
              id={thread.id}
              heading={thread.heading}
              reply={thread.reply}
              date={thread.date}
            />
            <hr />
          </>
        );
      })}
    </div>
  );
};

export default ThreadTable;
