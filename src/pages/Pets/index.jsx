import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { list } from "../../actions/pets/list";

const Pets = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(list());
  }, [dispatch]);

  const mascota = useSelector((s) => s.pet.data);
  console.log("pets", mascota);

  return (
    <div>
      <ul>
        {mascota.length > 0 ? (
          mascota.map((p) => <li key={p}>{p}</li>)
        ) : (
          <p>NO DATA</p>
        )}
      </ul>
    </div>
  );
};

export default Pets;
