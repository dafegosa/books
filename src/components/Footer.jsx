import { Link } from 'react-router-dom';

const SOCIAL_NETWORKS = [
  {
    name: 'github',
    Label: 'Github',
    url: 'https://github.com/dafegosa/books',
  },
  {
    name: 'twitter',
    Label: 'Twitter',
    url: 'https://twitter.com/home',
  },
  {
    name: 'instagram',
    Label: 'Instagram',
    url: 'https://www.instagram.com/',
  },
  {
    name: 'linkedin',
    Label: 'LinkedIn',
    url: '',
  },
];

const Footer = () => {
  return (
    <footer className="bg-white w-full absolute bottom-0">
      <div className="px-4 py-4 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
        <nav
          className="flex flex-wrap justify-center -mx-5 -my-2"
          aria-label="Footer"
        >
          <div className="px-5 py-2">
            <p className="text-sm text-gray-500 hover:text-blue-600">
              Follow us
            </p>
          </div>
        </nav>
        <div className="flex justify-center mt-4 space-x-6">
          <span className="inline-flex justify-center w-full gap-3 m-auto md:justify-start md:w-auto">
            {SOCIAL_NETWORKS.map((net) => {
              return (
                <Link
                  key={net.name}
                  to={net.url}
                  target="_blank"
                  className="w-6 h-6 transition fill-black hover:text-blue-500"
                >
                  <span className="sr-only">{net.Label}</span>
                  <ion-icon
                    className="w-5 h-5 md hydrated"
                    name={`logo-${net.name}`}
                    role="img"
                    aria-label={`logo ${net.name}`}
                  ></ion-icon>
                </Link>
              );
            })}
          </span>
        </div>
        <p className="mt-3 text-center flex flex-col">
          <span className="mx-auto mt-1 text-sm text-gray-500">
            <Link
              to="https://josalvarezme.atlassian.net/jira/software/projects/TE/boards/1/backlog?atlOrigin=eyJwIjoiYWRtaW4iLCJpIjoiNDE5ZjVhMWQ1YzNmNDEwYzkzZDZiOWU2YzE0ZDAxYzIifQ%3D%3D&cloudId=bf4b9d7b-525f-4737-b665-abf90254ddf9"
              className="mx-2 text-blue-500 hover:text-gray-500"
              rel="noopener noreferrer"
            >
              @Reading wishlist | Team 1
            </Link>
            Copyright©2023
          </span>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
