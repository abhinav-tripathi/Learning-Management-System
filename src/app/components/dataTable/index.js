import React from "react";
import { Link } from "react-router-dom";

const Table = props => {
  return (
    <div className="col-md-10 common-form align-center-no-gap margin-top-btm20">
      <div className="input-group md-form form-sm form-2 pl-0">
        <div className="form-heading">{props.tableHeading}</div>
        {props.tableData.length ? (
          <table className="table">
            <thead>
              <tr>
                {props.tableHeader.map((header, i) => {
                  return (
                    <th scope="col" key={i}>
                      {header}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {props.tableData.map((data, i) => {
                return (
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    {props.tableKey.map((key, i) => {
                      return (
                        <td key={i}>
                          {i === 0 && props.linkUrl ? (
                            <Link to={`${props.linkUrl}${data._id}`}>
                              {data[key]}
                            </Link>
                          ) : (
                            <div>
                              {!data[key] ? (
                                <div>
                                  {props.cid ? (
                                    <Link
                                      to={`${props.editUrl}${data._id}?cid=${
                                        props.params
                                      }&cname=${data.name}`}
                                      className="badge badge-secondary"
                                    >
                                      Edit
                                    </Link>
                                  ) : (
                                    <Link
                                      to={`${props.editUrl}${data._id}?cname=${
                                        data.session ? data.session : data.name
                                      }`}
                                      className="badge badge-secondary"
                                    >
                                      Edit
                                    </Link>
                                  )}
                                  {props.params ? (
                                    <button
                                      type="button"
                                      className="badge badge-dark"
                                      onClick={() =>
                                        props.deleteAction(
                                          data._id,
                                          props.params
                                        )
                                      }
                                    >
                                      Delete
                                    </button>
                                  ) : (
                                    <button
                                      type="button"
                                      className="badge badge-dark"
                                      onClick={() =>
                                        props.deleteAction(
                                          data._id,
                                          props.loggedInUserID
                                        )
                                      }
                                    >
                                      Delete
                                    </button>
                                  )}
                                </div>
                              ) : (
                                <span>
                                  {key === "startDate" || key === "endDate"
                                    ? new Date(data[key]).toLocaleDateString()
                                    : data[key]}
                                </span>
                              )}
                            </div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <div className="col-md-12 no-padding-left badge badge-info">
            No data found!
          </div>
        )}
      </div>
    </div>
  );
};

export default Table;
