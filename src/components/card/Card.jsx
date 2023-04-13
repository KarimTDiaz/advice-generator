import { StyledCard, CardTitle, CardText, CardButton, Button } from './styles';
import { useFetch } from '../../hooks/useData';

const Card = () => {
	const { phrase, newAdvice, setNewAdvice } = useFetch();
	return (
		<StyledCard>
			{Object.keys(phrase).length === 0 ? (
				<CardText>Loading...</CardText>
			) : (
				<>
					<CardTitle> ADVICE#{phrase.slip.id}</CardTitle>
					<CardText>{phrase.slip.advice}</CardText>
				</>
			)}
			<CardButton onClick={() => setNewAdvice(!newAdvice)}>
				<Button src='/images/icon-dice.svg' />
			</CardButton>
		</StyledCard>
	);
};

export default Card;
