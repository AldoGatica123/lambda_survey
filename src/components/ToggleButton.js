import React, {useState} from "react";


const SLIDE_06 = (props) => {
  const {style} = props;

  const initialVal = [{ id: "aldo", active: false}, { id: "roberto", active: true}];
  const [buttonArray, setData] = useState(initialVal);

  // const toggleButton = () => setData(data[0].name = "qwer");
  const activation = (values) => {
    console.log(values);
    const newVal = {id: values, active: false};
    setData([...buttonArray, newVal]);
  };

  const buttons = buttonArray.map( (button, index) =>
    <ToggleButton key={index} style={style} values={button} toggleClick={activation}/>
  );

  return(
    <div className={style.containerS11}>
      {buttons}
    </div>
  )
};

const ToggleButton = (props) => {
  const {style, values, toggleClick} = props;

  let activeStyle = values.active ? style.inactiveToggleButton : style.activeToggleButton;

  return (
    <div>
      <button  className={activeStyle} name={values.id} onClick={() => toggleClick(values.id)}>
        {values.id}
      </button>
    </div>
  )
};

export {SLIDE_06}