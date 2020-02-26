import React, {useState} from "react";
import './components/styles/toggleButton.css';


const SLIDE_06 = (props) => {
	const [active1, setActive1] = useState(false);
	const [active2, setActive2] = useState(false);
	const toggleButton1 = () => setActive1(!active1);
	const toggleButton2 = () => setActive2(!active2);

	return(
		<div>
			<ToggleButton values={{name: "legal", active:active1}} toggleClick={toggleButton1}/>
			<ToggleButton values={{name: "economico", active:active2}} toggleClick={toggleButton2}/>
		</div>
	)
};


const buttonStyle = {
	minWidth: '120px',
	height: '200px',
	margin: '8px',
	paddingLeft: '8px',
	paddingRight: '8px',
	borderRadius: '8px',
	fontSize: '1.5em',
	cursor: 'pointer',
	outline: 'none',
};

const ToggleButton = (props) => {
	const {values, toggleClick} = props;

	return (
		<div>
			<button style={buttonStyle} className={values.name} name={values.name} onClick={toggleClick}>
			{values.name + " " + values.active}
			</button>
		</div>
	)
};

export {SLIDE_06}