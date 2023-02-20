import { GlobalStyles } from "./global.styles";
import { Register } from "./pages/Register/register.component";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { Login } from "./pages/Login/login.component";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { tokenAction } from "./redux/token/tokenAction";
import { userAction } from "./redux/user/userAction";
import { Home } from "./pages/Home/home.component";
import { Books } from "./pages/Books/books.component";
import { AddBook } from "./pages/AddBook/AddBook.component";
import { AddAuthor } from "./pages/AddAuthor/AddAuthor.component";
import { Profile } from "./pages/Profile/Profile.component";
import { Single } from "./pages/Single/Single.component";
import { BooksSingle } from "./pages/BooksSingle/BooksSingle.component";
import axios from "axios";

function App() {

  const token = useSelector((state) => state.token.token);
  const dispatch = useDispatch();

  useEffect(() => {
		axios
			.get('http://localhost:5000/user/me', {
				headers: {
					Authorization: token,
          "Content-Type": "multipart/form-data"
				},
			})
			.then((res) => {
        if (res.status === 201) {
					localStorage.setItem('user', JSON.stringify(res.data));
          dispatch(userAction(res.data))
				}
      })
			.catch((err) => console.log(err));
	}, [dispatch, token]);

  
  useEffect(() => {
    dispatch(tokenAction(localStorage.getItem("token")));
    dispatch(userAction(JSON.parse(localStorage.getItem("user"))));
  }, [dispatch]);

  if(token) {
    return (
      <div className="container">
        <GlobalStyles/>
        <Routes>
          <Route path="/*" element={<Home/>} />
          <Route path="/books/*" element={<Books/>} />
          <Route path="/profile/*" element={<Profile/>} />
          <Route path="/addBook" element={<AddBook/>} />
          <Route path="/:id" element={<Single/>} />
          <Route path="books/:id" element={<BooksSingle/>} />
          <Route path="/addAuthor" element={<AddAuthor/>} />
        </Routes>
      </div>
    )
  }else {
    return (
      <>
        <GlobalStyles/>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </>
    );
  }
}

export default App;
