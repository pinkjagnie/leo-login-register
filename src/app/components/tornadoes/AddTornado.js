import AddTornadoForm from "./AddTornadoForm";

const AddTornado = () => {
  return (
    <div className="w-[90%] mx-auto pb-10">
      <p className="text-center font-medium">Here you can add a new tornado</p>
      <p className="pt-10 text-xs italic text-center">
        * - fields are required
      </p>
      <AddTornadoForm />
    </div>
  );
};

export default AddTornado;
