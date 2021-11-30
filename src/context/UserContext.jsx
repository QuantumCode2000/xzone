import { createContext, useState } from "react";
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [active, setActive] = useState(false);
  const [nivel, setNivel] = useState(0);
  const listUser = [
    {
      nombre: "Rommel",
      apellido: "Andres",
      password: "test0",
      usuario: "romelandres",
      nivel: 1,
      email: "romel@xzone.com",
      direccion: "La Paz",
    },
    {
      nombre: "Mari",
      apellido: "Solo Marisol",
      password: "test1",
      usuario: "marisol",
      nivel: 0,
      email: "marisol@xzone.com",
      direccion: "La Paz",
    },
  ];
  const [list, setList] = useState(listUser);
  console.log("users", list);
  const handleActive = (activo, nivelU) => {
    setActive(activo);
    setNivel(nivelU);
  };

  const handleListUser = (newUser) => {
    setList([...list, { ...newUser }]);
  };

  console.log("active context", active);
  const data = {
    list,
    handleActive,
    active,
    nivel,
    handleListUser,
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export default UserContext;
export { UserProvider };
