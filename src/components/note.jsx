const Note = ({ title, content }) => {
  return (
    <div className="w-96 mx-10 my-5 ">
      <h4 className="text-lg font-medium mb-3">{title}</h4>
      <p className="text-gray-400">{content}</p>
    </div>
  );
};

export default Note;
