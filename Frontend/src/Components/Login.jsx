import React from 'react'

const Login = () => {
  return (
    <div style={{
      backgroundImage: `url(${'https://cdn.dribbble.com/userupload/12550075/file/original-6a0b4d9fb62dc22fd37eb8dc24b9319c.jpg?resize=1024x683'})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      }}>
        <div className="container d-flex justify-content-center align-items-center vh-100">
          <div className="card w-25">
            <h2 className="mt-3 text-center txt">LOGIN</h2>
            <img
              className="logo d-flex mx-auto"
              src="http://cdn.onlinewebfonts.com/svg/img_458466.png"
              alt=""
            />
            <form>
              <input
                className="mt-3 w-75 d-flex mx-auto p-2 rounded"
                type="email"
                placeholder="Enter your email"
              />
              <input
                className="mt-3 w-75 d-flex mx-auto p-1 rounded"
                type="password"
                placeholder="Enter your password"
              />
              <button className="mt-3 btn btn-primary d-flex mx-auto">Login</button>
            </form>
          </div>
        </div>

    </div>
  )
}

export default Login