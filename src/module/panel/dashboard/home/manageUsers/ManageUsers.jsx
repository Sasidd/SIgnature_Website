import React from "react";
import { Heading } from "../../../../../components";
import { Topbar } from "../../../../../components/common";
import "./ManageUsers.scss";

import { RiDeleteBin5Fill } from "react-icons/ri";

const ManageUsers = () => {
  return (
    <>
      <Topbar />
      <div className="manageuser-header">
        <Heading className="secondry">Manage users</Heading>
        <div className="manageuser-header-button">
          <button>Add manually</button>
          <button>Invite users</button>
        </div>
      </div>

      <div className="manageuser-table">
        <table>
          <thead>
            <tr>
              <th>Employee’s Name</th>
              <th>Rank</th>
              <th>Assigned Signature</th>
              <th>1 to 18 of 18</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Anton Hall</td>
              <td>Admin</td>
              <td>My Company Signature</td>
              <td className="table-delete-icon">
                <RiDeleteBin5Fill />
              </td>
            </tr>
            <tr>
              <td>Anton Hall</td>
              <td>Admin</td>
              <td>My Company Signature</td>
              <td className="table-delete-icon">
                <RiDeleteBin5Fill />
              </td>
            </tr>
            <tr>
              <td>Anton Hall</td>
              <td>Admin</td>
              <td>My Company Signature</td>
              <td className="table-delete-icon">
                <RiDeleteBin5Fill />
              </td>
            </tr>
            <tr>
              <td>Anton Hall</td>
              <td>Admin</td>
              <td>My Company Signature</td>
              <td className="table-delete-icon">
                <RiDeleteBin5Fill />
              </td>
            </tr>{" "}
            <tr>
              <td>Anton Hall</td>
              <td>Admin</td>
              <td>My Company Signature</td>
              <td className="table-delete-icon">
                <RiDeleteBin5Fill />
              </td>
            </tr>{" "}
            <tr>
              <td>Anton Hall</td>
              <td>Admin</td>
              <td>My Company Signature</td>
              <td className="table-delete-icon">
                <RiDeleteBin5Fill />
              </td>
            </tr>{" "}
            <tr>
              <td>Anton Hall</td>
              <td>Admin</td>
              <td>My Company Signature</td>
              <td className="table-delete-icon">
                <RiDeleteBin5Fill />
              </td>
            </tr>
            <tr>
              <td>Anton Hall</td>
              <td>Admin</td>
              <td>My Company Signature</td>
              <td className="table-delete-icon">
                <RiDeleteBin5Fill />
              </td>
            </tr>
            <tr>
              <td>Anton Hall</td>
              <td>Admin</td>
              <td>My Company Signature</td>
              <td className="table-delete-icon">
                <RiDeleteBin5Fill />
              </td>
            </tr>
            <tr>
              <td>Anton Hall</td>
              <td>Admin</td>
              <td>My Company Signature</td>
              <td className="table-delete-icon">
                <RiDeleteBin5Fill />
              </td>
            </tr>
            <tr>
              <td>Anton Hall</td>
              <td>Admin</td>
              <td>My Company Signature</td>
              <td className="table-delete-icon">
                <RiDeleteBin5Fill />
              </td>
            </tr>
            <tr>
              <td>Anton Hall</td>
              <td>Admin</td>
              <td>My Company Signature</td>
              <td className="table-delete-icon">
                <RiDeleteBin5Fill />
              </td>
            </tr>
            <tr>
              <td>Anton Hall</td>
              <td>Admin</td>
              <td>My Company Signature</td>
              <td className="table-delete-icon">
                <RiDeleteBin5Fill />
              </td>
            </tr>
            <tr>
              <td>Anton Hall</td>
              <td>Admin</td>
              <td>My Company Signature</td>
              <td className="table-delete-icon">
                <RiDeleteBin5Fill />
              </td>
            </tr>
            <tr>
              <td>Anton Hall</td>
              <td>Admin</td>
              <td>My Company Signature</td>
              <td className="table-delete-icon">
                <RiDeleteBin5Fill />
              </td>
            </tr>
            <tr>
              <td>Anton Hall</td>
              <td>Admin</td>
              <td>My Company Signature</td>
              <td className="table-delete-icon">
                <RiDeleteBin5Fill />
              </td>
            </tr>
            <tr>
              <td>Anton Hall</td>
              <td>Admin</td>
              <td>My Company Signature</td>
              <td className="table-delete-icon">
                <RiDeleteBin5Fill />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageUsers;
