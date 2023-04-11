import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';


export const CustomCards = ({ func }) => {
    const { searchedMovie } = useSelector((state) => state.movieList);

    return (
        <div className="mt-3 d-flex justify-content-center ">
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={searchedMovie?.Poster} />
                <Card.Body>
                    <Card.Title>{searchedMovie?.Title}</Card.Title>
                    <Card.Text>
                        {searchedMovie?.Year} {" "}
                        {searchedMovie?.Language}
                    </Card.Text>
                    <Card.Text>
                        {searchedMovie?.Plot?.slice(0, 100)}...
                    </Card.Text>


                    <div className="d-flex justify-content-between">
                        <Button variant="info" >Happy</Button>
                        <Button variant="primary" > Lazy</Button>
                    </div>

                    <div className="d-grid mt-2">
                        <Button variant="danger">Remove</Button>
                    </div>

                </Card.Body>
            </Card >
        </div >
    );
};
