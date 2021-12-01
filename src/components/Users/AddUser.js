import styles from './AddUser.module.css';

const addUserHandler = e => {
    e.preventDefault();
}

const AddUser = (props) => {
  return (
    <form onSubmit={addUserHandler} className={styles.form}>
      <div className={styles['form-section']}>
        <label htmlFor="username" className={styles['form-section__label']}>Username</label>
        <input type="text" id="username" className={styles['form-section__input']} />
      </div>
      <div className={styles['form-section']}>
        <label htmlFor="age" className={styles['form-section__label']}>Age</label>
        <input type="number" id="age" className={styles['form-section__input']} />
      </div>
      <button type="submit" className={styles['form__btn']}>Add User</button>
    </form>
  );
};

export default AddUser;
