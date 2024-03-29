import styled from 'styled-components';

const media=
{
	mobile:'@media(max-width:1023px)',
	smallMobile:'@media(max-width:319px)'
};

const StylesPage=styled.div
`
	padding-left:80px;
	
	${media.mobile}
	{
		padding-left:10vw;
	}

	${media.smallMobile}
	{
		padding-left:2vw;
	}

	#submit, #factorial_count, #random_range, #random_count
	{
		font-size:3vh;
		margin-top:2vmax;
		
		${media.mobile}
		{
			font-size:4vw;
		}

		${media.smallMobile}
		{
			font-size:4.2vw;
		}
	}

	#chb
	{
		position:static;
	}

	.div_alert
	{
		font-size:5vmax;

		${media.mobile}
		{
			font-size:3vmax;
		}
	}

	.div_hint
	{
		color:red;
		font-style:italic;
	}

	#hint_fact, #hint_count, #hint_range, #hint_chb, #hint_submit
	{
		font-weight:900;
		font-size:4.5vmax;

		${media.mobile}
		{
			font-size:4vmax;
		}
	}
	
	.div_list
	{
		font-size:3.5vmax;

		${media.smallMobile}
		{
			font-size:4.5vmax;
			margin-left: -5vw;
		}
	}

	.MuiTypography-body1
	{
		font-size:3.5vmax;

		${media.mobile}
		{
			font-size:3vmax;
		}

		${media.smallMobile}
		{
			font-size:4.5vmax;
		}
	}

	.form-check
	{
		font-size:3vh;
		
		${media.mobile}
		{
			font-size:3.3vmax;
		}
	}

	.form-check-label {
		margin-left:1vw;
	}

	.link, .nav_item
	{
		color:red;
		font-size:3.5vmax;
		font-weight:900;
		font-style:italic;

		${media.smallMobile}
		{
			font-size:4vmax;
			font-weight:700;
		}
	}

	.nav_item
	{
		padding-right:.5vmax;
	}

	#btnUp
	{
		right:1.5vmin;
		bottom:1.5vmin;
		width:10vmin;
		height:12vmin;
		background-color:#2f55fa;
		border:2px solid #2f55fa;
		opacity:0.9;
  		font-size:2rem;
		color:#fff;
		position:fixed;

		${media.mobile}
		{
			font-size:3vmax;
			width:8vmin;
		}
	}
`;

export default StylesPage;