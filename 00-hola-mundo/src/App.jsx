import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'minudev',
        name: 'Miguel Angel Duran',
        isFollowing: true  
    },
    {
        userName: 'pheralb',
        name: 'Pablo Hernandez',
        isFollowing: false  
    },
    {
        userName: 'elonmusk',
        name: 'Elon Musk',
        isFollowing: true  
    },
    {
        userName: 'vxander',
        name: 'Vanderhart',
        isFollowing: false  
    }
]


export function App () {
    return(
        <>
            {
                users.map(user =>{
                    const { userName, name, isFollowing} = user
                    return (
                        <TwitterFollowCard key={userName} userName={userName}
                        initialIsFollowing={isFollowing}
                        name = {name}>
                        </TwitterFollowCard>
                    )
                })
            }
        </>
    )
}