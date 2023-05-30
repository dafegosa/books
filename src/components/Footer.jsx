import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white w-full absolute bottom-0">
      <div className="px-4 py-12 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
        <nav
          className="flex flex-wrap justify-center -mx-5 -my-2"
          aria-label="Footer"
        >
          <div className="px-5 py-2">
            <a href="#" className="text-sm text-gray-500 hover:text-blue-600">
              Follow us
            </a>
          </div>
        </nav>
        <div className="flex justify-center mt-4 space-x-6">
          <span className="inline-flex justify-center w-full gap-3 m-auto md:justify-start md:w-auto">
            <Link
              to="https://github.com/dafegosa/books"
              target="_blank"
              className="w-6 h-6 transition fill-black hover:text-blue-500"
            >
              <span className="sr-only">github</span>
              <ion-icon
                className="w-5 h-5 md hydrated"
                name="logo-github"
                role="img"
                aria-label="logo github"
              ></ion-icon>
            </Link>
            <Link
              to="https://twitter.com/home"
              target="_blank"
              className="w-6 h-6 transition fill-black hover:text-blue-500"
            >
              <span className="sr-only">twitter</span>
              <ion-icon
                className="w-5 h-5 md hydrated"
                name="logo-twitter"
                role="img"
                aria-label="logo twitter"
              ></ion-icon>
            </Link>
            <Link
              to="https://www.instagram.com/"
              target="_blank"
              className="w-6 h-6 transition fill-black hover:text-blue-500"
            >
              <span className="sr-only">Instagram</span>
              <ion-icon
                className="w-5 h-5 md hydrated"
                name="logo-instagram"
                role="img"
                aria-label="logo instagram"
              ></ion-icon>
            </Link>
            <Link
              to="linkedin.com"
              target="_blank"
              className="w-6 h-6 transition fill-black hover:text-blue-500"
            >
              <span className="sr-only">Linkedin</span>
              <ion-icon
                className="w-5 h-5 md hydrated"
                name="logo-linkedin"
                role="img"
                aria-label="logo linkedin"
              ></ion-icon>
            </Link>
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
