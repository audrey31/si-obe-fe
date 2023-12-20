function SyllabusCreate() {
  return (
    <main className="pt-4">
      <div className="container">
        <h1 className="fs-3">Create New Syllabus</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Dashboard</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/syllabus">Syllabus</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              create
            </li>
          </ol>
        </nav>
        <div className="card mb-5">
          <div className="card-body p-3">
            <div className="mb-3">
              <label htmlFor="input" className="form-label">
                Course
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Choose the course</option>
                <option>...</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="input" className="form-label">
                Course Code
              </label>
              <input type="text" className="form-control" id="input" />
            </div>
            <div className="mb-3">
              <label htmlFor="input" className="form-label">
                Author
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="input" className="form-label">
                Head of Study Program
              </label>
              <input type="text" className="form-control" id="input" />
            </div>

            <div className="d-flex mt-5">
              <button type="submit" className="btn btn-primary me-2">
                Save
              </button>
              <button type="button" className="btn btn-outline-primary">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SyllabusCreate;
