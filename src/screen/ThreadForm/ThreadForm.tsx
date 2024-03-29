import React, { useEffect, useState } from "react";
import { postThread } from "../../services/threadService";
import { Thread } from "../../models/thread";
import { usePostComment } from "../../hooks/usePostComment";
import { useAuthenticator } from "@aws-amplify/ui-react";
import useGetUser from "../../hooks/userGetUser";
import { User } from "../../models/user";

const ThreadForm: React.FC = () => {
  const [heading, setHeading] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const { handlePostComment } = usePostComment();
  const { user } = useAuthenticator((context) => [context.user]);
  const { handleGetUser } = useGetUser();

  const [currentUser, setCurrentUser] = useState<User>();

  useEffect(() => {
    if (user) {
      handleGetUser(user.userId)
        .then((fetchedUser) => {
          setCurrentUser(fetchedUser);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [user]);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData: Thread = {
      _id: "",
      heading,
      comments: [],
      category,
    };
    const response = await postThread(formData);
    if (response && response.threadId && currentUser) {
      handlePostComment(content, currentUser._id, response.threadId);
    }
  };

  return (
    <div>
      <h2>Create a New Thread</h2>
      <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="heading"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Heading
          </label>
          <input
            type="text"
            id="heading"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Heading"
            required
          />
        </div>
        <label
          htmlFor="countries"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select category
        </label>
        <select
          id="categorry"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-gray-50 mb-5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="Announcements">Announcements</option>
          <option value="Feedback & Suggestions">Feedback & Suggestions</option>
          <option value="Staff Room">Staff Room</option>
          <option value="General News">General News</option>
          <option value="cience & Technology">Science & Technology</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Sports & Fitness">Sports & Fitness</option>
          <option value="Languages">Languages</option>
          <option value="Information Technology">Information Technology</option>
          <option value="Engineering">Engineering</option>
          <option value="Economics & Finance">Economics & Finance</option>
        </select>
        <label
          htmlFor="content"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Content
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={4}
          className="block mb-5 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write something..."
          required
        ></textarea>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ThreadForm;
