function Syllabus() {
  return (
    <main className="pt-4">
      <div className="container">
        <h1 className="fs-3">My Syllabus</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Dashboard</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Syllabus
            </li>
          </ol>
        </nav>
        <div className="float-end">
          <button type="button" className="btn btn-outline-primary my-3">
            Create new Syllabus
          </button>
        </div>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Title</th>
              <th scope="col">Author</th>
              <th scope="col">Course</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>
                <button type="button" className="btn me-md-2">
                  Edit
                </button>
                <button type="button" className="btn text-danger">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Syllabus;
