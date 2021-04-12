import styled from 'styled-components';

const media=
{
	mobile:'@media(max-width:1000px)',
	desktop:'@media(min-width:1001px)'
};

const StylesPage=styled.div
`
	${media.desktop}
	{
		margin-left:80px;
	}
	
	${media.mobile}
	{
		margin-left:20px;
	}

	#submit, #factorial_count, #chb, #random_range, #random_count
	{
		margin-top:5px;
	}

	.div_alert
	{
		${media.mobile}
		{
			position:relative;
			top:50px;
			font-size:10pt;
		}
	}

	.div_hint
	{
		color:red;
		font-style:italic;
	}

	#hint_fact ,#hint_count, #hint_range, #hint_chb, #hint_submit
	{
		font-weight:900;
	}
	
	.div_list, .div_text
	{
		${media.mobile}
		{
			position:relative;
			top:50px;
			font-size:10pt;
		}
	}

	.form
	{
		${media.mobile}
		{
			position:relative;
			top:50px;
		}
	}

	.link, .nav_item
	{
		color:red;
		font-weight:900;
		font-style:italic;
	}
`;

export default StylesPage;