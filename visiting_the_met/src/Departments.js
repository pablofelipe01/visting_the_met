import React from 'react';
import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

const departments = 'https://collectionapi.metmuseum.org/public/collection/v1/departments'

function Departments(props) {
    let [results, setResults] = useState ([])

    useEffect (() => {
        let url = departments

        fetch(url)
        .then((res) => res.json())
        .then((res) => {
            setResults(res.departments)
            console.log(res)
        })
        .catch ((err) => {
            console.error(err)
        })
    },[])
    return (
        <Card.Body>
            <h2>Departments at the MET</h2>
        <div className='depts'>
            {results.map(result =>(
            
            <Card.Text 
            
            className="text-monospace" 
            key={result.id} >Department ID# {result.departmentId} - {result.displayName}
            </Card.Text> 
           
            ))}
            
        </div>
        </Card.Body>
    );
}

export default Departments;
