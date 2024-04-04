/* eslint-disable react/prop-types */

function Profile({user}) {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <h2 className="card-title">Welcome {user}</h2>
            <div className="card-body">
              
              <p>you are logged in</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Log Out</button>
              </div>
            </div>
        </div>
    </>
  )
}

export default Profile
