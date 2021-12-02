import { useState, useRef } from "react";
import styles from "./AddUser.module.css";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from '../Helpers/Wrapper';

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState(null);

  const addUserHandler = (e) => {
    e.preventDefault();
    const enteredUsername = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (enteredUsername.trim().length <= 0 || enteredUserAge.trim().length <= 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a vaild username and age."
      });
      return;
    };
    if (+enteredUserAge <= 0) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age greater than zero."
      });
      return;
    };
    props.onAddUser(enteredUsername, enteredUserAge);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  }

  return (
    <Wrapper>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card>
        <form onSubmit={addUserHandler} className={styles.form}>
          <div className={styles["form-section"]}>
            <label htmlFor="username" className={styles["form-section__label"]}>
              Username
            </label>
            <input
              type="text"
              id="username"
              ref={nameInputRef}
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
              ref={ageInputRef}
              className={styles["form-section__input"]}
            />
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
