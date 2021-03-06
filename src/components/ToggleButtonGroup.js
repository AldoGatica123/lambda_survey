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
    <ToggleButton key={id} id={id} style={style} values={button} toggleClick={activation}/>
  );

  return(
    <div>
      {buttons}
    </div>
  )
};

const ToggleButton = (props) => {
  const {id, style, values, toggleClick} = props;

  let activeStyle = values.active ? style.activeToggleButton : style.inactiveToggleButton;

  return (
    <button  className={activeStyle} name={values.label} onClick={() => toggleClick(id)}>
      {values.label}
    </button>
  )
};


const BiSwitch = (props) => {
  const {style, values} = props;
  const [activated, setData] = useState(values);

  let leftStyle = activated.active ? style.switchLeftOn : style.switchLeftOff;
  let rightStyle = !activated.active ? style.switchRightOn : style.switchRightOff;

  const switchClick = () => {
    console.log("Values: " + JSON.stringify(values));
    let newVal = values;
    newVal.active = !values.active;
    setData({...newVal});
  };

  return(
    <div>
      <button className={leftStyle} name={values.on} onClick={switchClick}>
        {values.on}
      </button>
      <button className={rightStyle} name={values.off} onClick={switchClick}>
        {values.off}
      </button>
    </div>
  )

};


export {ToggleButtonGroup, BiSwitch}