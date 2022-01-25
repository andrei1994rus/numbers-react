import styled from 'styled-components';

const media=
{
	mobile:'@media(max-width:1023px)'
};

const StylesHeader=styled.div
`
	#page_header
	{
		font-size:calc(2.5rem*1.5);

		${media.mobile}
		{
			font-size:2.5rem;
		}
	}
`;

export default StylesHeader;