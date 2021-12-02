import { useState } from "react";
import styles from "./AddUser.module.css";

import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const changeUsernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const changeAgeHandler = (e) => {
      setAge(e.target.value);
  }

  const addUserHandler = (e) => {
    e.preventDefault();
    if (username.trim().length <= 0 || age.trim().length <= 0) return;
    if (+age <= 0) return;
    props.onAddUser(username, age);
    setUsername('');
    setAge('');
  };

  return (
    <Card>
      <form onSubmit={addUserHandler} className={styles.form}>
        <div className={styles["form-section"]}>
          <label htmlFor="username" className={styles["form-section__label"]}>
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={changeUsernameHandler}
            className={styles["form-section__input"]}
          />
        </div>
        <div className={styles["form-section"]}>
          <label htmlFor="age" className={styles["form-section__label"]}>
            Age
          </label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={changeAgeHandler}
            className={styles["form-section__input"]}
          />
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
