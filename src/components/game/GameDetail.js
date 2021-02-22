import React, { useContext, useEffect } from 'react'
import { GameContext } from './GameProvider'

export const GameDetail = (props) => {
    // debugger
    const { game, getGameById } = useContext(GameContext)

    useEffect(() => {
        getGameById(props.match.params.gameId)

    }, [])
    
    
    

    return (
        <section className="game">
            <div className="game__title">{game.title}</div>
            <div className="game__designer">{game.designer}</div>
            <div className="game__year-released">{game.year_released}</div>
            <div className="game__numberOfPlayers">{game.number_of_players}</div>
            <div className="game__estimatedTimeOfPlay">{game.estimated_time_of_play}</div>
            <div className="game__ageRecommendation">{game.age_recommendation}</div>
            {/* <div className="game__categories">{game.categories}</div> */}
        </section>
    )
}