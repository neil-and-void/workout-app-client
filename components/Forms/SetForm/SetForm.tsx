import { Formik } from 'formik';
import Button from '../../Button';

import styles from './SetForm.module.scss';

interface SetFormProps {
  reps?: number;
  weight?: number;
  onAdd: (set: ExerciseSet) => void;
}

const SetForm = ({ reps, weight, onAdd }: SetFormProps) => {
  return (
    <div className={styles.setForm}>
      <Formik
        initialValues={{
          reps: reps || 0,
          weight: weight || 0,
        }}
        onSubmit={(values, actions) => {
          onAdd(values);
        }}
      >
        {(props) => (
          <div>
            <div className={styles.inputContainer}>
              <div>
                <input
                  name="reps"
                  type="number"
                  className={styles.numberInput}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.reps}
                />{' '}
                <span>lbs</span>
              </div>
              <div>x</div>
              <div>
                <input
                  name="weight"
                  type="number"
                  className={styles.numberInput}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.weight}
                />{' '}
                <span>lbs</span>
              </div>
              <Button
                type={'submit'}
                onClick={() => props.handleSubmit(props.values)}
                className={styles.addSet}
              >
                add
              </Button>
            </div>
            <div className={styles.buttonContainer}>
              <div className={styles.incrementButtons}>
                <Button className={styles.decrement}>-2.5</Button>
                <Button className={styles.increment}>+2.5</Button>
              </div>
              <div className={styles.incrementButtons}>
                <Button className={styles.decrement}>-5</Button>
                <Button className={styles.increment}>+5</Button>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default SetForm;
