import React from "react"
import { Route } from "react-router-dom"
import { GameProvider } from "./game/GameProvider"
import { GameList } from "./game/GameList"
import { GameDetail } from './game/GameDetail'

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            backgroundColor: "lightgoldenrodyellow"
        }}>
            <GameProvider>
                <Route exact path="/games" render={(props) => {
                    return <GameList {...props} />
                }}></Route>
                <Route exact path="/games/:gameId(\d+)" render={(props) => {
                        return <GameDetail {...props} />
                    }} />
            </GameProvider>
        </main>
    </>
}
