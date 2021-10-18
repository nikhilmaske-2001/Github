import React from "react";
import "./RepoList.css";

function RepoList() {
  return (
    <div className="content">
      <div className="repo-list-left">
        <h1>Repo 1</h1>
        <h1>Repo 2</h1>
        <h1>Repo 3</h1>
        <h1>Repo 4</h1>
      </div>
      <div className="repo-details-right">Repo 1 details</div>
    </div>
  );
}

export default RepoList;
