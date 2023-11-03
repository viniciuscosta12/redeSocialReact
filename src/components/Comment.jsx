import { ThumbsUp } from 'phosphor-react';
import { Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';


export function Comment({content, deleteComment}) {

    const [likeCount, setLikeCount] = useState(0);


    function handleDeleteComment() {

    deleteComment(content);
    }

    
    function handleLikeComment() {
        setLikeCount(likeCount + 1);
    }



    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/viniciuscosta12.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Vinicius Costa</strong>
                            <time title="11 de Maio às 08:15" dateTime="2022-05-11 08:15:00"></time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}