import { useState, useEffect } from 'react';

export const useFetch = () => {
	const [phrase, setPhrase] = useState({});
	const [newAdvice, setNewAdvice] = useState(false);
	useEffect(() => {
		fetchData('https://api.adviceslip.com/advice', setPhrase);
	}, [newAdvice]);

	return { phrase, newAdvice, setNewAdvice };
};

const fetchData = async (url, setPhrase) => {
	const response = await fetch(url);
	const data = await response.json();
	setPhrase(data);
};
