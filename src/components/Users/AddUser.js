import styles from "./AddUser.module.css";

import Card from "../UI/Card";
import Button from '../UI/Button';

const addUserHandler = (e) => {
  e.preventDefault();
};

const AddUser = (props) => {
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
            className={styles["form-section__input"]}
          />
        </div>
        <Button type="submit">
          Add User
        </Button>
      </form>
    </Card>
  );
};

export default AddUser;
