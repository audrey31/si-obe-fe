function Courses() {
  return (
    <main className="pt-4">
      <div className="container">
        <h1 className="fs-3">My Courses</h1>
        <div className="breadcrumb">
          <nav
            style={{
              "--bs-breadcrumb-divider":
                "url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;)",
            }}
            aria-label="breadcrumb"
          >
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Courses
              </li>
            </ol>
          </nav>
        </div>
        <div
          className="button"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "12px",
          }}
        >
          <button type="button" className="btn btn-outline-primary">
            Create New Course
          </button>
        </div>
        <div
          className="card text-dark bg-light mb-3"
          style={{ width: "auto", marginTop: "24px" }}
        >
          <div className="card-body m-3">
            <h5 className="card-title text-primary">Class Name</h5>
            <p className="card-text mb-4">
              Class Code - <strong>Course Type</strong> - Course Learning Media - <strong>Course Credit</strong>
              <br></br>
              Short Description
            </p>
            <hr></hr>
            <p className="card-text mt-4">
              Created by Author <br></br>
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button className="btn me-md-2" type="button">
              <strong>Edit</strong>
              </button>
              <button className="btn text-danger" type="button">
                <strong>Delete</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Courses;
