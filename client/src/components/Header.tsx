import { websiteLogo } from '../assets/index';

function Header() {
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800">
      <div className="flex justify-between items-center mx-auto">
        <div>
          <img className="w-28" src={websiteLogo} alt="logo" />
        </div>
        <div>
          <ul>
            <li>Home</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
