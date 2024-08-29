import { useGetAllPokemonsQuery } from "../services/pokemon";
import Pokemon from "./Pokemon";
import {useState} from 'react';
function AllPokemon() {
    const { data, isLoading, error } = useGetAllPokemonsQuery();
    const [name, setName]= useState();
    if (!isLoading && !error) {
        // setName(data.results[0].name);
    }
    return (<>
        <h3>All Pokemon</h3>
        {isLoading===true ? <>Loading ...</> : error===true ? <>Error Loading Data</> :
            <>
                <ul>
                   {data.results.map(ele=>
                    <li onClick={()=>setName(ele.name)}>{ele.name}</li>
                   )}
                </ul>
                <Pokemon name={name}/>
            </>
        }
    </>);
}

export default AllPokemon;