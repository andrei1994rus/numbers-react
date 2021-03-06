import styled,{keyframes} from 'styled-components';

const rotate=keyframes
`
  from
  {
    transform:rotate(0deg);
  }

  to
  {
    transform:rotate(360deg);
  }
`;

const StylesLoading=styled.div
`
	.icon
	{
		height:20vh;
	}
		
	display:flex;
	flex-direction:column;
	align-items:center;
	animation:${rotate} 5s linear infinite;
`;

export default StylesLoading;