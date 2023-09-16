import EditTornadoForm from "./EditTornadoForm";

const EditTornado = ({ tornado }) => {
  return (
    <div className="w-[90%] mx-auto pb-10">
      <p className="pt-10 text-xs italic text-center">
        * - fields are required
      </p>
      {}
      <EditTornadoForm tornado={tornado} />
    </div>
  );
};

export default EditTornado;
