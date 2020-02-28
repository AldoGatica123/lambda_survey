import React, {useState} from "react";


const SLIDE_06 = (props) => {
  const {style} = props;

  const initialVal = [{ id: "aldo", active: false}, { id: "aldo", active: true}, { id: "roberto", active: true}];
  const [buttonArray, setData] = useState(initialVal);

  const activation = (index) => {
    console.log(index);
    let newVal = buttonArray[index];
    newVal.active = !newVal.active;
    const newArray = Object.assign([], buttonArray, {[index]: newVal});
    setData(newArray);
  };

  const buttons = buttonArray.map( (button, index) =>
    <ToggleButton id={index} style={style} values={button} toggleClick={activation}/>
  );

  return(
    <div className={style.containerS11}>
      {buttons}
    </div>
  )
};

const ToggleButton = (props) => {
  const {style, id, values, toggleClick} = props;

  let activeStyle = values.active ? style.inactiveToggleButton : style.activeToggleButton;

  return (
    <div>
      <button  className={activeStyle} name={values.id} onClick={() => toggleClick(id)}>
        {values.id}
      </button>
    </div>
  )
};

export {SLIDE_06}