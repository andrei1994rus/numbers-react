import styled from 'styled-components';

const media=
{
	mobile:'@media(max-width:1000px)'
};

const StylesModal=styled.div
`
	.first_row
	{
		color:white;
		background:black;
		font-size:16pt;
		font-weight:900;
	}

	#title
	{
		color:red;
	}

	.other_row
	{
		background:#0033CC;
		color:white;

		${media.mobile}
		{
			font-size:10pt;
		}
	}


`;

export default StylesModal;