import React, {Component} from 'react'
import Square from './Square'
import './App.css'

class App extends Component {
	constructor() {
		super()
		this.state = {
			sizes: [10, 25, 40],
			sizeIndex: 0,
			boardSize: 0,
			board: [],
			gameState: true,
		}
	}

	componentDidMount = () => {
		console.log("componentDidMount")
		// state destructuring
		let { sizes, sizeIndex } = this.state
		let boardSize = sizes[sizeIndex]
		let sqObj= {
			revealed: false,
			type: false,
			flag: false,
			touches: null,
		}
		let newBoard = Array(Math.pow(boardSize, 2)).fill(sqObj)
		this.setState({ boardSize })
		this.makeBombs(newBoard)
	}
	
	makeBombs = (board) => {
		console.log("makeBombs")
		let numBombs = (Math.floor(Math.random() * board.length * .32 ))
		let bombLocations = []
		while ( bombLocations.length < numBombs) {
			let randNum = Math.floor(Math.random() * board.length)
			if (!bombLocations.includes(randNum)) {
				bombLocations.push(randNum)
				board[randNum].type = true
			}
		}
		this.setState({ board })
	}

	revealBoard = () => {
		console.log("revealBoard")
		const { board } = this.state
		let newBoard = []
		board.forEach(sqObj => {
			sqObj.revealed = true
			newBoard.push(sqObj) 
		})
		this.setState({ board: newBoard })
	}

	// Get 9 sq matrix from

	handleClick = (index, value) => {
		console.log("handleClick")
		let { boardSize, board, gameState } = this.state
		if (gameState && !value.revealed) { value.revealed = true }
		board[index] = value
		this.setState({ board })
		// check if game is over already
		// check if they already clicked there
		// check if bomb
		// determine how many bombs are nearby
		// handle check winner
	}

  // function to check nearby squares for bombs
  // check if current square is a border square, corner square, or middle square

  // 

  	checkWinner = () => {
    
    console.log("checkWinner")
  	}

	boardReset = () => {
		console.log("boardReset")
	}

	timerReset = () => {
		console.log("timerReset")
	}

render() {
		let gameboard = this.state.board.map((value, index) =>{
			return (
				<Square 
				value = { value }
				index = { index }
				key = { index }
				handleClick = { this.state.handleClick }
				/>
			)
		})
		return (
			<>
      <div className="board" style={{width : (this.state.boardSize * 21)}}>
    { gameboard }
    </div>
			</>
		)
	}
}



export default App;
