import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function RabbitDetails() {
  const navigate = useNavigate();
  const [rabbit, setRabbit] = useState();

  const { id } = useParams();

  const getOneRabbit = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/rabbits/${id}`)
      .then((resp) => resp.json())
      .then((data) => setRabbit(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getOneRabbit();
  }, [id]);

  const deleteRabbit = () => {
    if (alert("Are you sure to delete this rabbit?")) {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/rabbits/${id}`, {
        method: "DELETE",
      })
        .then(() => navigate("/rabbitList"))
        .catch((err) => console.error(err));
    }
  };

  if (!rabbit) {
    return <p>Loading the rabbit...</p>;
  }

  return (
    <figure className="bg-violet-900 p-4 rounded-2xl shadow-xl text-white max-w-6xl m-auto">
      {rabbit.photo && (
        <img
          className="rounded-t-md w-full object-cover"
          src={
            /^(http|https)/.test(rabbit.photo)
              ? rabbit.photo
              : `${import.meta.env.VITE_ASSETS_URL}/assets/images/${
                  rabbit.photo
                }`
          }
          alt={rabbit.name}
        />
      )}
      <figcaption>
        <h2 className="text-center mb-2 p-4 font-extrabold border-b-2 border-violet-400">
          {rabbit.name}
        </h2>

        <p>
          Sexe: <span>{rabbit.sexe}</span>
        </p>
      </figcaption>
      <button
        className="bg-red-700 inline-block rounded-full shadow-xl px-6 py-2 hover:text-white hover:bg-red-500"
        type="button"
        onClick={deleteRabbit}
      >
        Delete
      </button>
    </figure>
  );
}
