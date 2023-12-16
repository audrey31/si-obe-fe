function Syllabus() {
  return (
    <main className="pt-4">
      <div className="container">
        <h1 className="fs-2">Syllabus</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Syllabus</li>
          </ol>
        </nav>
        <div class="float-end">
          <button type="button" class="btn btn-light my-3">Create new Syllabus</button>
        </div>
        
        <table class="table table-bordered">
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
              <button type="button" class="btn btn-warning mx-2">Edit</button>
              <button type="button" class="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>


      </div>
    </main>
  );
}

export default Syllabus;
