import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import styles from './Details.module.scss'

const Details = ({ show, hideModal, note}) => {
	return (
		<>
			<Modal show={show} onHide={hideModal}>
				<Modal.Header className='bg-warning justify-content-center'>
					<Modal.Title>
						<h3 className={styles.header__title}>Подробности</h3>
					</Modal.Title>
				</Modal.Header>
				
				<Modal.Body>
					<div className={styles.note}>
						<div className={styles.note__title}>
							{note?.title}
						</div>
						<div className={styles.note__text}>
							{note?.body?.text.map((word) => <p>{word}</p>)}
						</div>
						<div className={styles.note__date}>
							{note?.body?.date}
						</div>
					</div>
				</Modal.Body>
				
				<Modal.Footer className='justify-content-center'>
					<Button variant="dark" onClick={hideModal}>
						Скрыть
					</Button>
				</Modal.Footer>
			</Modal>
    	</>
	)
}

export default Details
