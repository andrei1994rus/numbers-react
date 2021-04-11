import styled from 'styled-components';

const media=
{
	mobile:'@media(max-width:1000px)'
};

const StylesHeader=styled.div
`
	#page_header
	{
		${media.mobile}
		{
			position:absolute;
			mardin-right:0;
		}
	}
`;

export default StylesHeader;