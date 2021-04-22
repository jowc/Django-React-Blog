import {Link} from 'react-router-dom'




export function Header() {
  let CreatorName = 'Joe Seph'

  return (
    <div className="bg-blue-600 shadow-md flex w-full">
    <div className="flex items-center h-12 justify-between mx-auto my-0 w-11/12">
      <span className="items-center text-white font-bold uppercase">
        {CreatorName}
      </span>
      <div className="flex items-center justify-center space-x-8 text-white capitalize">
        <div>
          <Link to="/">home</Link>
        </div>
        <div>
          <Link to="/blog/new-blog/">new blog</Link>
        </div>
        <div>
          <Link to="/blogdetail/">test</Link>
        </div>
      </div>
    </div>
  </div>
  );
}

export function Footer() {
  return (
    <div className="bg-blue-600 p-4 w-full">
    <div className="m-0 text-white max-w-8/12">
      &copy; Copyright 2020.
    </div>
  </div>
  );
}

// export default Header;
