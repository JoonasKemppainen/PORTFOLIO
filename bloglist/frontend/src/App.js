import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import Login from "./components/Login"
import Blogs from "./components/Blogs"
import CreateBlog from "./components/CreateBlog"
import Notification from "./components/Notification"
import Toggleable from "./components/Toggleable"
import Users from "./components/Users"
import Menu from "./components/Menu"
import Blog from "./components/Blog"
import User from "./components/User"
import { initializeBlogs } from "./reducers/blogReducer"
import { initializeUser } from "./reducers/userReducer"
import { initializeUsers } from "./reducers/usersReducer"
import { Routes, Route} from "react-router-dom"

const App = () => {
	const CreateBlogRef = useRef()

	const dispatch = useDispatch()
	const user = useSelector((state) => state.user)

	useEffect(() => {
		dispatch(initializeBlogs())
	}, [dispatch])

	useEffect(() => {
		dispatch(initializeUser())
	}, [dispatch])

	useEffect(() => {
		dispatch(initializeUsers())
	}, [dispatch])

	return (
		<div className="container">
			{!user ? 
			<Login />
			:
			<div>
				<Menu />
				<h2>blog app</h2>
				<Notification />
				<br />
				<Routes>
					<Route path="/" element={
						<div>
							<Toggleable
								buttonLabel="new blog"
								ref={CreateBlogRef}>
								<CreateBlog
								CreateBlogRef={CreateBlogRef} />
							</Toggleable>
							<Blogs />
						</div>
					} />
					<Route path="/users" element={<Users />} />
					<Route path="/blogs/:id" element={<Blog />} />
					<Route path="/users/:id" element={<User />} />
				</Routes>
			</div>
			}
			
		</div>
	)
}

export default App