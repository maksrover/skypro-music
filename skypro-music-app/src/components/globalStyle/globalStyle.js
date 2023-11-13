export const GlobalStyle = `
* {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  
  *:before,
  *:after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  
  a,
  a:visited {
    text-decoration: none;
    font-family: 'StratosSkyeng', sans-serif;
    cursor: pointer;
  }
  
  button,
  ._btn {
    cursor: pointer;
  }
  
  ul li {
    list-style: none;
  }
  
  @font-face {
    font-family: 'StratosSkyeng';
    src:
      local('StratosSkyeng'),
      local('StratosSkyeng'),
      url('../public/fonts/StratosSkyeng.woff2') format('woff2'),
      url('../public/fonts/StratosSkyeng.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }
  
  html,
  body {
    width: 100%;
    height: 100%;
    font-family: 'StratosSkyeng', sans-serif;
    color: #ffffff;
  }
  
  input[type="range"] {
    accent-color: #fff;
  }
  
  input[type=range]::-webkit-slider-runnable-track {
    height: 3px;
    background-color: #fff;
  }
  
  input[type=range]::-webkit-slider-thumb {
    cursor: pointer;
    margin-top: -6px;
  }
  
  input[type=range]::-moz-range-track {
    height: 5px;
    background-color: #fff;
  }
  
  input[type=range]::-moz-range-thumb {
    color: white;
    background: #ecf0f1;
    cursor: pointer;
  }
  
  ::-webkit-scrollbar {
    height: 5px; /* высота для горизонтального скролла */
    background-color: #252525;
    border-radius: 9em;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #464646;
    border-radius: 9em;
  }
  
  ._btn-text:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  }

  ._btn-active {
    border-color: #ad61ff;
    color: #ad61ff;
    cursor: pointer;
  }
  
  ._btn-icon:hover svg {
    fill: transparent;
    stroke: #acacac;
    cursor: pointer;
  }
  
  ._btn-text:active {
    border-color: #ad61ff;
    color: #ad61ff;
    cursor: pointer;
  }
  
  ._btn-icon:active svg {
    fill: transparent;
    stroke: #ffffff;
    cursor: pointer;
  }
  
  ._btn-icon:active .track-play__like-svg,
  ._btn-icon:active .track-play__dislike-svg {
    fill: #696969;
    stroke: #ffffff;
    cursor: pointer;
  }

`;
export default GlobalStyle;
