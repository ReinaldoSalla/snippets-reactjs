import React, { 
	useReducer, 
	useEffect, 
	useRef,
	useContext,
	createContext,
	Fragment
} from "react";
import { FaBackspace, FaLaptopCode } from "react-icons/fa";
import { 
	GiSmartphone,
  GiGamepad
} from "react-icons/gi";
import {  
	AiOutlineArrowRight,
	AiOutlineArrowLeft,
  AiOutlineSearch
} from "react-icons/ai";
import { 
  RiMenLine, 
  RiWomenLine,
} from "react-icons/ri";
import { BsLayoutTextSidebar } from "react-icons/bs";
import { FiMonitor } from "react-icons/fi";
import "./Sidebar.css";

/*
smartphone = iphone, galaxy, pixel
notebooks - macbook, dell, alienware, acer, lenovo
televisions - sony, samsung, lg, panasonic
video-games: xbox, playstation, valve vr
man's - t-shirts, pants, shoes, underware, perfumes
woman's t-shirts, dresses, pants, shoes, underware, perfumes
browse all
*/

const SidebarIcon = ({ icon }) => (
	<span className="sidebar-content-icon">
		{icon}
	</span>
);

const SidebarText = ({ text }) => (
	<div className="sidebar-content-text">
		{text}
	</div>
);

const DivisibleHr = ({ divisible }) => (
	divisible ? <hr /> : null
);

const SidebarContentItem = ({ 
	leftIcon, 
	text, 
	rightIcon, 
	moveToMenu,
	divisible=true 
}) => (
	<Fragment>
		<div 
			href="/#" 
			className="sidebar-content-item"
			onClick={moveToMenu}
		>
			<SidebarIcon icon={leftIcon}/> 
			<SidebarText text={text} />
			<SidebarIcon icon={rightIcon}/>
		</div>
		<DivisibleHr divisible={divisible} />
	</Fragment>
);

const reference = {
	primary: "primary-off",
	smartphones: "smartphones-off",
	notebooks: "notebooks-off",
	televisions: "televisions-off",
	videogames: "videogames-off",
	mens: "mens-off",
	womans: "womans-off",
	height: null
};

const initialState = {
	...reference,
	primary: "primary-on"
};

const moveToPrimary = action => ({
	...reference,
	primary: "primary-on",
	height: action.payload
});

const moveToSmartphones = action => ({
	...reference,
	smartphones: "smartphones-on",
	height: action.payload
});

const moveToNotebooks = action => ({
	...reference,
	notebooks: "notebooks-on",
	height: action.payload
});

const moveToTelevisions = action => ({
	...reference,
	televisions: "televisions-on",
	height: action.payload
});

const moveToVideogames = action => ({
	...reference,
	videogames: "videogames-on",
	height: action.payload
});

const moveToMens = action => ({
	...reference,
	mens: "mens-on",
	height: action.payload
});

const moveToWomans = action => ({
	...reference,
	womans: "womans-on",
	height: action.payload
});

const setInitialHeight = action => ({
	...reference,
	primary: "primary-on",
	height: action.payload
});

const reducer = (state, action) => {
	switch (action.type) {
		case "SET_INITIAL_HEIGHT":
			return setInitialHeight(action);
		case "MOVE_TO_PRIMARY":
			return moveToPrimary(action);
		case "MOVE_TO_SMARTPHONES":
			return moveToSmartphones(action);
		case "MOVE_TO_NOTEBOOKS":
			return moveToNotebooks(action);
		case "MOVE_TO_TELEVISIONS":
			return moveToTelevisions(action);
		case "MOVE_TO_VIDEOGAMES":
			return moveToVideogames(action);
		case "MOVE_TO_MENS":
			return moveToMens(action);
		case "MOVE_TO_WOMANS":
			return moveToWomans(action);
		default:
			throw new ReferenceError(`Action type ${action.type} is not defined`);
	}
};

const SidebarContentContext = createContext();

const SidebarContentProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const sidebarContentRef = useRef(null);
	const primaryRef = useRef(null);
	const smartphonesRef = useRef(null);
	const notebooksRef = useRef(null);
	const televisionsRef = useRef(null);
	const videogamesRef = useRef(null);
	const mensRef = useRef(null);
	const womansRef = useRef(null);

	const moveToPrimary = () => 
		dispatch({ 
			type: "MOVE_TO_PRIMARY",
			payload: primaryRef.current.offsetHeight 
		});

	const moveToSmartphones = () => 
		dispatch({ 
			type: "MOVE_TO_SMARTPHONES",
			payload: smartphonesRef.current.offsetHeight
		});

	const moveToNotebooks = () =>
		dispatch({ 
			type: "MOVE_TO_NOTEBOOKS",
			payload: notebooksRef.current.offsetHeight 
		});

	const moveToTelevisions = () =>
		dispatch({ 
			type: "MOVE_TO_TELEVISIONS",
			payload: televisionsRef.current.offsetHeight
		});

	const moveToVideogames = () => 
		dispatch({ 
			type: "MOVE_TO_VIDEOGAMES",
			payload: videogamesRef.current.offsetHeight 
		});

	const moveToMens = () => 
		dispatch({ 
			type: "MOVE_TO_MENS",
			payload: mensRef.current.offsetHeight 
		});

	const moveToWomans = () => 
		dispatch({ 
			type: "MOVE_TO_WOMANS",
			payload: womansRef.current.offsetHeight 
		});

	const setInitialHeight = () =>
		dispatch({ 
			type: "SET_INITIAL_HEIGHT",
			payload: sidebarContentRef.current?.firstChild.offsetHeight 
		});

	useEffect(() => {
		setInitialHeight();
	}, []);

	const value = {
		primaryClassName: state.primary,
		smartphonesClassName: state.smartphones,
		notebooksClassName: state.notebooks,
		televisionsClassName: state.televisions,
		videogamesClassName: state.videogames,
		mensClassName: state.mens,
		womansClassName: state.womans,
		height: state.height,
		primaryRef,
		smartphonesRef,
		notebooksRef,
		televisionsRef,
		videogamesRef,
		mensRef,
		womansRef,
		moveToPrimary,
		moveToSmartphones,
		moveToNotebooks,
		moveToTelevisions,
		moveToVideogames,
		moveToMens,
		moveToWomans,
		sidebarContentRef
	};

	return (
		<SidebarContentContext.Provider value={value}>
			{children}
		</SidebarContentContext.Provider>
	);
};

const SidebarContentPrimary = () => {
	const {
		primaryClassName,
		primaryRef,
		moveToSmartphones,
		moveToNotebooks,
		moveToTelevisions,
		moveToVideogames,
		moveToMens,
		moveToWomans,
	} = useContext(SidebarContentContext);

	return (
		<div 
			className={primaryClassName}
			ref={primaryRef}
		>
			<SidebarContentItem
				leftIcon={<GiSmartphone />}
				text="Smartphones"
				rightIcon={<AiOutlineArrowRight />}
				moveToMenu={moveToSmartphones}
			/> 
			<SidebarContentItem
				leftIcon={<FaLaptopCode />}
				text="Notebooks"
				rightIcon={<AiOutlineArrowRight />}
				moveToMenu={moveToNotebooks}
			/>
			<SidebarContentItem
				leftIcon={<FiMonitor />}
				text="Televisions"
				rightIcon={<AiOutlineArrowRight />}
				moveToMenu={moveToTelevisions}
			/>
			<SidebarContentItem
				leftIcon={<GiGamepad />}
				text="Videogames"
				rightIcon={<AiOutlineArrowRight />}
				moveToMenu={moveToVideogames}
			/>
			<SidebarContentItem
				leftIcon={<RiMenLine />}
				text="Men's"
				rightIcon={<AiOutlineArrowRight />}
				moveToMenu={moveToMens}
			/>
			<SidebarContentItem
				leftIcon={<RiWomenLine />}
				text="Woman's"
				rightIcon={<AiOutlineArrowRight />}
				moveToMenu={moveToWomans}
			/>
      <SidebarContentItem
        leftIcon={<AiOutlineSearch />}
        text="Browse All"
        rightIcon={<AiOutlineArrowRight />}
        divisible={false}
      />
		</div>
	);
};

const SidebarContentSmartphones = () => {
	const { 
		smartphonesClassName, 
		smartphonesRef,
		moveToPrimary 
	} = useContext(SidebarContentContext);

	return (
		<div 
			className={smartphonesClassName}
			ref={smartphonesRef}
		>
			<SidebarContentItem
        leftIcon={<AiOutlineArrowLeft />}
				text="Return"
        rightIcon={<FaBackspace />}
				moveToMenu={moveToPrimary}
			/>
			<SidebarContentItem
        leftIcon={<GiSmartphone />}
        text="Iphone"
        rightIcon={<AiOutlineArrowRight />}        
			/> 
			<SidebarContentItem
        leftIcon={<GiSmartphone />}
        text="Galaxy"
        rightIcon={<AiOutlineArrowRight />}  
			/>
			<SidebarContentItem
        leftIcon={<GiSmartphone />}
        text="Pixel"
        rightIcon={<AiOutlineArrowRight />}  
			/>
			<SidebarContentItem
        leftIcon={<GiSmartphone />}
        text="Motorola"
        rightIcon={<AiOutlineArrowRight />}  
        divisible={false}
			/>
		</div>
	);
};

