import { useState, useEffect } from "react";
import "./App.css";
import { createServer } from "miragejs";
import { faker } from "@faker-js/faker";
import { Button } from "antd";
import styles from "./App.module.scss";

// interface Server {
//   name: string;
//   creted: Date;
//   users: User[];
// }

// interface User {
//   id: number;
//   firstName: string;
//   lastName: string;
//   email: string;
//   sex: "male" | "female";
//   accountCreated: Date;
//   lastOnline: Date;
//   nitroTier: "classic" | "basic" | "standard";
//   servers: Server[];
// }

// function createRandomUser(): User {
//   return {
//     id: Math.random() * 100,
//     name: faker.name.firstName(),
//   };
// }

// const [user, setUser] = useState<User>();
// const [users, setUsers] = useState<User[]>([]);
// const [server, setServer] = useState<Server>();
// const [servers, setServers] = useState<Server[]>([]);

createServer({
  routes() {
    this.get("/api/users", () => [
      { id: "1", name: "Jan" },
      { id: "2", name: "Paweł" },
      { id: "3", name: "Drugi" },
      { id: "4", name: "Wiedział" },
      { id: "5", name: "Czy" },
      { id: "6", name: "Nie" },
      { id: "7", name: "Wiedział" },
      { id: "8", name: "Nie" },
      { id: "9", name: "Wiem XD" },
    ]);
    this.get("/api/users", () => [{}]);
  },
});

function App() {
  const [users, setUsers] = useState<
    {
      id: number;
      name: string;
    }[]
  >([]);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    fetch("api/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <div className="App">
      <div></div>
      <h1>Vite + React + MirageJS</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <Button
          onClick={() => setCount((count) => count + 1)}
          className={styles.generalButton}
        >
          count is {count}
        </Button>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}
export default App;
