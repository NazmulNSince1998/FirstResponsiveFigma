import React, { useState, useEffect } from "react";

const Contact = () => {
  const [comments, setComments] = useState([]);
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputComment, setInputComment] = useState("");

  const handleInputName = (e) => {
    setInputName(e.target.value);
  };

  const handleInputEmail = (e) => {
    setInputEmail(e.target.value);
  };

  const handleInputComment = (e) => {
    setInputComment(e.target.value);
  };

  const handleContactClick = () => {
    const commentObject = {
      name: inputName,
      email: inputEmail,
      comments: inputComment,
    };

    const updatedComments = [...comments, commentObject];
    setComments(updatedComments);

    setInputName("");
    setInputEmail("");
    setInputComment("");
  };

  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem("comments"));
    if (storedComments) {
      setComments(storedComments);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);
  useEffect(() => {
    return () => {
      localStorage.removeItem("comments");
    };
  }, []);

  return (
    <main>
      <section className="w-full h-[100vh] text-center px-5 py-3 md:px-10 md:py-5">
        <div>
          <h1 className="text-lg md:text-xl capitalize">
            Connect with us and leave your valuable comment
          </h1>
        </div>

        <div className="mt-10 w-[50%] mx-[25%] flex flex-col">
          <input
            type="text"
            placeholder="Your Name"
            className="border rounded-md border-black mx-2 my-2"
            value={inputName}
            onChange={handleInputName}
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border rounded-md border-black mx-2 my-2"
            value={inputEmail}
            onChange={handleInputEmail}
          />
          <textarea
            placeholder="Your Comment"
            className="border rounded-md border-black mx-2 my-2 min-h-[100px]"
            value={inputComment}
            onChange={handleInputComment}
          ></textarea>

          <input
            type="submit"
            value="Submit"
            className="border rounded-md border-black mx-2 my-2 cursor-pointer"
            onClick={handleContactClick}
          />
        </div>

        <div className="mt-5 text-start border px-5 py-5">
          {comments.length === 0 ? (
            <p>No comments yet.</p>
          ) : (
            comments.map((eachComment, index) => (
              <div key={index}>
                <h2 className="text-blue-700 text-lg capitalize">
                  {eachComment.name}
                </h2>
                <p className="text-blue-500">{eachComment.email}</p>
                <p>{eachComment.comments}</p>
              </div>
            ))
          )}
        </div>
      </section>
    </main>
  );
};

export default Contact;