const SidebarContentNotebooks = () => {
	const {
		notebooksClassName,
		notebooksRef,
		moveToPrimary
	} = useContext(SidebarContentContext);

	return (
		<div 
			className={notebooksClassName}
			ref={notebooksRef}
		>
			<SidebarContentItem
        leftIcon={<AiOutlineArrowLeft />}
				text="Return"
        rightIcon={<FaBackspace />}
				moveToMenu={moveToPrimary}
			/>
			<SidebarContentItem
        leftIcon={<FaLaptopCode />}
				text="Macbook"
        rightIcon={<AiOutlineArrowRight />}
			/> 
			<SidebarContentItem
        leftIcon={<FaLaptopCode />}
				text="Dell"
        rightIcon={<AiOutlineArrowRight />}
			/>
			<SidebarContentItem
        leftIcon={<FaLaptopCode />}
				text="Alienware"
        rightIcon={<AiOutlineArrowRight />}
			/>
			<SidebarContentItem
        leftIcon={<FaLaptopCode />}
				text="Acer"
        rightIcon={<AiOutlineArrowRight />}
			/>
			<SidebarContentItem
        leftIcon={<FaLaptopCode />}
				text="Lenovo"
        rightIcon={<AiOutlineArrowRight />}
			/>
			<SidebarContentItem
        leftIcon={<FaLaptopCode />}
				text="Browse All"
        rightIcon={<AiOutlineArrowRight />}
        divisible={false}
			/>
		</div>
	);
};

const SidebarContentTelevisions = () => {
	const {
		televisionsClassName,
		televisionsRef,
		moveToPrimary
	} = useContext(SidebarContentContext);

	return (
		<div 
			className={televisionsClassName}
			ref={televisionsRef}
		>
			<SidebarContentItem
        leftIcon={<AiOutlineArrowLeft />}
				text="Return"
        rightIcon={<FaBackspace />}
				moveToMenu={moveToPrimary}
			/>
			<SidebarContentItem
        leftIcon={<FiMonitor />}
				text="Sony"
        rightIcon={<AiOutlineArrowRight />}
			/> 
			<SidebarContentItem
        leftIcon={<FiMonitor />}
				text="Samsung"
        rightIcon={<AiOutlineArrowRight />}
			/>
			<SidebarContentItem
        leftIcon={<FiMonitor />}
				text="LG"
        rightIcon={<AiOutlineArrowRight />}
			/>
			<SidebarContentItem
        leftIcon={<FiMonitor />}
				text="Panasonic"
        rightIcon={<AiOutlineArrowRight />}
			/>
			<SidebarContentItem
        leftIcon={<FiMonitor />}
				text="Vizio"
        rightIcon={<AiOutlineArrowRight />}
			/>
			<SidebarContentItem
        leftIcon={<FiMonitor />}
				text="Browse All"
        rightIcon={<AiOutlineArrowRight />}
        divisible={false}
			/>
		</div>
	);
};

const SidebarContentVideogames = () => {
	const {
		videogamesClassName,
		videogamesRef,
		moveToPrimary
	} = useContext(SidebarContentContext);

	return (
		<div 
			className={videogamesClassName}
			ref={videogamesRef}
		>
			<SidebarContentItem
				leftIcon={<AiOutlineArrowLeft />}
				text="Return"
        rightIcon={<FaBackspace />}
				moveToMenu={moveToPrimary}
			/>
			<SidebarContentItem
				leftIcon={<GiGamepad />}
				text="Playstation"
        rightIcon={<AiOutlineArrowRight />}
			/> 
			<SidebarContentItem
				leftIcon={<GiGamepad />}
				text="Xbox"
        rightIcon={<AiOutlineArrowRight />}
			/>
			<SidebarContentItem
				leftIcon={<GiGamepad />}
				text="Valve Vr"
        rightIcon={<AiOutlineArrowRight />}
			/>
			<SidebarContentItem
				leftIcon={<GiGamepad />}
				text="PC Gamer"
        rightIcon={<AiOutlineArrowRight />}
			/>
			<SidebarContentItem
				leftIcon={<GiGamepad />}
				text="Browse All"
        rightIcon={<AiOutlineArrowRight />}
        divisable={false}
			/>
		</div>
	);
};

