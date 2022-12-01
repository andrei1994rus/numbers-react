import styled from 'styled-components';

const media=
{
	mobile:'@media(max-width:1023px)',
	smallMobile:'@media(max-width:319px)'
};

const StylesModal=styled.div
`
	.first_row
	{
		color:white;
		background:black;
		font-weight:900;
		font-size:8vh;
		border:1px solid white;

		${media.mobile}
		{
			font-weight:500;
			font-size:6vh;
		}

		${media.smallMobile}
		{
			font-weight:100;
			font-size:4.5vh;
		}
	}

	.first_row_fact
	{
		color:white;
		background:black;
		font-weight:900;
		font-size:8vh;
		border:1px solid white;

		${media.mobile}
		{
			font-weight:500;
			font-size:6vh;
		}

		${media.smallMobile}
		{
			font-weight:100;
			font-size:4.5vh;
		}
	}

	#title
	{
		color:red;
	}

	.other_row
	{
		background:#0033CC;
		color:white;
		font-size:3vmax;
		border:1px solid black;

		${media.mobile}
		{
			font-size:2.4vmax;
		}

		${media.smallMobile}
		{
			font-size:4.3vw;
		}
	}

	.other_row_fact
	{
		background:#0033CC;
		color:white;
		border:1px solid black;
		font-size:3vmax;

		${media.mobile}
		{
			font-size:3.5vw;
		}

		${media.smallMobile}
		{
			font-size:4.2vw;
		}
	}
`;

export default StylesModal;