import axios from "axios";

export const PETS_DATA = "PETS_DATA";

export const list = () => async (dispatch, getState) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_SERVER}/mascota`);
    const data = await res.data.nombres;

    dispatch({
      type: PETS_DATA,
      data,
    });
  } catch (e) {
    console.error(e);
  }
};

// export const data = (data) => ({
//   type: PETS_DATA,
//   data,
// });

// export const list = () => {
//   return (dispatch) => {
//     fetch(`${process.env.REACT_APP_SERVER}/mascota`, {
//       method: "GET",
//     })
//       .then((res) => res.json())
//       .then((res) => {
//         console.log("respuesta", res);
//         dispatch({
//           type: PETS_DATA,
//           payload: res,
//         });
//       });
//   };
// };
