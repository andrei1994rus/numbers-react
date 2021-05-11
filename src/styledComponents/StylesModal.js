import styled from 'styled-components';

const media=
{
	mobile:'@media(max-width:1000px)',
	smallMobile:'@@media(max-width:300px)'
};

const StylesModal=styled.div
`
	.first_row
	{
		color:white;
		background:black;
		font-weight:900;
		font-size:20pt;
		border:1px solid white;
	}

	.first_row_fact
	{
		color:white;
		background:black;
		font-weight:900;
		font-size:20pt;
		border:1px solid white;

		${media.smallMobile}
		{
			font-weight:0;
			font-size:10%;
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
		font-size:130%;
		border:1px solid black;

		${media.mobile}
		{
			font-size:70%;
		}
	}

	.other_row_fact
	{
		background:#0033CC;
		color:white;
		border:1px solid black;

		${media.mobile}
		{
			font-size:60%;
		}

		${media.smallMobile}
		{
			font-size:40%;
		}
	}
`;

export default StylesModal;