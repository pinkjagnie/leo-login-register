import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

const SingleTornado = ({ userID, title, shortMsg, msg }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <span className="text-xs text-gray-800 text-right italic">
          {userID}
        </span>
        <p className="text-sm italic">{shortMsg}</p>
        <p className="pt-2">Whole message: {msg}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-square btn-error">
            <AiOutlineDelete size={25} />
          </button>
          <button className="btn btn-square btn-info">
            <AiOutlineEdit size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleTornado;
