import React from 'react'
import { Button, ButtonGroup, Row } from 'react-bootstrap'
import { CustomCards } from './CustomCards'

export const TableDisplay = ({ }) => {

    return (
        <div className='mt-4'>
            <hr className='text-warning' />
            <ButtonGroup aria-label="Basic example">
                <Button variant="warning" >All</Button>
                <Button variant="info" >Happy</Button>
                <Button variant="primary" >Lazy</Button>
            </ButtonGroup >
            <div className='py-3 text-warning'>0 Movies found</div>
            <Row>
                <CustomCards />
            </Row>
        </div >
    )
}
