import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-gray-500">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Write & Get</a>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="data:image/jpeg;base64,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" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;