const SidebarContentMens = () => {
	const {
		mensClassName,
		mensRef,
		moveToPrimary
	} = useContext(SidebarContentContext);

	return (
		<div 
			className={mensClassName}
			ref={mensRef}
		>
			<SidebarContentItem
				leftIcon={<AiOutlineArrowLeft />}
				text="Return"
				moveToMenu={moveToPrimary}
        rightIcon={<FaBackspace />}
			/>
			<SidebarContentItem
				leftIcon={<RiMenLine />}
				text="T-Shrits"
        rightIcon={<AiOutlineArrowRight />}
			/> 
			<SidebarContentItem
				leftIcon={<RiMenLine />}
				text="Pants"
        rightIcon={<AiOutlineArrowRight />}
			/>
			<SidebarContentItem
				leftIcon={<RiMenLine />}
				text="Shoes"
        rightIcon={<AiOutlineArrowRight />}
			/>
			<SidebarContentItem
				leftIcon={<RiMenLine />}
				text="Socks"
        rightIcon={<AiOutlineArrowRight />}
			/>
			<SidebarContentItem
				leftIcon={<RiMenLine />}
				text="Underware"
        rightIcon={<AiOutlineArrowRight />}
			/>
			<SidebarContentItem
				leftIcon={<RiMenLine />}
				text="Perfumes"
        rightIcon={<AiOutlineArrowRight />}
			/>
			<SidebarContentItem
				leftIcon={<RiMenLine />}
				text="Browse All"
        rightIcon={<AiOutlineArrowRight />}
        divisible={false}
			/>
		</div>
	);
};

const SidebarContentWomans = () => {
	const {
		womansClassName,
		womansRef,
		moveToPrimary
	} = useContext(SidebarContentContext);

	return (
		<div 
			className={womansClassName}
			ref={womansRef}
		>
			<SidebarContentItem
				leftIcon={<AiOutlineArrowLeft />}
				text="Return"
        rightIcon={<FaBackspace/>}
				moveToMenu={moveToPrimary}
			/>
			<SidebarContentItem
				leftIcon={<RiWomenLine />}
				text="T-Shirts"
        rightIcon={<AiOutlineArrowRight />}
			/> 
			<SidebarContentItem
				leftIcon={<RiWomenLine />}
				text="Dresses"
        rightIcon={<AiOutlineArrowRight />}
			/>
			<SidebarContentItem
				leftIcon={<RiWomenLine />}
				text="Pants"
        rightIcon={<AiOutlineArrowRight />}
			/>
			<SidebarContentItem
				leftIcon={<RiWomenLine />}
				text="Shoes"
        rightIcon={<AiOutlineArrowRight />}
			/>
			<SidebarContentItem
				leftIcon={<RiWomenLine />}
				text="Socks"
        rightIcon={<AiOutlineArrowRight />}
			/>
			<SidebarContentItem
				leftIcon={<RiWomenLine />}
				text="Underware"
        rightIcon={<AiOutlineArrowRight />}
			/>
			<SidebarContentItem
				leftIcon={<RiWomenLine />}
				text="Perfumes"
        rightIcon={<AiOutlineArrowRight />}
			/>
			<SidebarContentItem
				leftIcon={<RiWomenLine />}
				text="Browse All"
        rightIcon={<AiOutlineArrowRight />}
				divisible={false}
			/>
		</div>
	);
};

const SidebarContent = ({ sidebarContentClassName }) => {
	const { height, sidebarContentRef } = useContext(SidebarContentContext);

	return (
		<div 
			ref={sidebarContentRef}
			className={sidebarContentClassName}
			style={{ height }}
		>
			<SidebarContentPrimary />
			<SidebarContentSmartphones />
			<SidebarContentNotebooks />
			<SidebarContentTelevisions />
			<SidebarContentVideogames />
			<SidebarContentMens />
			<SidebarContentWomans />
		</div>
	);
};

const Sidebar = ({ sidebarIconClassName, sidebarContentClassName, toggleSidebar }) => {

	return (
		<div className="sidebar-icon-content">
			<BsLayoutTextSidebar
				className={sidebarIconClassName}
				onClick={toggleSidebar}
			/>
			<SidebarContentProvider>
				<SidebarContent sidebarContentClassName={sidebarContentClassName}/>
			</SidebarContentProvider>
		</div>
	);
};

export default Sidebar;