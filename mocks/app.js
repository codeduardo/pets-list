const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const usuarios = {
  personas: [
    {
      id: 2,
      nombres: "Jaimito",
      apellidos: "Marquez Castillo",
      edad: "20",
      ciudad: "Ica",
      edit: false,
    },
    {
      nombres: "Juan",
      apellidos: "Diaz",
      edad: "23",
      ciudad: "Lima",
      id: 3,
    },
    {
      nombres: "Luis",
      apellidos: "Diaz",
      edad: "23",
      ciudad: "Piura",
      id: 4,
    },
    {
      nombres: "Roberto",
      apellidos: "Lopez",
      edad: "15",
      ciudad: "Trujillo",
      id: 5,
    },
  ],
};

const mascotas = {
  nombres: ["nombre1", "nombre2", "nombre3"],
};
app.get("/mascota", (req, res) => {
  res.json(mascotas);
});

app.get("/usuario", (req, res) => {
  res.json(usuarios);
});

app.listen(8080, () => {
  console.log("server in action en 8080");
});
