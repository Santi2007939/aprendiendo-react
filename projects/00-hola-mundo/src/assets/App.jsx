import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Angel Duran',
        isFollowing: true
    },
    {
        userName: 'mouredev',
        name: 'Brais Moure',
        isFollowing: true
    },
    {
        userName: 'pheralb',
        name: 'Pablo Hdez',
        isFollowing: true
    }
]

export function App () {    
    return(
        <section className='App'>
            {
                users.map((user) => {
                    const { userName, name, isFollowing } = user;
                    return(
                        <TwitterFollowCard
                            key={userName} 
                            username={userName} 
                            name={name} 
                            initialIsFollowing={isFollowing} 
                        />
                    )
                })
            }
        </section>
    )
}