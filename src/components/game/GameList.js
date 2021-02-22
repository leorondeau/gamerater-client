import React, { useEffect, useContext } from 'react'
import { GameContext } from './GameProvider'
import { Link } from 'react-router-dom'

export const GameList = (props) => {
    // debugger
    const { games, getGames } = useContext(GameContext)

    useEffect(() => {
        getGames()
        // If no empty dependency array useEffect will render
        // on every dom change. Empty array it will run on page load. 
    }, [])


    return (
        <article className="games">
            <button className="btn btn-2 btn-sep icon-create"
            onClick={() => {
                props.history.push({ pathname: "/games/new" })
            }}
            >Register New Game</button>
            {
                games.map(game => {
                    return <section key={`game--${game.id}`} className="game">
                        <div className="game__edit">
                            <button className="btn btn-3"
                                onClick={e => props.history.push(`/games/${game.id}/edit`)}
                                >Edit</button>
                        </div>
                        <Link className="game__title" to={`/games/${game.id}`}>{game.title}</Link>
                    </section>
                })
            }
        </article>
    )
}
