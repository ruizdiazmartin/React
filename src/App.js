import React from 'react'
import './App.css'

function Helloworld() {
	return (
		<div id="hello">Hello world</div>
	)

}

//Llamar a un componente a traves de una funcion tradicional.
function App() {
	return (
		<div>This is my component: <Helloworld /></div>
	)
}
//Llamar a un componente mediante una clase que extiende de React
/*class App extends React.Component {
	render() {
		return <div>This is my component: <Helloworld /></div>;

	}
}*/

//Llamar a un componente a traves de una funcion flecha.
//const App = () => <div>This is my component: <Helloworld /></div>



export default App
