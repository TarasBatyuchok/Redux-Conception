import { useState } from "react";

const responseEmoji = {
  like: "👍",
  unlike: "👎",
};

const Like = () => {
  const [selectedResponse, setSelectedResponse] = useState(null);

  const handleClick = (response) => {
    setSelectedResponse(response);
  };

  return (
    <div className="flex gap-4">
      {Object.entries(responseEmoji).map(([name, emoji]) => (
        <button
          key={name}
          type="button"
          onClick={() => handleClick(name)}
          className={`px-4 py-2 rounded-full text-lg font-medium transition ${
            selectedResponse === name
              ? "bg-blue-500 text-white shadow-md"
              : "bg-gray-200 hover:bg-gray-300 text-gray-700"
          }`}
        >
          {emoji} {selectedResponse === name && <span>✔️</span>}
        </button>
      ))}
    </div>
  );
};

export default Like;