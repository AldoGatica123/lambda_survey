import React, {useState} from "react";


const ToggleButtonGroup = (props) => {
  const {style, values} = props;

  const [buttonArray, setData] = useState(values);

  const activation = (index) => {
    let newVal = buttonArray[index];
    newVal.active = !newVal.active;
    setData(Object.assign([], buttonArray, {[index]: newVal}));
  };

  const buttons = buttonArray.map( (button, id) =>
    <ToggleButton id={id} style={style} values={button} toggleClick={activation}/>
  );

  return(
    <div>
      {buttons}
    </div>
  )
};

const ToggleButton = (props) => {
  const {id, style, values, toggleClick} = props;

  let activeStyle = values.active ? style.inactiveToggleButton : style.activeToggleButton;

  return (
    <button  className={activeStyle} name={values.label} onClick={() => toggleClick(id)}>
      {values.label}
    </button>
  )
};

export {ToggleButtonGroup}