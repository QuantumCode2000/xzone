import { useContext } from "react";
import UserContext from "../../context/UserContext";
const Admin = () => {
  const { list } = useContext(UserContext);

  return (
    <div>
      <div className="container-cart">
        <h3 className="mt-10">Lista de Usuarios</h3>
        <ul className="list-group mb-3">
          {list?.map((user, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between lh-condensed"
            >
              <div>
                <h6 className="my-0">{`${user.nombre} ${user.apellido}`}</h6>
                <small className="text-muted">{user.usuario}</small>
              </div>
              <span className="text-muted">
                rol {user.nivel === 1 ? "admin" : "cliente"}
              </span>
              <span className="text-muted">Dir. {user.direccion}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Admin;
