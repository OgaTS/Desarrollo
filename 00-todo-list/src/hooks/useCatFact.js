import { useState, useEffect } from "react";
import { getRandomFact } from "../service/facts";

export function useCatFact () {
    const [random, setRandom] = useState()

    const refreshFact = () =>{
        getRandomFact().then(newFact => setRandom(newFact))
    }

    useEffect(refreshFact, [])

    return{random, refreshFact}
}