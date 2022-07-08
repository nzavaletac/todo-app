const Todo = ({ item, eliminarTodo, editarTodo }) => {
  const { id, nombre, descripcion, estado, prioridad } = item;

  return (
    <li className="list-group-item d-flex justify-content-between align-items-start mt-2">
      <div className="ms-2 me-auto">
        <div className="fw-bold">
          {nombre} ({estado ? "Finalizado" : "Pendiente"})
        </div>
        <p>{descripcion}</p>
        <button
          className="btn btn-danger me-2"
          onClick={() => eliminarTodo(id)}
        >
          Eliminar
        </button>
        <button className="btn btn-warning" onClick={() => editarTodo(id)}>
          Cambiar Estado
        </button>
      </div>
      <span className="badge bg-primary rounded-pill">
        {prioridad && "Prioridad"}
      </span>
    </li>
  );
};

export default Todo;
