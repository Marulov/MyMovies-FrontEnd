import React from "react"
import ReactDOM from "react-dom"

import App from "./components/App" //App.js dosyamızı gönderebilmek için import ediyoruz.
import "../node_modules/bootstrap/dist/css/bootstrap.min.css" //bootstrap ı projemize import ettik.

// App componentimizi id'si "root" olan index.html dosyamızdaki bölüme gönderiyoruz.
ReactDOM.render(
    <App/>,
    document.getElementById("root")
)