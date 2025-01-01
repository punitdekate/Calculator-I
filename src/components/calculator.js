import styles from "./calculator.module.css";
import { evaluate } from "mathjs";
import { useSelector, useDispatch } from "react-redux";
import { calculatorSelector } from "../redux/reducers/calculator.reducer";
import {
  addNum,
  addOp,
  clearInput,
  equalsOutput,
} from "../redux/reducers/calculator.reducer";

function Calculator() {
  const dispatch = useDispatch();
  const { input, lastIn } = useSelector(calculatorSelector);

  const handleClearClick = () => {
    dispatch(clearInput());
  };
  const handleOperatorClick = (operator) => {
    console.log(input, lastIn, operator);
    if (operator === "+/-") {
      dispatch(addOp("-"));
      return;
    }
    if (!input || isNaN(lastIn)) {
      return;
    }
    dispatch(addOp(operator));
  };
  const handleNumberClick = (num) => {
    dispatch(addNum(num));
  };
  const handleEqualClick = () => {
    if (input && !isNaN(lastIn)) {
      const output = evaluate(input);
      dispatch(equalsOutput(output));
    }
  };
  return (
    <>
      <div className={styles.calculator}>
        <div className={styles.display}>{input}</div>
        <div className={styles.buttons}>
          <button onClick={handleClearClick}>C</button>
          <button onClick={() => handleOperatorClick("+/-")}>+/-</button>
          <button onClick={() => handleOperatorClick("%")}>%</button>
          <button onClick={() => handleOperatorClick("/")}>/</button>
          <button onClick={() => handleNumberClick(7)}>7</button>
          <button onClick={() => handleNumberClick(8)}>8</button>
          <button onClick={() => handleNumberClick(9)}>9</button>
          <button onClick={() => handleOperatorClick("*")}>*</button>
          <button onClick={() => handleNumberClick(4)}>4</button>
          <button onClick={() => handleNumberClick(5)}>5</button>
          <button onClick={() => handleNumberClick(6)}>6</button>
          <button onClick={() => handleOperatorClick("-")}>-</button>
          <button onClick={() => handleNumberClick(1)}>1</button>
          <button onClick={() => handleNumberClick(2)}>2</button>
          <button onClick={() => handleNumberClick(3)}>3</button>
          <button onClick={() => handleOperatorClick("+")}>+</button>
          <button onClick={() => handleNumberClick(0)} className={styles.zero}>
            0
          </button>
          <button onClick={() => handleNumberClick(".")}>.</button>
          <button onClick={() => handleEqualClick()} className={styles.equals}>
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default Calculator;
