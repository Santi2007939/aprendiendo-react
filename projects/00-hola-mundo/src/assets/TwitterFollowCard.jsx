import { useState } from "react";

export function TwitterFollowCard ({ username = 'unknown', name, initialIsFollowing }) {
    const [isFollowing, setIsFollowing]= useState(initialIsFollowing);


    const text = isFollowing ? 'Siguiendo' : "Seguir";
    const buttonClassName = isFollowing 
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button';

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    return(
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img
                    className="tw-followCard-avatar" 
                    alt={`Avatar de ${username}`}
                    src={`https://unavatar.io/${username}`} />
                <div className="tw-followCard-info">
                    <strong>{name}</strong>0
                    <span
                    className="tw-followCard-infoUserName">@{username}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}