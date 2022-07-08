import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import { useFormulario } from "../hooks/useFormulario";

const Formulario = ({ agregarTodo }) => {
  const initialState = {
    nombre: "",
    descripcion: "",
    estado: "pendiente",
    prioridad: false,
  };

  const [inputs, handleChange, reset] = useFormulario(initialState);

  const { nombre, descripcion, estado, prioridad } = inputs;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre.trim()) {
      e.target[0].focus();
      Swal.fire({
        title: "Error!",
        text: "No deje el nombre en blanco",
        icon: "error",
      });
      return;
    }
    if (!descripcion.trim()) {
      e.target[1].focus();
      Swal.fire({
        title: "Error!",
        text: "No deje la descripcion en blanco",
        icon: "error",
      });
      return;
    }

    Swal.fire({
      title: "Éxito",
      text: "La tarea se registró correctamente",
      icon: "success",
    });

    agregarTodo({
      nombre,
      descripcion,
      estado: estado === "pendiente" ? false : true,
      prioridad,
      id: uuidv4(),
    });

    reset();
  };

  return (
    <>
      <h3>Agregar TODO</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-2"
          name="nombre"
          placeholder="Ingrese todo nombre"
          value={nombre}
          onChange={handleChange}
        />
        <textarea
          className="form-control mb-2"
          name="descripcion"
          placeholder="Ingrese descripcion"
          value={descripcion}
          onChange={handleChange}
        />
        <select
          name="estado"
          className="form-control mb-2"
          value={estado}
          onChange={handleChange}
        >
          <option value="pendiente">Pendiente</option>
          <option value="completado">Completado</option>
        </select>
        <div className="form-check mb-2">
          <input
            name="prioridad"
            type="checkbox"
            className="form-check-input"
            id="prioridad"
            checked={prioridad}
            onChange={handleChange}
          />
          <label htmlFor="prioridad" className="form-check-label">
            Prioridad
          </label>
        </div>
        <button className="btn btn-primary" type="submit">
          Agregar
        </button>
      </form>
    </>
  );
};

export default Formulario;
