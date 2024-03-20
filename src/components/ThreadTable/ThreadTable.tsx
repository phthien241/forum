import React from "react";
import Thread from "../Thread/Thread";
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
            <Thread
              key={index}
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
