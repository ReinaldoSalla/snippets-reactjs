import React, {
	useEffect,
	Fragment
} from "react";
import "./App.css";

const debounce = (fn, delay) => {
	let timeoutId;
	return (...args) => {
		if (timeoutId) clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			fn(...args)
		}, delay)
	};
};

const throttle = (fn, delay) => {
  let last = 0;
  return (...args) => {
    const now = new Date().getTime();
    if (now - last < delay) {
      return;
    }
    last = now;
    return fn(...args);
  };
};

const addZeros = number => {
	if (number < 10) return `00${number}`
	else if (number < 100) return `0${number}`;
	else return number;
};

const Content = ({ numContents }) => {
	const contents = new Array(numContents).fill(0).map((_, index) => 
		<div key={index}>
			Content #{addZeros(index + 1)} -
		</div>
	);
	return (
		<div className="content">
			{contents}
		</div>
	)
};

let nRaws = 0;
let nDebounces = 0;
let nThrottles = 0;

const App = () => {
	const onScrollRaw = () => {
    nRaws++;
    console.log(`nRaws = ${nRaws}`);
	};

	const onScrollDebounce = debounce(() => {
    nDebounces++;
    console.log(`nDebounces = ${nDebounces}`);
	}, 100);

  const onScrollThrottle = throttle(() => {
    nThrottles++;
    console.log(`nThrottles = ${nThrottles}`);
  }, 100);

	useEffect(() => {
		window.addEventListener("scroll", onScrollRaw);
		return () => window.removeEventListener("scroll", onScrollRaw);
	});

	useEffect(() => {
		window.addEventListener("scroll", onScrollDebounce);
		return () => window.removeEventListener("scroll", onScrollDebounce);
	});

  useEffect(() => {
    window.addEventListener("scroll", onScrollThrottle);
    return () => window.removeEventListener("scroll", onScrollThrottle);
  });

	return (
		<Fragment>
			<div className="count">
				<h1> onScroll </h1>
				<h2> raw: todo (state) </h2>
				<h2> debounce: todo (state) </h2>
        <h2> throttle: todo (state) </h2>
			</div>
			<Content numContents={1000}/>
		</Fragment>
	);
}

export default App;