import React, { useState } from "react";
import { animals as initialAnimals } from "./../../data/mockData";
import List from "../List/List";

const handleClick = (item, action) => {
  alert(`${item.type} ${action}!`);
};

export default function Animals() {
  const [animals, setAnimals] = useState(initialAnimals);

  const handleActivate = (item) => {
    setAnimals((prevAnimals) =>
      prevAnimals.map((animal) =>
        animal.type === item.type
          ? { ...animal, activated: !animal.activated }
          : animal
      )
    );
  };

  const handleDelete = (item) => {
    setAnimals((prevAnimals) =>
      prevAnimals.filter((animal) => animal.type !== item.type)
    );
  };

  return (
    <>
      <h1>Animal List</h1>
      <List
        list={animals}
        handleActivate={handleActivate}
        handleDelete={handleDelete}
      />
    </>
  );
}
