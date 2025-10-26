import { Outlet, Link } from 'react-router-dom'

export default function Layout() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>🌟 My Layout</h2>

      {/* ✅ Thanh điều hướng */}
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/">Home</Link> |{' '}
        <Link to="/book">Book</Link> |{' '}
        <Link to="/about">About</Link> |{' '}
        <Link to="/login">Login</Link> |{' '}
        <Link to="/register">Register</Link>
      </nav>

      <hr />

      {/* ✅ Đây là nơi hiển thị nội dung trang con */}
      <Outlet />
    </div>
  )
}
