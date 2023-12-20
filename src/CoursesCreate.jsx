function CoursesCreate() {
  return (
    <main className="pt-4">
      <div className="container">
        <h1 className="fs-3">Create New Course</h1>
        <div className="breadcrumb">
          <nav
            style={{
              "--bs-breadcrumb-divider":
                "url(data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E)",
            }}
            aria-label="breadcrumb"
          >
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Dashboard</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/courses">Courses</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Create
              </li>
            </ol>
          </nav>
        </div>
        <div className="card mb-5">
          <div className="card-body p-3">
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="input" className="form-label">
                  Study Program
                </label>
                <select id="inputState" className="form-control">
                  <option selected>Select Study Program</option>
                  <option>...</option>
                </select>
              </div>
              <div className="col">
                <label htmlFor="input" className="form-label">
                  Course Code
                </label>
                <input type="text" className="form-control" id="input" />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="inputEmail4" className="form-label">
                  Course Name
                </label>
                <input type="text" className="form-control" id="input" />
              </div>
              <div className="col">
                <label htmlFor="inputEmail4" className="form-label">
                  Course Type
                </label>
                <select id="inputState" className="form-control">
                  <option selected>Select Course Type</option>
                  <option>Mandatory</option>
                  <option>Elective</option>
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="input" className="form-label">
                  Course Credit
                </label>
                <input type="number" className="form-control" id="input" />
              </div>
              <div className="col">
                <label htmlFor="input" className="form-label">
                  Lab Credit
                </label>
                <input type="number" className="form-control" id="input" />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="input" className="form-label">
                  Short Description
                </label>
                <textarea
                  className="form-control"
                  id="Textarea1"
                  rows="3"
                ></textarea>
              </div>
              <div className="col">
                <label htmlFor="input" className="form-label">
                  Minimal Requirement
                </label>
                <textarea
                  className="form-control"
                  id="Textarea2"
                  rows="3"
                ></textarea>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="input" className="form-label">
                  Study Material
                </label>
                <textarea
                  className="form-control"
                  id="Textarea3"
                  rows="3"
                ></textarea>
              </div>
              <div className="col">
                <label htmlFor="input" className="form-label">
                  Learning Media
                </label>
                <textarea
                  className="form-control"
                  id="Textarea4"
                  rows="3"
                ></textarea>
              </div>
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

export default CoursesCreate;
