import React, { useRef } from 'react'
import { Form, Col, Row, Alert, Button } from 'react-bootstrap'
import { CustomCards } from './CustomCards'
import { ApiHelper } from './ApiHelper'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchedMovie, setError } from '../Features/moveSlice'



export const SearchForm = () => {

    const stRef = useRef('');
    const dispatch = useDispatch();
    const { searchedMovie, error } = useSelector((state) => state.movieList);


    const handelOnSubmit = async (e) => {
        e.preventDefault();
        error && dispatch(setError(false))

        const str = stRef.current.value;
        const data = await ApiHelper(str)

        if (data?.Response === "True") {
            dispatch(setSearchedMovie(data))
        } else {
            dispatch(setError(true))
        }
    }



    return (
        <div className='bg-black p-5 rounded shadow-lg mt-5 text-warning'>
            <h1 className='text-warning'> Movie Collection using Redux</h1>
            <hr />

            <Form onSubmit={handelOnSubmit} >
                <Row className="gap-1">
                    <Col md='9'>
                        <Form.Control type="text" placeholder="Search by title" ref={stRef} />
                    </Col>
                    <Col>
                        <div className='d-grid'>
                            <Button variant="primary" type="submit">
                                Search Movie
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Form >


            <div className='d-flex justify-content-center mt-4'>
                {error && <Alert variant='danger'> Movie Not found !</Alert>}
                {searchedMovie.imdbID && <CustomCards />}
            </div>

        </div>
    )
}
