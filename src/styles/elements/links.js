import settings from '../../services/settings';

const colorLinks = settings.colorLinks;

export default `

  a {
    text-decoration: none;
    border-bottom: 1px solid;

    color: ${colorLinks};

  }

  a:hover {
    cursor:pointer;
  }
  
`;
