import styled from 'styled-components';
import { COLORS } from '../../constants/variables';

const StyledCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 540px;
	height: 332px;
	padding: 1rem;
	text-align: center;
	background-color: ${COLORS.cardColor};
	border-radius: 10px;
`;

const CardTitle = styled.h1`
	font-size: 13px;
	color: ${COLORS.titleColor};
`;

const CardText = styled.p`
	font-size: 28px;
	color: ${COLORS.textColor};
`;

const CardButton = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${COLORS.titleColor};
	width: 64px;
	height: 64px;
	border-radius: 50%;
	cursor: pointer;
`;

const Button = styled.img``;
export { StyledCard, CardTitle, CardText, CardButton, Button };
